import React, { useEffect, useRef, useState } from 'react';
import { Brain } from 'lucide-react';

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-900 pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              About Me
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-2 sm:mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A journey from data engineering to AI research, focused on transforming healthcare through intelligent systems
            </p>
          </div>

          {/* Main Content with Career Timeline Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* About Content Left */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-center lg:text-left">
                <p className="text-slate-700 dark:text-slate-300">
                  My journey began as a <strong>Data Engineer</strong>, where I worked on healthcare infrastructure and data platforms at scale. I later transitioned into <strong>Product roles</strong>, leading AI-first deployments for radiology reporting workflows across real hospitals.<br /><br />

                  Today, as a <strong>Principal AI Scientist</strong>, I focus on developing clinically reliable AI systems for medical imaging — across X-rays, CTs, and MRIs. My work spans classification, segmentation, and vision-language models for autonomous reporting.<br /><br />

                  My recent work includes applied research on medical imaging AI, with a few papers published on arXiv, and I occasionally share what I learn through talks and writing.
                </p>
              </div>
            </div>
            {/* Career Timeline Right */}
            <div className="flex justify-center w-full lg:w-1/3">
              <div ref={timelineRef} className="relative flex flex-col items-center h-64">
                {/* Animated Vertical line (bottom to top) */}
                <div
                  className="absolute left-8 bottom-0 w-1 bg-gradient-to-t from-blue-400 via-purple-400 to-blue-400 rounded-full"
                  style={{
                    height: animate ? '100%' : '0%',
                    transition: 'height 1.2s cubic-bezier(0.4,0,0.2,1)',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }}
                ></div>
                {/* Milestones, bottom to top */}
                <div className="flex flex-col justify-between h-full z-10 py-2">
                  <div className="flex items-center mb-8">
                    <div className="relative" style={{ width: '32px', display: 'flex', justifyContent: 'center' }}>
                      <div className="w-4 h-4 bg-blue-900 rounded-full border-2 border-white dark:border-slate-900 z-10" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}></div>
                    </div>
                    <span className="ml-4 text-xs font-semibold text-blue-900 dark:text-blue-200 whitespace-nowrap">AI Scientist</span>
                  </div>
                  <div className="flex items-center mb-8">
                    <div className="relative" style={{ width: '32px', display: 'flex', justifyContent: 'center' }}>
                      <div className="w-4 h-4 bg-purple-600 rounded-full border-2 border-white dark:border-slate-900 z-10" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}></div>
                    </div>
                    <span className="ml-4 text-xs font-semibold text-purple-700 dark:text-purple-300 whitespace-nowrap">Product Manager</span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative" style={{ width: '32px', display: 'flex', justifyContent: 'center' }}>
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-slate-900 z-10" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}></div>
                    </div>
                    <span className="ml-4 text-xs font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap">Data Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;