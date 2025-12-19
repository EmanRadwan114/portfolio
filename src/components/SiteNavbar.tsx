"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useTheme } from "@/contexts/ThemeContext";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";
import Container from "./ui/Container";

const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contacts",
    link: "#contacts",
  },
];

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="w-full py-2">
      <Container className="fixed inset-x-0 top-1 z-40 w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="flex items-center justify-center border bg-background text-primary shadow-md"
            >
              {resolvedTheme === "dark" ? (
                <IconSun stroke={2} size={38} className="p-1.5" />
              ) : (
                <IconMoon stroke={2} size={38} className="p-1.5" />
              )}
            </NavbarButton>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <NavbarButton
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="w-fit flex items-center justify-center border bg-background text-primary shadow-md"
              >
                {resolvedTheme === "dark" ? (
                  <IconSun stroke={2} size={38} className="p-1.5" />
                ) : (
                  <IconMoon stroke={2} size={38} className="p-1.5" />
                )}
              </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </Container>
      {/* Navbar */}
    </header>
  );
}
