/** Database-to-agents flow line — signature motif for Pacific Fertiliser hero. */
export function DataFlowTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 130"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-[56px] w-full sm:h-[72px] lg:h-[96px] ${className}`}
    >
      <rect
        x="120"
        y="48"
        width="56"
        height="34"
        rx="4"
        className="fill-none stroke-rock/60 [stroke-width:1.5]"
      />
      <path
        className="fill-none stroke-rock/60 [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] motion-safe:[stroke-dasharray:2400] motion-safe:[stroke-dashoffset:2400] motion-safe:animate-[ecg-draw_2.8s_cubic-bezier(0.4,0,0.2,1)_0.3s_forwards]"
        d="M176,65 L560,65 L620,65 L700,30 L1180,30 M620,65 L1180,65 M620,65 L700,100 L1180,100"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[data-node_0.6s_ease_2.2s_forwards]"
        cx="1180"
        cy="30"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[data-node_0.6s_ease_2.5s_forwards]"
        cx="1180"
        cy="65"
        r="4"
      />
      <circle
        className="fill-sky motion-safe:opacity-0 motion-safe:animate-[data-node_0.6s_ease_2.8s_forwards]"
        cx="1180"
        cy="100"
        r="4"
      />
    </svg>
  );
}