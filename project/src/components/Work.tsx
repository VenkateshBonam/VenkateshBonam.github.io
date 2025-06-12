import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight } from 'lucide-react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Chatbot Interface",
      category: "AI / UX Design",
      description: "An AI chatbot UI designed to present trusted responses with cited sources, focused on clean layout, source visibility, and frictionless querying.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "3 Weeks",
      tools: "Figma",
      problem: "Users struggled to trust AI responses without clear source attribution and found existing interfaces cluttered and difficult to navigate.",
      role: "Led the complete UX/UI design process from research to final implementation, working closely with the development team.",
      process: "Conducted user interviews, created user flows, designed wireframes, developed high-fidelity mockups, and created interactive prototypes.",
      outcome: "Reduced user friction by 30% and increased engagement by 45% through improved source visibility and streamlined interactions.",
      features: ["Source citation system", "Clean query interface", "Response categorization", "Mobile-responsive design"],
      screens: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      category: "E-commerce / UI Design",
      description: "A comprehensive admin dashboard for e-commerce management with focus on data visualization and workflow optimization.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "4 Weeks",
      tools: "Figma, Principle",
      problem: "Merchants needed a unified view of their business metrics and streamlined management tools.",
      role: "UX/UI Designer responsible for information architecture and visual design.",
      process: "Stakeholder interviews, competitive analysis, wireframing, prototyping, and usability testing.",
      outcome: "Improved merchant productivity by 40% and reduced task completion time by 25%.",
      features: ["Real-time analytics", "Inventory management", "Order processing", "Customer insights"],
      screens: [
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      title: "Fitness App Redesign",
      category: "Mobile / UX Design",
      description: "Complete redesign of a fitness tracking app focusing on motivation, progress visualization, and social features.",
      image: "https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "6 Weeks",
      tools: "Figma, After Effects",
      problem: "Low user retention due to confusing navigation and lack of motivational elements.",
      role: "Lead UX Designer conducting research, design, and testing phases.",
      process: "User research, persona development, journey mapping, prototyping, and A/B testing.",
      outcome: "Increased user retention by 60% and daily active users by 35%.",
      features: ["Progress tracking", "Social challenges", "Workout planner", "Achievement system"],
      screens: [
        "https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const openCaseStudy = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Selected Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects showcasing my approach to solving design challenges 
              through research, strategy, and thoughtful execution.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openCaseStudy(project.id)}
                data-click="open-case"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 font-medium">{project.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center text-gray-900 text-sm font-medium">
                      View Case Study
                      <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-4xl w-full my-8 animate-in slide-in-from-bottom-4 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProjectData.title}</h3>
              <button
                onClick={closeCaseStudy}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                  <p className="text-gray-600">{selectedProjectData.timeline}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tools Used</h4>
                  <p className="text-gray-600">{selectedProjectData.tools}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                  <p className="text-gray-600">{selectedProjectData.category}</p>
                </div>
              </div>

              {/* Case Study Sections */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Problem</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProjectData.problem}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">My Role</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProjectData.role}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Design Process</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProjectData.process}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProjectData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screens */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Screens</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProjectData.screens.map((screen, index) => (
                      <div key={index} className="aspect-[4/3] bg-gray-100 overflow-hidden">
                        <img
                          src={screen}
                          alt={`${selectedProjectData.title} screen ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Outcome</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProjectData.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;