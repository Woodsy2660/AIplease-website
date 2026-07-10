"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";
import { primaryNav } from "@/lib/site";
import { Wordmark } from "@/components/ui/wordmark";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change (only when pathname actually changes)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-canvas transition-shadow duration-300",
        scrolled || open ? "shadow-[0_1px_0_var(--border)]" : "shadow-none"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8 xl:max-w-6xl"
      >
        {/* Logo / Wordmark */}
        <Link href="/" aria-label="AI Please — home" className="shrink-0">
          <Wordmark />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-1 flex-row">
              {primaryNav.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm text-ink-soft hover:text-ink data-[state=open]:text-ink">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[420px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base font-medium text-ink">
                                {item.label}
                              </p>
                              <p className="text-muted text-sm mt-1">
                                Explore our {item.label.toLowerCase()} offerings.
                              </p>
                            </div>
                            <Button href="/contact" size="sm" className="mt-8">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.children.map((subItem) => (
                              <NavigationMenuLink
                                key={subItem.href}
                                href={subItem.href}
                                className="flex flex-row justify-between items-center hover:bg-sand py-2.5 px-3 rounded-xl transition-colors"
                              >
                                <div className="flex flex-col gap-0.5">
                                  <span className="font-medium text-ink">
                                    {subItem.label}
                                  </span>
                                  {subItem.description && (
                                    <span className="text-xs text-muted leading-relaxed">
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                                <MoveRight className="w-4 h-4 text-muted shrink-0 ml-2" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors",
                          pathname === item.href ||
                            (item.href !== "/" && pathname.startsWith(item.href))
                            ? "font-medium text-ink"
                            : "text-ink-soft hover:text-ink"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t border-border bg-canvas px-4 pb-10 pt-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {primaryNav.map((item) => (
              <div key={item.label}>
                <div className="flex flex-col gap-2">
                  {item.children ? (
                    <>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-lg font-medium text-ink">
                          {item.label}
                        </span>
                      </div>
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex justify-between items-center py-2 pl-4 border-l border-border"
                        >
                          <span className="text-ink-soft">{subItem.label}</span>
                          <MoveRight className="w-4 h-4 text-muted" />
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center py-2"
                    >
                      <span className="text-lg font-medium text-ink">
                        {item.label}
                      </span>
                      <MoveRight className="w-4 h-4 text-muted" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact" size="lg" className="w-full">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
