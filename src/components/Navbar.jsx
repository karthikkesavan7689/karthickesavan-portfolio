import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '15px 0' : '25px 0',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div style={{
            width: '45px',
            height: '45px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            boxShadow: '0 8px 16px rgba(99, 102, 241, 0.2)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              opacity: 0.3,
              filter: 'blur(8px)',
              zIndex: -1
            }} />
            <Code2 size={26} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: 950,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'linear-gradient(to right, #fff, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1
            }}>
              KSR
            </span>
            <span style={{
              fontSize: '0.6rem',
              color: 'var(--primary)',
              fontWeight: 800,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginTop: '2px'
            }}>
              PORTFOLIO
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '8px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="nav-link"
              style={{
                textDecoration: 'none',
                color: 'var(--text-dim)',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '10px 18px',
                borderRadius: '10px',
                transition: 'all 0.3s ease'
              }}
            >
              {link.name}
            </motion.a>
          ))}
          <div style={{ width: '1px', height: '20px', background: 'var(--glass-border)', margin: '0 10px' }} />
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.85rem', borderRadius: '10px' }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'block' }} className="mobile-toggle">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--glass-border)',
              color: 'white',
              cursor: 'pointer',
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              background: 'rgba(2, 6, 23, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--glass-border)',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              padding: '20px 0'
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    padding: '15px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
