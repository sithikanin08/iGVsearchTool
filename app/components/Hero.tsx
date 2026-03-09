"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import HeroParticleBackground from "./HeroParticleBackground";

// Sri Lanka images for the 3D floating blocks - 8 cards (desktop)
const heroImages = [
  { id: 1, src: "/GV1.jpeg", alt: "Global Volunteer Experience 1" },
  { id: 2, src: "/GV2.jpeg", alt: "Global Volunteer Experience 2" },
  { id: 3, src: "/GV3.jpeg", alt: "Global Volunteer Experience 3" },
  { id: 4, src: "/GV4.jpeg", alt: "Global Volunteer Experience 4" },
  { id: 5, src: "/GV5.jpeg", alt: "Global Volunteer Experience 5" },
  { id: 6, src: "/GV6.jpeg", alt: "Global Volunteer Experience 6" },
  { id: 7, src: "/GV7.jpeg", alt: "Global Volunteer Experience 7" },
  { id: 8, src: "/GV8.jpeg", alt: "Global Volunteer Experience 8" },
];

// All 14 GV images for the mobile carousel
const allGVImages = [
  { id: 1, src: "/GV1.jpeg", alt: "Global Volunteer Experience 1" },
  { id: 2, src: "/GV2.jpeg", alt: "Global Volunteer Experience 2" },
  { id: 3, src: "/GV3.jpeg", alt: "Global Volunteer Experience 3" },
  { id: 4, src: "/GV4.jpeg", alt: "Global Volunteer Experience 4" },
  { id: 5, src: "/GV5.jpeg", alt: "Global Volunteer Experience 5" },
  { id: 6, src: "/GV6.jpeg", alt: "Global Volunteer Experience 6" },
  { id: 7, src: "/GV7.jpeg", alt: "Global Volunteer Experience 7" },
  { id: 8, src: "/GV8.jpeg", alt: "Global Volunteer Experience 8" },
  { id: 9, src: "/GV9.jpeg", alt: "Global Volunteer Experience 9" },
  { id: 10, src: "/GV10.jpeg", alt: "Global Volunteer Experience 10" },
  { id: 11, src: "/GV11.jpeg", alt: "Global Volunteer Experience 11" },
  { id: 12, src: "/GV12.jpeg", alt: "Global Volunteer Experience 12" },
  { id: 13, src: "/GV13.jpeg", alt: "Global Volunteer Experience 13" },
  { id: 14, src: "/GV14.jpeg", alt: "Global Volunteer Experience 14" },
];

// Glassmorphism card style with enhanced translucency
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
};

// Card component with hover effect
interface CardProps {
  image: { src: string; alt: string };
  style: React.CSSProperties;
  floatDelay: number;
  floatDuration: number;
  floatAmplitude: number;
  className?: string;
  cardStyle?: React.CSSProperties;
}

const Card3D = ({
  image,
  style,
  floatDelay,
  floatDuration,
  floatAmplitude,
  className = "rounded-2xl",
  cardStyle,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute cursor-pointer"
      style={{
        ...style,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 0 : 45,
          rotateX: isHovered ? 0 : 5,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        <motion.div
          animate={{ y: [0, -floatAmplitude, 0] }}
          transition={{
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          }}
          className="w-full h-full"
        >
          <div
            className={`w-full h-full ${className} overflow-hidden`}
            style={cardStyle || glassCardStyle}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  const [navbarHeight, setNavbarHeight] = useState(120); // Default fallback height

  useEffect(() => {
    const calculateNavbarHeight = () => {
      // Find the navbar element
      const navbar = document.querySelector('nav[class*="fixed"]');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        // Calculate total space: top offset + navbar height + spacing
        const topOffset = parseFloat(getComputedStyle(navbar).top) || 0;
        const height = rect.height;
        const totalSpace = topOffset + height + 20; // 20px spacing
        setNavbarHeight(totalSpace);
      } else {
        // Fallback: calculate based on responsive classes
        // top-5 (20px) or sm:top-6 (24px) + navbar height (~70-80px) + spacing
        const isMobile = window.innerWidth < 640;
        setNavbarHeight(isMobile ? 120 : 130);
      }
    };

    // Calculate on mount
    calculateNavbarHeight();

    // Recalculate on resize
    window.addEventListener("resize", calculateNavbarHeight);

    // Also recalculate after a short delay to ensure navbar is rendered
    const timeout = setTimeout(calculateNavbarHeight, 100);

    return () => {
      window.removeEventListener("resize", calculateNavbarHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen hero-gradient overflow-hidden"
      style={{ paddingTop: `${navbarHeight}px`, paddingBottom: "40px" }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f8]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />

      {/* Modern particle animation background */}
      <HeroParticleBackground />

      {/* Full-width flex wrapper: centers the content block so left/right gaps are equal */}
      <div className="relative z-10 w-full sm:min-h-screen flex items-center justify-center">
        {/* Content block: max-width + equal side padding */}
        <div className="relative max-w-7xl w-full" style={{ maxWidth: 1280, paddingLeft: "clamp(20px, 6vw, 96px)", paddingRight: "clamp(20px, 6vw, 96px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full pt-10 pb-16 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-4 gap-y-6">
            {/* Left side - 3D Floating Image Cards */}
            <div
              className="relative w-full h-[500px] sm:h-[550px] lg:h-[580px] order-2 lg:order-1 mt-6 lg:mt-6 translate-y-4 lg:translate-y-6 hidden sm:flex items-center justify-center"
              style={{
                perspective: "1200px",
                perspectiveOrigin: "center center",
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Scene Container — fixed width matching card layout, shifted right toward text */}
              <div
                className="relative h-full"
                style={{
                  width: "520px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card 1 - Top Left (Thai Boats - small) */}
                <Card3D
                  image={heroImages[0]}
                  style={{
                    top: "40px",
                    left: "25px",
                    width: "140px",
                    height: "100px",
                    zIndex: 18,
                  }}
                  floatDelay={0}
                  floatDuration={5}
                  floatAmplitude={6}
                />

                {/* Card 2 - Top Center-Left (Beach - MAIN LARGE) */}
                <Card3D
                  image={heroImages[2]}
                  style={{
                    top: "65px",
                    left: "120px",
                    width: "260px",
                    height: "190px",
                    zIndex: 25,
                  }}
                  floatDelay={0.2}
                  floatDuration={6}
                  floatAmplitude={10}
                  className="rounded-3xl"
                  cardStyle={{
                    ...glassCardStyle,
                    boxShadow:
                      "0 15px 50px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.15)",
                  }}
                />

                {/* Card 3 - Top Right (Mountains - tall) */}
                <Card3D
                  image={heroImages[1]}
                  style={{
                    top: "40px",
                    left: "340px",
                    width: "150px",
                    height: "180px",
                    zIndex: 15,
                  }}
                  floatDelay={0.3}
                  floatDuration={4.5}
                  floatAmplitude={8}
                />

                {/* Card 4 - Right side (Green Tea Hills) */}
                <Card3D
                  image={heroImages[3]}
                  style={{
                    top: "170px",
                    left: "420px",
                    width: "130px",
                    height: "95px",
                    zIndex: 12,
                  }}
                  floatDelay={0.6}
                  floatDuration={4.2}
                  floatAmplitude={7}
                  className="rounded-xl"
                />

                {/* Card 5 - Left edge (Dancers - partially visible) */}
                <Card3D
                  image={heroImages[5]}
                  style={{
                    top: "190px",
                    left: "-25px",
                    width: "100px",
                    height: "80px",
                    zIndex: 8,
                  }}
                  floatDelay={0.8}
                  floatDuration={3.8}
                  floatAmplitude={5}
                  className="rounded-xl"
                />

                {/* Card 6 - Bottom Left (Lake/Boat - Large) */}
                <Card3D
                  image={heroImages[4]}
                  style={{
                    top: "250px",
                    left: "30px",
                    width: "210px",
                    height: "155px",
                    zIndex: 22,
                  }}
                  floatDelay={1}
                  floatDuration={5.5}
                  floatAmplitude={8}
                  cardStyle={{
                    ...glassCardStyle,
                    boxShadow:
                      "0 12px 40px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.12)",
                  }}
                />

                {/* Card 7 - Bottom Center (Misty Mountains) */}
                <Card3D
                  image={heroImages[6]}
                  style={{
                    top: "320px",
                    left: "200px",
                    width: "160px",
                    height: "140px",
                    zIndex: 10,
                  }}
                  floatDelay={1.2}
                  floatDuration={5}
                  floatAmplitude={7}
                />

                {/* Card 8 - Bottom Right (Castle/Fog) */}
                <Card3D
                  image={heroImages[7]}
                  style={{
                    top: "270px",
                    left: "360px",
                    width: "130px",
                    height: "130px",
                    zIndex: 20,
                  }}
                  floatDelay={1.4}
                  floatDuration={4.8}
                  floatAmplitude={6}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-2 px-0 sm:px-0 gap-8 sm:gap-8 mt-4 sm:mt-0 lg:-mt-8 lg:-translate-y-4"
            >
              {/* Content wrapper — all items share the same left edge */}
              <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 w-full max-w-xl">
                {/* Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight"
                  style={{ color: "#1e293b" }}>
                  Volunteer Abroad.
                  <br />
                  Create Real Impact.
                  <br />
                  <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">Grow Yourself.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg md:text-xl text-[#1e293b]/70 leading-relaxed">
                  Explore curated Global Volunteer experiences designed for{" "}
                  <span className="font-semibold text-[#1e293b]">
                    meaningful impact, personal growth
                  </span>{" "}
                  and unforgettable stories. Get matched with projects that fit your
                  skills, passions and timeline.
                </p>

                {/* Primary actions */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary flex items-center gap-3 group relative"
                    >
                      <span className="relative z-10">Explore projects</span>
                      <ArrowUpRight
                        size={18}
                        className="relative z-10 transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                      />
                    </motion.button>
                  </Link>

                  <Link href="#experiences">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-secondary flex items-center gap-3 group relative"
                    >
                      <span className="relative z-10 text-[#00cc6a] group-hover:text-white transition-colors duration-400">
                        View stories
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="relative z-10 text-[#00cc6a] group-hover:text-white transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── Mobile Image Carousel (visible only on small screens) ─── */}
            <MobileCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile Auto-Scrolling Carousel ──────────────────── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const total = allGVImages.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-advance every 3s
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 3000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current, next]);

  return (
    <div className="sm:hidden order-3 w-full mt-10 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative w-full overflow-hidden"
        style={{ borderRadius: "16px", aspectRatio: "16/11" }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={allGVImages[current].src}
            alt={allGVImages[current].alt}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Subtle bottom gradient for dot readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.35) 100%)" }}
        />

        {/* Dot indicators — overlaid on image */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {allGVImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
