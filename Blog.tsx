import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, Filter, ArrowRight } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

// Mock data - in a real app this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of E-commerce in Ghana',
    excerpt: 'An analysis of the growing e-commerce landscape in Ghana and opportunities for entrepreneurs.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'June 20, 2025',
    author: 'Your Name',
    category: 'Business',
    tags: ['E-commerce', 'Ghana', 'Entrepreneurship'],
    image: 'https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: 2,
    title: 'Innovation Trends Reshaping Africa',
    excerpt: 'Exploring the technological innovations that are transforming various industries across Africa.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'June 12, 2025',
    author: 'Your Name',
    category: 'Technology',
    tags: ['Innovation', 'Africa', 'Technology'],
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: 3,
    title: 'Global Supply Chain Challenges and Solutions',
    excerpt: 'How businesses can navigate and overcome the current global supply chain disruptions.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'June 5, 2025',
    author: 'Your Name',
    category: 'Global',
    tags: ['Supply Chain', 'Global Business', 'Logistics'],
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: 4,
    title: 'Sustainable Business Practices for African Entrepreneurs',
    excerpt: 'Implementing eco-friendly strategies that benefit both your business and the environment.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'May 28, 2025',
    author: 'Your Name',
    category: 'Sustainability',
    tags: ['Sustainability', 'Africa', 'Business'],
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: 5,
    title: 'Financial Strategies for Startups in Emerging Markets',
    excerpt: 'Essential financial management approaches for new businesses in developing economies.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'May 15, 2025',
    author: 'Your Name',
    category: 'Finance',
    tags: ['Finance', 'Startups', 'Emerging Markets'],
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: 6,
    title: 'Building Strong Brand Identity in the Digital Age',
    excerpt: 'Strategies for creating a distinctive and memorable brand in today\'s digital landscape.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'May 8, 2025',
    author: 'Your Name',
    category: 'Marketing',
    tags: ['Branding', 'Digital Marketing', 'Identity'],
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: 7,
    title: 'The Rise of Mobile Payment Systems in Africa',
    excerpt: 'How mobile payment solutions are revolutionizing business transactions across the continent.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'April 25, 2025',
    author: 'Your Name',
    category: 'Fintech',
    tags: ['Fintech', 'Mobile Payments', 'Africa'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: 8,
    title: 'Leadership Lessons from African Business Pioneers',
    excerpt: 'Insights and wisdom from some of Africa\'s most successful business leaders.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.',
    date: 'April 18, 2025',
    author: 'Your Name',
    category: 'Leadership',
    tags: ['Leadership', 'Africa', 'Business'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  }
];

const categories = ['All', 'Business', 'Technology', 'Global', 'Sustainability', 'Finance', 'Marketing', 'Fintech', 'Leadership'];
const popularTags = ['Africa', 'Entrepreneurship', 'Technology', 'Ghana', 'Business', 'E-commerce', 'Innovation', 'Leadership'];

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    image: string;
  };
  index: number;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, featured = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-6' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-full' : 'h-52'}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-sm font-medium py-1 px-3 rounded">
          {post.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.id}`} className="block">
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 group-hover:text-primary transition-colors`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors">
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.article>
  );
};

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  useEffect(() => {
    document.title = "Blog | Your Name";
  }, []);

  // Filter blog posts based on active category and search term
  useEffect(() => {
    let result = blogPosts;
    
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(lowercaseSearch) || 
          post.excerpt.toLowerCase().includes(lowercaseSearch) ||
          post.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
      );
    }
    
    setFilteredPosts(result);
  }, [activeCategory, searchTerm]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>

        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Insights, analysis, and trending news from Ghana, Africa, and around the world.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search and Filter Bar */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
                    <Filter size={18} className="text-gray-500 flex-shrink-0" />
                    <select 
                      value={activeCategory} 
                      onChange={(e) => setActiveCategory(e.target.value)}
                      className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Featured Post */}
              {filteredPosts.filter(post => post.featured).length > 0 && (
                <div className="mb-8">
                  <BlogCard 
                    post={filteredPosts.filter(post => post.featured)[0]} 
                    index={0} 
                    featured={true} 
                  />
                </div>
              )}
              
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.filter(post => !post.featured).length > 0 ? (
                  filteredPosts
                    .filter(post => !post.featured)
                    .map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index + 1} />
                    ))
                ) : (
                  filteredPosts.length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <h3 className="text-xl text-gray-700 mb-2">No articles found</h3>
                      <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </div>
                  )
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Categories</h3>
                <ul className="space-y-2">
                  {categories.filter(cat => cat !== 'All').map((category, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => setActiveCategory(category)}
                        className={`flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-50 transition-colors ${
                          activeCategory === category ? 'font-medium text-primary' : 'text-gray-700'
                        }`}
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button 
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 object-cover rounded-md" 
                      />
                      <div>
                        <Link to={`/blog/${post.id}`} className="font-medium text-gray-800 hover:text-primary line-clamp-2 transition-colors">
                          {post.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;