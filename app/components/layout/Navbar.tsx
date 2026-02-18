'use client';

import { motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/logo.png"
              alt="BCCU Logo"
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://placehold.co/128x128/10F480/1C1C1C?text=B';
              }}
            />
            <span className="text-white font-mono font-bold text-lg tracking-tighter">
              BLOCKCHAIN CLUB
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-mono text-sm">
              {['About', 'Events', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-[#10F480] transition-colors px-3 py-2 rounded-md uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
              <button className="border border-[#10F480] text-[#10F480] hover:bg-[#10F480] hover:text-[#1C1C1C] px-4 py-2 rounded transition-all duration-300 font-bold">
                Join Community
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1C1C1C] border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-mono">
            {['About', 'Events', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-[#10F480] block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </button>
            ))}
            <button className="text-[#10F480] block w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Join Community
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
