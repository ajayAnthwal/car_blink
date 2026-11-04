"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchApi } from "@/lib/apiClient";
import storage from "@/lib/storage";

export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const performLogout = () => {
    storage.clearToken();
    setUser(null);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.clear();
        window.sessionStorage.clear();
        
        // Broadcast explicit logout signal via cookie for instant cross-port sync
        document.cookie = "carblink_logged_out=1; path=/; max-age=10;";

        const cookiesToClear = [
          "accessToken",
          "refreshToken",
          "role",
          "user_role",
          "session",
          "token",
          "car_blink_access_token",
          "car_blink_refresh_token",
          "carBlink_token",
          "carBlink_user",
        ];

        const isProd = window.location.hostname.endsWith('carblink.in');
        cookiesToClear.forEach((name) => {
          document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
          if (isProd) {
            document.cookie = `${name}=; path=/; domain=.carblink.in; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
          }
        });
      } catch (err) {
        console.error("Storage clear error:", err);
      }
    }
  };

  const checkAuth = async () => {
    if (typeof window === "undefined") return;

    const isExplicitlyLoggedOut = document.cookie.includes("carblink_logged_out=1");
    if (isExplicitlyLoggedOut) {
      setUser(null);
      setLoading(false);
      return;
    }

    const cookieToken = (document.cookie.match(/(?:^|;\s*)(?:car_blink_access_token|accessToken)=([^;]*)/)?.[1] 
      ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)(?:car_blink_access_token|accessToken)=([^;]*)/)![1]) 
      : null);
    const cookieRole = (document.cookie.match(/(?:^|;\s*)role=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)role=([^;]*)/)![1]) : null) ||
                       (document.cookie.match(/(?:^|;\s*)user_role=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)user_role=([^;]*)/)![1]) : null);

    const activeToken = cookieToken || storage.getToken();

    if (!activeToken) {
      setUser(null);
      setLoading(false);
      return;
    }

    storage.setToken(activeToken);

    try {
      const response = await fetchApi<any>("/auth/me");
      const userData = response.data || response;
      if (userData && (userData._id || userData.id || userData.email)) {
        setUser(userData);
      }
    } catch (error: any) {
      console.log("Auth check error:", error);
      const errMsg = String(error?.message || "").toLowerCase();
      const isExplicit401 = errMsg.includes("401") || errMsg.includes("unauthorized") || errMsg.includes("token expired") || errMsg.includes("invalid token");
      const isNetworkIssue = typeof navigator !== "undefined" && !navigator.onLine ||
                             errMsg.includes("network") ||
                             errMsg.includes("fetch") ||
                             errMsg.includes("abort") ||
                             errMsg.includes("timeout") ||
                             errMsg.includes("connection");

      // ONLY logout if server explicitly rejected the token as 401 Unauthorized
      // NEVER logout on mobile resume/network reconnect glitches
      if (isExplicit401 && !isNetworkIssue) {
        storage.clearToken();
        setUser(null);
      } else {
        console.warn("[Auth] Network or transient delay during checkAuth, preserving user session.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();

    // 1000ms Heartbeat polling for fast cross-port cookie sync
    const interval = setInterval(() => {
      if (typeof window === "undefined") return;
      const isExplicitlyLoggedOut = document.cookie.includes("carblink_logged_out=1");
      const cookieToken = (document.cookie.match(/(?:^|;\s*)car_blink_access_token=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)car_blink_access_token=([^;]*)/)![1]) : null);
      const cookieRole = (document.cookie.match(/(?:^|;\s*)role=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)role=([^;]*)/)![1]) : null) ||
                         (document.cookie.match(/(?:^|;\s*)user_role=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)user_role=([^;]*)/)![1]) : null);

      if (isExplicitlyLoggedOut) {
        if (storage.getToken() || document.cookie.includes("car_blink_access_token")) {
          performLogout();
        }
      } else if (cookieToken && !user && navigator.onLine) {
        checkAuth();
      }
    }, 1000);

    let debounceTimer: any = null;
    const handleFocusOrVisibility = () => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        if (debounceTimer) clearTimeout(debounceTimer);
        // Debounce 1.5s so mobile radio/sockets wake up before checking
        debounceTimer = setTimeout(() => {
          if (navigator.onLine) {
            checkAuth();
          }
        }, 1500);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "carblink_logout_event" ||
        (e.key === "carBlink_token" && !e.newValue) ||
        (e.key === "car_blink_access_token" && !e.newValue)
      ) {
        performLogout();
      }
    };

    window.addEventListener("focus", handleFocusOrVisibility);
    document.addEventListener("visibilitychange", handleFocusOrVisibility);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      clearInterval(interval);
      if (debounceTimer) clearTimeout(debounceTimer);
      window.removeEventListener("focus", handleFocusOrVisibility);
      document.removeEventListener("visibilitychange", handleFocusOrVisibility);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = (token: string, userData: User) => {
    storage.setToken(token);
    setUser(userData);
    const expires = new Date(Date.now() + 365 * 864e5).toUTCString();
    const isProd = typeof window !== "undefined" && window.location.hostname.endsWith("carblink.in");
    const domainPart = isProd ? "; domain=.carblink.in" : "";
    const securePart = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `carblink_logged_out=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainPart};`;
    document.cookie = `car_blink_access_token=${encodeURIComponent(token)}; path=/; expires=${expires}; SameSite=Lax${domainPart}${securePart}`;
    document.cookie = `accessToken=${encodeURIComponent(token)}; path=/; expires=${expires}; SameSite=Lax${domainPart}${securePart}`;
    document.cookie = `role=${encodeURIComponent(userData.role || 'CUSTOMER')}; path=/; expires=${expires}; SameSite=Lax${domainPart}${securePart}`;
    document.cookie = `user_role=${encodeURIComponent(userData.role || 'CUSTOMER')}; path=/; expires=${expires}; SameSite=Lax${domainPart}${securePart}`;
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, logout: performLogout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    return {
      user: null,
      loading: false,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
      checkAuth: async () => {},
    };
  }
  return context;
}
