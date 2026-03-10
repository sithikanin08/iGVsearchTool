"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowUpRight, MapPin, Clock, ExternalLink, Users, Building2, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionParticleBackground from "../components/SectionParticleBackground";
import HeroParticleBackground from "../components/HeroParticleBackground";

import { allProjects, opportunityProviders, getOPByName, type Project, type OP } from "../data/projectsData";

/* ════════════════════════════════════════════════════════════════
   PROJECTS PAGE
   ════════════════════════════════════════════════════════════════ */
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedOP, setSelectedOP] = useState<OP | null>(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <main className="min-h-screen" style={{ background: "#f1f3e9" }}>
      <Navbar />

      {/* ── Hero Banner ──────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          backgroundColor: "#0F172A",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#0f172a_100%)]" />
        <HeroParticleBackground />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
            textAlign: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: "24px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "560px",
              marginBottom: "48px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Explore all our Global Volunteer projects in Sri Lanka, from marine conservation
            to education, healthcare to sustainability.
          </motion.p>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            style={{
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* 4 Weeks Card */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,212,255,0.15)",
                borderRadius: "16px",
                padding: "28px 36px",
                backdropFilter: "blur(12px)",
                minWidth: "260px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #00d4ff, #037ef3)",
                }}
              />
              <p style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#00d4ff",
                marginBottom: "16px",
              }}>
                4 Weeks
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1 }}>
                  $90
                </span>
                <span style={{ fontSize: "18px", fontWeight: 600, color: "rgba(255,255,255,0.35)" }}>
                  to
                </span>
                <span style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1 }}>
                  $120
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 500, marginTop: "12px" }}>
                Program Fee
              </p>
            </div>

            {/* 6 Weeks Card */}
            <div
              style={{
                background: "rgba(3,126,243,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                borderRadius: "16px",
                padding: "28px 36px",
                backdropFilter: "blur(12px)",
                minWidth: "260px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 30px rgba(0,212,255,0.08), 0 0 60px rgba(3,126,243,0.04)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #037ef3, #00d4ff, #037ef3)",
                }}
              />
              <p style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#00d4ff",
                marginBottom: "16px",
              }}>
                6 Weeks
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1 }}>
                  $120
                </span>
                <span style={{ fontSize: "18px", fontWeight: 600, color: "rgba(255,255,255,0.35)" }}>
                  to
                </span>
                <span style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1 }}>
                  $150
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 500, marginTop: "12px" }}>
                Program Fee
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Grid ──────────────────────────────── */}
      <section className="relative" ref={gridRef}>
        <SectionParticleBackground intensity={0.15} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1f3e9]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
            paddingTop: "64px",
            paddingBottom: "80px",
          }}
        >
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.08, 0.8),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* ── Project Card ── */}
                <div
                  className="group relative overflow-hidden transition-all duration-500 cursor-pointer"
                  style={{
                    borderRadius: "20px",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    opacity: project.status === "inactive" ? 0.7 : 1,
                  }}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(3,126,243,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* ── Image section — modern diagonal clip ── */}
                  <div className="relative overflow-hidden" style={{ height: "240px" }}>
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Strong Bottom Gradient for Text Visibility */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 35%, transparent 60%)",
                      }}
                    />

                    {/* Diagonal accent - reduced opacity */}
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        background: `linear-gradient(135deg, rgba(3,126,243,0.1) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)`,
                      }}
                    />

                    {/* Gold price badges */}
                    <div
                      className="absolute z-20 flex items-center gap-2 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        bottom: "16px",
                        left: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f9a825, #f57f17)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 20px rgba(249,168,37,0.5), 0 0 0 3px rgba(255,255,255,0.25)",
                        }}
                      >
                        <span style={{ color: "white", fontWeight: 800, fontSize: "15px" }}>
                          {project.fee}
                        </span>
                      </div>
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f9a825, #f57f17)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 20px rgba(249,168,37,0.5), 0 0 0 3px rgba(255,255,255,0.25)",
                        }}
                      >
                        <span style={{ color: "white", fontWeight: 800, fontSize: "15px" }}>
                          {project.feeAlt || "$90"}
                        </span>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div
                      className="absolute z-20"
                      style={{
                        top: "16px",
                        right: "16px",
                        padding: "5px 14px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        background: project.status === "active"
                          ? "rgba(16, 185, 129, 0.95)"
                          : "rgba(100, 116, 139, 0.9)",
                        color: "white",
                        clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                      }}
                    >
                      {project.status === "active" ? "ACTIVE" : "INACTIVE"}
                    </div>

                    {/* Project name on image - High Visibility */}
                    <h3
                      className="absolute z-20"
                      style={{
                        bottom: "18px",
                        right: "20px",
                        fontSize: "22px",
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: "-0.01em",
                        textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                        textAlign: "right",
                        maxWidth: "60%",
                        lineHeight: 1.1,
                      }}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* ── Content section ── */}
                  <div
                    style={{
                      padding: "20px 24px 22px",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    {/* Location + Duration row */}
                    <div
                      className="flex items-center justify-between"
                      style={{ marginBottom: "12px" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} style={{ color: "#037ef3" }} />
                        <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 500 }}>
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} style={{ color: "#94a3b8" }} />
                        <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "13.5px",
                        lineHeight: 1.65,
                        color: "#475569",
                        flexGrow: 1,
                        marginBottom: "14px",
                      }}
                    >
                      {project.brief}
                    </p>

                    {/* OP badge — clickable array */}
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-center gap-1.5 mb-1 text-slate-500">
                        <Users size={14} style={{ color: "#037ef3" }} />
                        <span style={{ fontSize: "12px", fontWeight: 600 }}>Providers ({project.opsMapping.length}):</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.opsMapping.slice(0, 2).map((mapping) => (
                          <button
                            key={mapping.opName}
                            className="flex flex-col transition-all duration-300 max-w-full"
                            style={{
                              padding: "6px 12px",
                              borderRadius: "8px",
                              background: "rgba(3,126,243,0.04)",
                              border: "1px solid rgba(3,126,243,0.08)",
                              textAlign: "left"
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const op = getOPByName(mapping.opName);
                              if (op) setSelectedOP(op);
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = "rgba(3,126,243,0.08)";
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(3,126,243,0.2)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = "rgba(3,126,243,0.04)";
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(3,126,243,0.08)";
                            }}
                          >
                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#037ef3" }} className="line-clamp-1">
                              {mapping.opName}
                            </span>
                          </button>
                        ))}
                        {project.opsMapping.length > 2 && (
                          <div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100"
                            style={{ fontSize: "11px", fontWeight: 500 }}
                          >
                            +{project.opsMapping.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>

                    {/* SDG tags */}
                    <div className="flex flex-wrap gap-1.5" style={{ marginTop: "2px", marginBottom: "16px", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                      {project.sdg.map((s) => (
                        <span
                          key={s}
                          style={{
                            padding: "3px 8px",
                            borderRadius: "4px",
                            background: "rgba(3,126,243,0.08)",
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#037ef3",
                            letterSpacing: "0.02em",
                          }}
                        >
                          SDG {s.split(" - ")[0]}
                        </span>
                      ))}
                    </div>

                    {/* Bottom action row — cyberpunk button */}
                    <div
                      className="flex items-center justify-end"
                      style={{
                        paddingTop: "14px",
                        borderTop: "1px solid #f1f5f9",
                      }}
                    >
                      {/* Cyberpunk View Details button */}
                      <button
                        className="flex items-center gap-2 cursor-pointer group/btn relative overflow-visible"
                        style={{
                          padding: "10px 24px",
                          background: project.status === "inactive"
                            ? "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)"
                            : "linear-gradient(135deg, #00d4ff 0%, #037ef3 50%, #0066cc 100%)",
                          color: "white",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          border: "none",
                          clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                          boxShadow: project.status === "inactive"
                            ? "none"
                            : "0 0 12px rgba(0, 212, 255, 0.3), 0 4px 12px rgba(3, 126, 243, 0.2)",
                          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        onMouseEnter={(e) => {
                          if (project.status === "active") {
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(3, 126, 243, 0.3), 0 8px 24px rgba(0, 212, 255, 0.4)";
                            (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (project.status === "active") {
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0, 212, 255, 0.3), 0 4px 12px rgba(3, 126, 243, 0.2)";
                            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                          }
                        }}
                      >
                        View Details
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          style={{ filter: project.status === "active" ? "drop-shadow(0 0 4px rgba(0,212,255,0.6))" : "none" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Detail Modal ─────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-8 py-6 sm:p-8"
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
              className="w-[88%] sm:w-[85%] lg:w-full max-w-5xl max-h-[80vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Modal Left: Full-bleed Image */}
              <div className="relative w-full lg:w-[45%] lg:min-h-[600px] shrink-0 max-h-[220px] lg:max-h-none" style={{ minHeight: "180px", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
                <div className="absolute inset-0 z-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)",
                    }}
                  />
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer lg:hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <X size={18} className="text-white transition-transform group-hover:rotate-90" />
                </button>

                {/* ── Overlay Content Frame ── */}
                <div
                  className="absolute z-10 flex flex-col items-start justify-end"
                  style={{
                    inset: 0,
                    padding: "clamp(28px, 5vw, 48px) clamp(28px, 4.5vw, 44px)",
                    paddingTop: "clamp(48px, 8vw, 72px)",
                  }}
                >
                  {/* Fee Badges */}
                  <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #f9a825, #f57f17)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 20px rgba(249,168,37,0.45), 0 2px 6px rgba(0,0,0,0.12)",
                        border: "2px solid rgba(255,255,255,0.35)",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ color: "white", fontWeight: 800, fontSize: "15px" }}>
                        {selectedProject.fee}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #f9a825, #f57f17)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 20px rgba(249,168,37,0.45), 0 2px 6px rgba(0,0,0,0.12)",
                        border: "2px solid rgba(255,255,255,0.35)",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ color: "white", fontWeight: 800, fontSize: "15px" }}>
                        {selectedProject.feeAlt || "$90"}
                      </span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(26px, 3vw, 34px)",
                      fontWeight: 800,
                      color: "white",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.2,
                      textShadow: "0 2px 24px rgba(0,0,0,0.6)",
                      maxWidth: "92%",
                      wordBreak: "break-word",
                    }}
                  >
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              {/* Modal Right: Content */}
              <div className="relative w-full lg:w-[55%] flex flex-col overflow-y-auto" style={{ borderRadius: "0 0 20px 20px" }}>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer bg-slate-100 hover:bg-slate-200"
                >
                  <X size={18} className="text-slate-600 transition-transform group-hover:rotate-90" />
                </button>

                <div className="flex flex-col flex-grow" style={{ padding: "clamp(32px, 4vw, 48px) clamp(28px, 3.5vw, 44px)" }}>

                  {/* Status badge */}
                  <div style={{ marginBottom: "24px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px 20px",
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: selectedProject.status === "active"
                          ? "rgba(16, 185, 129, 0.1)"
                          : "rgba(100, 116, 139, 0.1)",
                        color: selectedProject.status === "active" ? "#059669" : "#64748b",
                        clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                      }}
                    >
                      {selectedProject.status === "active" ? "● Currently Active" : "Currently Inactive"}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "12px" }}>
                    {selectedProject.name}
                  </h2>

                  {/* Location + Duration meta */}
                  <div className="flex flex-wrap items-center gap-5" style={{ color: "#64748b", fontWeight: 500, fontSize: "15px", marginBottom: "32px" }}>
                    <div className="flex items-center gap-2"><MapPin size={17} style={{ color: "#037ef3" }} /> {selectedProject.location}</div>
                    <div className="flex items-center gap-2"><Clock size={17} style={{ color: "#94a3b8" }} /> {selectedProject.duration}</div>
                  </div>

                  {/* About Section */}
                  <div style={{ marginBottom: "40px" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                      About the Project
                    </h4>
                    <p style={{ fontSize: "15.5px", lineHeight: 1.8, color: "#475569" }}>
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* SDG Focus */}
                  <div style={{ marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                    <h4 style={{ fontSize: "12px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
                      SDG Focus
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      {selectedProject.sdg.map((s) => (
                        <span key={s} style={{ fontSize: "13px", fontWeight: 600, color: "#037ef3" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Opportunity Providers Section ─────────── */}
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>
                      Opportunity Providers
                    </h4>

                    {(!selectedProject.opsMapping || selectedProject.opsMapping.length === 0) ? (
                      <div
                        className="text-center flex flex-col items-center justify-center"
                        style={{
                          padding: "40px 24px",
                          background: "#f8fafc",
                          borderRadius: "16px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <Users size={28} className="text-slate-300 mb-3" />
                        <span className="text-slate-400 font-medium text-[15px]">
                          No opportunity providers mapped yet.
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col" style={{ gap: "12px" }}>
                        {selectedProject.opsMapping.map((mapping) => {
                          const op = getOPByName(mapping.opName);
                          if (!op) return null;

                          return (
                            <div
                              key={mapping.opName}
                              className="flex items-center gap-3 cursor-pointer group/opcard transition-all duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(null);
                                setSelectedOP(op);
                              }}
                              style={{
                                borderRadius: "14px",
                                background: "rgba(255, 255, 255, 0.65)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                border: "1px solid rgba(3,126,243,0.10)",
                                boxShadow: "0 4px 24px rgba(3,126,243,0.04), 0 1px 3px rgba(0,0,0,0.03)",
                                padding: "14px 18px",
                              }}
                            >
                              <div
                                className="shrink-0 overflow-hidden"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  border: "2px solid white",
                                  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                  background: "white",
                                }}
                              >
                                <img src={op.photo} alt={op.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span style={{
                                  fontSize: "15px",
                                  fontWeight: 700,
                                  color: "#1e293b",
                                  lineHeight: 1.3,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}>
                                  <span className="truncate">{op.name}</span>
                                  <span
                                    className="opacity-0 group-hover/opcard:opacity-100 transition-all duration-200 shrink-0"
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: "20px",
                                      height: "20px",
                                      borderRadius: "6px",
                                      background: "rgba(3,126,243,0.08)",
                                      color: "#037ef3",
                                    }}
                                  >
                                    <ArrowUpRight size={12} />
                                  </span>
                                </span>
                                <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 500 }}>
                                  {op.organization}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── OP Detail Modal ─────────────────────── */}
      <AnimatePresence>
        {selectedOP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOP(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-8 py-6 sm:p-8"
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
              className="w-[88%] sm:w-[85%] lg:w-full max-w-5xl max-h-[80vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Modal Left: Full-bleed Image */}
              <div className="relative w-full lg:w-[45%] lg:min-h-[600px] shrink-0 max-h-[220px] lg:max-h-none" style={{ minHeight: "180px", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
                <div className="absolute inset-0 z-0">
                  <img
                    src={selectedOP.photo}
                    alt={selectedOP.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Mobile close button */}
                <button
                  onClick={() => setSelectedOP(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer lg:hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <X size={18} className="text-white transition-transform group-hover:rotate-90" />
                </button>

                {/* Overlay Content Frame */}
                <div
                  className="absolute z-10 flex flex-col items-start justify-end"
                  style={{
                    inset: 0,
                    padding: "clamp(20px, 4vw, 48px) clamp(20px, 4vw, 44px)",
                    paddingTop: "clamp(36px, 6vw, 72px)",
                  }}
                >
                  {/* Logo Badge */}
                  <div
                    className="w-[56px] h-[56px] sm:w-[80px] sm:h-[80px]"
                    style={{
                      borderRadius: "14px",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 28px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)",
                      border: "3px solid rgba(255,255,255,0.35)",
                      flexShrink: 0,
                      marginBottom: "12px",
                    }}
                  >
                    <span className="text-[24px] sm:text-[36px]" style={{ color: "#1e293b", fontWeight: 900, lineHeight: 1 }}>
                      {selectedOP.name.charAt(0)}
                    </span>
                  </div>

                  {/* OP Title */}
                  <h3
                    style={{
                      fontSize: "clamp(20px, 3vw, 34px)",
                      fontWeight: 800,
                      color: "white",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.2,
                      textShadow: "0 2px 24px rgba(0,0,0,0.6)",
                      maxWidth: "92%",
                      wordBreak: "break-word",
                    }}
                  >
                    {selectedOP.name}
                  </h3>
                </div>
              </div>

              {/* Modal Right: Content */}
              <div className="relative w-full lg:w-[55%] flex flex-col overflow-y-auto" style={{ borderRadius: "0 0 20px 20px" }}>

                {/* Desktop Close Button */}
                <button
                  onClick={() => setSelectedOP(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer bg-slate-100 hover:bg-slate-200"
                >
                  <X size={18} className="text-slate-600 transition-transform group-hover:rotate-90" />
                </button>

                <div className="flex flex-col flex-grow" style={{ padding: "clamp(24px, 4vw, 48px) clamp(20px, 3.5vw, 44px)" }}>

                  {/* Verified Partner Top Ribbon */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4" style={{ color: "#037ef3", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    <ShieldCheck size={14} /> Verified Partner
                  </div>

                  <h2 style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "10px" }}>
                    {selectedOP.name}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-6" style={{ color: "#64748b", fontWeight: 500, fontSize: "14px", marginBottom: "24px" }}>
                    <div className="flex items-center gap-1.5 sm:gap-2"><MapPin size={16} style={{ color: "#037ef3" }} /> {selectedOP.location}</div>
                    <div className="flex items-center gap-1.5 sm:gap-2"><Building2 size={16} style={{ color: "#94a3b8" }} /> {selectedOP.organization}</div>
                  </div>

                  {/* About Section */}
                  <div style={{ marginBottom: "48px" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                      About the Organization
                    </h4>
                    <p style={{ fontSize: "15.5px", lineHeight: 1.8, color: "#475569" }}>
                      {selectedOP.description}
                    </p>
                  </div>

                  {/* Associated Projects Section */}
                  <div>
                    <h4 style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "#0f172a",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "24px",
                    }}>
                      Associated Projects
                    </h4>

                    {(() => {
                      const associatedProjects = allProjects.filter(p =>
                        p.status === "active" && p.opsMapping.some(m => m.opName === selectedOP.name)
                      );

                      if (associatedProjects.length === 0) {
                        return (
                          <div
                            className="text-center flex flex-col items-center justify-center"
                            style={{
                              padding: "40px 24px",
                              background: "#f8fafc",
                              borderRadius: "16px",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            <Users size={28} className="text-slate-300 mb-3" />
                            <span className="text-slate-400 font-medium text-[15px]">
                              No opportunities available for this provider yet.
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div className="flex flex-col" style={{ gap: "32px" }}>
                          {associatedProjects.map((proj) => {
                            const mapping = proj.opsMapping.find(m => m.opName === selectedOP.name);
                            if (!mapping) return null;

                            const groupedOpps = mapping.opportunities.reduce((acc, curr) => {
                              const dur = curr.duration || "Available Opportunities";
                              if (!acc[dur]) acc[dur] = [];
                              acc[dur].push(curr);
                              return acc;
                            }, {} as Record<string, typeof mapping.opportunities>);

                            return (
                              <div key={proj.name} className="flex flex-col" style={{ gap: "12px" }}>

                                {/* Project Section Header */}
                                <div
                                  className="flex items-center gap-3 cursor-pointer group/proj"
                                  onClick={() => setSelectedProject(proj)}
                                  style={{ paddingBottom: "4px" }}
                                >
                                  <div
                                    className="shrink-0 overflow-hidden"
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      borderRadius: "10px",
                                      background: "#f1f5f9",
                                      border: "2px solid white",
                                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                    }}
                                  >
                                    <img
                                      src={proj.image}
                                      alt={proj.name}
                                      className="w-full h-full object-cover group-hover/proj:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="flex flex-col">
                                    <span style={{
                                      fontSize: "10px",
                                      fontWeight: 700,
                                      color: "#037ef3",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.12em",
                                      lineHeight: 1,
                                      marginBottom: "3px",
                                    }}>
                                      Project
                                    </span>
                                    <span style={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      color: "#0f172a",
                                      lineHeight: 1.2,
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "6px",
                                    }}>
                                      {proj.name}
                                      <span
                                        className="opacity-0 group-hover/proj:opacity-100 transition-all duration-200"
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          width: "20px",
                                          height: "20px",
                                          borderRadius: "6px",
                                          background: "rgba(3,126,243,0.08)",
                                          color: "#037ef3",
                                        }}
                                      >
                                        <ArrowUpRight size={12} />
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                {/* Provider Glassmorphism Card */}
                                <div
                                  className="ml-0 sm:ml-5"
                                  style={{
                                    borderRadius: "16px",
                                    background: "rgba(255, 255, 255, 0.65)",
                                    backdropFilter: "blur(16px)",
                                    WebkitBackdropFilter: "blur(16px)",
                                    border: "1px solid rgba(3,126,243,0.10)",
                                    boxShadow: "0 4px 24px rgba(3,126,243,0.04), 0 1px 3px rgba(0,0,0,0.03)",
                                    padding: "20px",
                                  }}
                                >
                                  {/* Provider Header */}
                                  <div className="flex items-center gap-3">
                                    <div
                                      className="shrink-0 overflow-hidden"
                                      style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        border: "2px solid white",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                        background: "white",
                                      }}
                                    >
                                      <img
                                        src={selectedOP.photo}
                                        alt={selectedOP.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span style={{
                                        fontSize: "15px",
                                        fontWeight: 700,
                                        color: "#1e293b",
                                        lineHeight: 1.3,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                      }}>
                                        {selectedOP.name}
                                      </span>
                                      {mapping.logistics && (
                                        <span style={{
                                          fontSize: "12.5px",
                                          color: "#64748b",
                                          fontWeight: 500,
                                          marginTop: "2px",
                                          lineHeight: 1.3,
                                        }}>
                                          <span style={{ fontWeight: 600, color: "#94a3b8" }}>Logistics:</span>{" "}
                                          {mapping.logistics}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Divider */}
                                  <div style={{
                                    height: "1px",
                                    background: "linear-gradient(90deg, rgba(3,126,243,0.08) 0%, rgba(3,126,243,0.03) 100%)",
                                    margin: "16px 0",
                                  }} />

                                  {/* Duration-Grouped Opportunities */}
                                  {Object.keys(groupedOpps).length > 0 ? (
                                    <div className="flex flex-col" style={{ gap: "16px" }}>
                                      {Object.entries(groupedOpps).map(([duration, opps], idx) => (
                                        <div key={idx} className="flex flex-col" style={{ gap: "8px" }}>
                                          <div className="flex items-center" style={{ gap: "6px" }}>
                                            <Clock size={12} style={{ color: "#037ef3", opacity: 0.7 }} />
                                            <span style={{
                                              fontSize: "11px",
                                              fontWeight: 800,
                                              color: "#037ef3",
                                              textTransform: "uppercase",
                                              letterSpacing: "0.1em",
                                            }}>
                                              {duration}
                                            </span>
                                          </div>

                                          <div className="flex flex-col" style={{ gap: "6px" }}>
                                            {opps.map((opp, oIdx) => (
                                              <div key={oIdx} className="flex items-center" style={{ gap: "8px" }}>
                                                {opp.applyLink && (
                                                  <a
                                                    href={opp.applyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="relative overflow-hidden transition-all duration-300 group/apply cursor-pointer"
                                                    style={{
                                                      flex: 1,
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      gap: "6px",
                                                      padding: "11px 18px",
                                                      background: "linear-gradient(135deg, #00d4ff 0%, #037ef3 50%, #0066cc 100%)",
                                                      color: "white",
                                                      fontSize: "12px",
                                                      fontWeight: 700,
                                                      textDecoration: "none",
                                                      letterSpacing: "0.08em",
                                                      textTransform: "uppercase",
                                                      clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                                                      boxShadow: "0 0 12px rgba(0,212,255,0.35), 0 0 24px rgba(3,126,243,0.15), 0 4px 12px rgba(0,212,255,0.2)",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(3,126,243,0.3), 0 6px 20px rgba(0,212,255,0.35)";
                                                      e.currentTarget.style.transform = "translateY(-1px)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                      e.currentTarget.style.boxShadow = "0 0 12px rgba(0,212,255,0.35), 0 0 24px rgba(3,126,243,0.15), 0 4px 12px rgba(0,212,255,0.2)";
                                                      e.currentTarget.style.transform = "translateY(0)";
                                                    }}
                                                  >
                                                    <span
                                                      className="absolute inset-0 opacity-0 group-hover/apply:opacity-100 transition-opacity duration-300"
                                                      style={{
                                                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                                                        animation: "shimmer 1.5s infinite linear",
                                                        backgroundSize: "200% 100%",
                                                      }}
                                                    />
                                                    <span className="relative z-10 flex items-center gap-1.5">
                                                      Apply
                                                      <ArrowUpRight
                                                        size={14}
                                                        className="transition-transform duration-300 group-hover/apply:translate-x-0.5 group-hover/apply:-translate-y-0.5"
                                                        style={{ filter: "drop-shadow(0 0 4px rgba(0,212,255,0.7))" }}
                                                      />
                                                    </span>
                                                  </a>
                                                )}
                                                {opp.jdBooklet && (
                                                  <a
                                                    href={opp.jdBooklet}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="relative overflow-hidden transition-all duration-300 group/jd cursor-pointer"
                                                    style={{
                                                      flex: 1,
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      gap: "6px",
                                                      padding: "11px 18px",
                                                      background: "transparent",
                                                      color: "#037ef3",
                                                      fontSize: "12px",
                                                      fontWeight: 700,
                                                      textDecoration: "none",
                                                      letterSpacing: "0.06em",
                                                      textTransform: "uppercase",
                                                      clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                                                      border: "none",
                                                      boxShadow: "inset 0 0 0 1.5px rgba(3,126,243,0.25)",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                      e.currentTarget.style.background = "rgba(3,126,243,0.06)";
                                                      e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px rgba(3,126,243,0.4), 0 0 12px rgba(3,126,243,0.1)";
                                                      e.currentTarget.style.color = "#0066cc";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                      e.currentTarget.style.background = "transparent";
                                                      e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px rgba(3,126,243,0.25)";
                                                      e.currentTarget.style.color = "#037ef3";
                                                    }}
                                                  >
                                                    <ExternalLink size={13} />
                                                    JD Booklet
                                                  </a>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="flex items-center justify-center" style={{ padding: "12px 0" }}>
                                      <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500 }}>
                                        No active opportunities defined.
                                      </span>
                                    </div>
                                  )}
                                </div>

                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}
                  </div>

                  {/* EXPA link */}
                  <div className="flex justify-center" style={{ marginTop: "14px" }}>
                    <a
                      href="https://expa.aiesec.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 transition-colors hover:text-blue-600"
                      style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500 }}
                    >
                      <ExternalLink size={13} />
                      View on EXPA
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
