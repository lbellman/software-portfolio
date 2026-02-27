"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "#about" },
  { label: "Get in Touch", href: "/#get-in-touch", isPrimary: true },
];

function Navbar() {
  const pathname = usePathname();

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
        className="backdrop-blur-lg"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center  ">
              <Image
                src="/linds-logo.png"
                alt="Lindsey Bellman"
                width={80}
                height={80}
                className="h-36 w-36 shrink-0 object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLinks items={navItems} pathname={pathname} />
          </div>

          {/* Mobile: shadcn dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-border/70 bg-background/80 text-muted-foreground hover:text-foreground"
                aria-label="Open navigation menu"
              >
                <MenuIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="min-w-48 rounded-lg border-border/60 bg-background/95 backdrop-blur-md"
            >
              {navItems.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={
                        item.isPrimary
                          ? "rounded-full bg-primary px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground focus:bg-primary/90"
                          : "text-xs tracking-[0.2em]"
                      }
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
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
