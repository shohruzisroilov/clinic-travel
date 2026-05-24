"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const languages: Lang[] = ["UZ", "RU", "EN"];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.clinics, href: "#clinics" },
    { label: t.nav.ratings, href: "#ratings" },
    { label: t.nav.tours, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? "bg-white border-b border-slate-200 shadow-sm" : "bg-white border-b border-slate-100"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-7 h-7 bg-green-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM7 4h2v3h3v2H9v3H7V9H4V7h3V4z"/>
              </svg>
            </div>
            <div className="flex items-baseline gap-1 flex-shrink-0">
              <span className="font-bold text-slate-900 text-sm">Clinic</span>
              <span className="font-bold text-green-600 text-sm">Travel</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-[13px] font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — desktop */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center border border-slate-200 overflow-hidden">
              {languages.map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-label={`Switch language to ${l}`}
                  aria-pressed={lang === l}
                  className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    i < languages.length - 1 ? "border-r border-slate-200" : ""
                  } ${lang === l ? "bg-green-600 text-white" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-[13px] font-semibold transition-colors whitespace-nowrap"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Tablet: lang + burger */}
          <div className="hidden lg:flex xl:hidden items-center gap-2 flex-shrink-0">
            <div className="flex items-center border border-slate-200 overflow-hidden">
              {languages.map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-label={`Switch language to ${l}`}
                  aria-pressed={lang === l}
                  className={`px-2 py-1.5 text-xs font-semibold transition-colors ${
                    i < languages.length - 1 ? "border-r border-slate-200" : ""
                  } ${lang === l ? "bg-green-600 text-white" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              className="p-2 text-slate-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-slate-100 mt-1">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-label={`Switch language to ${l}`}
                  aria-pressed={lang === l}
                  className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${
                    lang === l
                      ? "bg-green-600 text-white border-green-600"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {l}
                </button>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="ml-auto bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 text-xs font-semibold transition-colors"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
