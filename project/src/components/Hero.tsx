import React from 'react';
import { ArrowDown, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Venkatesh
                <br />
                <span className="text-gray-600">Bonam</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                  UI/UX & Graphic Designer
                </p>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  Designing intuitive experiences that feel simple, look elegant, and work beautifully.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-200 group"
                data-action="view-work"
              >
                View Work
                <ExternalLink size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-900 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com/in/venkateshbonam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://behance.net/venkateshbonam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:venkatesh@example.com"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Venkatesh Bonam"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;