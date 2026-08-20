"use client";

import { useState, useEffect } from "react";
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

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const performLogout = () => {
    storage.clearToken();
    setUser(null);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.clear();
        window.sessionStorage.clear();
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
        const domainsToClear = [
          "",
          window.location.hostname,
          `.${window.location.hostname}`,
          ".carblink.in",
          "carblink.in",
          "dashboard.carblink.in",
          "api.carblink.in",
        ];
        cookiesToClear.forEach((name) => {
          domainsToClear.forEach((dom) => {
            const domainStr = dom ? `; domain=${dom}` : "";
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainStr};`;
          });
        });
      } catch (err) {
        console.error("Storage clear error:", err);
      }
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      let token = storage.getToken();
      
      if (!token && typeof document !== "undefined") {
        const match = document.cookie.match(new RegExp('(?:^|; )' + 'accessToken' + '=([^;]*)'));
        if (match) token = match[1];
      }

      if (!token) {
        setUser(null);
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
        console.error("Auth check failed:", error);
        performLogout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for cross-tab or cross-subdomain logout triggers
    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "carblink_logout_event" ||
        (e.key === "carBlink_token" && !e.newValue) ||
        (e.key === "car_blink_access_token" && !e.newValue)
      ) {
        performLogout();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (token: string, userData: User) => {
    storage.setToken(token);
    setUser(userData);
  };

  return { user, loading, login, logout: performLogout, isAuthenticated: !!user };
}
