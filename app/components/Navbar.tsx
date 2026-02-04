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
        className="fixed left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1000px] top-5 sm:top-6"
      >
        <div
          className={`relative backdrop-blur-2xl border border-white/50 rounded-[42px] flex items-center justify-between transition-all duration-300 overflow-hidden ${
            isScrolled 
              ? "bg-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]" 
              : "bg-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]"
          }`}
          style={{
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            backdropFilter: "blur(24px) saturate(180%)",
            paddingLeft: "80px",
            paddingRight: "80px",
            paddingTop: "6px",
            paddingBottom: "6px",
          }}
        >
          {/* Subtle gradient overlay for depth */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
            }}
          />
          {/* Logo - Far Left */}
          <Link href="/" className="relative z-10 flex items-center shrink-0">
            <Image
              src="/aiesec in sliit - blue.png"
              alt="AIESEC in SLIIT"
              width={220}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links - Right Side */}
          <nav className="relative z-10 hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#234934] font-medium text-base hover:text-[#037ef3] transition-colors duration-200 whitespace-nowrap"
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
            className="relative z-10 md:hidden p-2 text-[#234934] hover:bg-white/40 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-40 w-[85%] max-w-[320px] md:hidden"
          >
            <div 
              className="relative bg-white/35 backdrop-blur-2xl border border-white/50 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden"
              style={{ 
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                backdropFilter: "blur(24px) saturate(180%)",
              }}
            >
              {/* Subtle gradient overlay */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
                }}
              />
              <ul className="relative z-10 flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-[#234934] font-medium hover:bg-white/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
