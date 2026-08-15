interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
                               eyebrow,
                               title,
                               description,
                               align = "left",
                             }: SectionTitleProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}