
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  fullName: string;
  userType: 'traveler' | 'partner' | 'admin';
  role?: 'admin' | 'compliance_officer' | 'support_agent';
  isVerified: boolean;
  permissions?: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string, userType?: 'traveler' | 'partner' | 'admin') => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, password: string) => Promise<boolean>;
  verifyEmail: (token: string) => Promise<boolean>;
  resendVerification: () => Promise<boolean>;
  hasPermission: (permission: string) => boolean;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  userType: 'traveler' | 'partner' | 'admin';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    // Check for existing session on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string, userType?: 'traveler' | 'partner' | 'admin'): Promise<boolean> => {
    // Simulate API call
    try {
      let mockUser: User;
      
      // Check if it's an admin login
      if (email.includes('admin') || userType === 'admin') {
        mockUser = {
          id: '1',
          email,
          fullName: 'Admin User',
          userType: 'admin',
          role: 'admin',
          isVerified: true,
          permissions: ['user_management', 'partner_management', 'system_config', 'view_analytics']
        };
      } else {
        mockUser = {
          id: '1',
          email,
          fullName: 'John Doe',
          userType: email.includes('partner') ? 'partner' : 'traveler',
          isVerified: true
        };
      }
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    // Simulate API call
    try {
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        fullName: userData.fullName,
        userType: userData.userType,
        isVerified: false
      };
      
      localStorage.setItem('pendingUser', JSON.stringify(newUser));
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('pendingUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    // Simulate API call
    return true;
  };

  const resetPassword = async (token: string, password: string): Promise<boolean> => {
    // Simulate API call
    return true;
  };

  const verifyEmail = async (token: string): Promise<boolean> => {
    // Simulate API call
    const pendingUser = localStorage.getItem('pendingUser');
    if (pendingUser) {
      const userData = JSON.parse(pendingUser);
      userData.isVerified = true;
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.removeItem('pendingUser');
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const resendVerification = async (): Promise<boolean> => {
    // Simulate API call
    return true;
  };

  const hasPermission = (permission: string): boolean => {
    return user?.permissions?.includes(permission) || false;
  };

  const isAdmin = user?.userType === 'admin';

  const value = {
    user,
    isAuthenticated,
    isAdmin,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    verifyEmail,
    resendVerification,
    hasPermission
  };

  return React.createElement(AuthContext.Provider, { value }, children);
};
