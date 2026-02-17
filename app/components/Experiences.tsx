"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

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
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.55)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderRadius: "28px",
  boxShadow: "0 30px 80px rgba(0, 0, 0, 0.08)",
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
      <div style={{ paddingTop: "100px", paddingBottom: "140px", position: "relative" }}>
        {/* Background gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#e8f4f8]/30 via-[#f1f3e9]/50 to-[#f1f3e9]"
        />

        {/* Content container */}
        <div 
          className="relative z-10"
          style={{ 
            maxWidth: "1320px", 
            marginLeft: "auto", 
            marginRight: "auto",
            paddingLeft: "24px",
            paddingRight: "24px"
          }}
        >
          {/* Section Header */}
          <div className="mb-12">
            {/* Top row: Label + View All */}
            <div className="flex justify-between items-center mb-4">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ 
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                  color: "#2563EB",
                  fontWeight: 600,
                  textTransform: "uppercase"
                }}
              >
                Volunteer Stories
              </motion.span>
              
              {/* View All Link */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <Link
                  href="/experiences"
                  className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 group"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2563EB",
                  }}
                >
                  View All Experiences
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
            
            {/* Heading */}
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
                color: "#0F172A"
              }}
            >
              Experiences That Matter
            </motion.h2>
          </div>

          {/* Editorial Story Rail - Horizontal Scroll */}
          <div 
            className="overflow-x-auto pb-8 -mx-6 px-6"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none"
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
                    style={{ 
                      ...glassCardStyle, 
                      padding: "0",
                      overflow: "hidden",
                      transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
                    }}
                  >
                    {/* Portrait Image - Full width at top */}
                    <div 
                      style={{ 
                        position: "relative",
                        width: "100%",
                        height: "220px",
                        overflow: "hidden"
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
                          background: "rgba(255, 255, 255, 0.9)",
                          color: "#2563EB",
                          backdropFilter: "blur(8px)",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                        }}
                      >
                        {experience.country}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "24px" }}>
                      {/* Name */}
                      <h3 
                        style={{ 
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: "4px"
                        }}
                      >
                        {experience.name}
                      </h3>

                      {/* Project Name */}
                      <p 
                        style={{ 
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#2563EB",
                          marginBottom: "14px"
                        }}
                      >
                        {experience.project}
                      </p>

                      {/* Story Snippet - Editorial style */}
                      <p 
                        className="line-clamp-3"
                        style={{ 
                          fontSize: "15px",
                          lineHeight: 1.65,
                          color: "rgba(15, 23, 42, 0.8)",
                          marginBottom: "18px"
                        }}
                      >
                        {experience.brief}
                      </p>

                      {/* CTA: Read Story */}
                      <span 
                        className="inline-flex items-center gap-1.5 group-hover:gap-2 transition-all duration-300"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#2563EB"
                        }}
                      >
                        Read Story
                        <ArrowRight 
                          size={14} 
                          className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#38BDF8]" 
                        />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(8px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "28px",
                boxShadow: "0 40px 100px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Modal Header */}
              <div 
                className="relative text-center"
                style={{ 
                  background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
                  padding: "48px 32px"
                }}
              >
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  <X size={20} style={{ color: "white" }} />
                </button>

                {/* Avatar */}
                <div className="relative inline-block mb-5">
                  <img
                    src={selectedExperience.image}
                    alt={selectedExperience.name}
                    style={{
                      width: "96px",
                      height: "96px",
                      borderRadius: "50%",
                      border: "4px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
                      objectFit: "cover"
                    }}
                  />
                </div>

                <h3 
                  style={{ 
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "8px"
                  }}
                >
                  {selectedExperience.name}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>
                  {selectedExperience.country} • {selectedExperience.project}
                </p>
              </div>

              {/* Modal Content */}
              <div style={{ padding: "32px" }}>
                {/* Quote icon */}
                <div className="relative mb-6">
                  <Quote 
                    size={36} 
                    style={{ 
                      position: "absolute",
                      top: "-8px",
                      left: "-4px",
                      color: "rgba(37, 99, 235, 0.15)"
                    }} 
                  />
                  <p 
                    style={{ 
                      fontSize: "17px",
                      lineHeight: 1.8,
                      color: "rgba(15, 23, 42, 0.85)",
                      paddingLeft: "24px"
                    }}
                  >
                    {selectedExperience.fullStory}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div 
                    style={{ 
                      background: "rgba(37, 99, 235, 0.08)",
                      borderRadius: "16px",
                      padding: "18px",
                      textAlign: "center"
                    }}
                  >
                    <p style={{ fontSize: "12px", color: "rgba(15,23,42,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                      Duration
                    </p>
                    <p style={{ color: "#0F172A", fontWeight: 600 }}>
                      {selectedExperience.duration}
                    </p>
                  </div>
                  <div 
                    style={{ 
                      background: "rgba(37, 99, 235, 0.08)",
                      borderRadius: "16px",
                      padding: "18px",
                      textAlign: "center"
                    }}
                  >
                    <p style={{ fontSize: "12px", color: "rgba(15,23,42,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                      Year
                    </p>
                    <p style={{ color: "#0F172A", fontWeight: 600 }}>
                      {selectedExperience.year}
                    </p>
                  </div>
                </div>

                <Link
                  href="/experiences"
                  className="w-full flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
                  style={{
                    padding: "16px 32px",
                    background: "#2563EB",
                    color: "white",
                    borderRadius: "14px",
                    fontWeight: 600,
                    fontSize: "16px"
                  }}
                >
                  Read More Stories
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
