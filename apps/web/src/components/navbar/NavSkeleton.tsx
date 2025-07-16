
export default function NavSkeleton() {
  return (
    <>
      {/* Create multiple skeleton items to match the navigation layout */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-300 w-24 animate-pulse rounded-md`}
          style={{
            animationDelay: `${150 + index * 100}ms`,
            animationDuration: '1.5s'
          }}
        />
      ))}
    </>
  );
}
