"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Experiences", href: "/experiences" },
  { name: "OPs", href: "/ops" },
  { name: "Our Team", href: "/team" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1000px] top-3 sm:top-6"
      >
        {/* Main navbar pill */}
        <div
          className={`relative backdrop-blur-2xl border border-white/50 rounded-full flex items-center justify-between transition-all duration-300 overflow-hidden ${isScrolled
            ? "bg-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]"
            : "bg-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]"
            }`}
          style={{
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            backdropFilter: "blur(24px) saturate(180%)",
            paddingLeft: "clamp(12px, 4vw, 80px)",
            paddingRight: "clamp(12px, 4vw, 80px)",
            paddingTop: "6px",
            paddingBottom: "6px",
          }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
            }}
          />
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center shrink-0">
            <Image
              src="/aiesec in sliit - blue.png"
              alt="AIESEC in SLIIT"
              width={220}
              height={60}
              className="h-8 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="relative z-10 hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#1e293b] font-medium text-base hover:text-[#037ef3] transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-10 md:hidden w-9 h-9 flex items-center justify-center text-[#1e293b] hover:bg-white/40 rounded-full transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Mobile Dropdown (slides down below navbar) ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div
                className="backdrop-blur-2xl border border-white/50 rounded-2xl py-4 px-4"
                style={{
                  background: "rgba(255,255,255,0.35)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-5 py-4 text-[#1e293b] font-medium text-[15px] text-center rounded-xl hover:bg-white/50 transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay to close menu when tapping outside */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
