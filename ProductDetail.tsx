import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  Star,
  ChevronRight,
  MinusCircle,
  PlusCircle,
  PackageCheck,
  Truck,
  RefreshCw
} from 'lucide-react';

// Mock data - in a real app this would come from an API
const products = [
  {
    id: 1,
    title: 'Smart Business Solution',
    description: 'An all-in-one business management tool for entrepreneurs',
    longDescription: `This comprehensive business management solution is designed specifically for entrepreneurs in Africa. It combines powerful tools for inventory management, customer relationship management, financial tracking, and business analytics.

The Smart Business Solution helps you streamline operations, make data-driven decisions, and scale your business efficiently. It's fully customizable to meet the specific needs of your industry and business size.

Key features include:
- Real-time inventory tracking and management
- Customer relationship management with insights
- Financial reporting and analysis
- Business performance dashboard
- Mobile app for on-the-go management
- Cloud-based storage with secure backups
- Seamless integration with popular payment systems
- Multi-user access with role-based permissions`,
    price: 299.99,
    image: 'https://images.pexels.com/photos/7947931/pexels-photo-7947931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/7947931/pexels-photo-7947931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Software',
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    title: 'Premium Consultation Package',
    description: 'Strategic business consulting tailored to your needs',
    longDescription: `The Premium Consultation Package offers comprehensive strategic guidance for businesses looking to establish or expand their presence in African markets.

With over 15 years of experience in diverse industries across the continent, I provide personalized insights and strategies that address your specific challenges and opportunities.

This package includes:
- Initial business assessment and SWOT analysis
- Market entry or expansion strategy development
- Competitor analysis and positioning recommendations
- Business model optimization
- Revenue growth strategies
- Operational efficiency recommendations
- Three months of implementation support and follow-up
- Priority access for ongoing consultations

Each consultation is fully customized to your industry, business size, and goals. You'll receive actionable recommendations and a detailed roadmap for implementation.`,
    price: 499.99,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Services',
    rating: 4.9,
    reviews: 87,
    inStock: true
  }
];

// Mock related products
const relatedProducts = [
  {
    id: 3,
    title: 'Entrepreneur Masterclass',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Education'
  },
  {
    id: 4,
    title: 'Exclusive Business Guide',
    price: 59.99,
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Books'
  },
  {
    id: 5,
    title: 'Innovation Workshop',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Education'
  }
];

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    // Simulate API call to fetch product details
    setLoading(true);
    setTimeout(() => {
      const foundProduct = products.find(p => p.id.toString() === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.gallery[0]);
        document.title = `${foundProduct.title} | Shop`;
      }
      setLoading(false);
    }, 300);
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link to="/shop" className="text-gray-500 hover:text-primary">Shop</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-700 font-medium">{product.title}</span>
          </nav>

          {/* Product Details */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
              {/* Product Images */}
              <div>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={selectedImage} 
                    alt={product.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {product.gallery.map((image: string, index: number) => (
                    <div 
                      key={index}
                      className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                        selectedImage === image ? 'border-primary' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} - view ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <div className="mb-2 flex items-center">
                  <span className="bg-primary text-white text-sm font-medium py-1 px-3 rounded">
                    {product.category}
                  </span>
                  <div className="ml-auto flex items-center">
                    <div className="flex items-center text-yellow-500 mr-1">
                      <Star size={16} fill="currentColor" />
                    </div>
                    <span className="text-gray-600 text-sm">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.inStock ? (
                    <span className="ml-4 inline-flex items-center text-sm font-medium text-success">
                      <Check size={16} className="mr-1" /> In Stock
                    </span>
                  ) : (
                    <span className="ml-4 text-sm font-medium text-red-500">Out of Stock</span>
                  )}
                </div>
                
                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <div className="flex items-center mb-6">
                    <span className="mr-4 font-medium">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={decrementQuantity}
                        className="p-2 text-gray-500 hover:text-primary focus:outline-none"
                        disabled={quantity <= 1}
                      >
                        <MinusCircle size={20} />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 text-center border-0 focus:outline-none"
                        min="1"
                      />
                      <button 
                        onClick={incrementQuantity}
                        className="p-2 text-gray-500 hover:text-primary focus:outline-none"
                      >
                        <PlusCircle size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="btn btn-primary py-3 px-8 flex-grow sm:flex-grow-0">
                      <ShoppingCart size={20} className="mr-2" /> Add to Cart
                    </button>
                    <button className="btn bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 p-3 sm:p-3">
                      <Heart size={20} />
                    </button>
                    <button className="btn bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 p-3 sm:p-3">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <PackageCheck size={20} className="mr-2 text-primary" />
                    <span>Free updates for 12 months</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Truck size={20} className="mr-2 text-primary" />
                    <span>Digital delivery within 24 hours</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <RefreshCw size={20} className="mr-2 text-primary" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-t border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  className={`px-8 py-4 font-medium text-sm border-b-2 ${
                    activeTab === 'description' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`px-8 py-4 font-medium text-sm border-b-2 ${
                    activeTab === 'features' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button
                  className={`px-8 py-4 font-medium text-sm border-b-2 ${
                    activeTab === 'reviews' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({product.reviews})
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                {activeTab === 'description' && (
                  <div className="prose max-w-none">
                    {product.longDescription.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.longDescription.match(/- (.*?)(?=\n|$)/g)?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <Check size={20} className="text-success flex-shrink-0 mr-2 mt-1" />
                          <span>{feature.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center text-yellow-500 mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={24} 
                            fill={star <= Math.floor(product.rating) ? 'currentColor' : 'none'} 
                            className={star <= Math.floor(product.rating) ? '' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold">{product.rating}</span>
                      <span className="text-gray-500 ml-2">based on {product.reviews} reviews</span>
                    </div>
                    
                    <p className="text-gray-500 italic">Reviews would be displayed here in a real implementation.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                  <Link to={`/shop/${item.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetail;