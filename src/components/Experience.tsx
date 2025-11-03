import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Software Developer',
      organization: 'CuboSquare',
      period: 'Jun 2022 – Sep 2022',
      description: [
        'Developed and maintained web applications using MERN stack',
        'Collaborated with cross-functional teams to improve backend efficiency',
        'Optimized database performance, reducing query execution time by 30%',
        'Implemented authentication and security best practices'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech in Computer Science',
      organization: 'University',
      period: '2020 – 2024',
      description: [
        'Strong background in software development',
        'Practical expertise in web application design',
        'Focus on Data Structures & Algorithms',
        'Object-Oriented Programming principles'
      ],
      color: 'from-blue-500 to-violet-500'
    },
    {
      type: 'internship',
      icon: Briefcase,
      title: 'Java Full Stack Developer Intern',
      organization: 'Code Alpha',
      period: '2024',
      description: [
        'Gained hands-on experience in Java full stack development',
        'Worked with Spring Boot and React.js',
        'Developed enterprise-level applications',
        'Remote collaboration with development team'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      type: 'internship',
      icon: Briefcase,
      title: 'Java Programming Intern',
      organization: 'CODSOFT',
      period: '2024',
      description: [
        'Completed Java programming training',
        'Focused on DSA and OOP concepts',
        'Built multiple development projects',
        'Strengthened core programming skills'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'certification',
      icon: Award,
      title: 'Certified Java Developer',
      organization: 'Codeforsuccess',
      period: '2024',
      description: [
        'Advanced proficiency in Java',
        'Spring Framework expertise',
        'Enterprise development certification',
        'Industry-recognized credential'
      ],
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-cyan-400 font-medium mb-1">{item.organization}</p>
                          <p className="text-gray-400 text-sm">{item.period}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} ring-4 ring-gray-900`}></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Achievements & Leadership</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                40%
              </div>
              <p className="text-gray-300 text-sm">Performance Improvement</p>
              <p className="text-gray-400 text-xs mt-2">Across multiple projects</p>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                70%+
              </div>
              <p className="text-gray-300 text-sm">Test Coverage</p>
              <p className="text-gray-400 text-xs mt-2">Zero critical bugs in production</p>
            </div>
            <div className="text-center p-4 bg-violet-500/10 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <p className="text-gray-300 text-sm">Team Collaboration</p>
              <p className="text-gray-400 text-xs mt-2">Developers using Agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
