import { Sun } from "lucide-react";

type BrandMarkProps = {
  size?: "sm" | "md";
};

const sizes = {
  sm: "h-9 w-9 text-sm",
  md: "h-10 w-10 text-base md:h-12 md:w-12 md:text-lg",
};

export function BrandMark({ size = "md" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#f6c945]/90 bg-[#061936] font-display font-extrabold tracking-[-0.12em] text-white shadow-[0_0_0_3px_rgba(56,189,248,0.18),0_0_24px_rgba(246,201,69,0.38)] ${sizes[size]}`}
    >
      <Sun
        className="absolute -bottom-1.5 -left-1.5 h-5 w-5 text-[#f6c945] opacity-95"
        strokeWidth={2.6}
      />
      <span className="relative z-10 translate-x-[-0.04em]">RJ</span>
    </span>
  );
}
