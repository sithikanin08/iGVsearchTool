"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  project: string;
  op: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hinata",
    country: "Japan",
    project: "Aquatica",
    op: "Induruwa Sea Turtle Conservation",
    quote:
      "I'm Hinata, I've been working in project Aquatica and having a good time so far. Engaging with tourists and explaining them about sea turtles is a very fun thing to me. I think it's a good place to sea turtle lovers and people who want to spend time with friendly Sri Lankan people.",
  },
  {
    id: 2,
    name: "Kayla",
    country: "Indonesia",
    project: "Global Classroom",
    op: "Finnish Pre School",
    quote:
      "I'm Kayla from Indonesia, volunteering in Sri Lanka. The food, temperature and everything was quite the same for me. From this Global Classroom project I learnt to be more patient, loving and build a safe space for children. More than the careers and being a professional, I think being a human is important first. I had a wonderful experience and I hope you can also try to give it a shot in volunteering.",
  },
  {
    id: 3,
    name: "Sofia",
    country: "Greece",
    project: "Global Classroom",
    op: "Finnish Pre School",
    quote:
      "I'm Sofia from Greece, volunteering in Sri Lanka for project Global Classroom. I really enjoyed the tuk tuk drives. I was actually very excited to work with kids and the good times are more vibrant and so fulfilling here. I had to leave my country and have a very unique experience of a new culture, forgetting my old habits, etc. It was also very nice to work in a place that was very different from your career or major or anything. To experience the culture, everyday life and to know a lot of new people, this was a great opportunity. All in all it was an amazing experience and I hope you can also try to give it a shot in volunteering.",
  },
];

// Accent colors per card for visual variety
const accents = ["#037ef3", "#00d4ff", "#6366f1"];

interface TestimonialsProps {
  /** If true, animate on scroll via useInView; if false, animate immediately */
  animateOnScroll?: boolean;
  /** If true, hide the section label and heading */
  hideHeader?: boolean;
}

export default function Testimonials({ animateOnScroll = true, hideHeader = false }: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = animateOnScroll ? isInView : true;

  return (
    <div ref={ref}>
      {!hideHeader && <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          display: "block",
          fontSize: "13px",
          letterSpacing: "0.25em",
          color: "#037ef3",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        Volunteer Voices
      </motion.span>}

      {!hideHeader && <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 }}
        style={{
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#1e293b",
          marginBottom: "40px",
        }}
      >
        What Our Volunteers Say
      </motion.h2>}

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div
              className="relative h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "32px 28px 28px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: `${accents[i]}10`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <Quote size={20} style={{ color: accents[i] }} />
              </div>

              {/* Quote text */}
              <p
                className="flex-grow"
                style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#475569",
                  marginBottom: "24px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)",
                  marginBottom: "20px",
                }}
              />

              {/* Author info */}
              <div className="flex items-center gap-3">
                {/* Avatar circle with initial */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${accents[i]}, ${accents[i]}cc)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "18px" }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: 1.3 }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748b", fontWeight: 500, lineHeight: 1.4 }}>
                    {t.country} &middot; Project {t.project}
                  </p>
                  <p style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>
                    {t.op}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
