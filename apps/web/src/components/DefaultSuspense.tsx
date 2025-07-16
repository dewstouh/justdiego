import { Suspense } from "react";

export default function DefaultSuspense({children}: {children: React.ReactNode}) {
  return (
    <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded m-4"></div>}>
        {children}
    </Suspense>
  )
}
