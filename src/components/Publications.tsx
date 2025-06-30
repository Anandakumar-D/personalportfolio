import React, { useState } from 'react';
import { ExternalLink, Tag, BookOpen } from 'lucide-react';
import { publications } from '../data/publications';

const Publications: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section id="publications" className="py-10 sm:py-12 lg:py-16 bg-slate-50 dark:bg-slate-800 pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Research Publications
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-2 sm:mb-3"></div>
          </div>

          {/* Publications Grid */}
          <div className="space-y-3 sm:space-y-4">
            {publications.slice(0, visibleCount).map((pub, index) => (
              <article
                key={pub.id}
                className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 sm:p-4 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex flex-col gap-2 sm:gap-3">
                  {/* Publication Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <a
                      href={pub.arxivLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-all duration-300 font-medium self-start sm:self-auto text-xs"
                    >
                      <BookOpen size={12} className="mr-1" />
                      arXiv
                      <ExternalLink size={10} className="ml-1" />
                    </a>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm">
                    {pub.summary}
                  </p>

                  {/* Tags */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                        <Tag size={10} className="mr-1" />
                        Modalities:
                      </span>
                      {pub.modalities.map((modality) => (
                        <span
                          key={modality}
                          className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {modality}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                        <Tag size={10} className="mr-1" />
                        Focus Areas:
                      </span>
                      {pub.focus.map((focus) => (
                        <span
                          key={focus}
                          className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
            {visibleCount < publications.length && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleViewMore}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;