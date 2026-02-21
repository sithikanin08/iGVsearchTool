"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";

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
    { name: "Apply Now", href: "https://expa.aiesec.org", external: true },
    { name: "AIESEC International", href: "https://aiesec.org", external: true },
    { name: "AIESEC Sri Lanka", href: "https://aiesec.lk", external: true },
    { name: "SDG Goals", href: "https://sdgs.un.org/goals", external: true },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/aiesecsliit",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/aiesecsliit",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/aiesecsliit",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/aiesecsliit",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@aiesecsliit",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)", color: "white" }}
    >
      {/* CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
          paddingTop: "48px",
          paddingBottom: "48px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(40px, 8vw, 96px)",
            paddingRight: "clamp(40px, 8vw, 96px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.85, marginBottom: "8px" }}>
              Ready to make an impact?
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              Start Your Global Journey Today
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ flexShrink: 0 }}
          >
            <a
              href="https://expa.aiesec.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 group relative cursor-pointer"
                style={{
                  background: "white",
                  color: "#037ef3",
                  padding: "16px 36px",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <span>Apply Now</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(40px, 8vw, 96px)",
          paddingRight: "clamp(40px, 8vw, 96px)",
          paddingTop: "60px",
          paddingBottom: "48px",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* Logo */}
            <Link href="/" className="inline-block" style={{ marginBottom: "20px" }}>
              <div className="flex items-center gap-1">
                <span style={{ fontWeight: 800, fontSize: "20px", color: "white" }}>AIESEC</span>
                <span style={{ fontWeight: 800, fontSize: "20px", color: "#037ef3" }}>&nbsp;in SLIIT</span>
              </div>
            </Link>

            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: "28px", maxWidth: "280px" }}>
              Empowering youth through cross-cultural exchanges and leadership development. Creating positive impact in Sri Lanka and beyond.
            </p>

            {/* Contact mini info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {[
                { Icon: Mail, text: "igv@aiesec-sliit.org" },
                { Icon: Phone, text: "+94 11 234 5678" },
                { Icon: MapPin, text: "SLIIT, Malabe, Sri Lanka" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} style={{ color: "#037ef3", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "#037ef3";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-all duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Our Projects
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-all duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Resources
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-all duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    {link.name}
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>

            {/* SDG Badge */}
            <div
              style={{
                marginTop: "28px",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(3, 126, 243, 0.1)",
                border: "1px solid rgba(3, 126, 243, 0.2)",
              }}
            >
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Aligned with
              </p>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#037ef3" }}>
                UN Sustainable Development Goals
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            marginTop: "48px",
            marginBottom: "28px",
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            © {currentYear} AIESEC in SLIIT. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
            Part of{" "}
            <a
              href="https://aiesec.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
            >
              AIESEC International
            </a>{" "}
            — present in 100+ countries
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
