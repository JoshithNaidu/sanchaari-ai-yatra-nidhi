
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  fullName: string;
  userType: 'traveler' | 'partner' | 'admin';
  role?: 'admin' | 'content_admin' | 'moderator' | 'analytics_readonly' | 'compliance_officer' | 'support_agent';
  isVerified: boolean;
  permissions?: string[];
  profileImage?: string;
  phone?: string;
  companyName?: string; // for partners
  lastLogin?: string;
  status: 'active' | 'suspended' | 'pending_verification';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  sessionExpiry: Date | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string, userType?: 'traveler' | 'partner' | 'admin') => Promise<{ success: boolean; message: string; redirectTo?: string }>;
  register: (userData: RegisterData) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>;
  resetPassword: (token: string, password: string) => Promise<{ success: boolean; message: string }>;
  verifyEmail: (token: string) => Promise<{ success: boolean; message: string }>;
  updateProfile: (data: Partial<User>) => Promise<{ success: boolean; message: string }>;
  refreshSession: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
  switchRole: (newRole: string) => Promise<{ success: boolean; message: string }>;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  userType: 'traveler' | 'partner' | 'admin';
  phone?: string;
  companyName?: string;
}

const CentralizedAuthContext = createContext<AuthContextType | undefined>(undefined);

export const useCentralizedAuth = () => {
  const context = useContext(CentralizedAuthContext);
  if (!context) {
    throw new Error('useCentralizedAuth must be used within a CentralizedAuthProvider');
  }
  return context;
};

export const CentralizedAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    sessionExpiry: null
  });

  // Session management
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('sanchaari_user');
        const sessionExpiry = localStorage.getItem('sanchaari_session_expiry');
        
        if (storedUser && sessionExpiry) {
          const expiryDate = new Date(sessionExpiry);
          if (expiryDate > new Date()) {
            const userData = JSON.parse(storedUser);
            setAuthState({
              user: userData,
              isAuthenticated: true,
              isLoading: false,
              sessionExpiry: expiryDate
            });
          } else {
            // Session expired
            await logout();
          }
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    initializeAuth();
  }, []);

  // Auto-refresh session
  useEffect(() => {
    if (authState.sessionExpiry) {
      const timeToExpiry = authState.sessionExpiry.getTime() - Date.now();
      const refreshTime = Math.max(timeToExpiry - 5 * 60 * 1000, 0); // Refresh 5 minutes before expiry
      
      const timer = setTimeout(() => {
        refreshSession();
      }, refreshTime);

      return () => clearTimeout(timer);
    }
  }, [authState.sessionExpiry]);

  const login = async (email: string, password: string, userType?: 'traveler' | 'partner' | 'admin') => => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let mockUser: User;
      let redirectTo = '/';

      // Mock authentication logic
      if (email.includes('admin') || userType === 'admin') {
        mockUser = {
          id: 'admin_' + Date.now(),
          email,
          fullName: 'Admin User',
          userType: 'admin',
          role: 'admin',
          isVerified: true,
          permissions: ['user_management', 'partner_management', 'content_management', 'system_config', 'view_analytics'],
          status: 'active',
          lastLogin: new Date().toISOString()
        };
        redirectTo = '/admin/dashboard';
      } else if (email.includes('partner') || userType === 'partner') {
        mockUser = {
          id: 'partner_' + Date.now(),
          email,
          fullName: 'Partner User',
          userType: 'partner',
          isVerified: true,
          companyName: 'Travel Company Ltd',
          status: 'active',
          lastLogin: new Date().toISOString()
        };
        redirectTo = '/partner/dashboard';
      } else {
        mockUser = {
          id: 'traveler_' + Date.now(),
          email,
          fullName: 'Travel Enthusiast',
          userType: 'traveler',
          isVerified: true,
          status: 'active',
          lastLogin: new Date().toISOString()
        };
        redirectTo = '/trips/dashboard';
      }
      
      const sessionExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
      
      localStorage.setItem('sanchaari_user', JSON.stringify(mockUser));
      localStorage.setItem('sanchaari_session_expiry', sessionExpiry.toISOString());
      
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        sessionExpiry
      });
      
      return { success: true, message: 'Login successful', redirectTo };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        fullName: userData.fullName,
        userType: userData.userType,
        phone: userData.phone,
        companyName: userData.companyName,
        isVerified: false,
        status: 'pending_verification'
      };
      
      localStorage.setItem('sanchaari_pending_user', JSON.stringify(newUser));
      return { success: true, message: 'Registration successful. Please verify your email.' };
    } catch (error) {
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  };

  const logout = async () => {
    localStorage.removeItem('sanchaari_user');
    localStorage.removeItem('sanchaari_session_expiry');
    localStorage.removeItem('sanchaari_pending_user');
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      sessionExpiry: null
    });
  };

  const forgotPassword = async (email: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Password reset instructions sent to your email.' };
  };

  const resetPassword = async (token: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Password reset successful.' };
  };

  const verifyEmail = async (token: string) => {
    try {
      const pendingUser = localStorage.getItem('sanchaari_pending_user');
      if (pendingUser) {
        const userData = JSON.parse(pendingUser);
        userData.isVerified = true;
        userData.status = 'active';
        
        const sessionExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
        
        localStorage.setItem('sanchaari_user', JSON.stringify(userData));
        localStorage.setItem('sanchaari_session_expiry', sessionExpiry.toISOString());
        localStorage.removeItem('sanchaari_pending_user');
        
        setAuthState({
          user: userData,
          isAuthenticated: true,
          isLoading: false,
          sessionExpiry
        });
        
        return { success: true, message: 'Email verified successfully.' };
      }
      return { success: false, message: 'Invalid verification token.' };
    } catch (error) {
      return { success: false, message: 'Email verification failed.' };
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      if (!authState.user) throw new Error('No user logged in');
      
      const updatedUser = { ...authState.user, ...data };
      localStorage.setItem('sanchaari_user', JSON.stringify(updatedUser));
      
      setAuthState(prev => ({
        ...prev,
        user: updatedUser
      }));
      
      return { success: true, message: 'Profile updated successfully.' };
    } catch (error) {
      return { success: false, message: 'Profile update failed.' };
    }
  };

  const refreshSession = async () => {
    if (authState.user) {
      const newExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
      localStorage.setItem('sanchaari_session_expiry', newExpiry.toISOString());
      setAuthState(prev => ({ ...prev, sessionExpiry: newExpiry }));
    }
  };

  const hasPermission = (permission: string): boolean => {
    return authState.user?.permissions?.includes(permission) || false;
  };

  const hasRole = (role: string): boolean => {
    return authState.user?.role === role || authState.user?.userType === role;
  };

  const switchRole = async (newRole: string) => {
    try {
      if (!authState.user) throw new Error('No user logged in');
      
      // Simulate API call to switch role
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...authState.user, role: newRole as any };
      localStorage.setItem('sanchaari_user', JSON.stringify(updatedUser));
      
      setAuthState(prev => ({
        ...prev,
        user: updatedUser
      }));
      
      return { success: true, message: 'Role switched successfully.' };
    } catch (error) {
      return { success: false, message: 'Role switch failed.' };
    }
  };

  const value: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    verifyEmail,
    updateProfile,
    refreshSession,
    hasPermission,
    hasRole,
    switchRole
  };

  return (
    <CentralizedAuthContext.Provider value={value}>
      {children}
    </CentralizedAuthContext.Provider>
  );
};
