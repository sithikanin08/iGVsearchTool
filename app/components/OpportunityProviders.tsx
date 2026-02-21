"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionParticleBackground from "./SectionParticleBackground";

// OP logos placeholder data - replace with actual OP logos
const opportunityProviders = [
  { id: 1, name: "OP 1", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+1" },
  { id: 2, name: "OP 2", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+2" },
  { id: 3, name: "OP 3", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+3" },
  { id: 4, name: "OP 4", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+4" },
  { id: 5, name: "OP 5", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+5" },
  { id: 6, name: "OP 6", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+6" },
  { id: 7, name: "OP 7", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+7" },
  { id: 8, name: "OP 8", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+8" },
  { id: 9, name: "OP 9", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+9" },
  { id: 10, name: "OP 10", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+10" },
  { id: 11, name: "OP 11", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+11" },
  { id: 12, name: "OP 12", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+12" },
];

export default function OpportunityProviders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ops" className="relative overflow-hidden hero-gradient" ref={ref}>
      {/* Background overlay - exact match to Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f1f3e9]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />
      {/* Particle background - intensity 0.2 (gradual fade from Experiences) */}
      <SectionParticleBackground intensity={0.2} />

      {/* Main section content */}
      <div className="relative" style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        {/* Content container */}
        <div
          className="relative z-10 w-full"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(40px, 8vw, 96px)",
            paddingRight: "clamp(40px, 8vw, 96px)",
          }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ marginBottom: "0" }}
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#037ef3",
                marginBottom: "8px",
              }}
            >
              Our Partners
            </motion.span>

            {/* Heading + View All row */}
            <div className="flex items-end justify-between gap-4">
              <h2
                style={{
                  fontSize: "clamp(38px, 4vw, 54px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#1e293b",
                  maxWidth: "900px",
                }}
              >
                Opportunity
                <br />
                <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
                  Providers
                </span>
              </h2>
              <Link
                href="/ops"
                className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 group shrink-0"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#037ef3",
                  paddingBottom: "6px",
                }}
              >
                View All Partners
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Subtext */}
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(30, 41, 59, 0.7)",
                marginTop: "12px",
                whiteSpace: "nowrap",
              }}
            >
              Meet the organizations that make global volunteer experiences possible in Sri&nbsp;Lanka.
            </p>
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden"
            style={{ marginTop: "40px" }}
          >
            {/* Gradient Overlays - matched to actual rendered background */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10" style={{ background: "linear-gradient(to right, #e8ead8, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10" style={{ background: "linear-gradient(to left, #e8ead8, transparent)" }} />

            {/* First Row - Moving Right */}
            <div className="flex marquee" style={{ marginBottom: "16px" }}>
              <div className="flex items-center gap-5 sm:gap-6">
                {[...opportunityProviders, ...opportunityProviders].map((op, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-500 group cursor-pointer"
                    style={{
                      width: "160px",
                      height: "88px",
                      borderRadius: "16px",
                      background: "rgba(255, 255, 255, 0.5)",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.85)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.08)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.03)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src={op.logo}
                      alt={op.name}
                      className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500"
                      style={{ padding: "12px", filter: "grayscale(100%)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)"; }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="flex" style={{ animation: "marquee 30s linear infinite reverse" }}>
              <div className="flex items-center gap-5 sm:gap-6">
                {[...opportunityProviders.slice().reverse(), ...opportunityProviders.slice().reverse()].map((op, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-500 group cursor-pointer"
                    style={{
                      width: "160px",
                      height: "88px",
                      borderRadius: "16px",
                      background: "rgba(255, 255, 255, 0.5)",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.85)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.08)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.03)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <img
                      src={op.logo}
                      alt={op.name}
                      className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500"
                      style={{ padding: "12px", filter: "grayscale(100%)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)"; }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action - refined editorial style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              marginTop: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <p style={{ color: "rgba(30, 41, 59, 0.5)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.02em" }}>
              Interested in becoming an Opportunity Provider?
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-3 group relative"
              >
                <span className="relative z-10">Partner With Us</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
