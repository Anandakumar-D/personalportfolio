import React from 'react';
import { Brain, Target, Zap, Award, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const expertiseAreas = [
    { 
      icon: Brain, 
      title: 'Deep Learning', 
      description: 'Advanced neural architectures for medical image analysis'
    },
    { 
      icon: Zap, 
      title: 'Vision-Language Models', 
      description: 'Automated radiology report generation systems'
    },
    { 
      icon: Target, 
      title: 'Clinical AI', 
      description: 'Real-world deployment in healthcare environments'
    },
    { 
      icon: Award, 
      title: 'Model Evaluation', 
      description: 'Robust assessment frameworks for medical AI'
    },
    { 
      icon: TrendingUp, 
      title: 'Research Translation', 
      description: 'Bridging academic research and clinical practice'
    },
    { 
      icon: Users, 
      title: 'Bias Mitigation', 
      description: 'Ensuring fairness and equity in AI systems'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A journey from data engineering to AI research, focused on transforming healthcare through intelligent systems
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Profile Section */}
            <div className="order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="text-slate-700 dark:text-slate-300">
                  My career began as a <strong className="text-slate-900 dark:text-white">Data Engineer</strong>, 
                  where I developed a deep understanding of healthcare data complexities and infrastructure challenges. 
                  This foundation proved invaluable as I transitioned into <strong className="text-slate-900 dark:text-white">Product roles</strong>, 
                  gaining critical insights into user needs and real-world deployment requirements.
                </p>
                
                <p className="text-slate-700 dark:text-slate-300">
                  Today, as a <strong className="text-slate-900 dark:text-white">Principal AI Scientist</strong>, 
                  I focus on developing robust AI systems that can reliably interpret medical images in clinical settings. 
                  My work spans the entire pipeline from research to deployment, with particular emphasis on clinical bias 
                  mitigation and the practical challenges of scaling AI in healthcare environments.
                </p>

                <p className="text-slate-700 dark:text-slate-300">
                  I'm passionate about <strong className="text-slate-900 dark:text-white">vision-language models</strong> 
                  for automated report generation, advanced evaluation frameworks for medical AI, and bridging the gap 
                  between cutting-edge research and meaningful clinical impact.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                    <Brain size={48} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-5 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-900 dark:text-white mb-6 sm:mb-8">
              Areas of Expertise
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {expertiseAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.title}
                    className="group p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={16} className="sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;