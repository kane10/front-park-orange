import React from 'react';
import { 
  LayoutDashboard, 
  Car, 
  Users,
  UserCog,
  Calendar,
  ClipboardCheck,
  Settings,
  FileText,
  BarChart,
  LineChart,
  Wrench // Changed from Tool to Wrench
} from 'lucide-react';
import { useNavbar } from '../hooks/useNavbar';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export function Sidebar() {
  const { isOpen } = useNavbar();

  const navigation = [
    { name: 'Tableau de bord', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Véhicules', icon: Car, path: '/vehicules' },
    { name: 'Utilisateurs', icon: Users, path: '/users' },
    { name: 'Chauffeurs', icon: UserCog, path: '/drivers' },
    { name: 'Réservations', icon: Calendar, path: '/reservations' },
    { name: 'Demandes', icon: ClipboardCheck, path: '/assignments' },
    { name: 'Maintenance', icon: Wrench, path: '/maintenance' }, // Updated icon
    { name: 'Suivi des demandes', icon: LineChart, path: '/request-reporting' },
    { name: 'Rapports', icon: FileText, path: '/reports' },
    { name: 'Statistiques', icon: BarChart, path: '/statistics' },
    { name: 'Paramètres', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className={clsx(
      'fixed top-16 bottom-0 left-0 z-40 w-64 bg-white border-r border-[--gray-300] transition-transform lg:translate-x-0',
      !isOpen && '-translate-x-full lg:translate-x-0'
    )}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => clsx('nav-link', isActive && 'active')}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}