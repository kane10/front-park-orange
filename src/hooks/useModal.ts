import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'add' | 'edit'>('add');

  const openModal = (modalMode: 'add' | 'edit' = 'add') => {
    setMode(modalMode);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setMode('add');
  };

  return {
    isOpen,
    mode,
    openModal,
    closeModal,
  };
}