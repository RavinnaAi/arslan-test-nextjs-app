"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SmoothLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothLink({ href, children, className = "", onClick }: SmoothLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-all duration-200 ${className} ${
        isActive ? "text-primary font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

