/** Harvest tally line — signature motif for Agri-Mate case study hero. */
export function TallyTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-[56px] w-full sm:h-[72px] lg:h-[96px] ${className}`}
    >
      <path
        className="fill-none stroke-rock/60 [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] motion-safe:[stroke-dasharray:2400] motion-safe:[stroke-dashoffset:2400] motion-safe:animate-[ecg-draw_2.8s_cubic-bezier(0.4,0,0.2,1)_0.3s_forwards]"
        d="M0,104 L120,104 L150,96 L210,96 L240,84 L330,84 L360,88 L420,88 L450,70 L540,70 L570,74 L640,74 L668,54 L760,54 L788,58 L860,58 L888,40 L980,40 L1010,44 L1090,44 L1118,28 L1210,28 L1240,32 L1320,32 L1348,20 L1440,20"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[ecg-pulse_0.6s_ease_2.6s_forwards]"
        cx="1348"
        cy="20"
        r="4"
      />
    </svg>
  );
}