import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, Calendar } from 'lucide-react';

// Mock data - in a real app this would come from an API
const featuredVideos = [
  {
    id: 1,
    title: 'How to Scale Your Business in Africa',
    duration: '12:45',
    date: 'June 15, 2025',
    thumbnail: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube'
  },
  {
    id: 2,
    title: 'Innovation and Entrepreneurship in Ghana',
    duration: '18:30',
    date: 'May 28, 2025',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube'
  },
  {
    id: 3,
    title: 'Problem-Solving Techniques for Entrepreneurs',
    duration: '15:20',
    date: 'April 10, 2025',
    thumbnail: 'https://images.pexels.com/photos/8867426/pexels-photo-8867426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'YouTube'
  }
];

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    duration: string;
    date: string;
    thumbnail: string;
    platform: string;
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
          <Link to={`/media/videos/${video.id}`} className="p-4 bg-primary/80 text-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <PlayCircle size={40} />
          </Link>
        </div>
        
        <div className="absolute top-3 right-3 bg-secondary text-white text-sm py-1 px-2 rounded">
          {video.platform}
        </div>
        
        <div className="absolute bottom-3 left-3 flex items-center text-white text-sm">
          <Clock size={16} className="mr-1" />
          <span>{video.duration}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <Link to={`/media/videos/${video.id}`}>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
        </Link>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar size={16} className="mr-1" />
          <span>{video.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedMedia: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Media Content</h2>
          <p className="text-gray-600 text-lg">
            Watch my latest videos on entrepreneurship, innovation, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/media" className="btn btn-outline py-3 px-8 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors">
            View All Media
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;