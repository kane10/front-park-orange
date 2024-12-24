import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import clsx from 'clsx';

interface NotificationDropdownProps {
  isOpen: boolean;
}

export function NotificationDropdown({ isOpen }: NotificationDropdownProps) {
  return (
    <div className={clsx(
      'absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 border border-[--gray-300]',
      'transition-all duration-200 ease-in-out',
      isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
    )}>
      <div className="p-4 border-b border-[--gray-200]">
        <h3 className="font-semibold text-[--gray-700]">Notifications</h3>
      </div>
      <div className="divide-y divide-[--gray-200]">
        <div className="p-4 hover:bg-[--gray-50]">
          <div className="flex gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-[--gray-700] font-medium">Nouvelle réservation</p>
              <p className="text-sm text-[--gray-500]">Une nouvelle demande de véhicule a été créée</p>
              <p className="text-xs text-[--gray-400] mt-1">Il y a 5 minutes</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-[--gray-50]">
          <div className="flex gap-3">
            <div className="p-2 bg-orange-50 rounded-lg">
              <MessageSquare className="w-5 h-5 text-[--orange-primary]" />
            </div>
            <div>
              <p className="text-sm text-[--gray-700] font-medium">Maintenance planifiée</p>
              <p className="text-sm text-[--gray-500]">Rappel de maintenance pour Toyota Land Cruiser</p>
              <p className="text-xs text-[--gray-400] mt-1">Il y a 30 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}