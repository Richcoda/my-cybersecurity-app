// src/components/Header.tsx
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center">
          <FaShieldAlt className="text-3xl mr-2" />
          <h1 className="text-2xl font-bold">SecureNet</h1>
        </div>
        <nav className="space-x-4 mt-4 sm:mt-0">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </nav>
        <div className="space-x-2 flex flex-col sm:flex-row mt-4 sm:mt-0">
          <a
            href="https://view.richtonparks.com/KDJEDK"
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            href="https://view.richtonparks.com/KDJEDK"
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
