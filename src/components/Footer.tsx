import { useState, useEffect } from 'react';
import { ArrowUp, Heart, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/rehaan-ahmad-11b228249/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Rehaanahmadgit', label: 'GitHub' },
    { icon: Mail, url: 'mailto:rehaansufyaan1@gmail.com', label: 'Email' }
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-cyan-500/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Rehaan Ahmad
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Stack Developer passionate about building scalable web applications and solving complex problems.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a
                  href="mailto:Rehaan_Ahmad@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  Rehaan_Ahmad@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                {new Date().getFullYear()} Rehaan Ahmad. All rights reserved.
              </p>

              <p className="flex items-center gap-2 text-gray-400 text-sm">
                Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-110 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
