import React from 'react';
import { Figma, Palette, Zap, Users, Eye, Target } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'Figma', icon: Figma },
    { name: 'Design Systems', icon: Palette },
    { name: 'Prototyping', icon: Zap },
    { name: 'User Research', icon: Users },
    { name: 'Visual Design', icon: Eye },
    { name: 'Strategy', icon: Target }
  ];

  const skills = [
    'User Experience Design',
    'Interface Design',
    'Design Systems',
    'Prototyping',
    'User Research',
    'Visual Identity',
    'Typography',
    'Color Theory'
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hi, I'm Venkatesh Bonam — a UI/UX & Graphic Designer based in Hyderabad, India. 
                  I specialize in crafting clean, intentional interfaces that focus on clarity and usability.
                </p>
                <p>
                  With 2 years of experience, I've worked across AI, e-commerce, fitness, and automation projects. 
                  My approach combines strategic thinking with aesthetic execution, ensuring every design decision 
                  serves both user needs and business goals.
                </p>
                <p>
                  I believe great design is invisible—it feels natural, removes friction, and creates 
                  meaningful connections between people and technology.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-700 text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Expertise */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Tools & Expertise</h3>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent 
                          size={24} 
                          className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200" 
                        />
                        <span className="font-medium text-gray-900">{tool.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white p-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600 mt-1">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;