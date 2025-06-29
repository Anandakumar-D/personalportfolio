import React from 'react';
import { Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-900 pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              About Me
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-2 sm:mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A journey from data engineering to AI research, focused on transforming healthcare through intelligent systems
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Profile Section */}
            <div className="order-2 lg:order-1">
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm leading-relaxed">
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
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                    <Brain size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
                <div className="absolute top-1/2 -left-3 sm:-left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;