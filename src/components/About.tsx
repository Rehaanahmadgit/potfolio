import { Download } from 'lucide-react';
import rehaanPhoto from '../assets/rehaan.png'; // 👈 Import your local image

export default function About() {
  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Agile Methodologies',
    'Leadership',
    'Communication',
    'Adaptability'
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <img
                  src={rehaanPhoto}
                  alt="Rehaan Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Details */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                B.Tech Candidate in Computer Science with a strong background in software development and practical expertise in web application design. With a creative and resourceful approach, I am eager to contribute my skills to drive organizational success.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                Experienced in building scalable applications with Java, Spring Boot, React.js, and modern web technologies. Passionate about clean code, system design, and performance optimization.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105"
                >
                  <p className="text-cyan-400 font-medium text-center">{skill}</p>
                </div>
              ))}
            </div>

            {/* Resume Download Button */}
            <a
              href="https://drive.google.com/file/d/1XhUa1b72XnhHd9bYfa2E5b-sfa4lKZc5/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
