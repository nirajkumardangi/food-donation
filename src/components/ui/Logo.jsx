import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Iconized Initial */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-color rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary-color/20"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 border border-white/20"></div>
        <span className="relative z-10 text-white font-display font-black text-xl md:text-2xl leading-none">F</span>
      </div>

      {/* Textual Branding */}
      <div className="flex flex-col leading-[0.9]">
        <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">
          FEED<span className="text-primary-color">AID</span>
        </span>
        <span className="text-[10px] md:text-xs font-display font-bold text-gray-400 tracking-[0.25em] uppercase mt-0.5">
          Foundation
        </span>
      </div>
    </div>
  );
};

export default Logo;
