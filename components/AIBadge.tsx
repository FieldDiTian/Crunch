
import React from 'react';

interface AIBadgeProps {
  label: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export const AIBadge: React.FC<AIBadgeProps> = ({ label, className = "", variant = 'light' }) => {
  const baseClasses = "absolute z-20 px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold border backdrop-blur-md shadow-lg flex items-center gap-2";
  const variants = {
    light: "bg-white/70 border-white/50 text-stone-900",
    dark: "bg-stone-900/70 border-stone-700 text-yellow-500"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
      {label}
    </div>
  );
};
