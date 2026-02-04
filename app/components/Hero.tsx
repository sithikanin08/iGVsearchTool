"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-36 sm:pt-40">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f8]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" />

      {/* Decorative sparkles */}
      <motion.div
        className="absolute top-20 right-20 text-[#234934]/20 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-32 text-[#037ef3]/20 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={30} />
      </motion.div>

      <div className="container-custom relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full pt-12 pb-12 lg:pt-16 lg:pb-0">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/80 shadow-sm px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#037ef3] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#234934]/80">
                Global Volunteer · Sri Lanka
              </span>
            </div>

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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Explore projects
                  <ArrowUpRight size={20} />
                </motion.button>
              </Link>

              <Link href="#experiences">
                <button className="btn-secondary flex items-center gap-2 bg-white/70 border-[#234934]/20 text-[#234934] hover:bg-[#234934] hover:text-white">
                  View stories
                </button>
              </Link>
            </div>

            {/* Social proof / stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-sm text-[#234934]/70 mt-2 sm:mt-4">
              <div>
                <p className="text-2xl sm:text-3xl font-semibold text-[#037ef3]">
                  120+
                </p>
                <p>active volunteer projects</p>
              </div>
              <div className="h-10 w-px bg-[#234934]/15 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-semibold text-[#234934]">
                  40+
                </p>
                <p>countries to explore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom sparkle */}
      <motion.div
        className="absolute bottom-20 right-1/4 text-[#234934]/10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Sparkles size={60} />
      </motion.div>
    </section>
  );
}
