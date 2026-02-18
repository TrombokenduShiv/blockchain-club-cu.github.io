import { ScrambleText } from './ScrambleText';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="mb-16 md:text-center">
    <div className="flex items-center gap-2 md:justify-center mb-4 text-[#10F480] font-mono text-sm tracking-wider uppercase">
      <span className="w-8 h-[1px] bg-[#10F480]"></span>
      {subtitle}
    </div>
    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white">
      <ScrambleText text={title} speed={1} />
    </h2>
  </div>
);
