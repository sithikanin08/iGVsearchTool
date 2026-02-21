"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionParticleBackground from "./SectionParticleBackground";

// Experience data
const experiences = [
  {
    id: 1,
    name: "Maria Garcia",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    project: "Global Classroom",
    brief: "Teaching English to Sri Lankan students was the most fulfilling experience of my life. The connections I made transformed my perspective.",
    fullStory: "Coming to Sri Lanka through AIESEC was a life-changing decision. I spent 8 weeks teaching English to children in rural schools near Kandy. The warmth of the Sri Lankan people, the beauty of the country, and the impact I could make on these young minds exceeded all my expectations. I learned as much from my students as they learned from me. This experience shaped my career path towards international development, and I've made lifelong friends here.",
    duration: "8 weeks",
    year: "2024",
  },
  {
    id: 2,
    name: "Thomas Mueller",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    project: "Aquatica",
    brief: "Protecting Sri Lanka's marine life opened my eyes to the importance of ocean conservation and global environmental action.",
    fullStory: "As an environmental science student, Aquatica was the perfect project for me. I participated in coral reef monitoring, beach cleanups, and community education programs along the southern coast. The marine biodiversity in Sri Lanka is incredible, and working to protect it alongside local communities gave me practical experience that no classroom could provide. I'm now pursuing a career in marine conservation, directly inspired by this experience.",
    duration: "6 weeks",
    year: "2024",
  },
  {
    id: 3,
    name: "Priya Sharma",
    country: "India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    project: "Heart Beat",
    brief: "Healthcare outreach in Sri Lanka taught me the true meaning of community service and cross-cultural collaboration.",
    fullStory: "The Heart Beat project allowed me to combine my passion for healthcare with meaningful community impact. Conducting health awareness sessions and basic health camps in underserved areas was both challenging and rewarding. The resilience and gratitude of the communities we served inspired me deeply. Sri Lanka's healthcare challenges are universal, and this experience prepared me for a global health career.",
    duration: "8 weeks",
    year: "2023",
  },
  {
    id: 4,
    name: "Lucas Santos",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    project: "Roots",
    brief: "Planting trees and teaching sustainable farming connected me to nature and local communities like never before.",
    fullStory: "The Roots project was an incredible journey into environmental conservation. Working with local farmers to implement sustainable agricultural practices while participating in reforestation efforts gave me a deep appreciation for the connection between people and land. The knowledge I gained about organic farming and ecosystem restoration has influenced how I approach sustainability in my own country.",
    duration: "6 weeks",
    year: "2023",
  },
];

// Glassmorphic card style
// Experience Card Style - Solid, clean, Cyberpunk Inset alignment
const experienceCardStyle = {
  background: "#ffffff",
  borderRadius: "32px",
  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)", // Softer, more natural shadow
  border: "1px solid rgba(0,0,0,0.03)",
  overflow: "hidden",
  padding: "24px", // Inset Padding
};

interface Experience {
  id: number;
  name: string;
  country: string;
  image: string;
  project: string;
  brief: string;
  fullStory: string;
  duration: string;
  year: string;
}

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="relative overflow-hidden" ref={ref}>
      {/* Main section content */}
      <div style={{ paddingTop: "40px", paddingBottom: "60px", position: "relative" }}>
        {/* Background - matching About section */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%)" }}
        />
        {/* Particle background - intensity 0.35 (gradual fade from Projects) */}
        <SectionParticleBackground intensity={0.35} />

        {/* Content container */}
        <div
          className="relative z-10"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(40px, 8vw, 96px)",
            paddingRight: "clamp(40px, 8vw, 96px)",
          }}
        >
          {/* Section Header */}
          <div style={{ marginBottom: "0" }}>
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                display: "block",
                fontSize: "13px",
                letterSpacing: "0.25em",
                color: "#037ef3",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Volunteer Stories
            </motion.span>

            {/* Heading + View All row */}
            <div className="flex items-end justify-between gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(38px, 4.5vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  maxWidth: "880px",
                  color: "#1e293b",
                }}
              >
                Experiences That Matter
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="shrink-0"
              >
                <Link
                  href="/experiences"
                  className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 group"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#037ef3",
                    paddingBottom: "6px",
                  }}
                >
                  View All Experiences
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Editorial Story Rail - Horizontal Scroll */}
          <div
            className="overflow-x-auto pb-8 -mx-6 px-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              marginTop: "32px",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                gridAutoColumns: "minmax(320px, 380px)",
                gap: "32px",
              }}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onClick={() => setSelectedExperience(experience)}
                  className="cursor-pointer group"
                  whileHover={{ y: -8 }}
                >
                  {/* Card */}
                  <div
                    style={experienceCardStyle}
                    className="relative group-hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Portrait Image - Rounded for Inset Look */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "240px",
                        overflow: "hidden",
                        borderRadius: "16px", // Rounded corners for inset image
                      }}
                    >
                      <img
                        src={experience.image}
                        alt={experience.name}
                        className="group-hover:scale-105 transition-transform duration-700"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center top"
                        }}
                      />
                      {/* Gradient Overlay for text contrast if needed, or just aesthetic */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-24"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
                        }}
                      />

                      {/* Country Pill - overlapping image bottom */}
                      <span
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 600,
                          background: "rgba(255, 255, 255, 0.95)",
                          color: "#0F172A",
                          backdropFilter: "blur(8px)",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                        }}
                      >
                        {experience.country}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ paddingTop: "24px" }}>
                      {/* Name */}
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: 800,
                          color: "#1e293b", // Slate 800
                          marginBottom: "4px",
                          letterSpacing: "-0.01em"
                        }}
                      >
                        {experience.name}
                      </h3>

                      {/* Project Name */}
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#037ef3", // GAPLS Blue
                          marginBottom: "16px",
                          letterSpacing: "0.02em",
                          textTransform: "uppercase"
                        }}
                      >
                        {experience.project}
                      </p>

                      {/* Story Snippet - Editorial style */}
                      <p
                        className="line-clamp-3"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.7,
                          color: "#475569", // Slate 600
                          marginBottom: "24px"
                        }}
                      >
                        {experience.brief}
                      </p>

                      {/* CTA: Read Story - Distinct Pill Button */}
                      <span
                        className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 relative overflow-hidden"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#037ef3",
                          padding: "10px 20px",
                          background: "rgba(3, 126, 243, 0.08)",
                          borderRadius: "99px",
                          width: "fit-content"
                        }}
                      >
                        Read Story
                        <ArrowRight size={16} className="relative z-10" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thin gradient glow divider - transition to next section */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.25), transparent)"
        }}
      />

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(16px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Close Button - Inside the card */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group"
                style={{
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                }}
              >
                <X size={18} className="text-slate-500 transition-transform group-hover:rotate-90 group-hover:text-slate-800" />
              </button>

              {/* Content with generous padding */}
              <div style={{ padding: "clamp(40px, 5vw, 56px) clamp(36px, 4.5vw, 52px)" }}>

                {/* Profile Header */}
                <div className="flex items-center gap-5" style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <div className="shrink-0">
                    <img
                      src={selectedExperience.image}
                      alt={selectedExperience.name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100"
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        color: "#0f172a",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        marginBottom: "4px",
                      }}
                    >
                      {selectedExperience.name}
                    </h3>
                    <p style={{ fontSize: "15px", color: "#037ef3", fontWeight: 600 }}>
                      {selectedExperience.country} • {selectedExperience.project}
                    </p>
                  </div>
                </div>

                {/* THEIR STORY Section */}
                <div style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <h4
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#0f172a",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "16px",
                    }}
                  >
                    Their Story
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.9,
                      color: "#374151",
                    }}
                  >
                    {selectedExperience.fullStory}
                  </p>
                </div>

                {/* PROJECT & COUNTRY Section */}
                <div className="grid grid-cols-2 gap-8" style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <div>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0f172a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "12px",
                      }}
                    >
                      Project
                    </h4>
                    <p className="text-[15px] text-slate-600 font-medium">
                      {selectedExperience.project}
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0f172a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "12px",
                      }}
                    >
                      Country
                    </h4>
                    <p className="text-[15px] text-slate-600 font-medium">
                      {selectedExperience.country}
                    </p>
                  </div>
                </div>

                {/* DURATION & YEAR Section */}
                <div className="grid grid-cols-2 gap-8" style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <div>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0f172a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "12px",
                      }}
                    >
                      Duration
                    </h4>
                    <p className="text-[15px] text-slate-600 font-medium">
                      {selectedExperience.duration}
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#0f172a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "12px",
                      }}
                    >
                      Year
                    </h4>
                    <p className="text-[15px] text-slate-600 font-medium">
                      {selectedExperience.year}
                    </p>
                  </div>
                </div>

                {/* Read More Stories Button */}
                <Link
                  href="/experiences"
                  className="relative w-full overflow-hidden rounded-xl transition-all duration-300 group/btn flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                  style={{
                    padding: "18px 32px",
                    background: "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 0%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <span
                    className="relative z-10 flex items-center justify-center gap-2 font-bold text-white tracking-wide"
                    style={{ fontSize: "16px" }}
                  >
                    Read More Stories
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </span>
                </Link>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  );
}
