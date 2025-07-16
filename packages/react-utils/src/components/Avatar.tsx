"use client";

import { useState } from 'react';

interface AvatarProps {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12', 
  lg: 'w-16 h-16'
};

// Generate initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Generate a deterministic color based on name
function getAvatarColor(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-teal-500'
  ];
  
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  return colors[Math.abs(hash) % colors.length] || 'bg-gray-500';
}

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const sizeClass = sizeClasses[size];
  
  // If we have a valid src and no error, try to render the image
  if (src && !hasError) {
    return (
      <div className={`${sizeClass} bg-gray-300 border-2 border-gray-400 rounded-full overflow-hidden flex items-center justify-center ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // Professional vector fallback with initials
  const initials = getInitials(alt);
  const bgColor = getAvatarColor(alt);
  
  return (
    <div className={`${sizeClass} ${bgColor} border-2 border-gray-400 rounded-full flex items-center justify-center ${className}`}>
      <span className={`text-white font-bold ${size === 'lg' ? 'text-lg' : size === 'md' ? 'text-sm' : 'text-xs'}`}>
        {initials}
      </span>
    </div>
  );
}
