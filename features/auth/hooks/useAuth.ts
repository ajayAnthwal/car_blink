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

  useEffect(() => {
    const checkAuth = async () => {
      const token = storage.getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetchApi<any>("/auth/me");
        setUser(response.data);
      } catch (error) {
        console.error("Auth check failed:", error);
        storage.clearToken();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (token: string, userData: User) => {
    storage.setToken(token);
    setUser(userData);
  };

  const logout = () => {
    storage.clearToken();
    if (typeof window !== "undefined") {
      try {
        window.localStorage.clear();
        window.sessionStorage.clear();
        const cookiesToClear = ["accessToken", "refreshToken", "role", "carBlink_token", "carBlink_user"];
        cookiesToClear.forEach((name) => {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
      } catch (err) {
        console.error("Storage clear error:", err);
      }
    }
    setUser(null);
  };

  return { user, loading, login, logout, isAuthenticated: !!user };
}
