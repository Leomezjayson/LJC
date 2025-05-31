import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, Search, ArrowUpDown, Heart, Eye } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

// Mock data - in a real app this would come from an API
const products = [
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
  },
  {
    id: 5,
    title: 'Innovation Workshop',
    description: 'Virtual workshop on fostering innovation in your business',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Education'
  },
  {
    id: 6,
    title: 'African Market Entry Guide',
    description: 'Essential strategies for entering and succeeding in African markets',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Books'
  },
  {
    id: 7,
    title: 'Business Growth Accelerator',
    description: 'Three-month program to scale your business effectively',
    price: 999.99,
    image: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Services'
  },
  {
    id: 8,
    title: 'Supply Chain Optimization Tool',
    description: 'Software to streamline and optimize your supply chain operations',
    price: 349.99,
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Software'
  }
];

const categories = ['All', 'Software', 'Services', 'Education', 'Books'];

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

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    document.title = "Shop | Your Name";
  }, []);

  // Filter products based on active category and search term
  useEffect(() => {
    let result = products;
    
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.title.toLowerCase().includes(lowercaseSearch) || 
          product.description.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>

        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover innovative products and services designed to help you succeed in today's competitive business environment.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                <Filter size={18} className="text-gray-500" />
                <span className="text-gray-500">Categories:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Shop;