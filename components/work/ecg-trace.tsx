/** Subtle ECG line — signature motif for Roy Cardiology case study hero. */
export function EcgTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-[72px] w-full sm:h-[96px] lg:h-[120px] ${className}`}
    >
      <path
        className="fill-none stroke-rock/60 [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] motion-safe:[stroke-dasharray:2400] motion-safe:[stroke-dashoffset:2400] motion-safe:animate-[ecg-draw_2.8s_cubic-bezier(0.4,0,0.2,1)_0.3s_forwards]"
        d="M0,70 L280,70 L310,70 L322,52 L334,84 L346,70 L420,70 L440,66 L456,70 L560,70 L588,70 L600,14 L614,106 L628,70 L700,70 L724,62 L740,70 L900,70 L928,70 L940,52 L952,84 L964,70 L1120,70 L1440,70"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[ecg-pulse_0.6s_ease_2.6s_forwards]"
        cx="607"
        cy="60"
        r="4"
      />
    </svg>
  );
}