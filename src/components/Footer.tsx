import React from 'react';
import { Github, BookOpen, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:anandkumar57007@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/anandkumar',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/anandkumar',
      label: 'GitHub'
    },
    {
      icon: BookOpen,
      href: 'https://scholar.google.com/citations?user=anandkumar',
      label: 'Google Scholar'
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-3">
                <h3 className="text-base font-bold mb-1">
                  Anand <span className="text-blue-400">| AI Scientist</span>
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-md text-xs">
                  Principal AI Scientist specializing in medical imaging, deep learning, 
                  and vision-language models for healthcare applications.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label={link.label}
                    >
                      <IconComponent size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Research Areas */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold mb-2">Research Focus</h4>
              <div className="grid grid-cols-2 gap-0.5 text-slate-400 text-xs">
                <div>Deep Learning</div>
                <div>Medical Imaging</div>
                <div>Vision-Language Models</div>
                <div>Clinical AI</div>
                <div>Bias Mitigation</div>
                <div>Model Evaluation</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 mb-2 md:mb-0 text-xs">
                © {currentYear} Anand. All rights reserved.
              </div>
              
              <div className="text-slate-400 text-xs">
                Advancing AI in healthcare through research and innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;