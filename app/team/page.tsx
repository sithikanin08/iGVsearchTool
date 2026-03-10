"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Linkedin, Phone, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroParticleBackground from "../components/HeroParticleBackground";
import SectionParticleBackground from "../components/SectionParticleBackground";

/* ───────────────────────────────────────────────────────────────
   DATA
   ─────────────────────────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
  phone?: string;
}

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f172a&color=fff&size=200`;

/* ── B2B ── */
const b2b = {
  lcvp: { name: "Sabeelur Rashaad", role: "LCVP B2B", image: "/rashaadDP.png", email: "srashaad@aiesec.net", linkedin: "https://www.linkedin.com/in/sabeelurrashaad/", phone: "+94 77 422 6876" },
  level2: [
    { name: "Risni De Mel", role: "Specialist", image: "/risinidemelDP.png" },
    { name: "Sithika Ninduwara", role: "Team Leader", image: "/sithikaDP.png" },
    { name: "Suprajan Jeyapal", role: "Team Leader", image: "/suprajan.png" },
    { name: "Dahamya Kulnadi", role: "Team Leader", image: "/dahamyaDP.png" },
    { name: "Rageeshan Chandrasegaran", role: "Team Leader", image: "/rageeshanDP.png" },
    { name: "Harshitha Yasiru", role: "Team Leader", image: "/yasiruDP.png" },
  ],
};

/* ── CXP ── */
const cxp = {
  lcvp: { name: "Savinda Sithum", role: "LCVP CXP", image: "/savindaDP.png", email: "savindasithum45@aiesec.net", linkedin: "https://www.linkedin.com/in/savinda-sithum-bb938a354/", phone: "+94 76 546 0938" },
  manager: { name: "Yeshan KP", role: "CXP Manager", image: "/yeshanDP.png" },
  coordinator: { name: "Ashen Geeth", role: "Campaign Coordinator", image: "/ashenDP.png" },
  teamLeaders: [
    { name: "Anuda Ranasinghe", role: "Team Leader", image: "/anudaDP.png" },
    { name: "Shanil Fernando", role: "Team Leader", image: "/shanilDP.png" },
    { name: "Malith Samaradivakara", role: "Team Leader", image: "/malithDp.png" },
    { name: "Ashan Induranga", role: "Team Leader", image: "/ashanDP.png" },
  ],
};

/* ── IR & Matching ── */
const irm = {
  lcvp: { name: "Dinidi Senanayake", role: "LCVP IR & Matching", image: "/dinidiDP%20(1).png", email: "dinidisenanayake@aiesec.net", linkedin: "http://www.linkedin.com/in/dinidi-senanayake", phone: "+94 76 638 8408" },
  ir: {
    manager: { name: "Kavini Wijesiriwardena", role: "IR Manager", image: "/kaviniDP.png" },
    coordinator: { name: "Yohan Wickramasinghe", role: "Campaign Coordinator", image: "/YohanDP.png" },
    leaders: [
      { name: "Vindhi Akmeemana", role: "Team Leader", image: "/vindhiDP.png" },
      { name: "Nawoda Weerasiri", role: "Team Leader", image: "/nawodaDP.png" },
      { name: "Binadi Hettiarachchi", role: "Team Leader", image: "/Binadi.png" },
    ],
  },
  matching: {
    manager: { name: "Monali Edirisinghe", role: "Matching Manager", image: "/monaliDP.png" },
    coordinator: { name: "Hashini vijerathne", role: "Matching Coordinator", image: "/hashiniDP.png" },
    leaders: [
      { name: "Birtney Godwin", role: "Team Leader", image: "/britDP.png" },
      { name: "Mahady Hassan", role: "Team Leader", image: "/mahadyDP.png" },
      { name: "Methmi Liyanage", role: "Team Leader", image: "/methmiDP.png" },
    ],
  },
};

/* ───────────────────────────────────────────────────────────────
   CARD COMPONENTS
   ─────────────────────────────────────────────────────────────── */

function PersonCard({ member, highlight = false }: { member: TeamMember; highlight?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        width: highlight ? "min(240px, 100%)" : "min(200px, 100%)",
        padding: highlight ? "28px 20px" : "20px 16px",
        background: "white",
        borderRadius: "20px",
        boxShadow: highlight
          ? "0 8px 32px rgba(3,126,243,0.12), inset 0 0 0 1.5px rgba(3,126,243,0.15)"
          : "0 4px 20px rgba(15,23,42,0.05), inset 0 0 0 1px rgba(15,23,42,0.06)",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        gap: highlight ? "12px" : "8px",
        cursor: "default",
        flexShrink: 0,
      }}
    >
      {/* Avatar */}
      <div style={{ position: "relative", width: highlight ? "88px" : "72px", height: highlight ? "88px" : "72px" }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 20%",
            border: highlight ? "3px solid rgba(3,126,243,0.2)" : "2px solid rgba(226,232,240,0.8)",
          }}
        />
        {highlight && (
          <div
            style={{
              position: "absolute",
              bottom: "-2px",
              right: "-2px",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #037ef3, #00d4ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
              boxShadow: "0 2px 8px rgba(3,126,243,0.3)",
            }}
          >
            <Briefcase size={11} color="white" />
          </div>
        )}
      </div>

      {/* Name */}
      <p
        style={{
          fontSize: highlight ? "15px" : "14px",
          fontWeight: 600,
          color: "#0f172a",
          textAlign: "center",
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {member.name}
      </p>

      {/* Role */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#037ef3",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
          margin: 0,
        }}
      >
        {member.role}
      </p>

      {/* LinkedIn & Phone icons — LCVP cards only */}
      {highlight && (
        <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(3,126,243,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#037ef3",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#037ef3";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(3,126,243,0.06)";
                e.currentTarget.style.color = "#037ef3";
              }}
            >
              <Linkedin size={14} />
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\s/g, "")}`}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(3,126,243,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#037ef3",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#037ef3";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(3,126,243,0.06)";
                e.currentTarget.style.color = "#037ef3";
              }}
            >
              <Phone size={14} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(3,126,243,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#037ef3",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#037ef3";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(3,126,243,0.06)";
                e.currentTarget.style.color = "#037ef3";
              }}
            >
              <Mail size={14} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

/* Connector line from parent to children */
function VerticalConnector() {
  return (
    <div
      style={{
        width: "2px",
        height: "32px",
        background: "linear-gradient(to bottom, rgba(3,126,243,0.3), rgba(3,126,243,0.08))",
        margin: "0 auto",
        borderRadius: "1px",
      }}
    />
  );
}

/* Thin horizontal bracket for grouping */
function HorizontalBracket() {
  return (
    <div
      style={{
        height: "2px",
        width: "60%",
        maxWidth: "400px",
        background: "linear-gradient(90deg, transparent, rgba(3,126,243,0.15), transparent)",
        margin: "0 auto",
      }}
    />
  );
}

/* Level label badge */
function LevelBadge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 14px",
        borderRadius: "20px",
        background: "rgba(3,126,243,0.06)",
        border: "1px solid rgba(3,126,243,0.1)",
        fontSize: "11px",
        fontWeight: 700,
        color: "#037ef3",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        margin: "0 auto",
      }}
    >
      {text}
    </div>
  );
}

/* Centered row of cards */
function CardRow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        gap: "24px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   SECTION COMPONENT
   ─────────────────────────────────────────────────────────────── */

function DepartmentSection({
  title,
  highlight,
  subtitle,
  children,
  delay = 0,
}: {
  title: string;
  highlight: string;
  subtitle: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "12px",
          }}
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(15,23,42,0.55)",
            maxWidth: "520px",
            margin: "0 auto",
            fontWeight: 500,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Hierarchy Content */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
        }}
      >
        {children}
      </div>
    </motion.section>
  );
}

/* ───────────────────────────────────────────────────────────────
   BRANCH PANEL (for IR & Matching split)
   ─────────────────────────────────────────────────────────────── */

function BranchPanel({
  title,
  manager,
  coordinator,
  leaders,
}: {
  title: string;
  manager: TeamMember;
  coordinator: TeamMember;
  leaders: TeamMember[];
}) {
  return (
    <div
      style={{
        flex: "1 1 auto",
        minWidth: "min(300px, 100%)",
        maxWidth: "100%",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(226,232,240,0.6)",
        borderRadius: "24px",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0",
      }}
    >
      {/* Branch Title */}
      <p
        style={{
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#037ef3",
          marginBottom: "24px",
        }}
      >
        {title}
      </p>

      {/* Manager + Coordinator */}
      <CardRow>
        <PersonCard member={manager} />
        <PersonCard member={coordinator} />
      </CardRow>

      {/* Connector */}
      <VerticalConnector />
      <HorizontalBracket />
      <div style={{ height: "8px" }} />

      {/* Team Leaders */}
      <CardRow>
        {leaders.map((tl) => (
          <PersonCard key={tl.name} member={tl} />
        ))}
      </CardRow>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   MAIN PAGE
   ─────────────────────────────────────────────────────────────── */

export default function TeamPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen" style={{ background: "#f1f3e9", overflowX: "hidden" }}>
      <Navbar />

      {/* ── Hero ──────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ paddingTop: "140px", paddingBottom: "80px", backgroundColor: "#0F172A" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#0f172a_100%)]" />
        <HeroParticleBackground />

        <div
          className="relative z-10 flex flex-col items-center text-center mx-auto"
          style={{
            maxWidth: "1280px",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
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
            }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
              Leadership Body
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
            }}
          >
            The dedicated core leadership driving impactful volunteering experiences and fostering
            global connections across Sri Lanka.
          </motion.p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────── */}
      <div className="relative">
        <SectionParticleBackground intensity={0.1} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1f3e9]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px clamp(24px, 6vw, 96px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >

          {/* ════════════════════════════════════════════
             SECTION 1 — B2B
             ════════════════════════════════════════════ */}
          <DepartmentSection
            title="Business to"
            highlight="Business (B2B)"
            subtitle="Driving corporate partnerships and strategic opportunities for our incoming global volunteers."
          >
            <CardRow>
              <PersonCard member={b2b.lcvp} highlight />
            </CardRow>

            {/* Connector */}
            <VerticalConnector />
            <HorizontalBracket />
            <div style={{ height: "8px" }} />

            <CardRow>
              {b2b.level2.map((m) => (
                <PersonCard key={m.name} member={m} />
              ))}
            </CardRow>
          </DepartmentSection>

          {/* ════════════════════════════════════════════
             SECTION 2 — IR & MATCHING
             ════════════════════════════════════════════ */}
          <DepartmentSection
            title="International Relations"
            highlight="& Matching"
            subtitle="Bridging global networks and perfectly pairing eager volunteers with life-changing projects."
            delay={0.1}
          >
            <CardRow>
              <PersonCard member={irm.lcvp} highlight />
            </CardRow>

            {/* Connector */}
            <VerticalConnector />
            <HorizontalBracket />
            <div style={{ height: "24px" }} />

            {/* Level 2 + 3: Split into IR | Matching branches */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <BranchPanel
                title="International Relations"
                manager={irm.ir.manager}
                coordinator={irm.ir.coordinator}
                leaders={irm.ir.leaders}
              />
              <BranchPanel
                title="Matching"
                manager={irm.matching.manager}
                coordinator={irm.matching.coordinator}
                leaders={irm.matching.leaders}
              />
            </div>
          </DepartmentSection>

          {/* ════════════════════════════════════════════
             SECTION 3 — CXP
             ════════════════════════════════════════════ */}
          <DepartmentSection
            title="Customer"
            highlight="Experience (CXP)"
            subtitle="Ensuring seamless journeys and unforgettable experiences for every volunteer from arrival to departure."
            delay={0.15}
          >
            <CardRow>
              <PersonCard member={cxp.lcvp} highlight />
            </CardRow>

            {/* Connector */}
            <VerticalConnector />
            <HorizontalBracket />
            <div style={{ height: "8px" }} />

            {/* Manager + Coordinator side by side */}
            <CardRow>
              <PersonCard member={cxp.manager} />
              <PersonCard member={cxp.coordinator} />
            </CardRow>

            {/* Connector from Manager to TLs */}
            <VerticalConnector />
            <HorizontalBracket />
            <div style={{ height: "8px" }} />

            {/* Team Leaders under Manager */}
            <CardRow>
              {cxp.teamLeaders.map((tl) => (
                <PersonCard key={tl.name} member={tl} />
              ))}
            </CardRow>
          </DepartmentSection>
        </div>
      </div>

      <Footer />
    </main>
  );
}
