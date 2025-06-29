import React from 'react';
import { ExternalLink, Calendar, ArrowRight, PenTool } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Insights & Writing
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Thoughts on AI in healthcare, research methodologies, and industry developments
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(post.publishedAt)}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm sm:text-base">
                    {post.description}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-all duration-300 text-sm"
                  >
                    Read on Medium
                    <div className="flex items-center ml-2 group-hover/link:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={14} className="mr-1" />
                      <ExternalLink size={12} />
                    </div>
                  </a>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </article>
            ))}
          </div>

          {/* View All Posts CTA */}
          <div className="text-center">
            <a
              href="https://medium.com/@anandkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm"
            >
              <PenTool size={16} className="mr-2" />
              View All Articles
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;