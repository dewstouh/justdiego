import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div 
      className={`w-full max-w-4xl mx-auto ${className}`} 
      {...props}
    >
      <div className="bg-gray-50 border-2 border-gray-200 p-8">
        {children}
      </div>
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }: CardHeaderProps) {
  return (
    <div 
      className={`mb-6 text-center ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }: CardTitleProps) {
  return (
    <h4 
      className={`text-xl font-bold text-gray-900 mb-2 ${className}`} 
      {...props}
    >
      {children}
    </h4>
  );
}

export function CardDescription({ children, className = "", ...props }: CardDescriptionProps) {
  return (
    <p 
      className={`text-gray-600 ${className}`} 
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className = "", ...props }: CardContentProps) {
  return (
    <div 
      className={`bg-primary border-2 border-gray-300 p-6 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}
