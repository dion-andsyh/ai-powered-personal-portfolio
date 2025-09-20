import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div data-animate style={{ transitionDelay: `${index * 100}ms` }} className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col border border-transparent hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/20 dark:hover:shadow-sky-400/10">
      <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end space-x-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Lihat demo untuk ${project.title}`}
              title="Lihat Demo"
              className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125"
            >
              <ExternalLinkIcon />
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Lihat repositori GitHub untuk ${project.title}`}
              title="Lihat di GitHub"
              className="text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-transform duration-300 hover:scale-125"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionWrapper: React.FC<{title: string; children: React.ReactNode;}> = ({ title, children }) => (
    <div className="py-16 md:py-24">
        <h2 data-animate className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {title}
        </h2>
        {children}
    </div>
);

const Projects: React.FC = () => {
  return (
    <SectionWrapper title="Proyek Saya">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;