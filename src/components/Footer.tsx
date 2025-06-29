import React from 'react';
import { Github, BookOpen, Linkedin, Mail, Twitter } from 'lucide-react';

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
      href: 'https://www.linkedin.com/in/anandakumar-d/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/Anandakumar_D25',
      label: 'Twitter'
    },
    {
      icon: Github,
      href: 'https://github.com/Anandakumar-D/',
      label: 'GitHub'
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
                  Anandakumar <span className="text-blue-400">| AI Scientist</span>
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
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 mb-2 md:mb-0 text-xs">
                © {currentYear} Anandakumar. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;