import axios from '../config/axios';
import { LoginCredentials, AuthResponse } from '../types/auth';

// Identifiants de test
const TEST_CREDENTIALS = {
  email: 'a.kane@orange.com',
  password: 'mariyama'
};

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Vérification des identifiants de test
    if (credentials.email === TEST_CREDENTIALS.email && 
        credentials.password === TEST_CREDENTIALS.password) {
      // Simuler une réponse réussie
      const mockResponse: AuthResponse = {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          email: TEST_CREDENTIALS.email,
          name: 'Abdoulaye Kane',
          role: 'ROLE_ADMIN'
        }
      };
      localStorage.setItem('token', mockResponse.token);
      return mockResponse;
    }

    // Si les identifiants sont incorrects, rejeter la promesse
    return Promise.reject(new Error('Identifiants invalides'));
  },

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
};