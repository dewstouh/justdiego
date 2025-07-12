"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary"
}

type ButtonVariantType = `${ButtonVariant}`;

// CTA Button for Hero section
interface CTAButtonProps {
  onClick?: () => void;
  href?: string;
  variant?: ButtonVariantType,
  children: ReactNode;
  className?: string;
}

export const CTAButton = ({ variant = "primary", className, children, href }: CTAButtonProps) => {
  const baseClasses = "px-12 py-6 w-full text-base font-bold transition-none flex items-center justify-center gap-3 border-2";
  
  const variantClasses = {
    primary: "bg-black text-white border-gray-900 hover:bg-gray-900",
    secondary: "bg-gray-200 text-gray-900 border-gray-900 hover:bg-gray-300"
  };

  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}
      href={href || '#'}
    >
      {children}
    </a>
  );
};
