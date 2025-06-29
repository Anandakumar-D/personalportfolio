import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pb-16 lg:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Profile Photo */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Anand - Principal AI Scientist"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full"></div>
                <div className="absolute top-1/2 -left-4 sm:-left-5 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-4 lg:space-y-5 text-center lg:text-left">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  <span className="text-slate-900 dark:text-white">Principal</span>
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">AI Scientist</span>
                </h1>
                
                <div className="space-y-3 lg:space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    Advancing artificial intelligence in medical imaging through deep learning and vision-language systems
                  </p>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0"></div>
                  
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Specializing in radiological scan interpretation across X-rays, CTs, and MRIs for classification, 
                    segmentation, and autonomous reporting applications in clinical environments.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="mailto:anandkumar57007@gmail.com"
                  className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
                >
                  Get In Touch
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="#"
                  className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                >
                  <Download size={16} className="mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;