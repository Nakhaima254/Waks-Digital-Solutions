import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

interface User {
  userId: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: (idToken: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'waks-auth-token';
const API_BASE_URL = (() => {
  const envUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  const productionFallback = 'https://api.waksdigital.co.ke';
  if (import.meta.env.PROD) {
    return envUrl && !/localhost|127\.0\.0\.1/i.test(envUrl)
      ? envUrl
      : productionFallback;
  }
  return envUrl || 'http://localhost:3000';
})();

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing session on load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await apiClient.get('/api/auth/session');
          if (response.data?.user) {
            setUser(response.data.user);
            setIsAdmin(true); // If they have a valid session, they're admin
          }
        }
      } catch {
        localStorage.removeItem(TOKEN_KEY);
        delete apiClient.defaults.headers.common['Authorization'];
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await apiClient.post('/api/auth/login', { email, password });
      const { user, access_token } = response.data;
      setUser(user);
      localStorage.setItem(TOKEN_KEY, access_token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      setIsAdmin(true);
      toast({
        title: "Welcome!",
        description: "You've been signed in successfully.",
      });
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Error signing in",
        description: error.response?.data?.error || "Invalid credentials",
        variant: "destructive",
      });
      return { error };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const response = await apiClient.post('/api/auth/register', { email, password });
      const { user, access_token } = response.data;
      setUser(user);
      localStorage.setItem(TOKEN_KEY, access_token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      setIsAdmin(true);
      toast({
        title: "Account created!",
        description: "You've been signed up successfully.",
      });
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Error signing up",
        description: error.response?.data?.error || "Registration failed",
        variant: "destructive",
      });
      return { error };
    }
  };

  const signInWithGoogle = async (idToken: string) => {
    if (!idToken) {
      toast({
        title: "Google sign-in failed",
        description: "No Google credential was returned.",
        variant: "destructive",
      });
      return { error: 'No Google credential' };
    }

    try {
      const response = await apiClient.post('/api/auth/google', { id_token: idToken });
      const { user, session } = response.data;
      const token = session?.access_token || response.data?.access_token;
      if (!token) {
        throw new Error('Missing authentication token');
      }
      setUser(user);
      localStorage.setItem(TOKEN_KEY, token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAdmin(true);
      toast({
        title: "Signed in with Google",
        description: "Welcome back!",
      });
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Google sign-in error",
        description: error.response?.data?.error || error.message || "Unable to sign in with Google.",
        variant: "destructive",
      });
      return { error };
    }
  };

  const signOut = async () => {
    localStorage.removeItem(TOKEN_KEY);
    delete apiClient.defaults.headers.common['Authorization'];
    setUser(null);
    setIsAdmin(false);
    toast({
      title: "Signed out",
      description: "You've been logged out successfully.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signIn, signUp, signInWithGoogle, signOut }}>
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