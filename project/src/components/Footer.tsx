import React from 'react';
import { Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">Venkatesh Bonam</h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              UI/UX & Graphic Designer creating intuitive experiences that feel simple, 
              look elegant, and work beautifully.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/venkateshbonam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://behance.net/venkateshbonam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:venkatesh@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <nav className="space-y-2">
              {['About', 'Work', 'Process', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      const headerHeight = 80;
                      const targetPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-gray-400">
              <p>UI/UX Design</p>
              <p>Graphic Design</p>
              <p>Design Systems</p>
              <p>Prototyping</p>
              <p>User Research</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Venkatesh Bonam. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            Back to top
            <ArrowUp size={16} className="ml-2 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;