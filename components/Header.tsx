import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-40 mix-blend-difference text-white">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold font-mono leading-none">π</span>
      </div>

      {/* Menu Trigger - The Dot */}
      <button 
        onClick={onMenuOpen}
        className="group flex items-center gap-4 focus:outline-none"
        aria-label="Open Menu"
      >
        <span className="hidden md:block text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
          System_Menu
        </span>
        <div className="w-4 h-4 bg-white rounded-full transition-transform duration-300 group-hover:scale-150 group-hover:bg-red-600"></div>
      </button>
    </header>
  );
};

export default Header;