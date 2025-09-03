
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Docs
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Pricing
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Terms
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; 2024 Adaline Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
