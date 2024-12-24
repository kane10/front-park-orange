import React, { useState, useRef, useEffect } from 'react';
import { Menu, User, UserCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNavbar } from '../hooks/useNavbar';
import { NotificationBell } from './notifications/NotificationBell';
import logo from "../images/logo.gif"
import clsx from 'clsx';

export function Navbar() {
  const { toggleSidebar } = useNavbar();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-[--black] fixed top-0 left-0 right-0 z-50">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-[--gray-700] rounded-lg lg:hidden"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          <div className="flex items-center gap-2">
  <img src={logo} alt="" srcset="" />
  <div className="flex flex-col">
    <span className="text-[--orange-primary] font-bold text-2xl">Orange</span>
    <span className="text-white font-bold">Park Roulant</span>
  </div>
</div>

        </div>

        <div className="flex items-center gap-4">
          <NotificationBell />
          
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-[--gray-700] rounded-lg"
            >
              <div className="w-10 h-10 bg-[--gray-700] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-white text-left">Abdoulaye Kane</p>
                <p className="text-xs text-[--gray-400]">Administrator</p>
              </div>
            </button>

            <div className={clsx(
              'absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-[--gray-300]',
              'transition-all duration-200 ease-in-out',
              isProfileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
            )}>
              <button
                onClick={() => {
                  navigate('/profile');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-[--gray-700] hover:bg-[--gray-100]"
              >
                <UserCircle className="w-5 h-5" />
                <span>Voir mon profil</span>
              </button>
              <div className="h-px bg-[--gray-300] my-1"></div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-[--gray-100]"
              >
                <LogOut className="w-5 h-5" />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}