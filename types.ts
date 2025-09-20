import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface NavLink {
  name: string;
  section: 'home' | 'about' | 'projects' | 'demos' | 'skills' | 'contact';
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface Demo {
  title: string;
  demoUrl: string;
}