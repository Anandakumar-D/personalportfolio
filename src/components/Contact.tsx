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
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
        </svg>
      ),
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anandakumar-d/',
      primary: false
    },
    {
      icon: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
        </svg>
      ),
      title: 'Twitter',
      href: 'https://x.com/Anandakumar_D25',
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

          <div className="flex flex-col items-center w-full mt-8">
            <div className="flex justify-center gap-6 w-full max-w-2xl">
              {contactMethods.slice(1, 3).map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center p-4 sm:p-5 rounded-lg transition-all duration-300 ${
                      method.primary
                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    } hover:shadow-md transform hover:-translate-y-0.5 w-72 sm:w-80 justify-center`}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 ${
                      method.primary
                        ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <IconComponent size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                        {method.title}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                        {method.description}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="flex justify-center w-full max-w-2xl mt-6">
              {contactMethods.slice(0, 1).map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center p-4 sm:p-5 rounded-lg transition-all duration-300 ${
                      method.primary
                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    } hover:shadow-md transform hover:-translate-y-0.5 w-72 sm:w-80 justify-center`}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300 ${
                      method.primary
                        ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <IconComponent size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                        {method.title}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                        {method.description}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;