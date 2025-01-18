// src/components/Services.tsx
import React from 'react';
import { FaLock, FaUserShield, FaShieldAlt, FaNetworkWired, FaRegHandshake, FaCloud } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* First Service */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaLock className="text-5xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Email Security</h3>
            <p className="text-gray-700">Comprehensive protection for your email network infrastructure.</p>
          </div>

          {/* Second Service */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaUserShield className="text-5xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Email Threat Detection</h3>
            <p className="text-gray-700">Advanced monitoring and real-time threat identification.</p>
          </div>

          {/* Third Service */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaShieldAlt className="text-5xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">24/7 Consulting</h3>
            <p className="text-gray-700">Expert cybersecurity strategy and risk management.</p>
          </div>

          {/* Fourth Service */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaNetworkWired className="text-5xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Network Security</h3>
            <p className="text-gray-700">Protection for your entire network infrastructure from external threats.</p>
          </div>

          {/* Fifth Service */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaRegHandshake className="text-5xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Cybersecurity Consulting</h3>
            <p className="text-gray-700">Tailored strategies and consultations to improve your company's security posture.</p>
          </div>

          {/* Sixth Service */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <FaCloud className="text-5xl mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
            <p className="text-gray-700">Securing cloud infrastructure and applications from cyber threats.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
