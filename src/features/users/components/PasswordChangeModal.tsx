import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

interface PasswordChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (oldPassword: string, newPassword: string) => void;
}

export function PasswordChangeModal({ isOpen, onClose, onSubmit }: PasswordChangeModalProps) {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    onSubmit(formData.oldPassword, formData.newPassword);
    setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-[--gray-200]">
          <h2 className="text-xl font-semibold text-[--gray-700]">Changer le mot de passe</h2>
          <button
            onClick={onClose}
            className="text-[--gray-400] hover:text-[--gray-600]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="oldPassword" className="block text-sm font-medium text-[--gray-600] mb-2">
              Ancien mot de passe
            </label>
            <div className="relative">
              <input
                type={showPasswords.old ? 'text' : 'password'}
                id="oldPassword"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPasswords(prev => ({ ...prev, old: !prev.old }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[--gray-500] hover:text-[--gray-700]"
              >
                {showPasswords.old ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-[--gray-600] mb-2">
              Nouveau mot de passe
            </label>
            <div className="relative">
              <input
                type={showPasswords.new ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[--gray-500] hover:text-[--gray-700]"
              >
                {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[--gray-600] mb-2">
              Confirmer le nouveau mot de passe
            </label>
            <div className="relative">
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[--gray-300] rounded-lg focus:ring-2 focus:ring-[--orange-primary] focus:border-transparent outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[--gray-500] hover:text-[--gray-700]"
              >
                {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
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
              className="btn-primary"
            >
              Changer le mot de passe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}