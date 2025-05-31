import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">YourBrand</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'
            }
          >
            Shop
          </NavLink>
          <NavLink 
            to="/media" 
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'
            }
          >
            Media
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'
            }
          >
            Contact
          </NavLink>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-primary transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-primary transition-colors">
              <User size={20} />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-4 space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
              }
            >
              Shop
            </NavLink>
            <NavLink 
              to="/media" 
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
              }
            >
              Media
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
              }
            >
              Contact
            </NavLink>
            
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
              <Link to="/cart" className="flex items-center text-gray-700 py-2">
                <ShoppingCart size={20} className="mr-2" /> Cart
              </Link>
              <Link to="/account" className="flex items-center text-gray-700 py-2">
                <User size={20} className="mr-2" /> Account
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;