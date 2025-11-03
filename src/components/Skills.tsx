import { useState } from 'react';
import { Code, Database, Server, Globe, Terminal, Package } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-blue-500 to-violet-500',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'RESTful APIs', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Hibernate', level: 80 }
      ]
    },
    {
      icon: Terminal,
      title: 'Languages',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'C', level: 70 }
      ]
    },
    {
      icon: Package,
      title: 'Tools & Platforms',
      color: 'from-pink-500 to-red-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Maven', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'Kafka', level: 70 }
      ]
    },
    {
      icon: Globe,
      title: 'Concepts',
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'DSA', level: 85 },
        { name: 'OOP', level: 90 },
        { name: 'Microservices', level: 80 },
        { name: 'System Design', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={catIndex}
                className="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-xs font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full ${
                            hoveredSkill === `${catIndex}-${skillIndex}` ? 'animate-pulse' : ''
                          }`}
                          style={{
                            width: hoveredSkill === `${catIndex}-${skillIndex}` ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
