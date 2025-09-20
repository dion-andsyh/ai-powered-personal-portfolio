import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex items-center space-x-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-800 group">
    <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">{skill.icon}</div>
    <span className="font-semibold text-lg">{skill.name}</span>
  </div>
);

const SectionWrapper: React.FC<{title: string; children: React.ReactNode;}> = ({ title, children }) => (
    <div className="py-16 md:py-24">
        <h2 data-animate className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {title}
        </h2>
        {children}
    </div>
);

const Skills: React.FC = () => {
  return (
    <SectionWrapper title="Keahlian Teknis">
      <div className="max-w-5xl mx-auto space-y-12">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <div key={category.title}>
            <h3 data-animate style={{ transitionDelay: `${catIndex * 200}ms` }} className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-slate-200">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => (
                 <div key={skill.name} data-animate style={{ transitionDelay: `${(catIndex * 200) + (skillIndex * 100)}ms` }}>
                    <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;