import React, { useState } from 'react';
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Extract the first URL inside markdown parentheses (...)
  const extractFirstUrl = (markdown: string): string | null => {
    const match = markdown.match(/\((https?:\/\/[^)]+)\)/);
    return match ? match[1] : null;
  };

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  if (selectedPostData) {
    return (
      <section id="blog" className="py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-900 pb-12 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-4 text-sm transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Articles
            </button>

            {/* Article Header */}
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(selectedPostData.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {selectedPostData.readTime}
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                  {selectedPostData.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4">
                  {selectedPostData.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <Tag size={14} className="text-slate-500 dark:text-slate-400" />
                  {selectedPostData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800"
                dangerouslySetInnerHTML={{ 
                  __html: selectedPostData.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1>${line.substring(2)}</h1>`;
                      } else if (line.startsWith('## ')) {
                        return `<h2>${line.substring(3)}</h2>`;
                      } else if (line.startsWith('### ')) {
                        return `<h3>${line.substring(4)}</h3>`;
                      } else if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p><strong>${line.substring(2, line.length - 2)}</strong></p>`;
                      } else if (line.startsWith('- ')) {
                        return `<li>${line.substring(2)}</li>`;
                      } else if (line.trim() === '') {
                        return '<br>';
                      } else if (line.startsWith('```')) {
                        return line.includes('```') && line.length > 3 ? '</code></pre>' : '<pre><code>';
                      } else {
                        return `<p>${line}</p>`;
                      }
                    })
                    .join('')
                }}
              />
            </article>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-900 pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Writings
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-2 sm:mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Thoughts on AI in healthcare, research methodologies, and industry developments
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 gap-3 sm:gap-4">
            {blogPosts.slice(0, 4).map((post) => (
              <a
                key={post.id}
                href={extractFirstUrl(post.content) || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer block"
              >
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed text-xs sm:text-sm">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-all duration-300 text-xs">
                    Read Article →
                  </div>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
          </div>

          {/* Know more button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://substack.com/@theanandskernel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;