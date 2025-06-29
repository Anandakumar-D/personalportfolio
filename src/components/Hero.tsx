import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import image from '../assets/image.png';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pb-12 lg:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Profile Photo */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt="Your Photo"
                    className="w-full h-full object-cover object-top md:object-center"
                    style={{objectPosition: 'center 0%'}}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
                <div className="absolute top-1/2 -left-3 sm:-left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-3 lg:space-y-4 text-center lg:text-left">
              <div className="space-y-2 lg:space-y-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                  <span className="text-slate-900 dark:text-white">Anandakumar</span>
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">AI Scientist</span>
                </h1>
                
                <div className="space-y-2 lg:space-y-3">
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  AI Scientist specializing in medical imaging, leading deep learning and vision-language model development for X-rays, CTs, and MRIs.
                  I focus on translating research into clinically reliable AI systems, with published work in diagnostic automation and real-world deployment.
                  </p>
                  
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0"></div>
                
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start">
                <a
                  href="mailto:anandkumar57007@gmail.com"
                  className="group inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs"
                >
                  Get In Touch
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
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