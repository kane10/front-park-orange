import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl my-8">
        <div className="flex items-center justify-between p-6 border-b border-[--gray-200]">
          <h2 className="text-xl font-semibold text-[--gray-700] truncate pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="text-[--gray-400] hover:text-[--gray-600] flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}