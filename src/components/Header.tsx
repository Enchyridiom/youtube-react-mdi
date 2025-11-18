"use client";
import Link from 'next/link';
import { Search, Bell, Menu, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] border-b border-[#272727] z-50 flex items-center px-4 gap-4">
      {/* Menu y Logo */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-[#272727] rounded-full transition-colors lg:hidden"
          aria-label="Menu"
        >

          <Menu className="w-5 h-5 text-white" />
        </button>
        <Link href="/" className="flex items-center gap-2" aria-label="YouTube home">
          <ImageWithFallback
            src="/youtube-logo.svg"
            alt="YouTube"
            className="h-6 w-auto"
          />
          <span className="text-white hidden sm:block">YouTube</span>
        </Link>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="flex items-center">
          <div className="flex-1 flex items-center bg-[#121212] border border-[#303030] rounded-l-full overflow-hidden">
            <input
              type="text"
              placeholder="Buscar..."
              className="flex-1 bg-transparent px-4 py-2 text-white placeholder-[#aaa] outline-none"
            />
          </div>
          <button className="px-6 py-2 bg-[#222222] border border-[#303030] border-l-0 rounded-r-full hover:bg-[#303030] transition-colors">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Iconos de usuario */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-[#272727] rounded-full transition-colors relative">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#ff0000] rounded-full"></span>
        </button>
        <button className="w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-[#ff0000] transition-all">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="User"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}
