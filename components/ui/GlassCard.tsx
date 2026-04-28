import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function GlassCard({ children, className = '', noPadding = false }: GlassCardProps) {
  return (
    <div className={`glass-card ${noPadding ? '' : 'p-6 md:p-8'} ${className}`}>
      {children}
    </div>
  );
}
