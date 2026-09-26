'use client';

interface SectionPlaceholderProps {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
}

export default function SectionPlaceholder({
  id,
  title,
  subtitle,
  tag,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-black/[0.06] bg-pureWhite"
    >
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-darkBlue/10 bg-darkBlue/[0.03] text-darkBlue text-xs font-semibold uppercase tracking-wider mb-4">
          {tag}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deepBlack mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-deepBlack/60 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-12 p-8 rounded-2xl border border-dashed border-black/15 bg-black/[0.01] flex items-center justify-center min-h-[160px]">
          <span className="text-xs uppercase tracking-widest font-mono text-deepBlack/40">
            {tag} Section Canvas • Ready for Phase Integration
          </span>
        </div>
      </div>
    </section>
  );
}
