// src/components/Header.tsx
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <FaShieldAlt className="text-3xl mr-2" />
          <h1 className="text-2xl font-bold">SecureNet</h1>
        </div>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#services" className="hover:text-blue-200">Services</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </nav>
        <div className="space-x-2">
          <a href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">Login</a>
          <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
