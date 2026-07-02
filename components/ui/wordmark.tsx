import Image from "next/image";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  inverted?: boolean;
};

/** Brand mark + lowercase "aiplease" wordmark with the burnt-sienna accent dot. */
export function Wordmark({ className, inverted }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand/aiplease-mark-stone-t.png"
        alt=""
        width={28}
        height={28}
        className="size-7 shrink-0"
        priority
      />
      <span
        className={cn(
          "font-display text-xl font-semibold lowercase tracking-tight",
          inverted ? "text-canvas" : "text-ink",
          className,
        )}
      >
        aiplease<span className="text-accent">.</span>
      </span>
    </span>
  );
}
