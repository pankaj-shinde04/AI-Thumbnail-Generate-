import { motion } from 'framer-motion';
import { fadeUp, scaleUp, viewport } from '../lib/motion';

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Access to all basic courses',
      'Community support',
      '10 practice projects',
      'Course completion certificate',
      'Basic code review',
    ],
    highlighted: false,
    buttonStyle: 'primary',
  },
  {
    name: 'Pro',
    price: 79,
    badge: 'Most Popular',
    features: [
      'Access to all Pro courses',
      'Priority community support',
      '30 practice projects',
      'Course completion certificate',
      'Advance code review',
      '1-on-1 mentoring sessions',
      'Job assistance',
    ],
    highlighted: true,
    buttonStyle: 'white',
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Access to all courses',
      'Dedicated support',
      'Unlimited projects',
      'Course completion certificate',
      'Premium code review',
    ],
    highlighted: false,
    buttonStyle: 'primary',
  },
];

function PricingCard({ plan, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={index * 0.15}
      variants={scaleUp}
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-500 ${
        plan.highlighted
          ? 'bg-gradient-to-b from-primary to-secondary text-white card-glow scale-105 z-10'
          : 'bg-surface border border-surface-border hover:border-primary/30'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-bg text-xs font-bold tracking-wide">
          {plan.badge}
        </span>
      )}

      <p className={`text-sm font-semibold mb-2 ${plan.highlighted ? 'text-white/80' : 'text-text-secondary'}`}>
        {plan.name}
      </p>
      <h2 className="font-heading text-4xl font-bold mb-6">
        ${plan.price}
        <span className={`text-lg font-normal ${plan.highlighted ? 'text-white/70' : 'text-text-secondary'}`}>
          /month
        </span>
      </h2>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={plan.highlighted ? 'white' : '#6366F1'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className={plan.highlighted ? 'text-white/90' : 'text-text-secondary'}>{feat}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
          plan.buttonStyle === 'white'
            ? 'bg-white text-primary hover:bg-white/90'
            : 'bg-primary hover:bg-primary-hover text-white btn-glow'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-surface-border bg-surface/60 text-primary text-sm font-semibold mb-4">
          Pricing
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
          Our Pricing Plans
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>
    </section>
  );
}
