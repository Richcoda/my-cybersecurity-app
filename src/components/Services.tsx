// src/components/Services.tsx
import React from 'react';
import { FaLock, FaUserShield, FaShieldAlt } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <FaLock className="text-4xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-4">Network Security</h3>
            <p>Comprehensive protection for your network infrastructure</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <FaUserShield className="text-4xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
            <p>Advanced monitoring and real-time threat identification</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <FaShieldAlt className="text-4xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-4">Consulting</h3>
            <p>Expert cybersecurity strategy and risk management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
