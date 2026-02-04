"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Project data
const projects = [
  {
    id: 1,
    name: "Aquatica",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    brief: "Marine conservation and ocean awareness project focusing on protecting Sri Lanka's rich marine biodiversity.",
    fullDescription: "Aquatica is dedicated to marine conservation efforts in Sri Lanka. Volunteers participate in beach cleanups, coral reef monitoring, marine life documentation, and community education programs about ocean conservation. The project aims to protect Sri Lanka's diverse marine ecosystem while raising awareness about sustainable fishing practices.",
    sdg: ["14 - Life Below Water", "13 - Climate Action"],
    duration: "6-8 weeks",
    location: "Southern Coast, Sri Lanka",
  },
  {
    id: 2,
    name: "Heart Beat",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    brief: "Healthcare awareness and support project bringing medical knowledge to underserved communities.",
    fullDescription: "Heart Beat focuses on health education and awareness in rural Sri Lankan communities. Volunteers work alongside local healthcare providers to conduct health camps, promote hygiene practices, and provide basic health screenings. The project addresses preventive healthcare and promotes healthy lifestyle choices.",
    sdg: ["3 - Good Health and Well-being"],
    duration: "6-8 weeks",
    location: "Central Province, Sri Lanka",
  },
  {
    id: 3,
    name: "Global Classroom",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
    brief: "Educational initiative bringing global perspectives and English language skills to local schools.",
    fullDescription: "Global Classroom connects international volunteers with Sri Lankan schools to enhance English language education and provide global exposure to students. Volunteers conduct interactive English classes, cultural exchange sessions, and help develop communication skills among students.",
    sdg: ["4 - Quality Education"],
    duration: "6-8 weeks",
    location: "Various locations, Sri Lanka",
  },
  {
    id: 4,
    name: "On The Map",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    brief: "Tourism promotion project showcasing Sri Lanka's hidden gems to the world.",
    fullDescription: "On The Map works to promote sustainable tourism in Sri Lanka by documenting lesser-known destinations, creating content, and developing community-based tourism initiatives. Volunteers help local communities benefit from tourism while preserving cultural and natural heritage.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "6-8 weeks",
    location: "Various locations, Sri Lanka",
  },
  {
    id: 5,
    name: "Roots",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    brief: "Environmental conservation project focused on reforestation and sustainable agriculture.",
    fullDescription: "Roots is an environmental conservation project focusing on reforestation, sustainable agriculture, and environmental education. Volunteers participate in tree planting activities, help establish community gardens, and educate local communities about sustainable farming practices.",
    sdg: ["15 - Life on Land", "13 - Climate Action"],
    duration: "6-8 weeks",
    location: "Kandy Region, Sri Lanka",
  },
  {
    id: 6,
    name: "Raise Your Voice",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    brief: "Youth empowerment and leadership development project building tomorrow's changemakers.",
    fullDescription: "Raise Your Voice empowers young Sri Lankans through leadership workshops, public speaking training, and personal development programs. Volunteers share their experiences and skills to inspire youth to become active contributors to their communities.",
    sdg: ["4 - Quality Education", "10 - Reduced Inequalities"],
    duration: "6-8 weeks",
    location: "Colombo Region, Sri Lanka",
  },
];

interface Project {
  id: number;
  name: string;
  image: string;
  brief: string;
  fullDescription: string;
  sdg: string[];
  duration: string;
  location: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-[#f1f3e9]" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#037ef3] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#234934]">
              Explore Opportunities
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 text-[#037ef3] font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedProject(project)}
              className="card-hover bg-white rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#234934]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight size={20} className="text-[#234934]" />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#234934] mb-2 group-hover:text-[#037ef3] transition-colors">
                  {project.name}
                </h3>
                <p className="text-[#234934]/70 text-sm sm:text-base line-clamp-2">
                  {project.brief}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-[#234934]" />
                </button>
                <h3 className="absolute bottom-4 left-6 text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <p className="text-[#234934]/80 text-base sm:text-lg leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#f1f3e9] rounded-xl p-4">
                    <p className="text-xs text-[#234934]/60 uppercase tracking-wider mb-1">
                      Duration
                    </p>
                    <p className="text-[#234934] font-semibold">
                      {selectedProject.duration}
                    </p>
                  </div>
                  <div className="bg-[#f1f3e9] rounded-xl p-4">
                    <p className="text-xs text-[#234934]/60 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-[#234934] font-semibold">
                      {selectedProject.location}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-[#234934]/60 uppercase tracking-wider mb-2">
                    SDG Goals
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.sdg.map((goal, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#037ef3]/10 text-[#037ef3] text-sm rounded-full font-medium"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/projects"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Learn More
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
