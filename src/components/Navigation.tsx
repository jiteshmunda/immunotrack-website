"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "For Clinicians", href: "/clinicians" },
  { name: "For Patients",   href: "/patients"   },
  { name: "About",          href: "/about"       },
  { name: "Help & Support", href: "/support"     },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`nav-link${isActive ? " nav-link--active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}