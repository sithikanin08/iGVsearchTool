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
    href: "https://www.facebook.com/AIESECSriLanka",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aiesec_in_sliit",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aiesec-in-sliit",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
];

const logos = [
  { src: "/aiesec%20in%20sliit%20-%20blue.png", alt: "AIESEC in SLIIT" },
  { src: "/GVLOgo.png", alt: "Global Volunteer" },
  { src: "/AIESECLOGO.png", alt: "AIESEC" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      style={{ background: "#0f172a", color: "white" }}
    >
      {/* ── CTA Banner ─────────────────────────────────── */}
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
            paddingLeft: "clamp(20px, 6vw, 96px)",
            paddingRight: "clamp(20px, 6vw, 96px)",
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
            <a href="https://expa.aiesec.org" target="_blank" rel="noopener noreferrer">
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

      {/* ── Logo Strip ─────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(20px, 6vw, 96px)",
          paddingRight: "clamp(20px, 6vw, 96px)",
          paddingTop: "48px",
          paddingBottom: "0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {logos.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              style={{ height: "48px", objectFit: "contain", display: "block" }}
            />
          ))}
        </motion.div>

        {/* Thin divider below logos */}
        <div
          style={{
            height: "1px",
            marginTop: "40px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
      </div>

      {/* ── Main Grid ──────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(20px, 6vw, 96px)",
          paddingRight: "clamp(20px, 6vw, 96px)",
          paddingTop: "40px",
          paddingBottom: "48px",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* ── Contact & Social Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Get in Touch
            </h4>

            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "24px", maxWidth: "280px" }}>
              Empowering youth through cross-cultural exchanges and leadership development.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
              <a href="mailto:dinidisenanayake@aiesec.net" className="flex items-center gap-3 group transition-colors duration-200"
                style={{ textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.querySelector("span")!.style.color = "white"}
                onMouseLeave={e => e.currentTarget.querySelector("span")!.style.color = "rgba(255,255,255,0.55)"}
              >
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(3,126,243,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={13} style={{ color: "#00d4ff" }} />
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}>dinidisenanayake@aiesec.net</span>
              </a>
              <a href="tel:+94766388408" className="flex items-center gap-3 group transition-colors duration-200"
                style={{ textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.querySelector("span")!.style.color = "white"}
                onMouseLeave={e => e.currentTarget.querySelector("span")!.style.color = "rgba(255,255,255,0.55)"}
              >
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(3,126,243,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={13} style={{ color: "#00d4ff" }} />
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}>+94 76 638 8408</span>
              </a>
              <div className="flex items-center gap-3">
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(3,126,243,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={13} style={{ color: "#00d4ff" }} />
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>SLIIT, Malabe, Sri Lanka</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "#037ef3";
                    (e.currentTarget as HTMLElement).style.borderColor = "#037ef3";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(3,126,243,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-all duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                  >
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(3,126,243,0.4)", flexShrink: 0 }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Projects Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Our Projects
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-all duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                  >
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(3,126,243,0.4)", flexShrink: 0 }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Resources Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#037ef3", marginBottom: "20px" }}>
              Resources
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-all duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
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
                padding: "14px 16px",
                borderRadius: "12px",
                background: "rgba(3,126,243,0.08)",
                border: "1px solid rgba(3,126,243,0.15)",
              }}
            >
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                Aligned with
              </p>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#00d4ff" }}>
                UN Sustainable Development Goals
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height: "1px",
            marginTop: "48px",
            marginBottom: "24px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
            © {currentYear} AIESEC in SLIIT. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; }}
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
