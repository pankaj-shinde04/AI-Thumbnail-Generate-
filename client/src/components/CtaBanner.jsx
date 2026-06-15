import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../lib/motion';

export default function CtaBanner() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="mx-6 md:mx-12 lg:mx-20 mb-24 rounded-3xl border border-surface-border bg-gradient-to-r from-surface via-primary/10 to-surface p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5" />

      <div className="relative text-center md:text-left">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.1}
          variants={fadeUp}
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-cta"
        >
          Ready to try-out this app?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.2}
          variants={fadeUp}
          className="mt-3 text-text-secondary text-lg"
        >
          Your next favourite tool is just one click away.
        </motion.p>
      </div>

      <motion.button
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        custom={0.3}
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex-shrink-0 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold btn-glow transition-colors"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}
