"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/site";
import { Wordmark } from "@/components/ui/wordmark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors",
      active ? "text-ink font-medium" : "text-ink-soft hover:text-ink",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[84rem] items-center justify-between px-5 sm:px-8 lg:h-20"
      >
        <Link href="/" aria-label="AI Please — home" className="shrink-0">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={linkClass(isActive(item.href))}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className="size-3.5 transition-transform duration-300 group-hover:rotate-180"
                  />
                </Link>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="w-[22rem] rounded-2xl border border-border bg-canvas p-2 shadow-[0_24px_70px_-30px_rgba(28,26,23,0.45)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-sand"
                      >
                        <div className="text-sm font-medium text-ink">
                          {child.label}
                        </div>
                        {child.description ? (
                          <div className="mt-0.5 text-xs leading-relaxed text-muted">
                            {child.description}
                          </div>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(isActive(item.href))}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-canvas px-5 pb-10 pt-4 sm:px-8 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="divide-y divide-border">
          {primaryNav.map((item) => (
            <li key={item.label} className="py-1">
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-lg text-ink"
              >
                {item.label}
              </Link>
              {item.children ? (
                <ul className="mb-2 ml-1 space-y-1 border-l border-border pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 text-sm text-ink-soft"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href="/contact" size="lg" className="w-full">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </header>
  );
}
