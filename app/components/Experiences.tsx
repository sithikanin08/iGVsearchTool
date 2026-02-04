"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

// Experience data
const experiences = [
  {
    id: 1,
    name: "Maria Garcia",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    project: "Global Classroom",
    brief: "Teaching English to Sri Lankan students was the most fulfilling experience of my life.",
    fullStory: "Coming to Sri Lanka through AIESEC was a life-changing decision. I spent 8 weeks teaching English to children in rural schools near Kandy. The warmth of the Sri Lankan people, the beauty of the country, and the impact I could make on these young minds exceeded all my expectations. I learned as much from my students as they learned from me. This experience shaped my career path towards international development, and I've made lifelong friends here.",
    duration: "8 weeks",
    year: "2024",
  },
  {
    id: 2,
    name: "Thomas Mueller",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    project: "Aquatica",
    brief: "Protecting Sri Lanka's marine life opened my eyes to the importance of ocean conservation.",
    fullStory: "As an environmental science student, Aquatica was the perfect project for me. I participated in coral reef monitoring, beach cleanups, and community education programs along the southern coast. The marine biodiversity in Sri Lanka is incredible, and working to protect it alongside local communities gave me practical experience that no classroom could provide. I'm now pursuing a career in marine conservation, directly inspired by this experience.",
    duration: "6 weeks",
    year: "2024",
  },
  {
    id: 3,
    name: "Priya Sharma",
    country: "India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    project: "Heart Beat",
    brief: "Healthcare outreach in Sri Lanka taught me the true meaning of community service.",
    fullStory: "The Heart Beat project allowed me to combine my passion for healthcare with meaningful community impact. Conducting health awareness sessions and basic health camps in underserved areas was both challenging and rewarding. The resilience and gratitude of the communities we served inspired me deeply. Sri Lanka's healthcare challenges are universal, and this experience prepared me for a global health career.",
    duration: "8 weeks",
    year: "2023",
  },
  {
    id: 4,
    name: "Lucas Santos",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    project: "Roots",
    brief: "Planting trees and teaching sustainable farming connected me to nature like never before.",
    fullStory: "The Roots project was an incredible journey into environmental conservation. Working with local farmers to implement sustainable agricultural practices while participating in reforestation efforts gave me a deep appreciation for the connection between people and land. The knowledge I gained about organic farming and ecosystem restoration has influenced how I approach sustainability in my own country.",
    duration: "6 weeks",
    year: "2023",
  },
];

interface Experience {
  id: number;
  name: string;
  country: string;
  image: string;
  project: string;
  brief: string;
  fullStory: string;
  duration: string;
  year: string;
}

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#037ef3] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Volunteer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234934]">
              Experiences That Matter
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/experiences"
              className="flex items-center gap-2 text-[#037ef3] font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Experiences
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedExperience(experience)}
              className="card-hover bg-[#f1f3e9] rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Profile Image */}
              <div className="relative pt-8 pb-4 px-6">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#037ef3] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {experience.country}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#234934] mb-1">
                  {experience.name}
                </h3>
                <p className="text-[#037ef3] text-sm font-medium mb-3">
                  {experience.project}
                </p>
                
                {/* Quote */}
                <div className="relative">
                  <Quote size={20} className="text-[#234934]/20 absolute -top-2 -left-1" />
                  <p className="text-[#234934]/70 text-sm line-clamp-3 pl-4">
                    {experience.brief}
                  </p>
                </div>

                {/* Read More */}
                <div className="mt-4 flex items-center justify-center gap-1 text-[#037ef3] font-medium text-sm group-hover:gap-2 transition-all">
                  Read Story
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-[#234934] to-[#3a7d5c] p-8 text-center">
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>

                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img
                    src={selectedExperience.image}
                    alt={selectedExperience.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedExperience.name}
                </h3>
                <p className="text-white/80">
                  {selectedExperience.country} • {selectedExperience.project}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="relative mb-6">
                  <Quote size={40} className="text-[#234934]/10 absolute -top-2 -left-2" />
                  <p className="text-[#234934]/80 text-base sm:text-lg leading-relaxed pl-6">
                    {selectedExperience.fullStory}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#f1f3e9] rounded-xl p-4 text-center">
                    <p className="text-xs text-[#234934]/60 uppercase tracking-wider mb-1">
                      Duration
                    </p>
                    <p className="text-[#234934] font-semibold">
                      {selectedExperience.duration}
                    </p>
                  </div>
                  <div className="bg-[#f1f3e9] rounded-xl p-4 text-center">
                    <p className="text-xs text-[#234934]/60 uppercase tracking-wider mb-1">
                      Year
                    </p>
                    <p className="text-[#234934] font-semibold">
                      {selectedExperience.year}
                    </p>
                  </div>
                </div>

                <Link
                  href="/experiences"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Read More Stories
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
