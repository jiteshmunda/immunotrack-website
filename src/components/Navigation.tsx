import Link from "next/link";

const navLinks = [
  { name: "For Clinicians", href: "/clinicians" },
  { name: "For Patients", href: "/patients" },
  { name: "About", href: "/about" },
  { name: "Help & Support", href: "/support" },
];

export default function Navigation() {
  return (
    <>
      {navLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="nav-link"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}