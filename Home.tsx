import React, { useEffect } from 'react';
import PageTransition from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedMedia from '../components/home/FeaturedMedia';
import LatestBlogs from '../components/home/LatestBlogs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = "Your Name | Entrepreneur, Inventor, Problem Solver";
  }, []);

  return (
    <PageTransition>
      <Hero />
      <Features />
      <FeaturedProducts />
      <FeaturedMedia />
      <LatestBlogs />
      <TestimonialsSection />
      <ContactCTA />
    </PageTransition>
  );
};

export default Home;