"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react"

const navigation = [
  { label: "Find jobs", href: "#jobs" },
  { label: "Programs", href: "#courses" },
  { label: "Career services", href: "#services" },
  { label: "Success stories", href: "#stories" },
  { label: "Blog", href: "https://placements.group/Blog" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#home" aria-label="Placement Group home">
          <span className="brand-mark" aria-hidden="true">
            <Sparkles size={22} strokeWidth={2.4} />
          </span>
          <span className="brand-copy">
            <strong>Placement Group</strong>
            <span>Professional Development</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Get Started <ArrowUpRight size={16} />
          </a>
        </nav>

        <a className="header-cta" href="#contact">
          Get Started <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  )
}
