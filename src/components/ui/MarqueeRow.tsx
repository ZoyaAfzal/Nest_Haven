import type { ReactNode } from "react";

export function MarqueeRow({
  children,
  reverse = false,
  duration = 40,
  gap = 24,
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  gap?: number;
}) {
  return (
    <div className="marquee-pause group overflow-hidden">
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
        style={
          {
            gap: `${gap}px`,
            ["--marquee-duration" as never]: `${duration}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" aria-hidden style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
