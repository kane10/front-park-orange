import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, LogIn, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import logo from "../images/logo.gif";
import { ForgotPasswordModal } from '../features/auth/components/ForgotPasswordModal';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleForgotPassword = (email: string) => {
    console.log('Reset password for:', email);
    setIsForgotPasswordOpen(false);
    // Afficher un message de confirmation
    alert('Si un compte existe avec cette adresse email, vous recevrez les instructions de réinitialisation.');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Black background with illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[--black] text-white flex-col items-center justify-center p-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{

            filter: 'blur(3px)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[--black] via-transparent to-[--black]" />
        <img src={logo} alt="logo" srcset="" width={100} className='my-10'/>
        <div className="relative z-10 max-w-md text-center">
          {/* <LayoutDashboard className="w-16 h-16 text-[--orange-primary] mx-auto mb-8" /> */}
        
          <h2 className="text-3xl font-bold mb-4">Parc Roulant Orange</h2>
          <p className="text-[--gray-400] text-lg">
            Gérez efficacement votre flotte de véhicules avec notre plateforme intuitive et performante.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[--gray-100]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-[--orange-primary] text-4xl font-bold mb-2">Orange</h1>
            <p className="text-[--gray-600] text-lg">Parc Roulant</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[--gray-700] mb-6">Connexion</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[--gray-600] mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none transition-all"
                  placeholder="user@orange-sonatel.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[--gray-600] mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[--gray-500] hover:text-[--gray-700]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button 
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-sm text-[--orange-primary] hover:text-[--orange-secondary]"
                >
                  Mot de passe oublié?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[--orange-primary] text-white px-4 py-2 rounded-lg hover:bg-[--orange-secondary] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  'Connexion...'
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Se connecter
                  </>
                )}
              </button>
            </form>
          </div>

          <p className="text-center mt-6 text-sm text-[--gray-500]">
            © 2024 Orange. Tous droits réservés.
          </p>
        </div>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onSubmit={handleForgotPassword}
      />
    </div>
  );
}