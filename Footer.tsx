import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin,
  Send 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Newsletter */}
        <div className="py-10 border-b border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-gray-300">Subscribe to my newsletter for the latest updates, insights, and exclusive content.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button 
                  type="submit" 
                  className="btn bg-primary hover:bg-primary-light flex items-center justify-center px-6"
                >
                  <span>Subscribe</span>
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h4 className="font-bold text-xl mb-4">About</h4>
            <p className="text-gray-400 mb-4">
              Entrepreneur, inventor, and problem-solver dedicated to creating innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/media" className="text-gray-400 hover:text-white transition-colors">Media</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Business */}
          <div>
            <h4 className="font-bold text-xl mb-4">Business</h4>
            <ul className="space-y-2">
              <li><Link to="/shop/category/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/shop/category/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link to="/investments" className="text-gray-400 hover:text-white transition-colors">Investment Opportunities</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h4 className="font-bold text-xl mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6 text-center text-gray-400">
          <p>&copy; {currentYear} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;