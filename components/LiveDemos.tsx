import React, { useState } from 'react';
import { LIVE_DEMOS } from '../constants';
import type { Demo } from '../types';

const SectionWrapper: React.FC<{title: string; children: React.ReactNode;}> = ({ title, children }) => (
    <div className="py-16 md:py-24">
        <h2 data-animate className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {title}
        </h2>
        {children}
    </div>
);

const demos = LIVE_DEMOS;

const LiveDemos: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<Demo | null>(demos[0] || null);
  const [isLoading, setIsLoading] = useState(true);

  if (!activeDemo) {
    return null;
  }

  const handleDemoChange = (project: Demo) => {
    if (project.demoUrl === activeDemo.demoUrl) return;
    setIsLoading(true)
    setActiveDemo(project);
  }
  
  const handleIframeLoad = () => {
    setIsLoading(false);
  }

  return (
    <SectionWrapper title="Demo Interaktif">
        <div className="max-w-6xl mx-auto" data-animate>
            <p data-animate style={{ transitionDelay: '200ms' }} className="text-center text-lg mb-12 max-w-2xl mx-auto">
                Berinteraksi langsung dengan demo proyek saya di halaman ini. Klik tombol di bawah untuk memuat demo lainnya.
            </p>

            <div data-animate style={{ transitionDelay: '400ms' }} className="flex flex-wrap justify-center gap-3 mb-8">
                {demos.map(project => (
                    <button
                        key={project.title}
                        onClick={() => handleDemoChange(project)}
                        className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 ${
                            activeDemo.title === project.title
                            ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/40'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700'
                        }`}
                    >
                        {project.title}
                    </button>
                ))}
            </div>
            
            <div data-animate style={{ transitionDelay: '600ms' }} className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800 p-2 sm:p-4">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 rounded-t-md px-4 py-2 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-300 font-mono hidden sm:block truncate px-4">
                        {activeDemo.demoUrl}
                    </div>
                    <a href={activeDemo.demoUrl} target="_blank" rel="noopener noreferrer" title="Buka di tab baru" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-slate-900">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                    <iframe
                        src={activeDemo.demoUrl}
                        title={activeDemo.title}
                        className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        loading="lazy"
                        onLoad={handleIframeLoad}
                        sandbox="allow-scripts allow-same-origin"
                    />
                </div>
            </div>
        </div>
    </SectionWrapper>
  );
};

export default LiveDemos;