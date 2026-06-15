import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../lib/motion';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Sophia Carter',
    handle: '@sophiacodes',
    date: 'February 14, 2025',
    quote: 'This SaaS app has completely streamlined our onboarding process. What used to take hours now takes minutes!',
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Ethan Walker',
    handle: '@ethanwrites',
    date: 'March 3, 2025',
    quote: "We've tried several tools, but nothing comes close in terms of speed and simplicity. Absolute game-changer.",
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Maya Patel',
    handle: '@mayapatel',
    date: 'April 22, 2025',
    quote: 'The automation features alone have saved our team countless hours every week. Worth every penny.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Liam Brooks',
    handle: '@liambrooks',
    date: 'May 18, 2025',
    quote: 'Setup was ridiculously easy. Within 10 minutes, we were running live and onboarding our first customers.',
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-sm p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/30"
        />
        <div>
          <p className="font-semibold text-text-primary text-sm">{testimonial.name}</p>
          <p className="text-text-secondary text-xs">{testimonial.handle}</p>
        </div>
      </div>
      <p className="text-text-primary text-sm leading-relaxed flex-1">{testimonial.quote}</p>
      <p className="text-text-secondary text-xs">{testimonial.date}</p>
    </div>
  );
}

function MarqueeRow({ direction = 'left' }) {
  const items = [...testimonials, ...testimonials];

  return (
    <div className="marquee-mask overflow-hidden">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 px-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-surface-border bg-surface/60 text-primary text-sm font-semibold mb-4">
          Testimonials
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
          Don't just take our words
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Hear what our users say about us. We're always looking for ways to improve.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5">
        <MarqueeRow direction="left" />
        <MarqueeRow direction="right" />
      </div>
    </section>
  );
}
