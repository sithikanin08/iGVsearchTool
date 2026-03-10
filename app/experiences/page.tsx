"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroParticleBackground from "../components/HeroParticleBackground";
import Testimonials from "../components/Testimonials";

export default function ExperiencesPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen" style={{ background: "#ffffff" }}>
      <Navbar />

      {/* ── Hero Section ──────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          backgroundColor: "#0F172A",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#0f172a_100%)]" />
        <HeroParticleBackground />

        <div
          className="relative z-10 mx-auto px-6 sm:px-10 flex items-center justify-center"
          style={{
            maxWidth: "1280px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-3xl flex flex-col items-center"
          >
            <span
              className="block text-[13px] font-bold tracking-[0.25em] text-[#00d4ff] uppercase mb-4"
            >
              Volunteer Voices
            </span>
            <h1
              className="text-[42px] sm:text-[56px] font-extrabold text-[#ffffff] tracking-tight leading-[1.1] mb-6"
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              Real Stories of <span className="bg-gradient-to-r from-[#037ef3] via-[#00d4ff] to-[#037ef3] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Global Impact</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.7)] leading-relaxed mx-auto max-w-[600px]">
              Discover how young people from around the world are changing lives and transforming themselves through volunteering in Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Section ────────────────────────── */}
      <section style={{ paddingTop: "60px", paddingBottom: "80px", position: "relative" }}>
        <div
          className="relative z-10 mx-auto"
          style={{
            maxWidth: "1280px",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
          }}
        >
          <Testimonials animateOnScroll hideHeader />
        </div>
      </section>

      <Footer />
    </main>
  );
}
