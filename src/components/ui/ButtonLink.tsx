"use client";

import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  fullWidthOnMobile?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  fullWidthOnMobile = false,
  onClick,
}: ButtonLinkProps) {
  const variants = {
    primary: `
      bg-action
      text-action-foreground
      shadow-sm
      hover:bg-action-hover
      focus-visible:ring-action
    `,

    secondary: `
      border
      border-brand-200
      bg-white
      text-accent
      hover:bg-surface-accent
      focus-visible:ring-accent
    `,
  };

  const width = fullWidthOnMobile ? "w-full sm:w-auto" : "";

  const className = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-6
    py-3
    font-semibold
    transition
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
    ${width}
    ${variants[variant]}
  `;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
