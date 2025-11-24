import { motion } from 'motion/react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { CaseStudies } from '../components/home/CaseStudies';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TechStack } from '../components/home/TechStack';
import { Testimonials } from '../components/home/Testimonials';
import { CTABanner } from '../components/home/CTABanner';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <CTABanner />
    </motion.div>
  );
}
