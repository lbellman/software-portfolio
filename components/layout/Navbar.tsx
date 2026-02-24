"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Get in Touch", href: "#contact", isPrimary: true },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Primary"
        className="border-b border-border/60 bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            onClick={closeMenu}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Lindsey Bellman
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLinks items={navItems} pathname={pathname} />
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={handleToggle}
          >
            <span aria-hidden="true" className="mr-2">
              {isOpen ? "Close" : "Menu"}
            </span>
            <span className="flex flex-col gap-[3px]" aria-hidden="true">
              <span
                className={`h-[1.5px] w-4 rounded-full bg-current transition-transform ${
                  isOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-4 rounded-full bg-current transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] w-4 rounded-full bg-current transition-transform ${
                  isOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile navigation panel */}
        <div
          id="mobile-primary-navigation"
          className={`md:hidden ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } transition-opacity`}
        >
          <div className="border-t border-border/60 bg-background/95 px-4 pb-4 pt-2 shadow-md">
            <NavLinks
              items={navItems}
              pathname={pathname}
              isMobile
              onItemClick={closeMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

type NavLinksProps = {
  items: NavItem[];
  pathname: string | null;
  isMobile?: boolean;
  onItemClick?: () => void;
};

function NavLinks({
  items,
  pathname,
  isMobile = false,
  onItemClick,
}: NavLinksProps) {
  return (
    <ul
      className={`flex ${isMobile ? "flex-col gap-1" : "items-center gap-6"}`}
    >
      {items.map((item) => {
        const isCurrent = pathname === item.href;

        if (item.isPrimary) {
          return (
            <li key={item.href}>
              <Button
                asChild
                size={isMobile ? "sm" : "lg"}
                className="rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={onItemClick}
                >
                  {item.label}
                </Link>
              </Button>
            </li>
          );
        }

        return (
          <li key={item.href}>
            <Button
              asChild
              variant="nav"
              size={isMobile ? "sm" : "default"}
              className={`px-0 text-xs tracking-[0.24em] ${
                isCurrent ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={onItemClick}
              >
                {item.label}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
