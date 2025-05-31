import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 md:p-12 max-w-md">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center py-3 px-6 text-lg"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;