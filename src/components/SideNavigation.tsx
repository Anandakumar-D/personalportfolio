import React, { useState, useEffect } from 'react';
import { Home, User, FileText, PenTool, Mail } from 'lucide-react';

interface SideNavigationProps {
  variant: 'left-fixed' | 'right-fixed' | 'left-floating' | 'right-floating';
}

const SideNavigation: React.FC<SideNavigationProps> = ({ variant }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'publications', label: 'Research', icon: FileText },
    { id: 'blog', label: 'Writings', icon: PenTool },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'publications', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
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

  const getPositionClasses = () => {
    switch (variant) {
      case 'left-fixed':
        return 'fixed left-6 top-1/2 transform -translate-y-1/2 z-40';
      case 'right-fixed':
        return 'fixed right-6 top-1/2 transform -translate-y-1/2 z-40';
      case 'left-floating':
        return 'fixed left-3 top-1/2 transform -translate-y-1/2 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-1.5';
      case 'right-floating':
        return 'fixed right-3 top-1/2 transform -translate-y-1/2 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-1.5';
      default:
        return 'fixed left-6 top-1/2 transform -translate-y-1/2 z-40';
    }
  };

  const isFloating = variant.includes('floating');
  const isRight = variant.includes('right');

  return (
    <nav className={`${getPositionClasses()} hidden lg:block`}>
      <div className={`flex flex-col space-y-3 ${isFloating ? '' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-3'}`}>
        {sections.map((section) => {
          const IconComponent = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative flex items-center transition-all duration-300 ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
              title={section.label}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 scale-110'
                  : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
              }`}>
                <IconComponent size={16} />
              </div>

              {/* Label - appears on hover */}
              <div className={`absolute ${isRight ? 'right-12' : 'left-12'} px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none`}>
                {section.label}
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-slate-900 dark:bg-white rotate-45 ${isRight ? 'right-[-3px]' : 'left-[-3px]'}`}></div>
              </div>

              {/* Active indicator */}
              {isActive && (
                <div className={`absolute ${isRight ? 'right-[-6px]' : 'left-[-6px]'} w-0.5 h-6 bg-blue-600 dark:bg-blue-400 rounded-full`}></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNavigation;