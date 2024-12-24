import { create } from 'zustand';
import { authService } from '../services/authService';
import { User, LoginCredentials } from '../types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: authService.isAuthenticated(),
  isLoading: false,
  error: null,

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(credentials);
      set({ 
        user: response.user,
        isAuthenticated: true,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: 'Identifiants invalides',
        isLoading: false 
      });
    }
  },

  logout: () => {
    authService.logout();
    set({ 
      user: null,
      isAuthenticated: false 
    });
  }
}));