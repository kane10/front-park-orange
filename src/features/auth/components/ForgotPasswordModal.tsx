import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export function ForgotPasswordModal({ isOpen, onClose, onSubmit }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-[--gray-200]">
          <h2 className="text-xl font-semibold text-[--gray-700]">Mot de passe oublié</h2>
          <button
            onClick={onClose}
            className="text-[--gray-400] hover:text-[--gray-600]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <p className="text-[--gray-600] mb-4">
              Entrez votre adresse email pour recevoir les instructions de réinitialisation de votre mot de passe.
            </p>
            <label htmlFor="email" className="block text-sm font-medium text-[--gray-600] mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
              placeholder="user@orange-sonatel.com"
              required
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-[--gray-200]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[--gray-700] hover:bg-[--gray-100] rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}