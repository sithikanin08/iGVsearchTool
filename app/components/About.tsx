"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import { Users, Globe, Target, Award, TrendingUp, Heart, CheckCircle2 } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const impactStats = [
  {
    icon: Target,
    number: "17+",
    label: "Projects",
    color: "#037ef3",
  },
  {
    icon: Users,
    number: "500+",
    label: "Exchange Participants",
    color: "#037ef3",
  },
  {
    icon: Globe,
    number: "30+",
    label: "Countries",
    color: "#037ef3",
  },
  {
    icon: Award,
    number: "10+",
    label: "SDG Goals Impacted",
    color: "#037ef3",
  },
  {
    icon: TrendingUp,
    number: "1000+",
    label: "Volunteers Hosted",
    color: "#037ef3",
  },
  {
    icon: Heart,
    number: "50+",
    label: "Opportunity Providers",
    color: "#037ef3",
  },
];



// Stat card glass style (keeping for impact cards)
const statCardGlassStyle = {
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
};

// Floating pill style
const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  margin: "6px 8px",
  borderRadius: "999px",
  background: "rgba(255, 255, 255, 0.55)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
  fontSize: "14px",
  fontWeight: 500,
};

// 3D Particle Background - Matching Hero Section Exactly
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
      const positions = points.current.geometry.attributes.position.array as Float32Array;
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
      positions[i * 3 + 1] = (i / particleCount) * 120 - 60 + (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
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
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.02;
        positions[i3] += Math.cos(time * 0.3 + i * 0.015) * 0.015;
        if (Math.abs(positions[i3]) > 60) positions[i3] = (Math.random() - 0.5) * 100;
        if (Math.abs(positions[i3 + 1]) > 60) positions[i3 + 1] = (Math.random() - 0.5) * 100;
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

function AboutParticleBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <FloatingParticles />
        <DiamondParticles />
        <GlowingParticles />
      </Canvas>
    </div>
  );
}

// Stat Card - Matching Screenshot Layout
interface Stat3DCardProps {
  stat: typeof impactStats[0];
  index: number;
  isInView: boolean;
}

const Stat3DCard = ({ stat, index, isInView }: Stat3DCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div
          className="rounded-2xl px-6 py-10 sm:px-8 sm:py-12 relative overflow-hidden transition-shadow duration-300"
          style={{
            ...statCardGlassStyle,
            minHeight: "140px",
            boxShadow: isHovered
              ? "0 20px 50px rgba(0, 0, 0, 0.12)"
              : "0 10px 35px rgba(0, 0, 0, 0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          {/* Number + Icon row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <h4
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: stat.color }}
            >
              {stat.number}
            </h4>
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <stat.icon
                size={24}
                className="sm:w-7 sm:h-7"
                style={{ color: stat.color }}
              />
            </div>
          </div>
          {/* Label */}
          <p className="text-sm sm:text-base text-gray-500 font-medium" style={{ textAlign: "center" }}>
            {stat.label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      ref={ref}
    >
      {/* Main section with premium vertical spacing */}
      <div style={{ paddingTop: "40px", paddingBottom: "60px" }}>

        {/* Soft atmospheric gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%)"
          }}
        />

        {/* Depth Blob - soft blue gradient shape (required for depth) */}
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"
          style={{
            width: "520px",
            height: "520px",
            top: "15%",
            right: "5%",
            background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)",
            filter: "blur(140px)",
            opacity: 0.30,
            zIndex: 0
          }}
        />

        {/* 3D Particle Background */}
        <AboutParticleBackground />

        {/* Main content container */}
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
          {/* Heading - Spans full width, creates visual drama */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ marginBottom: "8px" }}
          >
            {/* Label above heading */}
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
                marginBottom: "8px"
              }}
            >
              About AIESEC in SLIIT
            </motion.span>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: "clamp(38px, 4vw, 54px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1e293b",
                maxWidth: "900px"
              }}
            >
              Empowering Youth Leadership{" "}
              <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
                Through Global Experiences
              </span>
            </h2>
          </motion.div>



          {/* Cinematic 2-Column Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-24 items-center"
            style={{ marginTop: "24px" }}
          >
            {/* Left Side - Awards & Mini Story */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            >
              {/* First Paragraph (Reverted to specific column) */}
              <p
                style={{
                  maxWidth: "640px",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "rgba(30, 41, 59, 0.85)",
                  marginBottom: "28px",
                  textAlign: "justify"
                }}
              >
                AIESEC in SLIIT was established in 2012. Since then, SLIIT has been
                contributing to AIESEC’s vision by creating opportunities for the youth
                to engage and get involved in global leadership experiences. Today,
                AIESEC in SLIIT has 200+ active members working for Outgoing and Incoming
                talent, Teacher, and Volunteer programs. AIESEC in SLIIT was awarded
                with these at national conferences of AIESEC in Sri Lanka.
              </p>

              {/* Awards List */}
              <div style={{ marginTop: "28px", maxWidth: "640px" }}>
                {[
                  "Most Progressive Entity Award in National Leadership Development Seminar 2025 (NLDS)",
                  "Activating Leadership - Incoming Global Talent Award in National Leadership Development Seminar 2025 (NLDS)",
                  "Acting Sustainably - Finance Award in Asia Pacific Leadership Summit 2025 (APLS) & National Leadership Development Seminar 2025 (NLDS)",
                  "Activating Leadership - Outgoing Global Volunteer Award in National Leadership Development Seminar 2024 (NLDS)",
                  "Most Progressive Expansion Award in National Planning Conference 2021"
                ].map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    whileHover={{
                      y: -4,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)"
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.18 + index * 0.1,
                      ease: "easeOut"
                    }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "16px",
                      ...statCardGlassStyle,
                      padding: "16px 20px",
                      borderRadius: "16px",
                      cursor: "default"
                    }}
                  >
                    <Award
                      size={20}
                      style={{
                        color: "#037ef3",
                        marginTop: "3px",
                        flexShrink: 0
                      }}
                    />
                    <span
                      style={{
                        color: "#334155",
                        fontSize: "15px",
                        fontWeight: 500,
                        lineHeight: 1.5
                      }}
                    >
                      {award}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* Right Side - Floating Video Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="w-full flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -6,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-[620px]"
                style={{ transform: "rotate(1deg)" }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="relative aspect-video w-full overflow-hidden"
                    style={{
                      borderRadius: "32px",
                      background:
                        "linear-gradient(135deg, rgba(35, 73, 52, 0.95) 0%, rgba(58, 125, 92, 0.9) 100%)",
                      boxShadow: "0 35px 90px rgba(0, 0, 0, 0.18)",
                      transition: "box-shadow 0.4s ease"
                    }}
                  >
                    {/* Video placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                          style={{
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <svg
                            className="w-9 h-9 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                        <p className="text-lg font-semibold">AIESEC in SLIIT</p>
                        <p className="text-sm text-white/70 mt-1">Video coming soon</p>
                      </div>
                    </div>

                    {/* Decorative floating orbs */}
                    <motion.div
                      animate={{ x: [0, 12, 0], y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-6 right-6 w-24 h-24 rounded-full bg-[#037ef3]/35 blur-2xl"
                    />
                    <motion.div
                      animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-[#00d4ff]/20 blur-xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Full Width Section - iGV Program */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
            style={{
              marginTop: "60px",
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                maxWidth: "900px",
                paddingLeft: "24px",
                borderLeft: "4px solid #037ef3"
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  fontWeight: 500,
                  color: "rgba(15, 23, 42, 0.9)",
                  textAlign: "justify"
                }}
              >
                Through our incoming Global Volunteer (iGV) program, we host
                international volunteers from around the world, connecting them
                with meaningful projects that address the United Nations Sustainable
                Development Goals (SDGs). Our diverse portfolio spans education,
                environment, health, and social impact, creating lasting positive
                change in Sri Lankan communities.
              </p>
            </div>
          </motion.div>

          {/* Impact Section with premium spacing */}
          <div style={{ marginTop: "80px", width: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: "center", marginBottom: "32px", width: "100%" }}
            >
              <h3
                className="font-bold"
                style={{
                  fontSize: "clamp(24px, 3vw, 28px)",
                  color: "#1e293b",
                  textAlign: "center"
                }}
              >
                Our Impact
              </h3>
            </motion.div>

            {/* Impact Stats Grid - 2 rows: 4 cards + 2 cards centered */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", width: "100%" }}>
              {/* First Row - 4 cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" style={{ width: "100%", maxWidth: "896px", margin: "0 auto" }}>
                {impactStats.slice(0, 4).map((stat, index) => (
                  <Stat3DCard
                    key={stat.label}
                    stat={stat}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
              {/* Second Row - 2 cards centered */}
              <div className="grid grid-cols-2 gap-5 md:gap-6" style={{ width: "100%", maxWidth: "448px", margin: "0 auto" }}>
                {impactStats.slice(4, 6).map((stat, index) => (
                  <Stat3DCard
                    key={stat.label}
                    stat={stat}
                    index={index + 4}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
