import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export function ButtonLink({
                             href,
                             children,
                             variant = "primary",
                             external = false,
                           }: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-700",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  };

  const className = `inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}