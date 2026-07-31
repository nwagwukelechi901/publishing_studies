interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-primary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-mono text-emerald-300 text-[10px] tracking-[0.25em] uppercase mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-emerald-300" />
          {eyebrow}
        </div>
        <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-white/55 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
