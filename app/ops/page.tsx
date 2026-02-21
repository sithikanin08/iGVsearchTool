"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, MapPin, Building2, ExternalLink, ShieldCheck, ArrowUpRight, Clock, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroParticleBackground from "../components/HeroParticleBackground";
import { Project, allProjects, AmenityIcon } from "../projects/page";

/* ───────────────────────────────────────────────────────────────
   OPPORTUNITY PROVIDERS DATA
   ─────────────────────────────────────────────────────────────── */
interface OP {
  id: number;
  name: string;
  projects: string[];
  location: string;
  image: string;
  logoInitial: string;
  description: string;
  industry: string;
}

const opsData: OP[] = [
  {
    id: 1,
    name: "Rathmulukanda Nenasala Education Center",
    projects: ["Global Classroom", "Fingerprint"],
    location: "Rathmulukanda",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    logoInitial: "R",
    description: "A community educational center dedicated to improving digital literacy and providing quality education to students in the Rathmulukanda area. They host volunteers who teach English and fundamental IT skills.",
    industry: "Education & Literacy",
  },
  {
    id: 2,
    name: "Lanka Odessy Tours",
    projects: ["On The Map"],
    location: "Makola",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    logoInitial: "L",
    description: "A sustainable tourism and travel agency focused on showcasing the hidden cultural and natural gems of Sri Lanka. They collaborate with AIESEC volunteers to create sustainable tourism models and marketing materials.",
    industry: "Tourism & Hospitality",
  },
  {
    id: 3,
    name: "Illukkovita Kanishta Vidyalaya",
    projects: ["Global Classroom", "Fingerprint"],
    location: "Padukka",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    logoInitial: "I",
    description: "A rural school in Padukka aiming to elevate the standard of English and soft skills among its students. Volunteers engage children through interactive learning and cultural exchange activities.",
    industry: "Primary Education",
  },
  {
    id: 4,
    name: "Induruwa Sea Turtle Conservation Center",
    projects: ["Aquatica"],
    location: "Kaikawala, Induruwa",
    image: "https://images.unsplash.com/photo-1437622368342-7a3d73a40cfa?w=800&q=80",
    logoInitial: "I",
    description: "Dedicated to the protection and rehabilitation of endangered sea turtles along Sri Lanka's southern coast. Volunteers assist in hatchery management, beach cleanups, and educating locals on marine conservation.",
    industry: "Marine Conservation",
  },
  {
    id: 5,
    name: "KidSpace",
    projects: ["Global Classroom"],
    location: "7, Mendis Place, Dehiwala",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    logoInitial: "K",
    description: "An early childhood development center focusing on creative learning methodologies. They partner with volunteers to introduce global perspectives and diverse teaching methods to young children.",
    industry: "Early Childhood Education",
  },
  {
    id: 6,
    name: "The Hatch",
    projects: ["Global Classroom", "Discover"],
    location: "Colombo 5 / Colombo 7",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    logoInitial: "T",
    description: "One of Sri Lanka's premier innovation and startup hubs. They provide a collaborative workspace and ecosystem for founders. Volunteers often support startup events, community building, and cross-cultural initiatives here.",
    industry: "Innovation & Startups",
  },
  {
    id: 7,
    name: "Sri Lanka Volunteer Turtles",
    projects: ["Aquatica"],
    location: "No. 73/A, Paratarakaya, Kosgoda",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    logoInitial: "S",
    description: "A prominent turtle hatchery situated in Kosgoda, focused on maximizing the hatching and release rates of native sea turtles. Volunteers are hands-on with nest protection, tank cleaning, and data collection.",
    industry: "Marine Conservation",
  },
  {
    id: 8,
    name: "Senior Citizen's Elders Home",
    projects: ["Heartbeat"],
    location: "Colombo Suburbs",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80",
    logoInitial: "S",
    description: "A care facility providing a safe and nurturing environment for the elderly. Volunteers engage residents in therapeutic activities, physical exercises, and spend quality time to improve their emotional wellbeing.",
    industry: "Elderly Care & Wellbeing",
  },
  {
    id: 9,
    name: "Zri Adventure",
    projects: ["Skill Up!"],
    location: "Avissawella",
    image: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=800&q=80",
    logoInitial: "Z",
    description: "An adventure sports and outdoor team-building company. They facilitate leadership camps and survival skills training. Volunteers assist in coordinating adventure activities and creating marketing content.",
    industry: "Adventure & Outdoor Sports",
  },
  {
    id: 10,
    name: "Climb Lanka",
    projects: ["Skill Up!"],
    location: "Kandy",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    logoInitial: "C",
    description: "Sri Lanka's premier indoor and outdoor rock climbing community. They promote the sport of climbing and eco-friendly trekking, welcoming volunteers to aid in safety instruction and community outreach.",
    industry: "Sports & Recreation",
  },
  {
    id: 11,
    name: "Finnish Pre School in Colombo",
    projects: ["Global Classroom"],
    location: "Colombo",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    logoInitial: "F",
    description: "An educational institution following the highly regarded Finnish early education model. They integrate AIESEC volunteers to enhance the cross-cultural experience and language exposure for the toddlers.",
    industry: "Early Childhood Education",
  },
  {
    id: 12,
    name: "Epic Engage Media (Pvt) Ltd",
    projects: ["Skill Up!"],
    location: "Colombo",
    image: "https://images.unsplash.com/photo-1497215848143-2287c8b1e4a3?w=800&q=80",
    logoInitial: "E",
    description: "A digital media and creative agency specializing in engagement-driven content. Volunteers collaborate on campaigns, getting exposure to the fast-paced Sri Lankan digital marketing landscape.",
    industry: "Digital Media & Marketing",
  },
  {
    id: 13,
    name: "Diyakawa Water Sports Centre",
    projects: ["Aquatica", "On The Map"],
    location: "Bentota",
    image: "https://images.unsplash.com/photo-1516008139599-2a9fec92a343?w=800&q=80",
    logoInitial: "D",
    description: "A popular water sports facility operating on the Bentota River. They combine thrilling water activities with eco-friendly tourism practices, welcoming volunteers to help manage operations and promote sustainable tourism.",
    industry: "Tourism & Water Sports",
  }
];

export default function OPsPage() {
  const [selectedOP, setSelectedOP] = useState<OP | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* ── Hero Section ──────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          backgroundColor: "#0F172A", // Dark Slate to match Projects page
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#0f172a_100%)]" />
        <HeroParticleBackground />

        <div className="relative z-10 flex flex-col items-center" style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          textAlign: "center",
        }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#00d4ff",
              marginBottom: "16px",
            }}
          >
            Our Partners
          </motion.span>

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
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Opportunity{" "}
            <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
              Providers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#94a3b8",
              maxWidth: "640px",
              lineHeight: 1.6,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "40px",
            }}
          >
            Meet the incredible organizations, schools, and NGOs that partner with us to create life-changing volunteer experiences in Sri Lanka.
          </motion.p>
        </div>
      </section>

      {/* ── OP Grid ──────────────────────────────── */}
      <section className="relative z-20">
        <div style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          paddingTop: "64px",
          paddingBottom: "80px",
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opsData.map((op, index) => (
              <motion.div
                key={op.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedOP(op)}
                className="group relative cursor-pointer bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 border shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col"
                style={{
                  borderRadius: "20px",
                  borderColor: "rgba(0,0,0,0.06)",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(3,126,243,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                }}
              >
                {/* Banner Image - Edge to Edge - Matched to Projects Page Card Height (240px) */}
                <div style={{ height: "240px", width: "100%", position: "relative", overflow: "hidden", flexShrink: 0, backgroundColor: "#f1f5f9" }}>
                  <img src={op.image} alt={op.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  {/* Subtle gradient matching projects */}
                  <div
                    className="absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-70"
                    style={{
                      background: "linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(3,126,243,0.1) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Floating Logo/Initial - Absolutely positioned over image and content */}
                {/* 240px (image height) - 28px (half logo height) = 212px */}
                <div className="absolute top-[212px] left-[24px] w-14 h-14 rounded-[14px] bg-white shadow-md flex items-center justify-center border border-slate-100 z-20">
                  <span className="text-2xl font-black text-slate-800">{op.logoInitial}</span>
                </div>

                {/* Content section matching Projects precisely */}
                <div style={{ padding: "36px 24px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#0f172a",
                      marginBottom: "12px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                    className="line-clamp-1 group-hover:text-[#037ef3] transition-colors"
                  >
                    {op.name}
                  </h3>

                  <div className="flex items-center text-slate-500 mb-4 gap-1.5">
                    <MapPin size={14} className="text-[#037ef3] shrink-0" />
                    <span style={{ fontSize: "13px", fontWeight: 500 }} className="truncate">{op.location}</span>
                  </div>

                  {/* Project Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {op.projects.map((proj) => (
                      <span key={proj}
                        style={{
                          padding: "4px 10px",
                          borderRadius: "6px",
                          background: "rgba(3,126,243,0.08)",
                          color: "#037ef3",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          textTransform: "uppercase",
                        }}
                      >
                        {proj}
                      </span>
                    ))}
                  </div>

                  {/* Info Row Bottom */}
                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#64748b",
                      marginTop: "auto"
                    }}
                  >
                    <div className="flex items-center gap-1.5" style={{ fontSize: "12px", fontWeight: 600 }}>
                      <Building2 size={14} />
                      {op.industry}
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-[#037ef3] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OP Detail Modal ─────────────────────── */}
      <AnimatePresence>
        {selectedOP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOP(null)}
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
              className="w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Modal Left: Full-bleed Image */}
              <div className="relative w-full lg:w-[45%] lg:min-h-[600px] shrink-0">
                <img
                  src={selectedOP.image}
                  alt={selectedOP.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                  }}
                />

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

                {/* Floating Logo/Initial inside Modal - Replaces Price Badge on Projects */}
                <div
                  className="absolute"
                  style={{
                    bottom: "100px",
                    left: "28px",
                    width: "88px",
                    height: "88px",
                    borderRadius: "20px",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                    border: "4px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <span style={{ color: "#1e293b", fontWeight: 900, fontSize: "40px" }}>
                    {selectedOP.logoInitial}
                  </span>
                </div>

                <h3
                  className="absolute bottom-8 left-8 right-8"
                  style={{
                    fontSize: "clamp(28px, 3vw, 36px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  {selectedOP.name}
                </h3>
              </div>

              {/* Modal Right: Content */}
              <div className="relative w-full lg:w-[55%] flex flex-col overflow-y-auto" style={{ maxHeight: "90vh" }}>

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
                    <div className="flex items-center gap-2"><Building2 size={18} style={{ color: "#94a3b8" }} /> {selectedOP.industry}</div>
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
                    <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                      Associated Projects
                    </h4>
                    <div className="flex flex-col gap-3">
                      {selectedOP.projects.map((proj) => (
                        <div key={proj}
                          className="flex items-center gap-4 relative overflow-hidden group/proj cursor-pointer"
                          onClick={() => {
                            const p = allProjects.find(p => p.name === proj);
                            if (p) setSelectedProject(p);
                          }}
                          style={{
                            padding: "16px 20px",
                            borderRadius: "16px",
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "#ffffff";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(3,126,243,0.2)";
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(3,126,243,0.08)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                            (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                          }}
                        >
                          {/* Accent line imitating Projects feature bullets */}
                          <div style={{ width: "4px", height: "32px", background: "#037ef3", borderRadius: "4px" }} />

                          <div className="flex flex-col">
                            <span style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "2px" }}>{proj}</span>
                            <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>AIESEC iGV Project</span>
                          </div>

                          <ArrowRight size={18} style={{ marginLeft: "auto", color: "#cbd5e1" }} className="group-hover/proj:text-[#037ef3] group-hover/proj:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Project Detail Modal (from Projects Page) ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
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
              className="w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Modal Left: Full-bleed Image */}
              <div className="relative w-full lg:w-[45%] lg:min-h-[600px] shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                  }}
                />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <X size={18} className="text-white transition-transform group-hover:rotate-90" />
                </button>

                {/* Price badge on image */}
                <div
                  className="absolute"
                  style={{
                    bottom: "80px",
                    left: "28px",
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f9a825, #f57f17)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(249,168,37,0.5)",
                    border: "4px solid rgba(255,255,255,0.3)",
                  }}
                >
                  <span style={{ color: "white", fontWeight: 800, fontSize: "20px" }}>
                    {selectedProject.fee}
                  </span>
                </div>

                <h3
                  className="absolute bottom-8 left-8 right-8"
                  style={{
                    fontSize: "clamp(28px, 3vw, 36px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    textShadow: "0 2px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  {selectedProject.name}
                </h3>
              </div>

              {/* Modal Right: Content */}
              <div className="w-full lg:w-[55%] flex flex-col overflow-y-auto" style={{ maxHeight: "90vh" }}>
                <div className="flex flex-col flex-grow" style={{ padding: "clamp(32px, 4vw, 48px) clamp(28px, 3.5vw, 44px)" }}>

                  {/* Status badge */}
                  <div style={{ marginBottom: "24px" }}>
                    <span
                      style={{
                        padding: "6px 16px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
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

                  {/* DESCRIPTION */}
                  <div style={{ paddingBottom: "28px", marginBottom: "28px", borderBottom: "1px solid #e2e8f0" }}>
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
                      Description
                    </h4>
                    <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#374151" }}>
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* OP info */}
                  <div style={{ paddingBottom: "28px", marginBottom: "28px", borderBottom: "1px solid #e2e8f0" }}>
                    <h4
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#0f172a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "12px",
                      }}
                    >
                      Opportunity Provider
                    </h4>
                    <button
                      className="flex items-center gap-3 w-full text-left transition-all duration-300 group/op-card"
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        background: "rgba(3,126,243,0.04)",
                        border: "1px solid rgba(3,126,243,0.08)",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Close project modal to reveal the OP modal underneath
                        setSelectedProject(null);
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
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "linear-gradient(135deg, #037ef3, #00d4ff)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "transform 0.3s ease",
                        }}
                        className="group-hover/op-card:scale-110"
                      >
                        <Users size={18} style={{ color: "white" }} />
                      </div>
                      <span style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b" }}>
                        {selectedProject.opName}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="ml-auto text-blue-500 opacity-0 group-hover/op-card:opacity-100 transition-opacity transform translate-x-[-10px] group-hover/op-card:translate-x-0"
                      />
                    </button>
                  </div>

                  {/* SDG + LOCATION + DURATION row */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    style={{ paddingBottom: "28px", marginBottom: "28px", borderBottom: "1px solid #e2e8f0" }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#0f172a",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "10px",
                        }}
                      >
                        SDG Focus
                      </h4>
                      <div className="flex flex-col gap-1.5">
                        {selectedProject.sdg.map((s) => (
                          <span
                            key={s}
                            style={{ fontSize: "13px", fontWeight: 600, color: "#037ef3" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#0f172a",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "10px",
                        }}
                      >
                        Location
                      </h4>
                      <p style={{ fontSize: "14px", color: "#475569", fontWeight: 500 }}>
                        {selectedProject.location}
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#0f172a",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "10px",
                        }}
                      >
                        Duration
                      </h4>
                      <p style={{ fontSize: "14px", color: "#475569", fontWeight: 500 }}>
                        {selectedProject.duration}
                      </p>
                    </div>
                  </div>

                  {/* AMENITIES */}
                  <div style={{ paddingBottom: "28px", marginBottom: "28px", borderBottom: "1px solid #e2e8f0" }}>
                    <h4
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#0f172a",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "14px",
                      }}
                    >
                      What&apos;s Included
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-2"
                          style={{
                            padding: "10px 18px",
                            borderRadius: "12px",
                            background: "rgba(3,126,243,0.06)",
                            border: "1px solid rgba(3,126,243,0.1)",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#1e293b",
                          }}
                        >
                          <span style={{ color: "#037ef3", display: "flex" }}>
                            <AmenityIcon amenity={amenity} />
                          </span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* APPLY Button — Cyberpunk style */}
                  {selectedProject.status === "active" ? (
                    <a
                      href={selectedProject.expaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full overflow-hidden transition-all duration-300 group/btn flex items-center justify-center cursor-pointer"
                      style={{
                        padding: "18px 32px",
                        background: "linear-gradient(135deg, #00d4ff 0%, #037ef3 50%, #0066cc 100%)",
                        clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(3, 126, 243, 0.2), 0 8px 24px rgba(0, 212, 255, 0.3)",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                          backgroundSize: "200% 100%",
                        }}
                      />
                      <span
                        className="relative z-10 flex items-center justify-center gap-2 font-bold text-white tracking-wider uppercase"
                        style={{ fontSize: "15px", letterSpacing: "0.1em" }}
                      >
                        Apply Now
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                          style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,0.8))" }}
                        />
                      </span>
                    </a>
                  ) : (
                    <div
                      className="relative w-full flex items-center justify-center"
                      style={{
                        padding: "18px 32px",
                        background: "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)",
                        clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                        opacity: 0.7,
                        cursor: "not-allowed",
                      }}
                    >
                      <span
                        className="flex items-center justify-center gap-2 font-bold text-white tracking-wider uppercase"
                        style={{ fontSize: "15px", letterSpacing: "0.1em" }}
                      >
                        Currently Unavailable
                      </span>
                    </div>
                  )}

                  {/* EXPA link */}
                  <div className="flex justify-center" style={{ marginTop: "14px" }}>
                    <a
                      href={selectedProject.expaLink}
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
