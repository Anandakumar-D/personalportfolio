import React from 'react';
import { ExternalLink, Calendar, Tag, BookOpen } from 'lucide-react';
import { publications } from '../data/publications';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Research Publications
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Peer-reviewed research contributions advancing the field of AI in medical imaging
            </p>
          </div>

          {/* Publications Grid */}
          <div className="space-y-4 sm:space-y-6">
            {publications.map((pub, index) => (
              <article
                key={pub.id}
                className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Publication Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                      <Calendar size={14} className="mr-2" />
                      {pub.year}
                    </div>
                    <a
                      href={pub.arxivLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-300 font-medium self-start sm:self-auto text-sm"
                    >
                      <BookOpen size={14} className="mr-2" />
                      arXiv
                      <ExternalLink size={12} className="ml-2" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    {pub.summary}
                  </p>

                  {/* Tags */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                        <Tag size={12} className="mr-1" />
                        Modalities:
                      </span>
                      {pub.modalities.map((modality) => (
                        <span
                          key={modality}
                          className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {modality}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                        <Tag size={12} className="mr-1" />
                        Focus Areas:
                      </span>
                      {pub.focus.map((focus) => (
                        <span
                          key={focus}
                          className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;