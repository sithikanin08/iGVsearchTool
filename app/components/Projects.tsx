"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Opportunity Provider data
const opportunityProviders = [
  {
    id: 1,
    name: "Ocean Guardians Foundation",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    organization: "Marine Conservation NGO",
    location: "Galle, Sri Lanka",
    description: "Leading marine conservation organization dedicated to protecting Sri Lanka's coastal ecosystems through community engagement and sustainable practices.",
    website: "oceanguardians.lk",
    projects: 3,
  },
  {
    id: 2,
    name: "Lanka Health Initiative",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    organization: "Community Healthcare",
    location: "Kandy, Sri Lanka",
    description: "Grassroots healthcare organization bringing medical awareness and preventive care to rural communities across central Sri Lanka.",
    website: "lankahealthinit.org",
    projects: 2,
  },
  {
    id: 3,
    name: "EduBridge Sri Lanka",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    organization: "Education NGO",
    location: "Colombo, Sri Lanka",
    description: "Innovative education initiative connecting global volunteers with local schools to enhance learning experiences and cultural exchange.",
    website: "edubridge.lk",
    projects: 4,
  },
  {
    id: 4,
    name: "Green Lanka Movement",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    organization: "Environmental Conservation",
    location: "Nuwara Eliya, Sri Lanka",
    description: "Environmental conservation collective focused on reforestation, sustainable agriculture, and climate action across Sri Lanka's hill country.",
    website: "greenlanka.org",
    projects: 3,
  },
  {
    id: 5,
    name: "Youth Empowerment Hub",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    organization: "Youth Development",
    location: "Colombo, Sri Lanka",
    description: "Dynamic organization empowering young Sri Lankans through leadership programs, skill development, and community engagement initiatives.",
    website: "youthempower.lk",
    projects: 2,
  },
  {
    id: 6,
    name: "Heritage Tourism Collective",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    organization: "Sustainable Tourism",
    location: "Anuradhapura, Sri Lanka",
    description: "Community-driven tourism initiative promoting sustainable travel and cultural preservation in Sri Lanka's ancient cities.",
    website: "heritagelk.com",
    projects: 2,
  },
];

// Project data with OP assignments
const projects = [
  {
    id: 1,
    name: "Aquatica",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    brief: "Marine conservation and ocean awareness project focusing on protecting Sri Lanka's rich marine biodiversity through community engagement.",
    fullDescription: "Aquatica is dedicated to marine conservation efforts in Sri Lanka. Volunteers participate in beach cleanups, coral reef monitoring, marine life documentation, and community education programs about ocean conservation. The project aims to protect Sri Lanka's diverse marine ecosystem while raising awareness about sustainable fishing practices.",
    sdg: ["14 - Life Below Water", "13 - Climate Action"],
    duration: "6-8 weeks",
    location: "Southern Coast, Sri Lanka",
    opId: 1,
  },
  {
    id: 2,
    name: "Heart Beat",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    brief: "Healthcare awareness and support project bringing medical knowledge and preventive care to underserved communities.",
    fullDescription: "Heart Beat focuses on health education and awareness in rural Sri Lankan communities. Volunteers work alongside local healthcare providers to conduct health camps, promote hygiene practices, and provide basic health screenings. The project addresses preventive healthcare and promotes healthy lifestyle choices.",
    sdg: ["3 - Good Health and Well-being"],
    duration: "6-8 weeks",
    location: "Central Province, Sri Lanka",
    opId: 2,
  },
  {
    id: 3,
    name: "Global Classroom",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    brief: "Educational initiative bringing global perspectives and English language skills to local schools across Sri Lanka.",
    fullDescription: "Global Classroom connects international volunteers with Sri Lankan schools to enhance English language education and provide global exposure to students. Volunteers conduct interactive English classes, cultural exchange sessions, and help develop communication skills among students.",
    sdg: ["4 - Quality Education"],
    duration: "6-8 weeks",
    location: "Various locations, Sri Lanka",
    opId: 3,
  },
  {
    id: 4,
    name: "On The Map",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    brief: "Tourism promotion project showcasing Sri Lanka's hidden gems while fostering sustainable tourism practices.",
    fullDescription: "On The Map works to promote sustainable tourism in Sri Lanka by documenting lesser-known destinations, creating content, and developing community-based tourism initiatives. Volunteers help local communities benefit from tourism while preserving cultural and natural heritage.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "6-8 weeks",
    location: "Various locations, Sri Lanka",
    opId: 6,
  },
  {
    id: 5,
    name: "Roots",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    brief: "Environmental conservation project focused on reforestation and sustainable agriculture in Sri Lanka's hill country.",
    fullDescription: "Roots is an environmental conservation project focusing on reforestation, sustainable agriculture, and environmental education. Volunteers participate in tree planting activities, help establish community gardens, and educate local communities about sustainable farming practices.",
    sdg: ["15 - Life on Land", "13 - Climate Action"],
    duration: "6-8 weeks",
    location: "Kandy Region, Sri Lanka",
    opId: 4,
  },
  {
    id: 6,
    name: "Raise Your Voice",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    brief: "Youth empowerment and leadership development project building tomorrow's changemakers through skill development.",
    fullDescription: "Raise Your Voice empowers young Sri Lankans through leadership workshops, public speaking training, and personal development programs. Volunteers share their experiences and skills to inspire youth to become active contributors to their communities.",
    sdg: ["4 - Quality Education", "10 - Reduced Inequalities"],
    duration: "6-8 weeks",
    location: "Colombo Region, Sri Lanka",
    opId: 5,
  },
];

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
        color="#234934"
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

// Glassmorphic card style
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.65)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
};

interface Project {
  id: number;
  name: string;
  image: string;
  brief: string;
  fullDescription: string;
  sdg: string[];
  duration: string;
  location: string;
  opId: number;
}

interface OpProvider {
  id: number;
  name: string;
  photo: string;
  organization: string;
  location: string;
  description: string;
  website: string;
  projects: number;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedOP, setSelectedOP] = useState<OpProvider | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleOPClick = (opId: number) => {
    const op = opportunityProviders.find((p) => p.id === opId);
    if (op) {
      setSelectedProject(null);
      setSelectedOP(op);
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #e8f4f8 0%, #f1f3e9 100%)" }}
    >
      {/* Cinematic Gradient Divider from About */}
      <div
        style={{
          height: "1px",
          marginTop: "16px",
          marginBottom: "16px",
          background:
            "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.35), transparent)",
        }}
      />

      {/* Main section content */}
      <div className="relative py-20 lg:py-32">
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
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  color: "#037ef3",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Our Projects
              </span>
              <h2
                style={{
                  fontSize: "clamp(38px, 4vw, 54px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#1e293b",
                  marginBottom: "0",
                }}
              >
                Explore Opportunities That{" "}
                <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
                  Shape the World
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col h-full rounded-3xl overflow-hidden"
                style={glassCardStyle}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden shrink-0 aspect-[16/10]">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-7">
                  {/* Project Title */}
                  <h3
                    className="transition-colors duration-300"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#037ef3",
                      marginBottom: "14px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="line-clamp-3 flex-grow"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "rgba(30, 41, 59, 0.75)",
                      marginBottom: "24px",
                    }}
                  >
                    {project.brief}
                  </p>

                  {/* Cyberfunk CTA Button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full overflow-hidden rounded-xl transition-all duration-300 group/btn"
                    style={{
                      padding: "15px 28px",
                      background:
                        "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
                      boxShadow:
                        "0 4px 20px rgba(3, 126, 243, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {/* Animated shimmer effect */}
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
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
                        backgroundSize: "200% 100%",
                      }}
                    />

                    <span
                      className="relative z-10 flex items-center justify-center gap-2 font-semibold text-white"
                      style={{ fontSize: "15px" }}
                    >
                      Learn More
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </span>

                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
                      }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row"
              style={{
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(30px)",
                borderRadius: "32px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Modal Left: Image */}
              <div className="relative w-full lg:w-1/2 lg:min-h-[600px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-72 lg:h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 70%)",
                  }}
                />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 lg:left-5 lg:right-auto w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <X size={22} style={{ color: "#1e293b" }} />
                </button>

                <h3
                  className="absolute bottom-8 left-8 right-8"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 38px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {selectedProject.name}
                </h3>
              </div>

              {/* Modal Right: Content */}
              <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col">
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    color: "rgba(30, 41, 59, 0.85)",
                    marginBottom: "32px",
                  }}
                >
                  {selectedProject.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div
                    style={{
                      background: "rgba(3, 126, 243, 0.08)",
                      borderRadius: "18px",
                      padding: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(30,41,59,0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        marginBottom: "8px",
                        fontWeight: 600,
                      }}
                    >
                      Duration
                    </p>
                    <p
                      style={{
                        color: "#1e293b",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      {selectedProject.duration}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "rgba(3, 126, 243, 0.08)",
                      borderRadius: "18px",
                      padding: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(30,41,59,0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        marginBottom: "8px",
                        fontWeight: 600,
                      }}
                    >
                      Location
                    </p>
                    <p
                      style={{
                        color: "#1e293b",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      {selectedProject.location}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(30,41,59,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: "14px",
                      fontWeight: 600,
                    }}
                  >
                    SDG Goals
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.sdg.map((goal, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "10px 16px",
                          background: "rgba(3, 126, 243, 0.1)",
                          color: "#037ef3",
                          fontSize: "14px",
                          borderRadius: "999px",
                          fontWeight: 500,
                        }}
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Opportunity Provider in Modal */}
                {(() => {
                  const op = opportunityProviders.find(
                    (p) => p.id === selectedProject.opId
                  );
                  return op ? (
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl mb-8 cursor-pointer transition-all duration-300 hover:bg-[#037ef3]/5"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOPClick(op.id);
                      }}
                      style={{
                        background: "rgba(3, 126, 243, 0.06)",
                        border: "1px solid rgba(3, 126, 243, 0.2)",
                      }}
                    >
                      <img
                        src={op.photo}
                        alt={op.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
                      />
                      <div className="flex-grow">
                        <p
                          className="font-semibold"
                          style={{ color: "#1e293b", fontSize: "15px" }}
                        >
                          {op.name}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: "rgba(30, 41, 59, 0.6)" }}
                        >
                          {op.organization} • {op.location}
                        </p>
                      </div>
                      <ExternalLink size={18} style={{ color: "#037ef3" }} />
                    </div>
                  ) : null;
                })()}

                {/* Cyberfunk CTA */}
                <Link
                  href="/projects"
                  className="relative w-full overflow-hidden rounded-xl transition-all duration-300 group/btn mt-auto"
                  style={{
                    padding: "16px 32px",
                    background:
                      "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
                    boxShadow:
                      "0 8px 30px rgba(3, 126, 243, 0.35), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
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
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <span
                    className="relative z-10 flex items-center justify-center gap-2 font-semibold text-white"
                    style={{ fontSize: "16px" }}
                  >
                    Apply Now
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 blur-2xl transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
                    }}
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opportunity Provider Modal */}
      <AnimatePresence>
        {selectedOP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOP(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(30px)",
                borderRadius: "32px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
                padding: "48px",
              }}
            >
              <button
                onClick={() => setSelectedOP(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                <X size={22} style={{ color: "#1e293b" }} />
              </button>

              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  <img
                    src={selectedOP.photo}
                    alt={selectedOP.name}
                    className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-xl"
                  />
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white"
                    style={{ background: "#10b981" }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#1e293b",
                    marginBottom: "8px",
                  }}
                >
                  {selectedOP.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#037ef3",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {selectedOP.organization}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(30, 41, 59, 0.6)" }}>
                  📍 {selectedOP.location}
                </p>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "rgba(30, 41, 59, 0.85)",
                  marginBottom: "32px",
                }}
              >
                {selectedOP.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div
                  style={{
                    background: "rgba(3, 126, 243, 0.08)",
                    borderRadius: "18px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#037ef3",
                      marginBottom: "4px",
                    }}
                  >
                    {selectedOP.projects}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(30, 41, 59, 0.6)",
                      fontWeight: 500,
                    }}
                  >
                    Active Projects
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(3, 126, 243, 0.08)",
                    borderRadius: "18px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#10b981",
                      marginBottom: "4px",
                    }}
                  >
                    ✓
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(30, 41, 59, 0.6)",
                      fontWeight: 500,
                    }}
                  >
                    Verified Partner
                  </p>
                </div>
              </div>

              <a
                href={`https://${selectedOP.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full overflow-hidden rounded-xl transition-all duration-300 group/btn flex items-center justify-center"
                style={{
                  padding: "16px 32px",
                  background:
                    "linear-gradient(135deg, #037ef3 0%, #00d4ff 100%)",
                  boxShadow:
                    "0 8px 30px rgba(3, 126, 243, 0.35), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
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
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                  }}
                />
                <span
                  className="relative z-10 flex items-center gap-2 font-semibold text-white"
                  style={{ fontSize: "16px" }}
                >
                  Visit Website
                  <ExternalLink
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}