'use client';

import { motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle'; // Make sure this path matches where you put ThemeToggle

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
    <nav
      className="fixed top-0 left-0 right-0 z-50 
      bg-white/80 dark:bg-[#1C1C1C]/80 
      backdrop-blur-md 
      border-b border-gray-200 dark:border-white/10 
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/logo.png"
              alt="BCCU Logo"
              // FIX: Invert colors in light mode so white logo becomes black
              className="w-10 h-10 object-contain dark:brightness-10 0 transition-all duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  'https://placehold.co/128x128/10F480/1C1C1C?text=B';
              }}
            />
            <span className="text-gray-900 dark:text-white font-mono font-bold text-lg tracking-tighter transition-colors duration-300">
              BLOCKCHAIN CLUB
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 font-mono text-sm">
              {['About', 'Events', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-[#10F480] transition-colors px-3 py-2 rounded-md uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://chat.whatsapp.com/CXY53ovXAas7bWBfwRnEsa?utm_source=website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-[#10F480] text-emerald-600 dark:text-[#10F480] hover:bg-[#10F480] hover:text-[#1C1C1C] dark:hover:text-[#1C1C1C] px-4 py-2 rounded transition-all duration-300 font-bold">
                  Join Community
                </button>
              </a>

              {/* Theme Toggle Button */}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-mono">
            {['About', 'Events', 'Team', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 dark:text-gray-300 hover:text-[#10F480] block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="text-[#10F480] block w-full text-left px-3 py-2 rounded-md text-base font-bold">
              Join Community
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
