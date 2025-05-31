import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import { 
  Calendar, 
  User, 
  Tag, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageSquare,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// Mock data - in a real app this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of E-commerce in Ghana',
    excerpt: 'An analysis of the growing e-commerce landscape in Ghana and opportunities for entrepreneurs.',
    content: `The e-commerce landscape in Ghana has undergone significant transformation in recent years, with the sector poised for exponential growth in the coming decade. As internet penetration continues to increase and smartphone adoption rises, more Ghanaians are embracing online shopping as a convenient alternative to traditional retail.

This shift represents a tremendous opportunity for entrepreneurs and businesses looking to establish or expand their digital presence. However, success in this evolving market requires a deep understanding of local consumer behaviors, infrastructure challenges, and regulatory considerations.

## Market Growth and Potential

Ghana's e-commerce sector has been growing at an impressive rate of approximately 25% annually, outpacing many other industries. Several factors are driving this growth:

1. **Increasing internet penetration**: Currently at around 50% and rising steadily
2. **Growing smartphone adoption**: With over 70% of adults now owning a smartphone
3. **Expanding middle class**: Creating a larger consumer base with disposable income
4. **Improved payment infrastructure**: Including mobile money solutions and fintech innovations
5. **Changing consumer preferences**: Particularly among younger, tech-savvy demographics

The COVID-19 pandemic accelerated this trend, pushing many consumers to try online shopping for the first time and forcing businesses to establish digital sales channels. This momentum has largely continued even as physical retail has reopened.

## Key Challenges and Solutions

Despite its promising trajectory, Ghana's e-commerce sector faces several challenges that entrepreneurs must navigate:

### Logistics and Delivery

The lack of standardized addressing systems in many areas makes last-mile delivery complicated. Successful e-commerce businesses are overcoming this through:

- Partnerships with specialized logistics providers
- Creating pickup points in convenient locations
- Developing innovative addressing solutions using GPS coordinates
- Building in-house delivery teams for urban areas

### Payment Solutions

While cash-on-delivery remains popular, digital payment adoption is increasing rapidly:

- Mobile money services like MTN Mobile Money have revolutionized transactions
- Integration with multiple payment options is becoming standard
- Trust-building mechanisms like escrow services are gaining traction
- Buy-now-pay-later options are emerging for higher-ticket items

### Consumer Trust

Building consumer confidence remains critical:

- Transparent return policies
- Authentic customer reviews
- Product quality guarantees
- Secure payment processing
- Professional website design and user experience

## Emerging Business Models

Several e-commerce business models are showing particular promise in the Ghanaian context:

1. **Marketplace platforms**: Connecting multiple sellers with buyers
2. **Direct-to-consumer brands**: Particularly in fashion, beauty and home goods
3. **Subscription services**: For essentials and specialty products
4. **Social commerce**: Leveraging platforms like Instagram and WhatsApp for sales
5. **Omnichannel approaches**: Blending physical and digital retail experiences

## Future Outlook and Recommendations

The future of e-commerce in Ghana looks exceptionally bright, with several trends likely to shape its evolution:

- **Mobile-first experiences** will dominate as most consumers access the internet primarily via smartphones
- **AI and personalization** will enhance the shopping experience
- **Voice commerce** may gain traction as internet connectivity improves
- **Cross-border e-commerce** will expand, connecting Ghanaian consumers to global products
- **Specialized niche markets** will emerge as the ecosystem matures

For entrepreneurs looking to enter or expand in this space, consider these recommendations:

1. Invest in understanding local consumer preferences and behaviors
2. Build mobile-optimized platforms with minimal data requirements
3. Develop strong logistics partnerships or capabilities
4. Integrate multiple secure payment options
5. Focus on building trust through transparency and quality
6. Consider starting with social commerce channels to validate your concept

## Conclusion

Ghana's e-commerce sector stands at an inflection point, with tremendous opportunities for visionary entrepreneurs. Those who can effectively address the unique challenges of this market while delivering exceptional value to consumers will be well-positioned to capture significant market share in this growing digital economy.

By combining innovative solutions with a deep understanding of local context, e-commerce entrepreneurs can not only build successful businesses but also contribute to Ghana's broader digital transformation.`,
    date: 'June 20, 2025',
    author: 'Your Name',
    authorBio: 'Entrepreneur, Inventor, and Business Strategist specializing in African markets and innovation.',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Business',
    tags: ['E-commerce', 'Ghana', 'Entrepreneurship', 'Digital Economy', 'Retail'],
    image: 'https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    commentCount: 12
  }
];

const popularPosts = [
  {
    id: 2,
    title: 'Innovation Trends Reshaping Africa',
    date: 'June 12, 2025',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Global Supply Chain Challenges and Solutions',
    date: 'June 5, 2025',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Sustainable Business Practices for African Entrepreneurs',
    date: 'May 28, 2025',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const BlogDetail: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch blog details
    setLoading(true);
    setTimeout(() => {
      const foundPost = blogPosts.find(p => p.id.toString() === blogId);
      if (foundPost) {
        setPost(foundPost);
        document.title = `${foundPost.title} | Blog`;
      }
      setLoading(false);
    }, 300);
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${post.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center text-sm mb-4 space-x-4">
              <span className="bg-primary py-1 px-3 rounded-full">{post.category}</span>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-10 h-10 rounded-full mr-3 object-cover" 
              />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumbs */}
              <nav className="flex mb-8 text-sm">
                <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
                <ChevronRight size={16} className="mx-2 text-gray-400" />
                <Link to="/blog" className="text-gray-500 hover:text-primary">Blog</Link>
                <ChevronRight size={16} className="mx-2 text-gray-400" />
                <span className="text-gray-700 font-medium">{post.title}</span>
              </nav>
              
              {/* Article Content */}
              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph: string, idx: number) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={idx} className="list-disc pl-6 my-4">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="mb-2">{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.match(/^\d\. /)) {
                    return (
                      <ol key={idx} className="list-decimal pl-6 my-4">
                        {paragraph.split('\n').map((item, i) => {
                          const content = item.replace(/^\d\. /, '');
                          return content ? <li key={i} className="mb-2">{content}</li> : null;
                        })}
                      </ol>
                    );
                  } else {
                    return <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
                  }
                })}
              </div>
              
              {/* Tags */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag size={18} className="text-gray-500" />
                  {post.tags.map((tag: string) => (
                    <Link 
                      key={tag} 
                      to={`/blog?tag=${tag}`}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="mt-8 flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Share:</span>
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook size={18} />
                  </button>
                  <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-24 h-24 rounded-full object-cover" 
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-3">{post.authorBio}</p>
                    <Link to="/about" className="text-primary font-medium hover:text-primary-light inline-flex items-center">
                      More About Me <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Comments Section - Simplified for this example */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-8">
                  Comments <span className="text-gray-500">({post.commentCount})</span>
                </h3>
                
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <MessageSquare size={40} className="mx-auto text-gray-400 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Join the Conversation</h4>
                  <p className="text-gray-600 mb-6">
                    Share your thoughts and insights on this article
                  </p>
                  <button className="btn btn-primary py-3 px-6">
                    Leave a Comment
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Widget */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="font-bold">{post.author}</h3>
                    <p className="text-gray-500 text-sm">Author</p>
                  </div>
                </div>
                <p className="text-gray-600 my-4 text-sm">
                  Entrepreneur, inventor, and problem-solver dedicated to creating innovative solutions.
                </p>
                <Link to="/about" className="btn btn-outline w-full text-center">
                  View Profile
                </Link>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex items-start space-x-3 group">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 object-cover rounded-md" 
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Categories</h3>
                <ul className="space-y-2">
                  {['Business', 'Technology', 'Global', 'Sustainability', 'Finance'].map((category) => (
                    <li key={category}>
                      <Link 
                        to={`/blog?category=${category}`} 
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <span>{category}</span>
                        <ChevronRight size={16} className="text-gray-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags Cloud */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.concat(['Africa', 'Business', 'Innovation', 'Strategy', 'Growth']).map((tag) => (
                    <Link 
                      key={tag} 
                      to={`/blog?tag=${tag}`}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogDetail;