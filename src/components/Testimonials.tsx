// src/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        {/* Responsive grid layout with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <p className="mb-4 italic text-lg text-gray-600">"MicrosoftCyberNet transformed our cybersecurity approach!"</p>
            <p className="font-semibold text-xl text-gray-800">- Jake Brennan, CEO TechCorp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <p className="mb-4 italic text-lg text-gray-600">"Incredible protection and support!"</p>
            <p className="font-semibold text-xl text-gray-800">- Sarah Johnson, CTO InnovateSoft</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <p className="mb-4 italic text-lg text-gray-600">"The most reliable security partner we've worked with."</p>
            <p className="font-semibold text-xl text-gray-800">- Emily Davis, Founder StartupShield</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
