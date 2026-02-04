"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Projects", href: "/projects" },
    { name: "Experiences", href: "/experiences" },
    { name: "Opportunity Providers", href: "/ops" },
    { name: "Our Team", href: "/team" },
  ],
  projects: [
    { name: "Aquatica", href: "/projects#aquatica" },
    { name: "Heart Beat", href: "/projects#heartbeat" },
    { name: "Global Classroom", href: "/projects#globalclassroom" },
    { name: "Roots", href: "/projects#roots" },
    { name: "On The Map", href: "/projects#onthemap" },
    { name: "Raise Your Voice", href: "/projects#raiseyourvoice" },
  ],
  resources: [
    { name: "Apply Now", href: "https://aiesec.org" },
    { name: "AIESEC International", href: "https://aiesec.org" },
    { name: "AIESEC Sri Lanka", href: "https://aiesec.lk" },
    { name: "SDG Goals", href: "https://sdgs.un.org/goals" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#234934] text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-white font-bold text-xl">AIESEC</span>
                <span className="text-[#037ef3] font-bold text-xl ml-1">in</span>
                <svg
                  className="h-6 w-10 ml-1"
                  viewBox="0 0 60 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="white">
                    <path d="M5 28V15a2 2 0 014 0v13H5zM7 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M15 28V18a2 2 0 014 0v10h-4zM17 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M25 28V12a2 2 0 014 0v16h-4zM27 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M35 28V16a2 2 0 014 0v12h-4zM37 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M45 28V20a2 2 0 014 0v8h-4zM47 17a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M55 28V14a2 2 0 014 0v14h-4zM57 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  </g>
                </svg>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering youth through cross-cultural exchanges and leadership
              development. Creating positive impact in Sri Lanka and beyond.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/aiesecsliit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#037ef3] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/aiesecsliit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#037ef3] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/aiesecsliit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#037ef3] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/aiesecsliit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#037ef3] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@aiesecsliit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#037ef3] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-200 inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="https://aiesec.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#037ef3] rounded-full font-semibold hover:bg-[#0562c2] transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} AIESEC in SLIIT. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* AIESEC Network Badge */}
      <div className="bg-[#1a3626] py-4">
        <div className="container-custom text-center">
          <p className="text-white/50 text-xs">
            Part of <span className="text-white/70 font-medium">AIESEC International</span> — 
            The world's largest youth-run organization present in 100+ countries
          </p>
        </div>
      </div>
    </footer>
  );
}
