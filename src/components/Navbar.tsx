'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/projects',  },
    { name: 'Skills', href: '/skills',  },
    { name: 'Blog', href: '/blog', },
    { name: 'Contact', href: '/contact',  },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 glass border-b border-zinc-200 dark:border-zinc-800' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link 
          href="/"
          className="flex items-center gap-2 text-2xl font-black tracking-tighter group outline-none"
        >
          <div className="p-1.5 bg-amber-500 rounded-lg group-hover:rotate-12 transition-transform">
            <Terminal size={20} className="text-white" />
          </div>
          <span>Hrithik<span className="text-amber-500">.</span>Dev</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-2 text-sm font-semibold transition-colors outline-none ${
                  isActive(link.href) ? 'text-amber-500' : 'text-zinc-600 dark:text-zinc-400 hover:text-amber-500'
                }`}
              >
                
                {link.name}
                {/* <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span> */}
              </Link>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
    {/* mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-zinc-950 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-xl font-black">NAVIGATE</span>
               <button onClick={() => setMobileMenuOpen(false)} className="p-2"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-black text-left flex items-baseline gap-4"
                >
                  {/* <span className="text-amber-500 text-lg mono">{link.num}</span> */}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
