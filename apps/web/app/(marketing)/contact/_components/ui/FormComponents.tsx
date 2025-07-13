import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

interface StatusMessageProps {
  type: 'success' | 'error';
  children: React.ReactNode;
}

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function FormInput({ label, error, className = "", ...props }: InputProps) {
  const isRequired = props.required;
  
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {isRequired && '*'}
      </label>
      <input
        className={`w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function FormTextarea({ label, error, className = "", ...props }: TextareaProps) {
  const isRequired = props.required;
  
  return (
    <div className="flex flex-col h-full">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {isRequired && '*'}
      </label>
      <textarea
        className={`w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function StatusMessage({ type, children }: StatusMessageProps) {
  const baseClasses = "px-4 py-3 border-2";
  const typeClasses = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800"
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {children}
    </div>
  );
}

export function SubmitButton({ 
  isLoading = false, 
  loadingText = "Loading...", 
  children, 
  className = "",
  ...props 
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full bg-gray-900 text-white px-8 py-4 border-2 border-gray-900 font-bold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}
