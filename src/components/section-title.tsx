type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const containerClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`mb-8 max-w-3xl ${containerClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-semibold text-[color:var(--color-foreground)] sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-lg text-[color:var(--color-foreground-muted)]">{description}</p>}
    </div>
  );
}
