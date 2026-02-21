"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import SectionParticleBackground from "./SectionParticleBackground";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      {/* Background - matching About section */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #f7fbff 0%, #eef5ff 100%)" }}
      />
      {/* Particle background - intensity 0.05 (almost invisible, final fade-out) */}
      <SectionParticleBackground intensity={0.05} />

      {/* Main section content */}
      <div className="relative" style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        {/* Content container */}
        <div
          className="relative z-10 w-full"
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(40px, 8vw, 96px)",
            paddingRight: "clamp(40px, 8vw, 96px)",
          }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ marginBottom: "0" }}
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#037ef3",
                marginBottom: "8px",
              }}
            >
              Get In Touch
            </motion.span>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(38px, 4vw, 54px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1e293b",
                maxWidth: "900px",
              }}
            >
              Contact{" "}
              <span className="bg-gradient-to-r from-[#037ef3] to-[#00d4ff] bg-clip-text text-transparent">
                Us
              </span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(30, 41, 59, 0.7)",
                marginTop: "12px",
                maxWidth: "560px",
              }}
            >
              Have questions about our projects or want to become a partner? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            style={{ marginTop: "32px" }}
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="rounded-3xl h-full"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
                }}
              >
                {/* Content with generous padding */}
                <div style={{ padding: "clamp(32px, 4vw, 48px)" }}>

                  {/* LET'S CONNECT Header */}
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#0f172a",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "16px",
                    }}
                  >
                    Let&apos;s Connect
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "#64748b",
                      marginBottom: "32px",
                      paddingBottom: "32px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    Whether you&apos;re an international volunteer looking for meaningful experiences,
                    or an organization interested in partnering with us, we&apos;re here to help.
                  </p>

                  {/* Contact Items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {[
                      { Icon: Mail, label: "Email", value: "igv@aiesec-sliit.org", href: "mailto:igv@aiesec-sliit.org" },
                      { Icon: Phone, label: "Phone", value: "+94 11 234 5678", href: "tel:+94112345678" },
                      { Icon: MapPin, label: "Location", value: "SLIIT, New Kandy Road, Malabe, Sri Lanka", href: undefined },
                    ].map(({ Icon, label, value, href }) => (
                      <div
                        key={label}
                        style={{
                          padding: "20px 0",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="shrink-0 flex items-center justify-center"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "10px",
                              background: "rgba(3, 126, 243, 0.08)",
                            }}
                          >
                            <Icon size={18} style={{ color: "#037ef3" }} />
                          </div>
                          <div>
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#94a3b8",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                marginBottom: "4px",
                              }}
                            >
                              {label}
                            </p>
                            {href ? (
                              <a
                                href={href}
                                style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a" }}
                                className="hover:text-blue-600 transition-colors"
                              >
                                {value}
                              </a>
                            ) : (
                              <p style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a", lineHeight: 1.5 }}>
                                {value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FOLLOW US Section */}
                  <div style={{ paddingTop: "24px" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "16px",
                      }}
                    >
                      Follow Us
                    </p>
                    <div className="flex gap-3">
                      {[
                        { href: "https://facebook.com/aiesecsliit", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                        { href: "https://instagram.com/aiesecsliit", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                        { href: "https://linkedin.com/company/aiesecsliit", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                        { href: "https://twitter.com/aiesecsliit", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                      ].map(({ href, path }) => (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: "#f1f5f9",
                            border: "1px solid #e2e8f0",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "#037ef3";
                            (e.currentTarget as HTMLElement).style.borderColor = "#037ef3";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "#f1f5f9";
                            (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                          }}
                        >
                          <svg className="w-4 h-4 transition-colors" fill="#475569" viewBox="0 0 24 24">
                            <path d={path} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1e293b", marginBottom: "8px" }}>
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required
                      className="input-style" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1e293b", marginBottom: "8px" }}>
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required
                      className="input-style" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1e293b", marginBottom: "8px" }}>
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="input-style">
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="project">Project Information</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1e293b", marginBottom: "8px" }}>
                    Message
                  </label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} required
                    rows={5} className="input-style resize-none" placeholder="Tell us how we can help you..." />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`btn-primary flex items-center gap-3 group relative ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="relative z-10 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <Send size={18} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#15803d" }}
                  >
                    <CheckCircle size={20} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
