"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, Quote, Calendar, MapPin, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionParticleBackground from "../components/SectionParticleBackground";
import HeroParticleBackground from "../components/HeroParticleBackground";

// Experience data - 8 items
const experiences = [
  {
    id: 1,
    name: "Maria Garcia",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop",
    project: "Global Classroom",
    role: "English Teacher",
    location: "Kandy, Sri Lanka",
    brief: "Teaching English to rural students transformed my perspective on education and community.",
    fullStory: "Coming to Sri Lanka through AIESEC was a life-changing decision. I spent 8 weeks teaching English to children in rural schools near Kandy. The warmth of the Sri Lankan people, the beauty of the country, and the impact I could make on these young minds exceeded all my expectations. I learned as much from my students as they learned from me. This experience shaped my career path towards international development, and I've made lifelong friends here.",
    duration: "8 weeks",
    year: "2024",
  },
  {
    id: 2,
    name: "Thomas Mueller",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    project: "Aquatica",
    role: "Marine Conservationist",
    location: "Galle, Sri Lanka",
    brief: "Protecting marine life opened my eyes to the importance of ocean conservation.",
    fullStory: "As an environmental science student, Aquatica was the perfect project for me. I participated in coral reef monitoring, beach cleanups, and community education programs along the southern coast. The marine biodiversity in Sri Lanka is incredible, and working to protect it alongside local communities gave me practical experience that no classroom could provide. I'm now pursuing a career in marine conservation, directly inspired by this experience.",
    duration: "6 weeks",
    year: "2024",
  },
  {
    id: 3,
    name: "Priya Sharma",
    country: "India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    project: "Heart Beat",
    role: "Healthcare Assistant",
    location: "Kurunegala, Sri Lanka",
    brief: "Healthcare outreach taught me textrue meaning of community service and collaboration.",
    fullStory: "The Heart Beat project allowed me to combine my passion for healthcare with meaningful community impact. Conducting health awareness sessions and basic health camps in underserved areas was both challenging and rewarding. The resilience and gratitude of the communities we served inspired me deeply. Sri Lanka's healthcare challenges are universal, and this experience prepared me for a global health career.",
    duration: "8 weeks",
    year: "2023",
  },
  {
    id: 4,
    name: "Lucas Santos",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
    project: "Roots",
    role: "Sustainability Volunteer",
    location: "Nuwara Eliya, Sri Lanka",
    brief: "Planting trees and teaching sustainable farming connected me to nature like never before.",
    fullStory: "The Roots project was an incredible journey into environmental conservation. Working with local farmers to implement sustainable agricultural practices while participating in reforestation efforts gave me a deep appreciation for the connection between people and land. The knowledge I gained about organic farming and ecosystem restoration has influenced how I approach sustainability under my own country.",
    duration: "6 weeks",
    year: "2023",
  },
  {
    id: 5,
    name: "Sarah Chen",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop",
    project: "Scale Up!",
    role: "Business Consultant",
    location: "Colombo, Sri Lanka",
    brief: "Helping a local startup refine their business model was an invaluable professional experience.",
    fullStory: "I joined the Scale Up! project to apply my business degree in a real-world setting. Working with a small handicraft business in Colombo, I helped them optimize their supply chain and launch a digital marketing strategy. Seeing their sales increase by 40% during my stay was incredibly rewarding. The entrepreneurial spirit in Sri Lanka is vibrant, and I learned so much about adaptability and innovation in emerging markets.",
    duration: "8 weeks",
    year: "2023",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop",
    project: "Fingerprint",
    role: "Youth Mentor",
    location: "Matara, Sri Lanka",
    brief: "Mentoring underprivileged youth showed me the power of education to break cycles of poverty.",
    fullStory: "Fingerprint creates safe spaces for children from difficult backgrounds. My role involved organizing after-school activities, helping with homework, and simply being a positive role model. The bonds I formed with these kids were profound. Despite their hardships, their optimism and eagerness to learn were contagious. It reinforced my belief that every child deserves a champion.",
    duration: "6 weeks",
    year: "2022",
  },
  {
    id: 7,
    name: "Emily Johnson",
    country: "USA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
    project: "Go Green",
    role: "Waste Management Volunteer",
    location: "Negombo, Sri Lanka",
    brief: "Tackling plastic pollution on beaches was a hands-on lesson in environmental responsibility.",
    fullStory: "Sri Lanka's beaches are beautiful, but plastic pollution is a real issue. With Go Green, we organized large-scale beach cleanups and conducted workshops on recycling and waste reduction for schools and hotels. It was physical, hard work, but seeing a pristine beach after a cleanup was worth every drop of sweat. I left with a renewed commitment to living a zero-waste lifestyle.",
    duration: "4 weeks",
    year: "2022",
  },
  {
    id: 8,
    name: "Kenji Tanaka",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=600&fit=crop",
    project: "Tech for All",
    role: "IT Instructor",
    location: "Jaffna, Sri Lanka",
    brief: "Teaching basic coding skills to students in the north bridged the digital divide.",
    fullStory: "I traveled to Jaffna to teach computer literacy and basic programming. The students were incredibly bright but lacked resources. We set up a computer lab and ran daily workshops. Seeing a student write their first line of code and watch the screen light up was magic. Technology is a powerful equalizer, and I'm proud to have played a small part in their digital journey.",
    duration: "8 weeks",
    year: "2022",
  },
];

interface Experience {
  id: number;
  name: string;
  country: string;
  image: string;
  project: string;
  role: string;
  location: string;
  brief: string;
  fullStory: string;
  duration: string;
  year: string;
}

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
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
          className="relative z-10 mx-auto px-6 sm:px-10 flex justify-center"
          style={{
            maxWidth: "1280px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-3xl"
          >
            <span
              className="block text-[13px] font-bold tracking-[0.25em] text-[#00d4ff] uppercase mb-4"
            >
              Volunteer Stories
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

      {/* ── Grid Section ──────────────────────────────── */}
      <section className="relative" style={{ paddingBottom: "80px" }}>
        {/* Adds subtle background texture behind cards to make glass pop */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

        <div
          className="relative z-10 mx-auto"
          style={{
            maxWidth: "1280px",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedExperience(exp)}
                className="group cursor-pointer h-full"
              >
                {/* ── Experience Card (Navbar Glassmorphism + Landing Page Layout) ── */}
                <div
                  className="relative backdrop-blur-2xl border border-white/50 bg-white/25 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(3,126,243,0.1),_inset_0_1px_0_rgba(255,255,255,0.8)]"
                  style={{
                    borderRadius: "32px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
                    WebkitBackdropFilter: "blur(24px) saturate(180%)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    overflow: "hidden",
                    padding: "24px",
                  }}
                >
                  {/* Portrait Image - Rounded for Inset Look */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "240px",
                      overflow: "hidden",
                      borderRadius: "16px",
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)" }}
                    />

                    {/* Country Pill */}
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
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      {exp.country}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: "24px" }}>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#1e293b", marginBottom: "4px", letterSpacing: "-0.01em" }}>
                      {exp.name}
                    </h3>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#037ef3", marginBottom: "16px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                      {exp.project}
                    </p>
                    <p className="line-clamp-3" style={{ fontSize: "15px", lineHeight: 1.7, color: "#475569", marginBottom: "24px" }}>
                      {exp.brief}
                    </p>

                    <span
                      className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 relative overflow-hidden"
                      style={{ fontSize: "14px", fontWeight: 600, color: "#037ef3", padding: "10px 20px", background: "rgba(3, 126, 243, 0.08)", borderRadius: "99px", width: "fit-content" }}
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
      </section>

      {/* ── Modal ─────────────────────────────────────── */}
      {/* ── Modal ─────────────────────────────────────── */}
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
                <div className="grid grid-cols-2 gap-8">
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
