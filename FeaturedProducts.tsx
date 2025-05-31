import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

// Mock data - in a real app this would come from an API
const featuredProducts = [
  {
    id: 1,
    title: 'Smart Business Solution',
    description: 'An all-in-one business management tool for entrepreneurs',
    price: 299.99,
    image: 'https://images.pexels.com/photos/7947931/pexels-photo-7947931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Software'
  },
  {
    id: 2,
    title: 'Premium Consultation Package',
    description: 'Strategic business consulting tailored to your needs',
    price: 499.99,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Services'
  },
  {
    id: 3,
    title: 'Entrepreneur Masterclass',
    description: 'Comprehensive online course for aspiring entrepreneurs',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Education'
  },
  {
    id: 4,
    title: 'Exclusive Business Guide',
    description: 'The ultimate guide to business success in Africa',
    price: 59.99,
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Books'
  }
];

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link to={`/shop/${product.id}`} className="p-2 bg-white rounded-full hover:bg-secondary hover:text-white transition-colors">
            <Eye size={20} />
          </Link>
          <button className="p-2 bg-white rounded-full hover:bg-secondary hover:text-white transition-colors">
            <ShoppingCart size={20} />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-secondary hover:text-white transition-colors">
            <Heart size={20} />
          </button>
        </div>

        <div className="absolute top-3 left-3 bg-primary text-white text-sm py-1 px-3 rounded">
          {product.category}
        </div>
      </div>
      
      <div className="p-5">
        <Link to={`/shop/${product.id}`} className="block">
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{product.title}</h3>
        </Link>
        <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="btn btn-primary py-2">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products & Services</h2>
          <p className="text-gray-600 text-lg">
            Discover innovative solutions designed to help you succeed in today's competitive business environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/shop" className="btn btn-outline py-3 px-8 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;