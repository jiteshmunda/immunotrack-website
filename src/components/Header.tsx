"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navigation from "./Navigation";
import logo from "@/assets/images/logo.png";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          
          <Link href="/">
            <Image
               src={logo}
              alt="ImmunoTrack"
              width={140}
              height={44}
              priority
              className="header-logo"
            />
          </Link>

          <nav className="desktop-nav">
           <Navigation />
          </nav>

          <div className="desktop-cta">
            <Link href="/contact" className="cta-btn">
              Request Access 
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
           <Navigation />
           <Link href="/contact" className="mobile-cta-btn">
              Request Access
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}