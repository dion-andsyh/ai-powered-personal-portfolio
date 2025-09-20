import React from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/>
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.817-6.044 6.817h-3.308l7.73-8.805-8.339-10.69h6.785l4.596 6.131 5.437-6.131zm-1.713 19.53h2.669l-11.332-15.018h-2.796l11.459 15.018z"/>
    </svg>
);

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 data-animate className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            <span className="text-sky-500 dark:text-sky-400">Senior</span> Frontend Engineer
          </h1>
          <p data-animate style={{ transitionDelay: '200ms' }} className="text-lg md:text-xl">
            Membangun pengalaman web yang indah dan cepat dengan React, TypeScript, dan sentuhan AI.
          </p>
          <div data-animate style={{ transitionDelay: '400ms' }} className="flex justify-center md:justify-start space-x-4">
            <button
              onClick={onNavigate}
              className="bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-600 transition-transform hover:scale-105"
            >
              Lihat Karya Saya
            </button>
            <a
              href="#"
              className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-md font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-transform hover:scale-105"
            >
              Unduh CV
            </a>
          </div>
          <div data-animate style={{ transitionDelay: '600ms' }} className="flex justify-center md:justify-start space-x-4 pt-4">
            <a href="https://github.com/dion-andsyh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <GitHubIcon />
            </a>
            <a href="#" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/dionandsyh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <InstagramIcon />
            </a>
             <a href="#" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <FacebookIcon />
            </a>
             <a href="https://x.com/dionandsyh" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <XIcon />
            </a>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2" data-animate style={{ transitionDelay: '200ms' }}>
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-teal-500 rounded-full blur-2xl opacity-60 animate-float"></div>
            <div className="absolute inset-0 rounded-[45%_55%_45%_55%] border-2 border-sky-500/30 border-dashed animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-[45%_55%_45%_55%] border-2 border-sky-500/30 border-dashed animate-spin-reverse"></div>
            <div className="relative w-full h-full rounded-[45%_55%_45%_55%] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900">
                <img 
                    src="/andsyh.png" 
                    alt="Dion Andreansyah" 
                    className="w-full h-full object-cover" 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;