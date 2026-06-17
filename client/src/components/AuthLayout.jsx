import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scaleUp } from '../lib/motion';
import SoftDrop from './SoftDrop';

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-[#050505]">
      <SoftDrop variant="auth" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleUp}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-primary/10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to home
        </Link>

        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-text-secondary text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {children}

        {footer && (
          <p className="mt-8 text-center text-sm text-text-secondary">
            {footer}
          </p>
        )}
      </motion.div>
    </div>
  );
}
