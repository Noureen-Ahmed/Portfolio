import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`navbar ${scrolled || isOpen ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <span className="gradient-text font-bold">NA</span>.
        </motion.div>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu glass"
          >
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: var(--transition);
        }
        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(5, 5, 5, 0.9);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .nav-links li a:hover {
          color: var(--primary-color);
        }
        .mobile-toggle {
          display: none;
          color: var(--text-main);
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1001;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
        .mobile-nav-links a {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
            position: relative;
            z-index: 2000;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
