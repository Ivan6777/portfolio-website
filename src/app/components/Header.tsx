import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#030213]/80 backdrop-blur-md md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none transition-colors duration-300">
        <div className="mx-auto px-5 md:px-[120px] h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-['Montserrat'] font-bold text-xl md:text-2xl tracking-tight dark:text-white transition-colors">
            SYNAPSE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Montserrat'] text-base hover:text-[var(--cyan-turquoise)] dark:text-white/80 dark:hover:text-[var(--cyan-turquoise)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[var(--cyan-turquoise)] text-white font-['Montserrat'] font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile Hamburger */}
            <button
              className="p-2 -mr-2 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--cyan-turquoise)] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-['Montserrat'] text-3xl font-bold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="px-8 py-3 bg-white text-[var(--cyan-turquoise)] font-['Montserrat'] font-bold text-xl rounded-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
