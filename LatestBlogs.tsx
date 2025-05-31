import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Mock data - in a real app this would come from an API
const latestBlogs = [
  {
    id: 1,
    title: 'The Future of E-commerce in Ghana',
    excerpt: 'An analysis of the growing e-commerce landscape in Ghana and opportunities for entrepreneurs.',
    date: 'June 20, 2025',
    author: 'Your Name',
    category: 'Business',
    image: 'https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Innovation Trends Reshaping Africa',
    excerpt: 'Exploring the technological innovations that are transforming various industries across Africa.',
    date: 'June 12, 2025',
    author: 'Your Name',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Global Supply Chain Challenges and Solutions',
    excerpt: 'How businesses can navigate and overcome the current global supply chain disruptions.',
    date: 'June 5, 2025',
    author: 'Your Name',
    category: 'Global',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
  };
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index }) => {
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
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-sm font-medium py-1 px-3 rounded">
          {blog.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{blog.author}</span>
          </div>
        </div>
        
        <Link to={`/blog/${blog.id}`} className="block">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
        
        <Link to={`/blog/${blog.id}`} className="inline-flex items-center text-primary font-medium hover:text-primary-light transition-colors">
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.article>
  );
};

const LatestBlogs: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, insights, and news from Ghana, Africa, and around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/blog" className="btn btn-outline py-3 px-8 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;