import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    // Simulate form submission
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'anandkumar57007@gmail.com',
      href: 'mailto:anandkumar57007@gmail.com',
      primary: true
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/anandkumar',
      primary: false
    },
    {
      icon: Twitter,
      title: 'Twitter',
      href: 'https://twitter.com/anandkumar',
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-10 sm:py-12 lg:py-16 bg-slate-50 dark:bg-slate-800 pb-16 sm:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Let's Connect
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-2 sm:mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Open to research collaborations, speaking opportunities, and applied AI projects
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Get In Touch
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                  Whether you're interested in discussing the latest developments in AI, exploring potential 
                  research collaborations, or seeking expertise for healthcare AI projects, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-2">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`group flex items-center p-2.5 sm:p-3 rounded-lg transition-all duration-300 ${
                        method.primary
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      } hover:shadow-md transform hover:-translate-y-0.5`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg mr-2.5 group-hover:scale-110 transition-transform duration-300 ${
                        method.primary
                          ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        <IconComponent size={14} className="sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                          {method.title}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-xs">
                          {method.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 sm:p-4 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Send a Message
                </h3>

                {status.type === 'success' && (
                  <div className="mb-3 p-2.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                    <CheckCircle size={14} className="text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-green-800 dark:text-green-200 text-xs">{status.message}</span>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-3 p-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center">
                    <AlertCircle size={14} className="text-red-600 dark:text-red-400 mr-2 flex-shrink-0" />
                    <span className="text-red-800 dark:text-red-200 text-xs">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white text-xs"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white text-xs"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white resize-none text-xs"
                      placeholder="Tell me about your project, research interest, or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || status.type === 'loading'}
                    className="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xs"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={14} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;