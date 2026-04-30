'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Mock login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && password) {
      const mockUser = {
        id: 'user_1',
        email,
        name: email.split('@')[0],
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/shop');
    }
    setIsLoading(false);
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    // Mock register delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && password && name) {
      const mockUser = {
        id: `user_${Math.floor(Math.random() * 1000)}`,
        email,
        name,
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/shop');
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
