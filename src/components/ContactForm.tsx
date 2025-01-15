// src/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  // State to manage form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();  // Prevent the default form submission behavior
  
    // Show the alert with the user's name
    alert(`Thank you for reaching out, ${name}! We'll get back to you soon.`);
  
    // Reset the form fields (type cast `event.currentTarget` to HTMLFormElement)
    const form = event.currentTarget as HTMLFormElement;
    form.reset();  // Reset form fields to their initial state
  
    // Optionally, reset state manually if you don't want to use form reset
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-md border border-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}  // Update name state on input change
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-md border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Update email state
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded-md border border-gray-300 h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}  // Update message state
              required
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
