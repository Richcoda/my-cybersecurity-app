// src/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">"SecureNet transformed our cybersecurity approach!"</p>
            <p className="font-semibold">- John Doe, CEO TechCorp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">"Incredible protection and support!"</p>
            <p className="font-semibold">- Jane Smith, CTO InnovateSoft</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">"The most reliable security partner we've worked with."</p>
            <p className="font-semibold">- Mike Johnson, Founder StartupShield</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
