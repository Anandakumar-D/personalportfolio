import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeContext } from './ThemeProvider';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Research' },
  { id: 'blog', label: 'Writings' },
  { id: 'contact', label: 'Contact' }
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionIds = sections.map(s => s.id);
      const scrollPosition = window.scrollY + 200;
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-slate-800' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="text-base font-bold tracking-tight">
            <span className="text-slate-900 dark:text-white">Anandakumar</span>
            <span className="text-blue-600 dark:text-blue-400 ml-2 font-light">| AI Scientist</span>
          </div>
          <div className="flex-1" />
          {/* Top Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center ml-4">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mr-3"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;