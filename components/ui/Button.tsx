import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-sans text-sm tracking-wide transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-white text-slate-900 hover:bg-white/90 shadow-lg",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
    glass: "glass border-white/40 text-white hover:bg-white/20",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
