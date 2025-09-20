import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiPhp, SiPython, SiGooglecloud, SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { Project, SkillCategory, NavLink, Demo } from './types';

// Updated: Using colored SVG logos for skills
export const ICONS = {
  html: <span className="w-8 h-8 text-[#E34F26] inline-flex items-center"><SiHtml5 /></span>,
  css: <span className="w-8 h-8 text-[#1572B6] inline-flex items-center"><SiCss3 /></span>,
  javascript: <span className="w-8 h-8 text-[#F7DF1E] inline-flex items-center"><SiJavascript /></span>,
  react: <span className="w-8 h-8 text-[#61DAFB] inline-flex items-center"><SiReact /></span>,
  tailwind: <span className="w-8 h-8 text-[#38BDF8] inline-flex items-center"><SiTailwindcss /></span>,
  nodejs: <span className="w-8 h-8 text-[#339933] inline-flex items-center"><SiNodedotjs /></span>,
  php: <span className="w-8 h-8 text-[#777BB4] inline-flex items-center"><SiPhp /></span>,
  python: <span className="w-8 h-8 text-[#3776AB] inline-flex items-center"><SiPython /></span>,
  gemini: <span className="w-8 h-8 text-[#4285F4] inline-flex items-center"><SiGooglecloud /></span>,
  git: <span className="w-8 h-8 text-[#F05032] inline-flex items-center"><SiGit /></span>,
  github: <span className="w-8 h-8 inline-flex items-center text-black dark:text-white"><SiGithub /></span>,
  figma: <span className="w-8 h-8 text-[#F24E1E] inline-flex items-center"><SiFigma /></span>,
};

export const PROJECTS: Project[] = [
  {
    title: 'Kalkulator Target Tabungan',
    description: 'Aplikasi web untuk menghitung target tabungan dengan berbagai skenario investasi. Membantu perencanaan keuangan dengan kalkulasi yang akurat dan visualisasi yang jelas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/kalkulator-target-tabungan.png',
    liveUrl: 'https://kalkulator-target-tabungan.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'Andsyh Convert',
    description: 'Konverter satuan modern yang mendukung berbagai jenis konversi seperti panjang, berat, suhu, dan mata uang. Interface yang intuitif dan responsif untuk kemudahan penggunaan.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/convert.png',
    liveUrl: 'https://andsyh-convert.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'CV Builder',
    description: 'Pembuat CV online yang memungkinkan pengguna membuat curriculum vitae profesional dengan template yang menarik. Fitur drag-and-drop dan preview real-time.',
    tags: ['React', 'TypeScript', 'Tailwind CSS' ],
    imageUrl: '/cvbuilder.png',
    liveUrl: 'https://cv-builder-andsyh.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'To-Do List',
    description: 'Aplikasi manajemen tugas yang memungkinkan pengguna membuat, mengedit, dan melacak daftar pekerjaan. Fitur drag-and-drop, filter, dan penyimpanan lokal.',
    tags: ['React', 'TypeScript', 'Tailwind CSS' ],
    imageUrl: '/todolist.png',
    liveUrl: 'https://andsyh-to-do-list.netlify.app/',
    repoUrl: '#',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: ICONS.html },
      { name: 'CSS', icon: ICONS.css },
      { name: 'JavaScript', icon: ICONS.javascript },
      { name: 'React', icon: ICONS.react },
      { name: 'Tailwind CSS', icon: ICONS.tailwind },
    ],
  },
  {
    title: 'Backend & API',
    skills: [
      { name: 'Node.js', icon: ICONS.nodejs },
      { name: 'PHP', icon: ICONS.php },
      { name: 'Python', icon: ICONS.python },
      { name: 'Gemini API', icon: ICONS.gemini },
    ],
  },
  {
    title: 'Alat & Desain',
    skills: [
      { name: 'Git & GitHub', icon: <div className="flex -space-x-3">{ICONS.git}{ICONS.github}</div> },
      { name: 'Figma', icon: ICONS.figma },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
    { name: 'Tentang', section: 'about' },
    { name: 'Proyek', section: 'projects' },
    { name: 'Demo', section: 'demos' },
    { name: 'Keahlian', section: 'skills' },
    { name: 'Kontak', section: 'contact' },
];

export const LIVE_DEMOS: Demo[] = [
  {
    title: 'Static Website Showcase',
    demoUrl: 'https://static-webiste-showcase.netlify.app/',
  },
];

export const PORTFOLIO_ASSISTANT_CONTEXT = `
Anda adalah Asisten Portofolio Profesional milik Dion Andreansyah (andsyh). 

INSTRUKSI RESPON PROFESIONAL:
1. Selalu jawab dengan bahasa yang sopan, profesional, dan terstruktur
2. Gunakan format yang rapi dengan paragraf yang jelas dan poin-poin terorganisir
3. Berikan informasi yang akurat berdasarkan data yang tersedia
4. Jika tidak mengetahui informasi tertentu, sampaikan dengan sopan bahwa Dion dapat memberikan jawaban langsung
5. Gunakan gaya komunikasi yang ramah namun tetap profesional
6. Strukturkan jawaban dengan sub-judul jika diperlukan untuk kejelasan

PROFIL DION ANDREANSYAH:

Tentang Professional:
• 8+ tahun pengalaman dalam pengembangan frontend
• Spesialis dalam React, TypeScript, dan teknologi web modern
• Fokus pada pembuatan UI yang indah, performant, dan aksesibel
• Ahli dalam prinsip UI/UX dan integrasi API AI seperti Google Gemini
• Aktif membimbing developer pemula dan berkontribusi pada proyek open-source
• Hobi: Hiking, fotografi, dan eksplorasi kopi

Keahlian Teknis:
Frontend Development:
• React, TypeScript, Next.js, Redux
• HTML5, CSS3, Tailwind CSS
• D3.js, Chart.js untuk visualisasi data

Backend & API Integration:
• Node.js, Express
• Gemini API, REST API, GraphQL
• Socket.IO untuk real-time communication

Tools & Design:
• Git, GitHub untuk version control
• Figma untuk UI/UX design
• Docker, Webpack, Firebase

Portfolio Projects:
• Kalkulator Target Tabungan: Aplikasi web untuk perencanaan keuangan dengan visualisasi chart
• Andsyh Convert: Konverter satuan modern dengan interface intuitif
• CV Builder: Pembuat CV online dengan template profesional dan PDF generation
• To-Do List: Aplikasi manajemen tugas dengan fitur drag-and-drop dan filter

Informasi Kontak:
• Email: dion.andreansyah@email.com
• Status: Tersedia untuk proyek baru dan freelance
• Lokasi: Indonesia

Gaya komunikasi Anda harus mencerminkan profesionalisme dan keahlian teknis Dion, sambil tetap ramah dan mudah dipahami.
`;