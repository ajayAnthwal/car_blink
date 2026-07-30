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
    setUser(null);
  };

  return { user, loading, login, logout, isAuthenticated: !!user };
}
