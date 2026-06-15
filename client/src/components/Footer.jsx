import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, viewport } from '../lib/motion';
import BrandLogo from './BrandLogo';

const footerLinks = {
  Product: [
    { label: 'Home', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Affiliate', href: '#' },
  ],
  
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

const socials = [
  {
    label: 'Dribbble',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
          className="flex flex-wrap gap-10 lg:gap-14"
        >
          <a href="#" className="w-full sm:w-auto">
            <BrandLogo />
          </a>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-heading font-semibold text-text-primary text-sm mb-4">{category}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeRight}
          className="flex flex-col gap-6 max-w-sm"
        >
          <p className="text-text-secondary leading-relaxed">
            Making every customer feel valued — no matter the size of your audience.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-surface-border bg-surface/60 text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-text-secondary text-sm">
            © 2025 AI Thumbnail. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
