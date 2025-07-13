interface SolutionCardSeparatorProps {
  show: boolean;
}

export default function SolutionCardSeparator({ show }: SolutionCardSeparatorProps) {
  if (!show) return null;
  
  return (
    <div className="w-full border-t-2 border-gray-400 mb-8 lg:mb-12 relative">
      <div className="absolute left-0 top-0 w-8 lg:w-12 h-0.5 bg-gray-900"></div>
      <div className="absolute right-0 top-0 w-8 lg:w-12 h-0.5 bg-gray-900"></div>
    </div>
  );
}
