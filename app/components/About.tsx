"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Target, Award, TrendingUp, Heart } from "lucide-react";

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
    color: "#234934",
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
    color: "#234934",
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
    color: "#234934",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#037ef3] font-semibold text-sm uppercase tracking-wider mb-3 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234934] mb-4">
            AIESEC in SLIIT
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#234934] to-[#037ef3] mx-auto rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#234934] mb-6">
              Empowering Youth Leadership Through Global Experiences
            </h3>
            <div className="space-y-4 text-[#234934]/80 text-base sm:text-lg leading-relaxed">
              <p>
                AIESEC in SLIIT is a local committee of AIESEC Sri Lanka,
                operating within the Sri Lanka Institute of Information Technology.
                We are a youth-run, non-political, independent, not-for-profit
                organization that provides young people with leadership development
                and cross-cultural global experiences.
              </p>
              <p>
                Through our incoming Global Volunteer (iGV) program, we host
                international volunteers from around the world, connecting them
                with meaningful projects that address the United Nations Sustainable
                Development Goals (SDGs).
              </p>
              <p>
                Our diverse portfolio of projects spans education, environment,
                health, and social impact, offering volunteers transformative
                experiences while creating lasting positive change in Sri Lankan
                communities.
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#234934] to-[#3a7d5c]">
              {/* Video placeholder - replace with actual video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">AIESEC in SLIIT</p>
                  <p className="text-sm text-white/70">Video coming soon</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#037ef3]/30 blur-xl" />
              <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#234934] mb-2">
            Our Impact
          </h3>
          <p className="text-[#234934]/70">
            Making a difference through global volunteer experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="card-hover bg-[#f1f3e9] rounded-2xl p-4 sm:p-6 text-center"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <h4
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.number}
              </h4>
              <p className="text-xs sm:text-sm text-[#234934]/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
