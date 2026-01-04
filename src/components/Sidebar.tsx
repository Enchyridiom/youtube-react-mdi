"use client";

import { Home, TrendingUp, Users, Library, History, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  currentPage?: 'home' | 'video';
}

export function Sidebar({ isOpen = true, currentPage = 'home' }: SidebarProps) {
  const navItems = [
    { icon: Home, label: 'Inicio', active: currentPage === 'home' },
    { icon: TrendingUp, label: 'Tendencias', active: false },
    { icon: Users, label: 'Suscripciones', active: false },
    { icon: Library, label: 'Biblioteca', active: false },
    { icon: History, label: 'Historial', active: false },
  ];

  return (
    <>
      {/* Sidebar para desktop */}
      <nav className={`fixed top-14 left-0 bottom-0 w-56 bg-[#0f0f0f] border-r border-[#272727] overflow-y-auto transition-transform duration-300 z-40 hidden lg:block pb-36 ${!isOpen ? '-translate-x-full' : ''}`} aria-label="Navegación principal">
        <ul className="py-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-4 px-4 py-2.5 hover:bg-[#272727] transition-colors ${
                  item.active ? 'bg-[#272727]' : ''
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-[#aaa]'}`} aria-hidden="true" />
                <span className={item.active ? 'text-white' : 'text-[#aaa]'}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-[#272727] my-2"></div>

        <section className="px-4 py-2" aria-labelledby="subscriptions-heading">
          <h2 id="subscriptions-heading" className="text-[#aaa] mb-2 text-sm font-semibold">Suscripciones</h2>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <li key={i}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-2 py-2 hover:bg-[#272727] rounded-lg transition-colors"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" aria-hidden="true"></div>
                  <span className="text-[#aaa]">Canal {i}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer del sidebar */}
        <footer className="absolute bottom-0 left-0 right-0 border-t border-[#272727] bg-[#0f0f0f]">
          <div className="px-4 py-3 flex flex-col gap-2">
            <div className="flex gap-3 justify-start">
              <a
                href="#"
                className="flex items-center gap-2 text-xs text-[#aaa] hover:text-white transition-colors"
                title="Configuración"
              >
                <Settings className="w-4 h-4" />
                <span>Configuración</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-xs text-[#aaa] hover:text-white transition-colors"
                title="Ayuda"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Ayuda</span>
              </a>
            </div>
            <div className="text-[10px] text-[#666] border-t border-[#272727] pt-2">
              <p>© 2026 YouTube Clone</p>
            </div>
          </div>
        </footer>
      </nav>

      {/* Sidebar compacto para mobile/tablet */}
      <nav className="fixed top-14 left-0 bottom-0 w-20 bg-[#0f0f0f] border-r border-[#272727] overflow-y-auto z-40 lg:hidden pb-24 flex flex-col" aria-label="Navegación principal compacta">
        <ul className="py-2 flex-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex flex-col items-center gap-1 px-2 py-3 hover:bg-[#272727] transition-colors ${
                  item.active ? 'bg-[#272727]' : ''
                }`}
                aria-current={item.active ? "page" : undefined}
                aria-label={item.label}
              >
                <item.icon className={`w-6 h-6 ${item.active ? 'text-white' : 'text-[#aaa]'}`} aria-hidden="true" />
                <span className={`text-xs ${item.active ? 'text-white' : 'text-[#aaa]'}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Footer compacto para mobile */}
        <footer className="border-t border-[#272727] bg-[#0f0f0f]">
          <div className="flex flex-col gap-2 py-2 items-center">
            <a
              href="#"
              className="text-[#aaa] hover:text-white transition-colors p-2"
              title="Configuración"
            >
              <Settings className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#aaa] hover:text-white transition-colors p-2"
              title="Ayuda"
            >
              <HelpCircle className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </nav>
    </>
  );
}
