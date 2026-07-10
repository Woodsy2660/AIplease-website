/** Slalom wake line — signature motif for GCWSC case study hero. */
export function SlalomTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-[56px] w-full sm:h-[72px] lg:h-[96px] ${className}`}
    >
      <path
        className="fill-none stroke-rock/60 [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] motion-safe:[stroke-dasharray:2400] motion-safe:[stroke-dashoffset:2400] motion-safe:animate-[slalom-carve_2.8s_cubic-bezier(0.4,0,0.2,1)_0.3s_forwards]"
        d="M0,60 C60,60 100,60 150,60 C210,60 230,22 290,22 C350,22 370,98 430,98 C490,98 510,22 570,22 C630,22 650,98 710,98 C770,98 790,22 850,22 C910,22 930,98 990,98 C1050,98 1070,60 1130,60 C1230,60 1330,60 1440,60"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[slalom-buoy_0.5s_ease_0.7s_forwards]"
        cx="290"
        cy="38"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[slalom-buoy_0.5s_ease_1.05s_forwards]"
        cx="430"
        cy="82"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[slalom-buoy_0.5s_ease_1.4s_forwards]"
        cx="570"
        cy="38"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[slalom-buoy_0.5s_ease_1.75s_forwards]"
        cx="710"
        cy="82"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[slalom-buoy_0.5s_ease_2.1s_forwards]"
        cx="850"
        cy="38"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[slalom-buoy_0.5s_ease_2.45s_forwards]"
        cx="990"
        cy="82"
        r="4"
      />
    </svg>
  );
}