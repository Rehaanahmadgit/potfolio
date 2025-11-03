import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .send(
      'service_gvsygr6',   // ✅ Your Service ID
      'template_n9xg10d',  // ✅ Your Template ID
      formData,
      'UMjPH0JxcoCYX3Eua'  // ✅ Your Public Key
    )
    .then(
      () => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 3000);
      },
      (error) => {
        console.error('FAILED...', error.text);
        setIsSubmitting(false);
      }
    );
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/rehaan-ahmad-11b228249/', color: 'from-blue-500 to-blue-600' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/Rehaanahmadgit', color: 'from-gray-600 to-gray-700' },
    { icon: Mail, label: 'Email', url: 'mailto:rehaansufyaan1@gmail.com', color: 'from-cyan-500 to-blue-500' },
    { icon: Phone, label: 'Phone', url: 'tel:+917985203119', color: 'from-violet-500 to-purple-500' }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-cyan-400 font-medium">rehaansufyaan1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-cyan-400 font-medium">+91-7985203119</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:scale-105"
                    >
                      <div className={`p-2 bg-gradient-to-r ${social.color} rounded-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Additional Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-cyan-400">Languages:</span> Hindi, English, Urdu, Arabic</p>
                <p><span className="text-cyan-400">Interests:</span> Competitive Programming, System Design, Open Source</p>
                <p><span className="text-cyan-400">Location:</span> Remote / Available for Relocation</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <p className="text-green-400 font-medium">Message sent successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 outline-none ${
                    focusedField === 'name'
                      ? 'border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-gray-600 hover:border-cyan-500/50'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 outline-none ${
                    focusedField === 'email'
                      ? 'border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-gray-600 hover:border-cyan-500/50'
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'message'
                      ? 'border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-gray-600 hover:border-cyan-500/50'
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
