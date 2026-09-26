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

        cookiesToClear.forEach((name) => {
          document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        });
      } catch (err) {
        console.error("Storage clear error:", err);
      }
    }
  };

  const checkAuth = async () => {
    if (typeof window === "undefined") return;

    const isExplicitlyLoggedOut = document.cookie.includes("carblink_logged_out=1");

    const cookieToken = (document.cookie.match(/(?:^|;\s*)car_blink_access_token=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)car_blink_access_token=([^;]*)/)![1]) : null);
    const cookieRole = (document.cookie.match(/(?:^|;\s*)role=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)role=([^;]*)/)![1]) : null) ||
                       (document.cookie.match(/(?:^|;\s*)user_role=([^;]*)/)?.[1] ? decodeURIComponent(document.cookie.match(/(?:^|;\s*)user_role=([^;]*)/)![1]) : null);

    if (isExplicitlyLoggedOut || (!cookieToken && !cookieRole && !storage.getToken())) {
      performLogout();
      setLoading(false);
      return;
    }

    const activeToken = cookieToken || storage.getToken();

    if (!activeToken) {
      performLogout();
      setLoading(false);
      return;
    }

    try {
      const response = await fetchApi<any>("/auth/me");
      const userData = response.data || response;
      if (userData && (userData._id || userData.id || userData.email)) {
        setUser(userData);
      } else {
        performLogout();
      }
    } catch (error) {
      console.log("Auth check failed or logged out elsewhere:", error);
      performLogout();
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

      if (isExplicitlyLoggedOut || (!cookieToken && !cookieRole)) {
        if (storage.getToken() || document.cookie.includes("car_blink_access_token")) {
          performLogout();
        }
      }
    }, 1000);

    const handleFocusOrVisibility = () => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        checkAuth();
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
      window.removeEventListener("focus", handleFocusOrVisibility);
      document.removeEventListener("visibilitychange", handleFocusOrVisibility);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = (token: string, userData: User) => {
    storage.setToken(token);
    setUser(userData);
    const expires = new Date(Date.now() + 30 * 864e5).toUTCString();
    document.cookie = `carblink_logged_out=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    document.cookie = `car_blink_access_token=${encodeURIComponent(token)}; path=/; expires=${expires}; SameSite=Lax`;
    document.cookie = `role=${encodeURIComponent(userData.role || 'CUSTOMER')}; path=/; expires=${expires}; SameSite=Lax`;
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
