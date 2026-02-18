"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeroParticleBackground from "./HeroParticleBackground";

// Sri Lanka images for the 3D floating blocks - 8 cards
const heroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=450&fit=crop",
    alt: "Sri Lanka Coastal Aerial",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop",
    alt: "Hill Country View",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=450&fit=crop",
    alt: "Sri Lanka Beach Main",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=450&fit=crop",
    alt: "Green Tea Hills",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=450&fit=crop",
    alt: "Tea Plantations Large",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=450&fit=crop",
    alt: "Traditional Dancers",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=450&fit=crop",
    alt: "Nature Landscape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=450&fit=crop",
    alt: "Scenic View",
  },
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
      style={{ paddingTop: `${navbarHeight}px` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f8]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />

      {/* Modern particle animation background */}
      <HeroParticleBackground />

      {/* Full-width flex wrapper: centers the content block so left/right gaps are equal */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center">
        {/* Content block: max-width + equal side padding; no w-full so it can center in the flex parent */}
        <div className="relative max-w-7xl w-full px-6 sm:px-8 lg:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full pt-8 pb-6 lg:pt-10 lg:pb-4">
          {/* Left side - 3D Floating Image Cards */}
          <div
            className="relative h-[500px] sm:h-[550px] lg:h-[580px] order-2 lg:order-1 mt-6 lg:mt-6 translate-y-4 lg:translate-y-6"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* 3D Scene Container */}
            <div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
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
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0 gap-8 justify-center lg:justify-start mt-2 lg:mt-4"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 relative group cursor-default"
            >
              {/* Animated background with glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/90 backdrop-blur-xl rounded-full border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300" />

              {/* Animated glow border */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#037ef3]/30 via-[#00d4ff]/30 to-[#037ef3]/30 blur-sm -z-10" />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                {/* Animated pulse dot with glow */}
                <div className="relative">
                  <span className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-[#037ef3] animate-ping opacity-75" />
                  <span className="relative block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#037ef3] shadow-[0_0_8px_rgba(3,126,243,0.6)] group-hover:shadow-[0_0_12px_rgba(0,212,255,0.8)] transition-all duration-300" />
                </div>

                {/* Text with gradient */}
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-[#234934] via-[#037ef3] to-[#234934] bg-clip-text text-transparent group-hover:from-[#037ef3] group-hover:via-[#00d4ff] group-hover:to-[#037ef3] transition-all duration-500">
                  Global Volunteer{" "}
                  <span className="mx-1.5 text-[#234934]/40 group-hover:text-[#037ef3]/60 transition-colors duration-300">
                    ·
                  </span>{" "}
                  Sri Lanka
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight max-w-xl gradient-text">
              Volunteer Abroad.
              <br />
              Create Real Impact.
              <br />
              Grow Yourself.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#234934]/80 max-w-xl leading-relaxed">
              Explore curated Global Volunteer experiences designed for{" "}
              <span className="font-semibold text-[#234934]">
                meaningful impact, personal growth
              </span>{" "}
              and unforgettable stories. Get matched with projects that fit your
              skills, passions and timeline.
            </p>

            {/* Primary actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6">
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
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
