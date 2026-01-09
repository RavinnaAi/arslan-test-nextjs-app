"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`page-transition-wrapper ${
        isAnimating ? "page-enter" : "page-enter-active"
      }`}
    >
      {children}
    </div>
  );
}

