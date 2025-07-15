export default function NavSkeleton() {
  const skeletonWidths = ['w-16', 'w-20', 'w-14', 'w-18']; // Different widths for variety
  
  return (
    <div className="flex gap-6 md:gap-8">
      {skeletonWidths.map((width, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded"
        >
          {/* Base skeleton */}
          <div 
            className={`h-4 bg-gray-200 ${width} animate-pulse`}
            style={{
              animationDelay: `${index * 150}ms`,
              animationDuration: '1.5s'
            }}
          />
          
          {/* Shimmer effect using CSS animation */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent ${width}`}
            style={{
              animation: `slide 2s infinite ${index * 200}ms ease-in-out`,
              transform: 'translateX(-100%)'
            }}
          />
        </div>
      ))}
      
      {/* Add custom keyframes via inline style tag */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </div>
  );
}
