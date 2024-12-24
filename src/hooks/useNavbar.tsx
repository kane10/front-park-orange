import { create } from 'zustand';

type NavbarStore = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const useNavbar = create<NavbarStore>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));