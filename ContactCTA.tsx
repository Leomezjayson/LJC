import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Have a project idea, business proposal, or just want to connect? I'm always open to new opportunities and collaborations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary hover:text-white transition-colors shadow-lg"
          >
            <MessageSquare size={20} className="mr-2" />
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;