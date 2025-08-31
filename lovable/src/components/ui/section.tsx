import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cn("mb-8 last:mb-0", className)}>
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return (
    <h2 className={cn(
      "text-xl font-semibold text-primary mb-3 border-l-4 border-primary pl-3",
      className
    )}>
      {children}
    </h2>
  );
};

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContent = ({ children, className }: SectionContentProps) => {
  return (
    <div className={cn("text-foreground leading-relaxed space-y-2", className)}>
      {children}
    </div>
  );
};