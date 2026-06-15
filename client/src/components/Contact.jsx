import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../lib/motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fields = [
    {
      label: 'Your name',
      id: 'contact-name',
      type: 'text',
      name: 'name',
      placeholder: 'Enter your name',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      delay: 0.1,
    },
    {
      label: 'Email id',
      id: 'contact-email',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      ),
      delay: 0.2,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-surface-border bg-surface/60 text-primary text-sm font-semibold mb-4">
          Contact
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
          Reach out to us
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Ready to grow your brand? Let's connect and build something exceptional together.
        </p>
      </motion.div>

      <form
        className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5"
        onSubmit={handleSubmit}
      >
        {fields.map((field) => (
          <motion.div
            key={field.id}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={field.delay}
            variants={fadeUp}
            className="flex flex-col gap-2"
          >
            <label htmlFor={field.id} className="text-sm font-medium text-text-secondary">
              {field.label}
            </label>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-surface-border bg-surface/60 focus-within:border-primary/50 transition-colors">
              <span className="text-text-secondary">{field.icon}</span>
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                className="flex-1 bg-transparent text-text-primary placeholder:text-text-secondary/60 text-sm"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.3}
          variants={fadeUp}
          className="sm:col-span-2 flex flex-col gap-2"
        >
          <label htmlFor="contact-message" className="text-sm font-medium text-text-secondary ">
            Message
          </label>
          <div className="rounded-xl border border-surface-border bg-surface/60 focus-within:border-primary/50 transition-colors">
            <textarea
              id="contact-message"
              name="message"
              rows="8"
              placeholder="Enter your message"
              className="w-full px-4 py-3 bg-transparent text-text-primary placeholder:text-text-secondary/60 text-sm resize-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0.4}
          variants={fadeUp}
          className="sm:col-span-2"
        >
          <button
            type="submit"
            id="contact-submit"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 btn-glow hover:scale-105"
          >
            Submit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </form>
    </section>
  );
}
