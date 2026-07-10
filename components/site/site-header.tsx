"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, CTA, type NavItem } from "@/config/nav";
import { cn } from "@/lib/utils";

/** Reference: hero section design inspiration — Omega-style header */
const NAV_LINK =
  "cursor-pointer rounded-full px-3 py-1.5 text-[0.8125rem] font-medium text-chocolate/80 transition-colors duration-200 hover:text-chocolate";
const NAV_LINK_ACTIVE = "text-chocolate";

function HeaderLogo() {
  return (
    <Link
      href="/"
      aria-label="AI Please — home"
      className="inline-flex shrink-0 items-center gap-3"
    >
      <Image
        src="/brand/aiplease-mark-transparent.png"
        alt=""
        width={44}
        height={44}
        className="size-11 shrink-0"
        priority
      />
      <span className="font-sans text-xl font-bold tracking-[-0.02em] text-chocolate">
        aiplease
      </span>
    </Link>
  );
}

type DropdownProps = {
  item: NavItem;
  isActive: boolean;
};

function DesktopDropdown({ item, isActive }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const clearHoverTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const openMenu = useCallback(() => {
    clearHoverTimeout();
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    clearHoverTimeout();
    setOpen(false);
  }, []);

  const delayedClose = useCallback(() => {
    clearHoverTimeout();
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, closeMenu]);

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={delayedClose}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          NAV_LINK,
          "inline-flex items-center gap-1",
          isActive && NAV_LINK_ACTIVE,
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn(
            "size-3.5 transition-transform duration-150",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        ref={menuRef}
        id={menuId}
        role="menu"
        className={cn(
          "absolute left-1/2 top-full z-50 mt-2 min-w-[240px] -translate-x-1/2 rounded-xl border border-border bg-white p-2 shadow-lg",
          "transition-all duration-150",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        {item.items?.map((subItem) => (
          <Link
            key={subItem.href}
            href={subItem.href}
            role="menuitem"
            onClick={closeMenu}
            className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm text-chocolate/80 transition-colors hover:bg-stone/60 hover:text-chocolate"
          >
            <span className="font-medium">{subItem.label}</span>
            {subItem.desc && (
              <span className="mt-0.5 block text-xs text-muted">
                {subItem.desc}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-1 lg:flex"
    >
      {NAV.filter((item) => item.enabled !== false).map((item) =>
        item.items ? (
          <DesktopDropdown
            key={item.label}
            item={item}
            isActive={isActive(item.href)}
          />
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              NAV_LINK,
              isActive(item.href) && NAV_LINK_ACTIVE,
            )}
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
      setExpanded(null);
    }
  }, [pathname, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t border-border bg-white lg:hidden">
      <nav className="p-6">
        <ul className="space-y-1">
          {NAV.filter((item) => item.enabled !== false).map((item) => (
            <li key={item.label}>
              {item.items ? (
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded((prev) =>
                        prev === item.label ? null : item.label,
                      )
                    }
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-base font-medium",
                      isActive(item.href)
                        ? "text-chocolate"
                        : "text-chocolate/75",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform",
                        expanded === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  {expanded === item.label && (
                    <ul className="ml-3 space-y-1 border-l border-border pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            onClick={onClose}
                            className="block cursor-pointer py-2 text-sm text-muted hover:text-chocolate"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block cursor-pointer rounded-lg px-3 py-3 text-base font-medium",
                    isActive(item.href)
                      ? "text-chocolate"
                      : "text-chocolate/75",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-16 bg-white",
          scrolled && "border-b border-border/80",
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 lg:px-8">
          <HeaderLogo />

          <div className="flex items-center gap-6">
            <DesktopNav />
            <Link
              href={CTA.href}
              className="hidden cursor-pointer items-center justify-center rounded-full bg-chocolate px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-chocolate/90 sm:inline-flex"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="inline-flex size-10 cursor-pointer items-center justify-center text-chocolate lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}