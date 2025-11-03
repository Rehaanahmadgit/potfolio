import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  date: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'AI Fitness Tracker',
      description: 'AI-powered fitness tracking application with microservices architecture',
      longDescription: 'Built an AI-powered fitness tracking application using a microservices architecture for scalability and performance. Integrated Gemini API for intelligent activity recognition and personalized workout recommendations.',
      tech: ['Spring Boot', 'Gemini API', 'MySQL', 'MongoDB', 'PostgreSQL', 'Keycloak', 'Microservices'],
      features: [
        'Microservices architecture for scalability',
        'AI-powered activity recognition',
        'Personalized workout recommendations',
        'Secure authentication with Keycloak',
        'Multi-database support'
      ],
      date: 'Oct 2025',
      image: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration',
      longDescription: 'Developed a full-stack e-commerce application using Spring Boot and Thymeleaf for dynamic, server-side rendering. Implemented secure user authentication, product management, and payment integration.',
      tech: ['Spring Boot', 'Thymeleaf', 'MySQL', 'RESTful APIs'],
      features: [
        'Secure user authentication',
        'Product catalog management',
        'Shopping cart functionality',
        'Payment gateway integration',
        'Responsive UI with Thymeleaf',
        'Optimized database queries'
      ],
      date: 'Feb 2025',
      image: 'bg-gradient-to-br from-blue-500/20 to-violet-500/20',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Online Library Management',
      description: 'Java-based library management system with comprehensive features',
      longDescription: 'Developed a Java-based library management system for book cataloging, member management, and loan tracking. Implemented using Spring Boot and Hibernate with MySQL database.',
      tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
      features: [
        'Book cataloging and search',
        'Member management system',
        'Loan tracking and due dates',
        'User authentication',
        'Reporting functionalities',
        'Agile development methodology'
      ],
      date: 'Mar 2024',
      image: 'bg-gradient-to-br from-violet-500/20 to-purple-500/20',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'MERN Stack Web App',
      description: 'Web application built with MongoDB, Express, React, and Node.js',
      longDescription: 'Developed and maintained web applications using MERN stack during internship at CuboSquare. Optimized database performance and implemented security best practices.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      features: [
        'Full MERN stack implementation',
        'RESTful API architecture',
        '30% improved query performance',
        'Authentication and authorization',
        'Secure data handling',
        'Cross-functional collaboration'
      ],
      date: 'Jun 2022 - Sep 2022',
      image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 border border-cyan-500/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-cyan-500/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-300 hover:text-cyan-400" />
            </button>

            <div className={`h-64 ${selectedProject.image} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{selectedProject.title.charAt(0)}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <span className="text-sm text-gray-400">{selectedProject.date}</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/30 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
