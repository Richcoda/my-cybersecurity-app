// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-4">Protect Your Digital World</h2>
        <p className="text-2xl mb-8">Advanced Cybersecurity Solutions for Private Business <span>Emails</span></p>
        <a 
          href="https://view.richtonparks.com/KDJEDK" 
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
