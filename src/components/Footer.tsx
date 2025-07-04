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
          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-4">
            <div className="flex flex-col items-center">
              <div className="text-slate-400 text-xs text-center">
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