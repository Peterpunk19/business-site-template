import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  fullWidthOnMobile?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  fullWidthOnMobile = false,
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-brand-700 text-white shadow-sm hover:bg-brand-800",

    secondary: "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50",
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
  focus-visible:ring-brand-600
  focus-visible:ring-offset-2
  ${width}
  ${variants[variant]}
`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
