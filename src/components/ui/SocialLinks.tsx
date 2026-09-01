import { FaFacebookF, FaInstagram } from "react-icons/fa";

interface SocialLinksProps {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function SocialLinks({
  facebook,
  instagram,
  variant = "light",
  className = "",
}: SocialLinksProps) {
  const links = [
    {
      label: "Facebook",
      href: facebook,
      icon: FaFacebookF,
    },
    {
      label: "Instagram",
      href: instagram,
      icon: FaInstagram,
    },
  ].filter(
    (
      item,
    ): item is {
      label: string;
      href: string;
      icon: typeof FaFacebookF;
    } => Boolean(item.href),
  );

  if (links.length === 0) {
    return null;
  }

  const styles =
    variant === "dark"
      ? `
          border-white/20
          text-white/80
          hover:border-white/40
          hover:bg-white/10
          hover:text-white
          focus-visible:ring-white
          focus-visible:ring-offset-brand-950
        `
      : `
          border-slate-200
          text-slate-600
          hover:border-brand-200
          hover:bg-surface-accent
          hover:text-accent
          focus-visible:ring-accent
          focus-visible:ring-offset-white
        `;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${item.label}`}
            className={`
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              transition
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-offset-2
              ${styles}
            `}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />

            <span className="sr-only">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
