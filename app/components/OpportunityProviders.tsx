"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// OP logos placeholder data - replace with actual OP logos
const opportunityProviders = [
  { id: 1, name: "OP 1", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+1" },
  { id: 2, name: "OP 2", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+2" },
  { id: 3, name: "OP 3", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+3" },
  { id: 4, name: "OP 4", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+4" },
  { id: 5, name: "OP 5", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+5" },
  { id: 6, name: "OP 6", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+6" },
  { id: 7, name: "OP 7", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+7" },
  { id: 8, name: "OP 8", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+8" },
  { id: 9, name: "OP 9", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+9" },
  { id: 10, name: "OP 10", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+10" },
  { id: 11, name: "OP 11", logo: "https://via.placeholder.com/150x80/234934/ffffff?text=OP+11" },
  { id: 12, name: "OP 12", logo: "https://via.placeholder.com/150x80/037ef3/ffffff?text=OP+12" },
];

export default function OpportunityProviders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ops" className="section-padding bg-gradient-to-br from-[#e8f4f8]/30 via-[#f1f3e9]/50 to-[#f1f3e9]" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left w-full sm:w-auto"
          >
            <span className="text-[#037ef3] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Partners
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234934]">
              Opportunity Providers
            </h2>
            <p className="text-[#234934]/70 mt-3 max-w-xl">
              Meet the organizations that make global volunteer experiences possible in Sri Lanka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full sm:w-auto text-center sm:text-right"
          >
            <Link
              href="/ops"
              className="inline-flex items-center gap-2 text-[#037ef3] font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Partners
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden py-8"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#f1f3e9] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#f1f3e9] to-transparent z-10" />

          {/* First Row - Moving Right */}
          <div className="flex marquee mb-8">
            <div className="flex items-center gap-8 sm:gap-12">
              {[...opportunityProviders, ...opportunityProviders].map((op, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                >
                  <img
                    src={op.logo}
                    alt={op.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex" style={{ animation: "marquee 30s linear infinite reverse" }}>
            <div className="flex items-center gap-8 sm:gap-12">
              {[...opportunityProviders.slice().reverse(), ...opportunityProviders.slice().reverse()].map((op, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                >
                  <img
                    src={op.logo}
                    alt={op.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-[#234934]/70 mb-4">
            Interested in becoming an Opportunity Provider?
          </p>
          <Link href="#contact" className="btn-secondary inline-block">
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
