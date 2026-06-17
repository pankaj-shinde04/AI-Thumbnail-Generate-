import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MotionLink = motion.create(Link);

function scrollToSection(sectionId) {
  if (!sectionId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// import BrandLogo from './BrandLogo';
const navVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 24, mass: 0.6 },
  },
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  const links = [
    { label: 'Home', to: '/', sectionId: null },
    { label: 'Generate', to: '/generate', sectionId: null },
    { label: 'My Generation', to: '/my-generation', sectionId: null },
    ...(isHomePage
      ? [
          { label: 'Testimonials', to: '/', sectionId: 'testimonials' },
          { label: 'Pricing', to: '/', sectionId: 'pricing' },
        ]
      : []),
  ];

  const handleNavClick = useCallback((e, link) => {
    e.preventDefault();
    setMenuOpen(false);

    const runScroll = () => {
      if (link.sectionId) {
        if (location.pathname === '/') {
          scrollToSection(link.sectionId);
        } else {
          navigate(`/#${link.sectionId}`);
        }
        return;
      }

      if (link.to === '/' && location.pathname === '/') {
        scrollToSection(null);
        return;
      }

      navigate(link.to);
    };

    if (menuOpen) {
      requestAnimationFrame(() => requestAnimationFrame(runScroll));
    } else {
      runScroll();
    }
  }, [location.pathname, menuOpen, navigate]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [location.hash]);

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-surface-border shadow-lg shadow-primary/5'
            : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, links[0])}
          className="flex flex-row flex-nowrap items-center gap-2.5 shrink-0 group"
        >
          {/* <BrandLogo className="w-20 h-20 shrink-0" /> */}
          <span className="font-heading text-xl font-bold text-gradient-brand whitespace-nowrap leading-none">
            AI Thumbnail
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button onClick={() => navigate('/login')} className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all duration-300 btn-glow hover:scale-105">
          Get Started
        </button>

        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <MotionLink
                key={link.label}
                to={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={(e) => handleNavClick(e, link)}
                className="text-2xl font-heading font-semibold text-text-primary hover:text-primary transition-colors"
              >
                {link.label}
              </MotionLink>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={() => { setMenuOpen(false); navigate('/login'); }}
              className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-semibold btn-glow"
            >
              Get Started
            </motion.button>
            <button
              className="absolute top-6 right-6 p-2 text-text-primary"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
