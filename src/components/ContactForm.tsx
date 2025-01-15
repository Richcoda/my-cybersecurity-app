// src/components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-md border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-md border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded-md border border-gray-300 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
