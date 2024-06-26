"use client";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { useState } from "react";

const API_BASE_URL = "http://localhost:2003";

interface AuthContextType {
  success: boolean;
  isLoading: boolean;
  error: boolean;
  login: (email: string, password: string) => Promise<void>;
  isAuthenticated: boolean;
  user: User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const getUserLogin = async (): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const jsonResponse = await response.json();
    return jsonResponse.data;
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(false);
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const json = await response.json();
      localStorage.setItem("jwt", json.jwt);
      setSuccess(true);
      setAuthenticated(true);
      const userLogin = await getUserLogin();
      setUser(userLogin);
    } else {
      setError(true);
      localStorage.removeItem("jwt");
    }
    setLoading(false);
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("jwt");
    setUser(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        try {
          setLoading(true);
          const userLogin = await getUserLogin();
          setUser(userLogin);
          setAuthenticated(true);
        } catch (error) {
          console.error("Failed to initialize authentication:", error);
          logout();
        } finally {
          setLoading(false);
        }
      }
    };

    initializeAuth();
  }, []);

  return { success, isLoading, error, login, isAuthenticated, user, logout };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
