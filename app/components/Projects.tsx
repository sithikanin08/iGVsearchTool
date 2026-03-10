"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, ArrowUpRight, ExternalLink, MapPin, Clock, Users, Building2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

import { allProjects, opportunityProviders, getOPByName, type Project, type OP } from "../data/projectsData";

// 3D Particle Background - Matching Hero & About sections
function FloatingParticles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 2500;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const flowX = (i / particleCount) * 100 - 50;
      const flowY = Math.sin(angle) * 30 + (i / particleCount) * 80 - 40;
      const flowZ = Math.cos(angle) * 20;
      positions[i * 3] = flowX + (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = flowY + (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = flowZ + (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position
        .array as Float32Array;
      const time = state.clock.elapsedTime;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const waveX = Math.sin(time * 0.3 + i * 0.01) * 0.5;
        const waveZ = Math.sin(time * 0.25 + i * 0.02) * 0.3;
        positions[i3 + 1] -= 0.02 + Math.sin(time + i) * 0.01;
        if (positions[i3 + 1] < -60) {
          positions[i3 + 1] = 60;
          positions[i3] = (Math.random() - 0.5) * 100;
          positions[i3 + 2] = (Math.random() - 0.5) * 30;
        }
        positions[i3] += waveX * 0.1;
        positions[i3 + 2] += waveZ * 0.05;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#037ef3"
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.22}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function DiamondParticles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1800;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 4;
      const radius = Math.random() * 60 + 15;
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] =
        (i / particleCount) * 120 - 60 + (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] =
        Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position
        .array as Float32Array;
      const time = state.clock.elapsedTime;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] -= 0.12 + Math.sin(time * 2 + i * 0.1) * 0.04;
        const angle = time * 0.5 + i * 0.01;
        const radius = Math.sqrt(positions[i3] ** 2 + positions[i3 + 2] ** 2);
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 2] = Math.sin(angle) * radius;
        if (positions[i3 + 1] < -70) {
          positions[i3 + 1] = 70;
          positions[i3] = (Math.random() - 0.5) * 100;
          positions[i3 + 2] = (Math.random() - 0.5) * 30;
        }
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#037ef3"
        size={0.25}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.24}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowingParticles() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1200;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position
        .array as Float32Array;
      const time = state.clock.elapsedTime;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.02;
        positions[i3] += Math.cos(time * 0.3 + i * 0.015) * 0.015;
        if (Math.abs(positions[i3]) > 60)
          positions[i3] = (Math.random() - 0.5) * 100;
        if (Math.abs(positions[i3 + 1]) > 60)
          positions[i3 + 1] = (Math.random() - 0.5) * 100;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e8f4f8"
        size={0.18}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.18}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ProjectsParticleBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.5} />
        <FloatingParticles />
        <DiamondParticles />
        <GlowingParticles />
      </Canvas>
    </div>
  );
}

// Project Card Style - Solid, clean, GAPLS alignment
const projectCardStyle = {
  background: "#ffffff",
  borderRadius: "32px",
  boxShadow: "0 20px 50px -12px rgba(0,0,0,0.15)",
  border: "1px solid rgba(0,0,0,0.03)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column" as const,
  height: "100%",
  padding: "24px", // Inset Padding
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedOP, setSelectedOP] = useState<OP | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const displayProjects = allProjects.slice(0, 6);

  const handleOPClick = (opName: string) => {
    const op = getOPByName(opName);
    if (op) {
      setSelectedProject(null);
      setSelectedOP(op);
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden hero-gradient"
      ref={ref}
    >
      {/* Background overlay - exact match to Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f8]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />

      {/* Main section content */}
      <div className="relative" style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        {/* Atmospheric blur blobs */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"
          style={{
            width: "700px",
            height: "700px",
            top: "8%",
            left: "-12%",
            background:
              "radial-gradient(circle, rgba(3, 126, 243, 0.15) 0%, transparent 70%)",
            filter: "blur(150px)",
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"
          style={{
            width: "750px",
            height: "750px",
            bottom: "5%",
            right: "-18%",
            background:
              "radial-gradient(circle, rgba(35, 73, 52, 0.12) 0%, transparent 70%)",
            filter: "blur(150px)",
            opacity: 0.25,
            zIndex: 0,
          }}
        />

        {/* 3D Particle Background */}
        <ProjectsParticleBackground />

        {/* Content container */}
        <div
          className="relative z-10 w-full"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(20px, 6vw, 96px)",
            paddingRight: "clamp(20px, 6vw, 96px)",
          }}
        >
          {/* Section Header - matching About structure exactly */}
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
              Our Projects
            </motion.span>

            {/* Heading + View All row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 54px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#1e293b",
                  maxWidth: "900px",
                }}
              >
                Explore Opportunities That{" "}
                <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
                  Shape the World
                </span>
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 group shrink-0"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#037ef3",
                  paddingBottom: "6px",
                }}
              >
                View All Projects
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" style={{ marginTop: "48px" }}>
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="group relative"
                style={projectCardStyle}
              >
                {/* Image Container - Rounded for Inset Look */}
                <div className="relative overflow-hidden shrink-0 aspect-[4/3] w-full rounded-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Subtle gradient overlay at bottom of image */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Card Content - Normal Padding since container has inset padding */}
                <div className="flex flex-col flex-grow pt-6">
                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#037ef3", // GAPLS Blue
                      marginBottom: "12px",
                      marginTop: "4px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="line-clamp-3"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "#475569", // Slate 600
                      marginBottom: "24px",
                      flexGrow: 1
                    }}
                  >
                    {project.brief}
                  </p>

                  {/* Cyberpunk/GAPLS Button - Reduced Width */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden rounded-xl transition-all duration-300 group/btn w-fit cursor-pointer"
                    style={{
                      padding: "12px 24px",
                      background:
                        "linear-gradient(135deg, #00d4ff 0%, #037ef3 100%)",
                      boxShadow: "0 4px 12px rgba(3, 126, 243, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    <span
                      className="relative z-10 font-bold text-white tracking-wide"
                      style={{ fontSize: "15px" }}
                    >
                      Learn More
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-white relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* ── Project Detail Modal ─────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-8"
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

                {/* Mobile close button */}
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

                {/* Overlay Content Frame */}
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

                  {/* Project Title */}
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

                {/* Desktop Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer bg-slate-100 hover:bg-slate-200"
                >
                  <X size={18} className="text-slate-600 transition-transform group-hover:rotate-90" />
                </button>

                <div className="flex flex-col flex-grow" style={{ padding: "clamp(32px, 4vw, 48px) clamp(28px, 3.5vw, 44px)" }}>

                  {/* Status badge — cyberpunk clip */}
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

                    {selectedProject.opsMapping.length === 0 ? (
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

      {/* Opportunity Provider Modal */}
      <AnimatePresence>
        {
          selectedOP && (
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
                      padding: "clamp(28px, 5vw, 48px) clamp(28px, 4.5vw, 44px)",
                      paddingTop: "clamp(48px, 8vw, 72px)",
                    }}
                  >
                    {/* Logo Badge */}
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "18px",
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 28px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)",
                        border: "3px solid rgba(255,255,255,0.35)",
                        flexShrink: 0,
                        marginBottom: "16px",
                      }}
                    >
                      <span style={{ color: "#1e293b", fontWeight: 900, fontSize: "36px", lineHeight: 1 }}>
                        {selectedOP.name.charAt(0)}
                      </span>
                    </div>

                    {/* OP Title */}
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

                  <div className="flex flex-col flex-grow" style={{ padding: "clamp(32px, 4vw, 48px) clamp(28px, 3.5vw, 44px)" }}>

                    {/* Verified Partner Top Ribbon */}
                    <div className="flex items-center gap-2 mb-4" style={{ color: "#037ef3", fontSize: "12px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      <ShieldCheck size={16} /> Verified Partner
                    </div>

                    <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "12px" }}>
                      {selectedOP.name}
                    </h2>

                    <div className="flex flex-wrap items-center gap-6" style={{ color: "#64748b", fontWeight: 500, fontSize: "16px", marginBottom: "32px" }}>
                      <div className="flex items-center gap-2"><MapPin size={18} style={{ color: "#037ef3" }} /> {selectedOP.location}</div>
                      <div className="flex items-center gap-2"><Building2 size={18} style={{ color: "#94a3b8" }} /> {selectedOP.organization}</div>
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
          )
        }
      </AnimatePresence >
    </section >
  );
}
