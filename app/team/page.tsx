"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroParticleBackground from "../components/HeroParticleBackground";

/* ───────────────────────────────────────────────────────────────
   TEAM DATA STRUCTURE
   ─────────────────────────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const b2bTeam: { lcvp: TeamMember; specialist: TeamMember; leaders: TeamMember[] } = {
  lcvp: { name: "Sabuleer Rashaad", role: "LCVP B2B", image: "https://ui-avatars.com/api/?name=Sabuleer+Rashaad&background=0f172a&color=fff&size=200" },
  specialist: { name: "Risni De Mel", role: "B2B Specialist", image: "https://ui-avatars.com/api/?name=Risni+De+Mel&background=0f172a&color=fff&size=200" },
  leaders: [
    { name: "Sithika Ninduwara", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Sithika+Ninduwara&background=0f172a&color=fff&size=200" },
    { name: "Suprajan Jaypal", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Suprajan+Jaypal&background=0f172a&color=fff&size=200" },
    { name: "Dahamya", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Dahamya&background=0f172a&color=fff&size=200" },
    { name: "Rageeshan", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Rageeshan&background=0f172a&color=fff&size=200" },
    { name: "Yasiru", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Yasiru&background=0f172a&color=fff&size=200" },
  ],
};

const irAndMTeam = {
  lcvp: { name: "Dinidi Senanayake", role: "LCVP IR & Matching", image: "https://ui-avatars.com/api/?name=Dinidi+Senanayake&background=0f172a&color=fff&size=200" },
  ir: {
    manager: { name: "Kavini", role: "IR Manager", image: "https://ui-avatars.com/api/?name=Kavini&background=0f172a&color=fff&size=200" },
    coordinator: { name: "Yohan", role: "Campaign Coordinator", image: "https://ui-avatars.com/api/?name=Yohan&background=0f172a&color=fff&size=200" },
    leaders: [
      { name: "Vindhi Akmeemana", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Vindhi+Akmeemana&background=0f172a&color=fff&size=200" },
      { name: "Nawoda Weerasiri", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Nawoda+Weerasiri&background=0f172a&color=fff&size=200" },
      { name: "Binadi", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Binadi&background=0f172a&color=fff&size=200" },
    ],
  },
  matching: {
    manager: { name: "Monali", role: "Matching Manager", image: "https://ui-avatars.com/api/?name=Monali&background=0f172a&color=fff&size=200" },
    leaders: [
      { name: "Birtney", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Birtney&background=0f172a&color=fff&size=200" },
      { name: "Mahady", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Mahady&background=0f172a&color=fff&size=200" },
      { name: "Methmi", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Methmi&background=0f172a&color=fff&size=200" },
    ],
  }
};

const cxpTeam = {
  lcvp: { name: "Savinda", role: "LCVP CXP", image: "https://ui-avatars.com/api/?name=Savinda&background=0f172a&color=fff&size=200" },
  manager: { name: "Yeshan", role: "CXP Manager", image: "https://ui-avatars.com/api/?name=Yeshan&background=0f172a&color=fff&size=200" },
  coordinator: { name: "Ashen", role: "Campaign Coordinator", image: "https://ui-avatars.com/api/?name=Ashen&background=0f172a&color=fff&size=200" },
  leaders: [
    { name: "Anuda", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Anuda&background=0f172a&color=fff&size=200" },
    { name: "Shanil", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Shanil&background=0f172a&color=fff&size=200" },
    { name: "Malith", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Malith&background=0f172a&color=fff&size=200" },
    { name: "Ashan", role: "Team Leader", image: "https://ui-avatars.com/api/?name=Ashan&background=0f172a&color=fff&size=200" },
  ],
};

/* ───────────────────────────────────────────────────────────────
   Reusable Member Card Component
   ─────────────────────────────────────────────────────────────── */
function MemberCard({ member, highlight = false, size = "normal" }: { member: TeamMember, highlight?: boolean, size?: "large" | "normal" | "small" }) {
  const cardScale = size === "large" ? "w-[280px]" : size === "small" ? "w-[180px]" : "w-[220px]";
  const cardPadding = size === "large" ? "p-8" : size === "small" ? "p-5" : "p-7";
  const imgScale = size === "large" ? "w-[128px] h-[128px]" : size === "small" ? "w-[80px] h-[80px]" : "w-[100px] h-[100px]";
  const imgMargin = size === "large" ? "mb-6" : size === "small" ? "mb-3" : "mb-5";
  const titleSize = size === "large" ? "text-[22px]" : size === "small" ? "text-[15px]" : "text-[18px]";
  const roleSize = size === "small" ? "text-[11px]" : "text-[13px]";

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative flex flex-col items-center ${cardPadding} bg-white rounded-[24px] cursor-pointer group ${cardScale}`}
      style={{
        boxShadow: highlight
          ? "0 20px 60px rgba(3,126,243,0.15), inset 0 0 0 2px rgba(3,126,243,0.1)"
          : "0 10px 40px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-[24px] transition-opacity duration-300"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(3,126,243,0.08) 0%, transparent 70%)" }}
      />

      <div className={`relative mb-5 ${imgScale}`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full object-cover ring-4 ring-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        />
        {highlight && (
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-tr from-[#037ef3] to-[#00d4ff] flex items-center justify-center border-[3px] border-white shadow-lg text-white">
            <Briefcase size={14} />
          </div>
        )}
      </div>

      <h3 className={`font-black text-[#0f172a] text-center leading-tight mb-1.5 ${titleSize} tracking-tight`}>
        {member.name}
      </h3>
      <p className="text-[13px] font-bold text-[#037ef3] uppercase tracking-wider text-center mb-4">
        {member.role}
      </p>

      {/* Social Links on Hover */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#037ef3] hover:bg-[#e0e7ff] transition-colors">
          <Linkedin size={14} />
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:text-[#0a1628] hover:bg-[#e2e8f0] transition-colors">
          <Mail size={14} />
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden">
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
            AIESEC in SLIIT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: "24px",
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            Meet Our <br />
            <span className="bg-gradient-to-r from-[#037ef3] via-[#00d4ff] to-[#037ef3] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Leadership Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
            }}
          >
            The dedicated core leadership driving impactful volunteering experiences and fostering global connections across Sri Lanka.
          </motion.p>
        </div>
      </section>

      {/* ── 4-Sided Page Margin Wrapper ──────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] my-16 px-4 sm:px-8 lg:px-12 flex flex-col gap-32">

        {/* ── B2B Section ──────────────────────────────── */}
        <section className="relative bg-white rounded-[40px] shadow-sm border border-slate-100 py-16 px-8">
          <div className="container-custom relative z-10 w-full">

            <div className="text-center mb-20 px-4">
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight mb-4">
                Business to Business <span className="text-[#037ef3]">(B2B)</span>
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto font-medium">
                Driving corporate partnerships and strategic opportunities for our incoming global volunteers.
              </p>
            </div>

            {/* Massively Increased Gaps */}
            <div className="flex flex-col items-center gap-16 lg:gap-24">
              <MemberCard member={b2bTeam.lcvp} highlight size="large" />
              <MemberCard member={b2bTeam.specialist} />

              {/* Increased margin-top for the TL Grid */}
              <div className="flex flex-wrap justify-center gap-8 mt-8 lg:mt-12 w-full">
                {b2bTeam.leaders.map(tl => (
                  <MemberCard key={tl.name} member={tl} size="small" />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── COMBINED IR & MATCHING Section ──────────────────────────────── */}
        <section className="relative bg-white rounded-[40px] shadow-sm border border-slate-100 py-20 px-4 sm:px-8 overflow-hidden">

          {/* Subtle background abstract */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#f0f9ff] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#f8fafc] to-transparent rounded-full blur-3xl opacity-80 pointer-events-none" />

          <div className="container-custom relative z-10">

            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight mb-4">
                International Relations <span className="text-[#037ef3]">&amp;</span> Matching
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto font-medium">
                Bridging global networks and perfectly pairing eager volunteers with life-changing projects.
              </p>
            </div>

            <div className="flex flex-col items-center gap-16 lg:gap-24">

              {/* SHARED LCVP */}
              <div className="relative z-20">
                <MemberCard member={irAndMTeam.lcvp} highlight size="large" />
              </div>

              {/* Split layout: IR on Left, M on Right. Gaps massively increased */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-6xl relative z-10">

                {/* IR Column */}
                <div className="flex flex-col items-center bg-[#f8fafc] p-8 rounded-3xl border border-[#e2e8f0]">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-8 tracking-wide uppercase">Int. Relations (IR)</h3>
                  <div className="flex flex-wrap justify-center gap-6 mb-8 w-full">
                    <MemberCard member={irAndMTeam.ir.manager} />
                    <MemberCard member={irAndMTeam.ir.coordinator} />
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 w-full">
                    {irAndMTeam.ir.leaders.map(tl => (
                      <MemberCard key={tl.name} member={tl} size="small" />
                    ))}
                  </div>
                </div>

                {/* Matching Column */}
                <div className="flex flex-col items-center bg-[#f8fafc] p-8 rounded-3xl border border-[#e2e8f0]">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-8 tracking-wide uppercase">Matching (M)</h3>
                  <div className="flex flex-wrap justify-center gap-6 mb-16 w-full">
                    {/* Matching only has one Manager, no coordinator array so we push mb-16 to align with IR height */}
                    <MemberCard member={irAndMTeam.matching.manager} />
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 w-full h-full align-bottom">
                    {irAndMTeam.matching.leaders.map(tl => (
                      <MemberCard key={tl.name} member={tl} size="small" />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── CXP Section ──────────────────────────────── */}
        <section className="relative bg-white rounded-[40px] shadow-sm border border-slate-100 py-16 px-8">
          <div className="container-custom relative z-10 w-full">

            <div className="text-center mb-20 px-4">
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight mb-4">
                Customer Experience <span className="text-[#037ef3]">(CXP)</span>
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto font-medium">
                Ensuring seamless journeys and unforgettable experiences for every volunteer from arrival to departure.
              </p>
            </div>

            <div className="flex flex-col items-center gap-16 lg:gap-24">
              {/* LCVP */}
              <MemberCard member={cxpTeam.lcvp} highlight size="large" />

              {/* Manager & Coordinator Side-by-Side */}
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 w-full">
                  <MemberCard member={cxpTeam.manager} />
                  <MemberCard member={cxpTeam.coordinator} />
                </div>
              </div>

              {/* TLs Grid */}
              <div className="flex flex-wrap justify-center gap-8 lg:mt-8 w-full">
                {cxpTeam.leaders.map(tl => (
                  <MemberCard key={tl.name} member={tl} size="small" />
                ))}
              </div>
            </div>

          </div>
        </section>

      </div> {/* <-- End of 4-Sided Page Margin Wrapper */}

      <Footer />
    </main>
  );
}
