import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideNavigation from './components/SideNavigation';
import MobileNavigation from './components/MobileNavigation';

function App() {
  const [navVariant] = useState<'left-fixed' | 'right-fixed' | 'left-floating' | 'right-floating'>('right-floating');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <SideNavigation variant={navVariant} />
        <MobileNavigation />
        <main>
          <Hero />
          <About />
          <Publications />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;