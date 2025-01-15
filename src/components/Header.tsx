// src/components/Header.tsx
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
          <FaShieldAlt className="text-3xl mr-2" />
          <h1 className="text-2xl font-bold">SecureNet</h1>
        </div>

        {/* Navigation Links */}
        <nav className="w-full sm:w-auto text-center sm:text-left">
          <div className="space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#home" className="block sm:inline hover:text-blue-200">Home</a>
            <a href="#about" className="block sm:inline hover:text-blue-200">About</a>
            <a href="#services" className="block sm:inline hover:text-blue-200">Services</a>
            <a href="#contact" className="block sm:inline hover:text-blue-200">Contact</a>
          </div>
        </nav>

        {/* Login/SignUp Buttons */}
        <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row mt-4 sm:mt-0">
          <a
            href="https://osspesecuritycenter.com"
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            href="https://osspesecuritycenter.com"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
