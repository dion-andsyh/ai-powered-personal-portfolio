import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveDemos from './components/LiveDemos';

const useAnimateOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
    }
    return 'dark';
  });
  
  useAnimateOnScroll();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const sections = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    demos: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-transparent text-slate-700 dark:text-slate-200 font-sans antialiased transition-colors duration-300">
      <Header onNavigate={scrollToSection} theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-6 md:px-12">
        <div ref={sections.home}>
          <Hero onNavigate={() => scrollToSection('projects')} />
        </div>
        <div ref={sections.about}>
          <About />
        </div>
        <div ref={sections.projects}>
          <Projects />
        </div>
        <div ref={sections.demos}>
          <LiveDemos />
        </div>
        <div ref={sections.skills}>
          <Skills />
        </div>
        <AIAssistant />
        <div ref={sections.contact}>
          <Contact />
        </div>
      </main>
      <Footer onNavigate={scrollToSection}/>
    </div>
  );
};

export default App;