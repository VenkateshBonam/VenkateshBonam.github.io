import React, { useState } from 'react';
import { Mail, Linkedin, ExternalLink, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 30) {
      newErrors.message = 'Message must be at least 30 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle size={64} className="text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Thank You!</h2>
            <p className="text-xl text-gray-600">
              Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Let's Create Something Amazing Together
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Have a project in mind? I'd love to hear about it. Whether you're looking 
                  for a complete design solution or just want to discuss ideas, I'm here to help.
                </p>
                <p>
                  I work with startups, established companies, and individuals who value 
                  thoughtful design and user-centered solutions.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:venkatesh@example.com"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Mail size={20} className="mr-3" />
                  venkatesh@example.com
                </a>
                <a
                  href="https://linkedin.com/in/venkateshbonam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Linkedin size={20} className="mr-3" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://behance.net/venkateshbonam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-3" />
                  Behance Portfolio
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="pt-8 border-t border-gray-200">
              <blockquote className="text-xl italic text-gray-600">
                "Good design is invisible—but unforgettable."
              </blockquote>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-mono text-sm`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-mono text-sm`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-mono text-sm resize-none`}
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                <p className="mt-1 text-xs text-gray-500">Minimum 30 characters</p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Let's Collaborate
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;