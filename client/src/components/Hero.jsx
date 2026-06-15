import { motion } from 'framer-motion';
import { fadeUp, fadeDown } from '../lib/motion';
import { useNavigate } from 'react-router-dom';

const trustItems = [
  'No Design Skills Required',
  'Fast Generation',
  'High Quality Thumbnails',
];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40" />

      <motion.a
        href="#pricing"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeDown}
        className="relative z-10 flex items-center gap-3 px-4 py-2 rounded-full border border-surface-border bg-surface/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 mb-8"
      >
        <span className="px-2 py-0.5 rounded-md bg-primary/20 text-primary text-xs font-bold tracking-wide">
          NEW
        </span>
        <p className="flex items-center gap-1 text-sm text-text-secondary">
          Generate Thumbnails in seconds with AI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </p>
      </motion.a>

      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0.1}
        variants={fadeUp}
        className="relative z-10 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight tracking-tight"
      >
        AI Thumbnail Generator For Your {''}
        <span className="text-gradient-hero"> Videos.</span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={fadeUp}
        className="relative z-10 mt-6 text-lg md:text-xl text-text-secondary text-center max-w-2xl leading-relaxed"
      >
        Stop wasting time on manual thumbnail creation. Our AI-powered tool generates professional thumbnails in seconds.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.3}
        variants={fadeUp}
        className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-10"
      >
        <button onClick={() => navigate('/generate')} className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 btn-glow hover:scale-105">
          Generate Now
        </button>
        <button className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-surface-border bg-surface/40 hover:bg-surface/80 text-text-primary font-medium transition-all duration-300 hover:scale-105">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
          </svg>
          see how it works
        </button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.4}
        variants={fadeUp}
        className="relative z-10 flex flex-wrap items-center justify-center gap-6 mt-10"
      >
        {trustItems.map((item) => (
          <p key={item} className="flex items-center gap-2 text-sm text-text-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>{item}</span>
          </p>
        ))}
      </motion.div>

      <motion.figure
        initial={{ opacity: 0, y: 150, rotateX: 8 }}
        whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 w-full max-w-5xl perspective-[1200px]"
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ rotateY: 6, rotateX: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          viewport={{ once: true }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative rounded-2xl overflow-hidden hero-image-shadow border border-surface-border bg-surface cursor-pointer"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
            alt="Dashboard showcase"
            className="w-full h-auto object-cover border-border bg-linear-180 from-[#6366f1] to-transparent p-1 rounded-2xl"
          />
        </motion.div>
        <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/30 blur-[60px] rounded-full" />
      </motion.figure>
    </section>
  );
}
