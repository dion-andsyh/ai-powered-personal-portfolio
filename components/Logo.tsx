import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2 sm:gap-3" aria-label="Dion Andreansyah's Logo">
    <img 
        src="/logo-andsyh.svg" 
        alt="Andsyh Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110 hover:rotate-3"
    />
    <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hidden sm:inline tracking-tight">
      andsyh
    </span>
  </div>
);

export default Logo;