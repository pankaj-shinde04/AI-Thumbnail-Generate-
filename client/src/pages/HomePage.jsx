import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import CtaBanner from '../components/CtaBanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <CtaBanner />
    </main>
  );
}
