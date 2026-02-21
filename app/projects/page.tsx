"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowUpRight, MapPin, Clock, Bus, Home, UtensilsCrossed, ExternalLink, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionParticleBackground from "../components/SectionParticleBackground";
import HeroParticleBackground from "../components/HeroParticleBackground";

/* ───────────────────────────────────────────────────────────────
   PROJECT DATA — 10 Active (first) + 8 Inactive
   ─────────────────────────────────────────────────────────────── */
export interface Project {
  id: number;
  name: string;
  image: string;
  brief: string;
  fullDescription: string;
  sdg: string[];
  duration: string;
  location: string;
  status: "active" | "inactive";
  fee: string;
  amenities: string[];
  expaLink: string;
  opName: string;
}

export const allProjects: Project[] = [
  /* ── ACTIVE PROJECTS ────────────────────────────── */
  {
    id: 1,
    name: "Heartbeat",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    brief: "Healthcare awareness and community wellbeing project based on SDG #3 — Good Health and Well-being.",
    fullDescription: "Project Heartbeat is a project based on Sustainable Development Goal #03 \"Good Health and Well-being\". Volunteers work alongside local healthcare providers to conduct health camps, promote hygiene practices, and provide basic health screenings in underserved Sri Lankan communities. The project addresses preventive healthcare and promotes healthy lifestyle choices to create lasting impact.",
    sdg: ["3 - Good Health and Well-being"],
    duration: "6 weeks",
    location: "Central Province, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Three Meals"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1316713",
    opName: "Lanka Health Initiative",
  },
  {
    id: 2,
    name: "Fingerprint",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    brief: "Youth empowerment and identity project helping young people discover their unique potential and leave their mark.",
    fullDescription: "Fingerprint is a youth development initiative that empowers young Sri Lankans to discover their identity and purpose. Through workshops on self-awareness, personal branding, and community engagement, volunteers help participants understand their unique strengths and build confidence to create positive change in their communities.",
    sdg: ["4 - Quality Education", "10 - Reduced Inequalities"],
    duration: "6 weeks",
    location: "Colombo, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Youth Empowerment Hub",
  },
  {
    id: 3,
    name: "Global Classroom",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    brief: "Quality education project contributing to SDG #4 by providing educational opportunities for all ages.",
    fullDescription: "The project aims to contribute to SDG #4 by providing an opening space for quality education for people of all ages, ensuring educational opportunities from initial literacy to other subjects such as mathematics, science and languages. Volunteers conduct interactive classes, cultural sessions, and develop communication skills.",
    sdg: ["4 - Quality Education"],
    duration: "6 weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Two Meals"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1316644",
    opName: "EduBridge Sri Lanka",
  },
  {
    id: 4,
    name: "Discover",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    brief: "Cultural immersion and tourism development project promoting Sri Lanka's hidden gems while fostering sustainable travel.",
    fullDescription: "Discover is a sustainable tourism initiative that showcases Sri Lanka's hidden cultural treasures. Volunteers work with local communities to document lesser-known destinations, create compelling content, and develop community-based tourism programs that bring economic benefits while preserving cultural heritage and natural beauty.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "4 weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Heritage Tourism Collective",
  },
  {
    id: 5,
    name: "Happy Bus",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    brief: "Mobile community outreach project bringing joy, education, and essential services to underserved rural areas.",
    fullDescription: "Happy Bus is an innovative mobile outreach initiative that travels to underserved rural communities across Sri Lanka. The project brings educational workshops, recreational activities, health awareness campaigns, and community development programs directly to the people who need them most, spreading happiness and creating sustainable impact.",
    sdg: ["1 - No Poverty", "3 - Good Health and Well-being"],
    duration: "6 weeks",
    location: "Rural Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Three Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Lanka Health Initiative",
  },
  {
    id: 6,
    name: "Skill Up!",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    brief: "Skills training project impacting SDG #8 by providing young people with soft and hard skills for career growth.",
    fullDescription: "The project aims to impact SDG #8 by providing young people with soft and hard skills training, needed to qualify for a decent job, and career guidance. Volunteers lead workshops on communication, digital literacy, entrepreneurship, and professional development to help Sri Lankan youth build competitive skill sets.",
    sdg: ["8 - Decent Work and Economic Growth"],
    duration: "4 weeks",
    location: "Colombo, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1316643",
    opName: "Youth Empowerment Hub",
  },
  {
    id: 7,
    name: "On The Map",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    brief: "Tourism promotion project putting Sri Lanka's cultural and natural wonders on the global stage.",
    fullDescription: "On The Map works to promote sustainable tourism in Sri Lanka by documenting lesser-known destinations, creating compelling content, and developing community-based tourism initiatives. Volunteers help local communities benefit from tourism while preserving cultural and natural heritage through storytelling and digital marketing.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "6 weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Heritage Tourism Collective",
  },
  {
    id: 8,
    name: "Green Leaders",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    brief: "Environmental leadership project building the next generation of climate change champions and eco-warriors.",
    fullDescription: "Green Leaders cultivates environmental consciousness and leadership among Sri Lankan youth. Through hands-on sustainability workshops, tree-planting campaigns, waste management initiatives, and climate action projects, volunteers empower young people to become proactive environmental stewards and advocates for a greener future.",
    sdg: ["13 - Climate Action", "15 - Life on Land"],
    duration: "6 weeks",
    location: "Nuwara Eliya, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Green Lanka Movement",
  },
  {
    id: 9,
    name: "Aquatica",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    brief: "Marine conservation project impacting SDG #14 to protect coastal ecosystems and marine wildlife.",
    fullDescription: "The project aims to impact SDG #14 by providing communities that live near marine and coastal areas, with concrete activities to improve the sustainability of the coast and protect marine wildlife that inhabits these ecosystems. Volunteers participate in beach cleanups, coral reef monitoring, and community education programs.",
    sdg: ["14 - Life Below Water", "13 - Climate Action"],
    duration: "6 weeks",
    location: "Southern Coast, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1309136",
    opName: "Ocean Guardians Foundation",
  },
  {
    id: 10,
    name: "Rooted",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    brief: "Agriculture and sustainability project connecting communities with the earth through regenerative farming practices.",
    fullDescription: "Rooted is an agricultural sustainability project that reconnects communities with traditional farming methods while introducing modern regenerative practices. Volunteers work with local farmers on organic agriculture, permaculture design, community gardens, and food security initiatives that nourish both people and the planet.",
    sdg: ["2 - Zero Hunger", "15 - Life on Land"],
    duration: "4 weeks",
    location: "Kandy Region, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Three Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Green Lanka Movement",
  },

  /* ── INACTIVE PROJECTS ────────────────────────────── */
  {
    id: 11,
    name: "Youth 4 Impact",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
    brief: "Youth leadership program creating change-makers who drive sustainable development in their communities.",
    fullDescription: "Youth 4 Impact was designed to shape young Sri Lankans into community leaders through intensive leadership training, mentorship programs, and hands-on project management experience. Participants learned to identify community challenges and create innovative solutions.",
    sdg: ["4 - Quality Education", "17 - Partnerships for the Goals"],
    duration: "6 weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Youth Empowerment Hub",
  },
  {
    id: 12,
    name: "Raise Your Voice",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    brief: "Advocacy and empowerment project giving young people the platform to speak up for social justice.",
    fullDescription: "Raise Your Voice empowered young Sri Lankans through public speaking training, debate workshops, and advocacy campaigns. Volunteers shared their experiences to inspire youth to become active voices for social justice, equality, and positive community change.",
    sdg: ["10 - Reduced Inequalities", "16 - Peace, Justice and Strong Institutions"],
    duration: "6 weeks",
    location: "Colombo Region, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://expa.aiesec.org",
    opName: "Youth Empowerment Hub",
  },
  {
    id: 13,
    name: "Equify",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    brief: "Gender equality and inclusion project breaking barriers and creating equal opportunities for all.",
    fullDescription: "Equify promoted gender equality and social inclusion through awareness campaigns, community workshops, and educational programs. Volunteers worked to break down stereotypes and create equal opportunities regardless of gender, background, or social status.",
    sdg: ["5 - Gender Equality", "10 - Reduced Inequalities"],
    duration: "4 weeks",
    location: "Various locations, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "EduBridge Sri Lanka",
  },
  {
    id: 14,
    name: "Eco City",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&h=600&fit=crop",
    brief: "Urban sustainability project designing greener, cleaner, and more livable cities for the future.",
    fullDescription: "Eco City focused on creating sustainable urban environments through waste management solutions, green infrastructure projects, and community-led environmental initiatives in Sri Lankan cities. Volunteers championed clean energy adoption and eco-friendly urban planning.",
    sdg: ["11 - Sustainable Cities", "13 - Climate Action"],
    duration: "6 weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://expa.aiesec.org",
    opName: "Green Lanka Movement",
  },
  {
    id: 15,
    name: "Eat 4 Change",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
    brief: "Nutrition and food security project promoting healthy eating habits and sustainable food systems.",
    fullDescription: "Eat 4 Change tackled food insecurity and malnutrition through community nutrition programs, cooking workshops, and sustainable agriculture education. Volunteers helped establish community kitchens and promoted healthy eating habits across underserved areas.",
    sdg: ["2 - Zero Hunger", "3 - Good Health and Well-being"],
    duration: "4 weeks",
    location: "Various locations, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Three Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Lanka Health Initiative",
  },
  {
    id: 16,
    name: "Explorer",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    brief: "Adventure tourism and cultural exchange project creating unforgettable cross-cultural experiences.",
    fullDescription: "Explorer combined adventure tourism with meaningful cultural exchange, connecting international volunteers with local communities through eco-tourism, heritage trails, and immersive cultural programs that both preserved traditions and boosted local economies.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "6 weeks",
    location: "Various locations, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Heritage Tourism Collective",
  },
  {
    id: 17,
    name: "Myself, My World",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
    brief: "Mental health and personal development project building emotional resilience and self-awareness.",
    fullDescription: "Myself, My World focused on mental health awareness and personal development for young Sri Lankans. Through mindfulness workshops, emotional intelligence training, and self-care programs, volunteers helped participants build stronger connections with themselves and their communities.",
    sdg: ["3 - Good Health and Well-being", "4 - Quality Education"],
    duration: "4 weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://expa.aiesec.org",
    opName: "Lanka Health Initiative",
  },
  {
    id: 18,
    name: "Scale Up!",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    brief: "Entrepreneurship and business skills project helping aspiring entrepreneurs launch and grow their ventures.",
    fullDescription: "Scale Up! equipped aspiring entrepreneurs with essential business skills through startup workshops, mentorship programs, and pitch competitions. Volunteers with business expertise guided participants through ideation, business planning, and execution to help turn ideas into viable ventures.",
    sdg: ["8 - Decent Work and Economic Growth", "9 - Industry, Innovation and Infrastructure"],
    duration: "6 weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opName: "Youth Empowerment Hub",
  },
];

/* ───────────── OP Data ───────────── */
interface OP {
  id: number;
  name: string;
  photo: string;
  organization: string;
  location: string;
  description: string;
  website: string;
}

const opportunityProviders: OP[] = [
  { id: 1, name: "Ocean Guardians Foundation", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", organization: "Marine Conservation NGO", location: "Galle, Sri Lanka", description: "Leading marine conservation organization dedicated to protecting Sri Lanka's coastal ecosystems through community engagement and sustainable practices.", website: "oceanguardians.lk" },
  { id: 2, name: "Lanka Health Initiative", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", organization: "Community Healthcare", location: "Kandy, Sri Lanka", description: "Grassroots healthcare organization bringing medical awareness and preventive care to rural communities across central Sri Lanka.", website: "lankahealthinit.org" },
  { id: 3, name: "EduBridge Sri Lanka", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", organization: "Education NGO", location: "Colombo, Sri Lanka", description: "Innovative education initiative connecting global volunteers with local schools to enhance learning experiences and cultural exchange.", website: "edubridge.lk" },
  { id: 4, name: "Green Lanka Movement", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", organization: "Environmental Conservation", location: "Nuwara Eliya, Sri Lanka", description: "Environmental conservation collective focused on reforestation, sustainable agriculture, and climate action across Sri Lanka's hill country.", website: "greenlanka.org" },
  { id: 5, name: "Youth Empowerment Hub", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop", organization: "Youth Development", location: "Colombo, Sri Lanka", description: "Dynamic organization empowering young Sri Lankans through leadership programs, skill development, and community engagement initiatives.", website: "youthempower.lk" },
  { id: 6, name: "Heritage Tourism Collective", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop", organization: "Sustainable Tourism", location: "Anuradhapura, Sri Lanka", description: "Community-driven tourism initiative promoting sustainable travel and cultural preservation in Sri Lanka's ancient cities.", website: "heritagelk.com" },
];

function getOPByName(name: string): OP | undefined {
  return opportunityProviders.find(op => op.name === name);
}

/* ───────────── Amenity Icon helper ───────────── */
export function AmenityIcon({ amenity }: { amenity: string }) {
  if (amenity.includes("Transportation")) return <Bus size={16} />;
  if (amenity.includes("Accommodation")) return <Home size={16} />;
  if (amenity.includes("Meal")) return <UtensilsCrossed size={16} />;
  return null;
}

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
            iGV Sri Lanka
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
            Explore all our Global Volunteer projects in Sri Lanka — from marine conservation
            to education, healthcare to sustainability.
          </motion.p>

          {/* Stats strip — more gap from subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-12 justify-center"
            style={{
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { n: "10", label: "Active Projects" },
              { n: "18", label: "Total Projects" },
              { n: "$120", label: "Program Fee" },
              { n: "4–6", label: "Weeks Duration" },
            ].map((s) => (
              <div key={s.label}>
                <p style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.04em", marginTop: "8px" }}>
                  {s.label}
                </p>
              </div>
            ))}
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

                    {/* Gold price badge */}
                    <div
                      className="absolute z-20 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        bottom: "16px",
                        left: "20px",
                        width: "58px",
                        height: "58px",
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

                    {/* OP badge — clickable */}
                    <button
                      className="flex items-center gap-2 cursor-pointer transition-all duration-300 w-full text-left"
                      style={{
                        padding: "8px 14px",
                        borderRadius: "10px",
                        background: "rgba(3,126,243,0.04)",
                        border: "1px solid rgba(3,126,243,0.08)",
                        marginBottom: "12px",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const op = getOPByName(project.opName);
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
                      <Users size={14} style={{ color: "#037ef3" }} />
                      <span style={{ fontSize: "12px", fontWeight: 600, color: "#1e293b" }}>
                        OP:
                      </span>
                      <span style={{ fontSize: "12px", fontWeight: 500, color: "#037ef3" }}>
                        {project.opName}
                      </span>
                      <ArrowUpRight size={12} style={{ color: "#037ef3", marginLeft: "auto" }} />
                    </button>

                    {/* Amenities row */}
                    <div className="flex flex-wrap gap-2" style={{ marginBottom: "14px" }}>
                      {project.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-1.5"
                          style={{
                            padding: "5px 10px",
                            borderRadius: "6px",
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "#334155",
                          }}
                        >
                          <span style={{ color: "#037ef3", display: "flex" }}>
                            <AmenityIcon amenity={amenity} />
                          </span>
                          {amenity}
                        </div>
                      ))}
                    </div>

                    {/* SDG tags */}
                    <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "16px" }}>
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
                      className="flex items-center justify-between"
                      style={{
                        paddingTop: "14px",
                        borderTop: "1px solid #f1f5f9",
                      }}
                    >
                      <a
                        href={project.expaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 transition-colors hover:text-blue-500"
                        style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        EXPA
                      </a>

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
                        const op = getOPByName(selectedProject.opName);
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 50px 120px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedOP(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group cursor-pointer"
                style={{ background: "#f1f5f9", border: "1px solid #e2e8f0" }}
              >
                <X size={18} className="text-slate-500 transition-transform group-hover:rotate-90 group-hover:text-slate-800" />
              </button>

              <div style={{ padding: "clamp(40px, 5vw, 56px) clamp(36px, 4.5vw, 52px)" }}>

                {/* Profile Header */}
                <div className="flex items-center gap-5" style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <div className="relative shrink-0">
                    <img
                      src={selectedOP.photo}
                      alt={selectedOP.name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div
                      className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "#22c55e", borderWidth: "3px", borderColor: "white", borderStyle: "solid" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "4px" }}>
                      {selectedOP.name}
                    </h3>
                    <p style={{ fontSize: "15px", color: "#037ef3", fontWeight: 600 }}>
                      {selectedOP.organization}
                    </p>
                  </div>
                </div>

                {/* ABOUT */}
                <div style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                    About
                  </h4>
                  <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#374151" }}>
                    {selectedOP.description}
                  </p>
                </div>

                {/* LOCATION */}
                <div style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
                    Location
                  </h4>
                  <p className="text-[15px] text-slate-600 font-medium">
                    {selectedOP.location}
                  </p>
                </div>

                {/* PROJECTS under this OP */}
                {(() => {
                  const opProjects = allProjects.filter(p => p.opName === selectedOP.name);
                  const activeProjects = opProjects.filter(p => p.status === "active");
                  const inactiveProjects = opProjects.filter(p => p.status === "inactive");
                  return (
                    <div style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
                      <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                        Projects ({opProjects.length})
                      </h4>
                      <div className="flex flex-col gap-3">
                        {opProjects.map((proj) => (
                          <div
                            key={proj.id}
                            className="flex items-center justify-between rounded-lg transition-colors cursor-pointer"
                            style={{
                              padding: "14px 18px",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                              borderRadius: "10px",
                              opacity: proj.status === "inactive" ? 0.6 : 1,
                            }}
                            onClick={() => { setSelectedOP(null); setSelectedProject(proj); }}
                          >
                            <div>
                              <p style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b" }}>
                                {proj.name}
                              </p>
                              <span style={{ fontSize: "11px", fontWeight: 600, color: proj.status === "active" ? "#059669" : "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                                {proj.status === "active" ? "● Active" : "Inactive"}
                              </span>
                            </div>
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#037ef3",
                                padding: "4px 12px",
                                background: "rgba(3, 126, 243, 0.08)",
                                borderRadius: "6px",
                              }}
                            >
                              {proj.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: "12px" }} className="flex gap-3">
                        <span style={{ fontSize: "13px", color: "#059669", fontWeight: 600 }}>
                          {activeProjects.length} Active
                        </span>
                        {inactiveProjects.length > 0 && (
                          <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500 }}>
                            {inactiveProjects.length} Inactive
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })()}

                {/* Apply Now — Cyberpunk */}
                <a
                  href="https://expa.aiesec.org"
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

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
