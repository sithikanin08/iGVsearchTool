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
          className={`bg-white/20 backdrop-blur-xl border border-white/40 rounded-[42px] flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08),0_4px_16px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ${isScrolled ? "bg-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_20px_rgba(255,255,255,0.15)_inset]" : ""}`}
          style={{
            WebkitBackdropFilter: "blur(20px)",
            paddingLeft: "80px",
            paddingRight: "80px",
            paddingTop: "6px",
            paddingBottom: "6px",
          }}
        >
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center shrink-0">
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
          <nav className="hidden md:block">
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
            className="md:hidden p-2 text-[#234934] hover:bg-white/30 rounded-full transition-colors"
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
              className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.1),0_4px_16px_rgba(255,255,255,0.1)_inset]"
              style={{ WebkitBackdropFilter: "blur(20px)" }}
            >
              <ul className="flex flex-col gap-1">
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
                      className="block px-4 py-3 text-[#234934] font-medium hover:bg-white/40 rounded-xl transition-all duration-200"
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
