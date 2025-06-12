import React, { useEffect, useRef } from 'react';
import { Heart, Search, Lightbulb, Palette, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      number: '01',
      title: 'Empathize',
      description: 'Understanding user needs, pain points, and motivations through research, interviews, and observation.',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      number: '02',
      title: 'Define',
      description: 'Synthesizing research insights to clearly articulate the problem and establish design goals.',
      icon: Search,
      color: 'text-blue-600'
    },
    {
      number: '03',
      title: 'Ideate',
      description: 'Generating creative solutions through brainstorming, sketching, and exploring diverse concepts.',
      icon: Lightbulb,
      color: 'text-yellow-600'
    },
    {
      number: '04',
      title: 'Design',
      description: 'Creating wireframes, prototypes, and high-fidelity designs that bring ideas to life.',
      icon: Palette,
      color: 'text-green-600'
    },
    {
      number: '05',
      title: 'Test',
      description: 'Validating designs through user testing, gathering feedback, and iterating based on insights.',
      icon: TestTube,
      color: 'text-purple-600'
    },
    {
      number: '06',
      title: 'Deliver',
      description: 'Finalizing designs, creating documentation, and collaborating with developers for implementation.',
      icon: Rocket,
      color: 'text-orange-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const stepElements = entry.target.querySelectorAll('.process-step');
            stepElements.forEach((step, stepIndex) => {
              setTimeout(() => {
                step.classList.add('animate-in', 'slide-in-from-left-4', 'fade-in');
              }, stepIndex * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My systematic approach to solving design challenges, ensuring every solution 
              is user-centered and strategically aligned.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="process-step opacity-0 translate-x-4"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-2 flex items-center space-x-4 lg:space-x-0 lg:flex-col lg:space-y-4">
                      <div className="text-4xl lg:text-6xl font-bold text-gray-200">
                        {step.number}
                      </div>
                      <div className={`p-4 bg-white rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow duration-200`}>
                        <IconComponent size={32} className={step.color} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10 space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block ml-16 mt-8 mb-4">
                      <div className="w-px h-16 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-gray-600 mb-6">
              Ready to see this process in action?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerHeight = 80;
                  const targetPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;