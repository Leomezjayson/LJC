import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/common/PageTransition';
import { Youtube, Instagram, Facebook, Twitter, Atom as Tiktok, Linkedin, Search, Filter, PlayCircle, Clock, Calendar } from 'lucide-react';

// Mock data - in a real app this would come from an API
const videos = [
  {
    id: 1,
    title: 'How to Scale Your Business in Africa',
    duration: '12:45',
    date: 'June 15, 2025',
    thumbnail: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube',
    category: 'Business'
  },
  {
    id: 2,
    title: 'Innovation and Entrepreneurship in Ghana',
    duration: '18:30',
    date: 'May 28, 2025',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube',
    category: 'Entrepreneurship'
  },
  {
    id: 3,
    title: 'Problem-Solving Techniques for Entrepreneurs',
    duration: '15:20',
    date: 'April 10, 2025',
    thumbnail: 'https://images.pexels.com/photos/8867426/pexels-photo-8867426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube',
    category: 'Skills'
  },
  {
    id: 4,
    title: 'Understanding African Markets: Opportunities and Challenges',
    duration: '22:15',
    date: 'March 5, 2025',
    thumbnail: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube',
    category: 'Markets'
  },
  {
    id: 5,
    title: 'Sustainable Business Practices in Developing Economies',
    duration: '19:30',
    date: 'February 18, 2025',
    thumbnail: 'https://images.pexels.com/photos/3943726/pexels-photo-3943726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube',
    category: 'Sustainability'
  },
  {
    id: 6,
    title: 'Tech Solutions for Common African Business Challenges',
    duration: '16:45',
    date: 'January 20, 2025',
    thumbnail: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube',
    category: 'Technology'
  }
];

const categories = ['All', 'Business', 'Entrepreneurship', 'Technology', 'Skills', 'Markets', 'Sustainability'];
const platforms = ['All', 'YouTube', 'Instagram', 'Facebook', 'TikTok', 'LinkedIn'];

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    duration: string;
    date: string;
    thumbnail: string;
    platform: string;
    category: string;
  };
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
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
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a href="#" className="p-4 bg-primary/80 text-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <PlayCircle size={40} />
          </a>
        </div>
        
        <div className="absolute top-3 right-3 bg-secondary text-white text-sm py-1 px-2 rounded">
          {video.platform}
        </div>

        <div className="absolute top-3 left-3 bg-primary text-white text-sm py-1 px-2 rounded">
          {video.category}
        </div>
        
        <div className="absolute bottom-3 left-3 flex items-center text-white text-sm">
          <Clock size={16} className="mr-1" />
          <span>{video.duration}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <a href="#" className="block">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
        </a>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar size={16} className="mr-1" />
          <span>{video.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const SocialMediaCard: React.FC<{
  platform: string;
  icon: React.ReactNode;
  color: string;
  url: string;
  followers: string;
}> = ({ platform, icon, color, url, followers }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${color}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 text-white">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{platform}</h3>
            <p className="text-white/80 text-sm">{followers} followers</p>
          </div>
        </div>
        <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="sr-only">View {platform}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

const Media: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePlatform, setActivePlatform] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  
  useEffect(() => {
    document.title = "Media | Your Name";
  }, []);

  // Filter videos based on active category, platform, and search term
  useEffect(() => {
    let result = videos;
    
    if (activeCategory !== 'All') {
      result = result.filter(video => video.category === activeCategory);
    }
    
    if (activePlatform !== 'All') {
      result = result.filter(video => video.platform === activePlatform);
    }
    
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        video => video.title.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredVideos(result);
  }, [activeCategory, activePlatform, searchTerm]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>

        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore my videos, social media content, and multimedia resources on entrepreneurship, innovation, and business.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Connect on Social Media</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SocialMediaCard 
              platform="YouTube" 
              icon={<Youtube size={32} />} 
              color="bg-red-600" 
              url="#" 
              followers="120K" 
            />
            <SocialMediaCard 
              platform="Instagram" 
              icon={<Instagram size={32} />} 
              color="bg-gradient-to-r from-purple-500 to-pink-500" 
              url="#" 
              followers="85K" 
            />
            <SocialMediaCard 
              platform="Facebook" 
              icon={<Facebook size={32} />} 
              color="bg-blue-600" 
              url="#" 
              followers="65K" 
            />
            <SocialMediaCard 
              platform="Twitter" 
              icon={<Twitter size={32} />} 
              color="bg-sky-500" 
              url="#" 
              followers="42K" 
            />
            <SocialMediaCard 
              platform="TikTok" 
              icon={<Tiktok size={32} />} 
              color="bg-black" 
              url="#" 
              followers="50K" 
            />
            <SocialMediaCard 
              platform="LinkedIn" 
              icon={<Linkedin size={32} />} 
              color="bg-blue-700" 
              url="#" 
              followers="38K" 
            />
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Featured Videos</h2>
          
          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-gray-500 whitespace-nowrap">Category:</span>
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
                
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                  <span className="text-gray-500 whitespace-nowrap">Platform:</span>
                  <select 
                    value={activePlatform} 
                    onChange={(e) => setActivePlatform(e.target.value)}
                    className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl text-gray-700 mb-2">No videos found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Media;