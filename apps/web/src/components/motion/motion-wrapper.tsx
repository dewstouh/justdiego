'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { motion, type MotionProps } from 'framer-motion';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}

/**
 * SSR-compatible wrapper for framer-motion components.
 * Prevents hydration mismatches by only rendering motion after client-side mount.
 */
export function MotionWrapper({
  children,
  className,
  fallback,
  ...motionProps
}: MotionWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Return fallback or static version during SSR
  if (!hasMounted) {
    return (
      <div className={className}>
        {fallback ?? children}
      </div>
    );
  }

  // Return motion component after client-side mount
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
