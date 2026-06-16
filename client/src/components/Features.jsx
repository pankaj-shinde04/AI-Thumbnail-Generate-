import { motion } from 'framer-motion';
import { fadeUp, scaleUp, viewport } from '../lib/motion';

const featureCards = [
  {
    title: 'Smart Analysis',
    description: 'Our AI analyzes your design and generates clean, semantic code.',
    icon: (
      <svg width="31" height="34" viewBox="0 0 31 34" fill="none">
        <path d="M2.616 20.2a1.62 1.62 0 0 1-1.458-.91 1.59 1.59 0 0 1 .202-1.698L17.304 1.276a.806.806 0 0 1 1.385.736l-3.092 9.63a1.59 1.59 0 0 0 .765 1.978c.231.12.488.182.749.18h11.273a1.62 1.62 0 0 1 1.458.91 1.59 1.59 0 0 1-.202 1.698L13.696 32.724a.807.807 0 0 1-1.385-.736l3.092-9.63a1.59 1.59 0 0 0-.765-1.978 1.6 1.6 0 0 0-.748-.18z"
          stroke="url(#bolt)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="bolt" x1="15.5" y1="1" x2="15.5" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    highlighted: false,
  },
  {
    title: 'Eye-catching designs',
    description: 'Generate stunning thumbnails that attract clicks and boost engagement.',
    icon: (
      <svg width="33" height="34" viewBox="0 0 33 34" fill="none">
        <path d="M8.617 13.777V32.43" stroke="url(#thumb1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m21.066 7.377-1.554 6.404h9.062a3.107 3.107 0 0 1 2.984 3.979l-3.621 12.435a3.11 3.11 0 0 1-2.985 2.238H3.968A3.11 3.11 0 0 1 .86 29.325V16.89a3.11 3.11 0 0 1 3.11-3.11h4.29a3.11 3.11 0 0 0 2.782-1.725l5.362-10.71a4.866 4.866 0 0 1 4.663 6.032"
          stroke="url(#thumb2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="thumb1" x1="9.117" y1="13.777" x2="9.117" y2="32.43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="thumb2" x1="16.271" y1="1.346" x2="16.271" y2="32.433" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    highlighted: true,
  },
  {
    title: 'Fully editable',
    description: 'All generated code is clean, semantic, and easy to customize to fit your needs.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M12.278 23.072c6 0 10.864-4.864 10.864-10.863 0-6-4.864-10.863-10.864-10.863S1.414 6.209 1.414 12.209s4.864 10.863 10.864 10.863"
          stroke="url(#ring1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.583 32.383c6 0 10.863-4.864 10.863-10.864s-4.864-10.863-10.863-10.863c-6 0-10.864 4.864-10.864 10.863 0 6 4.864 10.864 10.864 10.864"
          stroke="url(#ring2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="ring1" x1="12.278" y1="1.346" x2="12.278" y2="23.072" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="ring2" x1="21.582" y1="10.656" x2="21.582" y2="32.383" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    highlighted: false,
  },
];

function SectionHeader() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full border border-surface-border bg-surface/60 text-primary text-sm font-semibold mb-4">
        Features
      </span>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
        What you get
      </h2>
      <p className="mt-4 text-text-secondary text-lg">
        Create stunning, thumbnails that get clicks, without the hassle.
      </p>
    </motion.div>
  );
}

function FeatureCard({ card, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={index * 0.12}
      variants={scaleUp}
      className={`group relative rounded-2xl p-[1px] transition-all duration-500 ${
        card.highlighted
          ? 'bg-gradient-to-b from-primary/60 via-secondary/40 to-accent/30 card-glow'
          : 'bg-surface-border hover:bg-primary/30'
      }`}
    >
      <div className="relative h-full rounded-2xl bg-surface p-8 flex flex-col gap-4 group-hover:bg-surface/90 transition-colors">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
          {card.icon}
        </div>
        <h3 className="font-heading text-xl font-semibold text-text-primary">{card.title}</h3>
        <p className="text-text-secondary leading-relaxed">{card.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-20">
      <SectionHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
        {featureCards.map((card, i) => (
          <FeatureCard key={card.title} card={card} index={i} />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto rounded-3xl border border-surface-border bg-surface/40 p-8 md:p-12 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-50" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative text-xl md:text-2xl text-text-primary font-medium text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Our AI Understands your design and generates clean, semantic code that’s easy to customize.
        </motion.p>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            custom={0.1}
            variants={scaleUp}
            className="rounded-2xl overflow-hidden border border-surface-border hero-image-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
              alt="Analytics dashboard"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.2}
              variants={scaleUp}
              className="rounded-2xl overflow-hidden border border-surface-border"
            >
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80"
                alt="Mobile interface"
                className="w-full h-48 object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0.3}
              variants={fadeUp}
            >
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
                Boost your productivity with AI-powered code generation
              </h3>
              <p className="text-text-secondary mb-4">
                Say goodbye to manual coding and hello to instant, high-quality code that brings your designs to life in seconds.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors group"
              >
               Start generating free.
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
