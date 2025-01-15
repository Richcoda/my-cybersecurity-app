// src/components/Footer.tsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-blue-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="#" className="hover:text-blue-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="hover:text-blue-300">
            <FaGithub className="text-2xl" />
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p>&copy; 2025 SecureNet. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
