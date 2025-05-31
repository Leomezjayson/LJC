import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingBag, 
  Youtube, 
  Newspaper, 
  Lightbulb
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <ShoppingBag size={40} />,
    title: 'E-Commerce Platform',
    description: 'Shop for innovative products and services designed to solve real-world problems.'
  },
  {
    id: 2,
    icon: <Youtube size={40} />,
    title: 'Media Content',
    description: 'Watch insightful videos and connect through various social media platforms.'
  },
  {
    id: 3,
    icon: <Newspaper size={40} />,
    title: 'Trending News',
    description: 'Stay updated with the latest news and developments from Ghana, Africa, and worldwide.'
  },
  {
    id: 4,
    icon: <Lightbulb size={40} />,
    title: 'Innovative Solutions',
    description: 'Discover cutting-edge ideas and solutions to address complex challenges.'
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="bg-primary/10 p-4 rounded-full w-fit mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-gray-600 text-lg">
            Explore the various aspects of my platform designed to inform, inspire, and innovate.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;