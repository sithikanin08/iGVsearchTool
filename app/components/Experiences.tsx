"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionParticleBackground from "./SectionParticleBackground";
import Testimonials from "./Testimonials";

export default function Experiences() {
  const ref = useRef(null);

  return (
    <section id="experiences" className="relative overflow-hidden" ref={ref}>
      {/* ── Testimonials ─────────────────────────────── */}
      <div style={{ paddingTop: "40px", paddingBottom: "60px", position: "relative" }}>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%)" }}
        />
        <SectionParticleBackground intensity={0.35} />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(20px, 6vw, 96px)",
            paddingRight: "clamp(20px, 6vw, 96px)",
          }}
        >
          <Testimonials />
        </div>
      </div>

      {/* Thin gradient glow divider - transition to next section */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.25), transparent)"
        }}
      />
    </section>
  );
}
