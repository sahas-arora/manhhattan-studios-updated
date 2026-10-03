import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
];

const easePremium = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isExpanded = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Collapse as soon as the user scrolls; expanded again at the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll(); // sync on mount and on route change
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          height: isExpanded ? '92px' : '64px',
          backgroundColor: isExpanded ? 'rgba(0,0,0,0)' : '#F3EFE8',
          borderColor: isExpanded ? 'rgba(217,211,201,0)' : '#D9D3C9',
        }}
        transition={{ duration: 0.55, ease: easePremium }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <div className="mx-auto flex h-full max-w-[1680px] items-center justify-between px-6 md:px-10">
          <Link
            to="/"
            className={`site-wordmark ${isExpanded ? 'site-wordmark--light' : ''}`}
            aria-label="Manhhattan Studios home"
          >
            <img
              src="/images/manhattan-monogram.png"
              alt="Manhattan Studios"
              className={`h-12 w-12 object-contain transition-all duration-500 md:h-14 md:w-14 ${isExpanded ? 'brightness-0 invert' : ''
                }`}
            />
            MANHHATTAN STUDIOS
          </Link>

          <motion.nav
            key="desktop-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: easePremium }}
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'nav-link--active' : ''
                  } ${isExpanded ? 'nav-link--light' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`nav-link nav-link--cta ${isExpanded ? 'nav-link--light' : ''}`}
            >
              Start a project
            </Link>
          </motion.nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`menu-trigger lg:hidden ${isExpanded ? 'menu-trigger--light' : ''}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easePremium }}
            className="fixed inset-0 z-[60] bg-canvas lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link to="/" className="site-wordmark" onClick={() => setMenuOpen(false)}>
                MANHHATTAN STUDIOS
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-ink"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.55, ease: easePremium }}
                  className="border-b border-hairline"
                >
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-nav-link"
                  >
                    <span>{link.label}</span>
                    <span className="text-bronze">{String(i + 1).padStart(2, '0')}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.55, ease: easePremium }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-8 inline-flex border border-ink px-6 py-4 text-[10px] uppercase tracking-[0.22em]"
                >
                  Start a project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}