"use client";

import { motion } from "framer-motion";

const techItems = [
  { name: "AWS", abbr: "AWS", color: "#FF9900" },
  { name: "Azure", abbr: "Azure", color: "#0078D4" },
  { name: "GCP", abbr: "GCP", color: "#4285F4" },
  { name: "Kubernetes", abbr: "K8s", color: "#326CE5" },
  { name: "React", abbr: "React", color: "#61DAFB" },
  { name: "Next.js", abbr: "Next", color: "#FFFFFF" },
  { name: "Python", abbr: "Py", color: "#3776AB" },
  { name: "PostgreSQL", abbr: "PG", color: "#336791" },
  { name: "Snowflake", abbr: "Snow", color: "#29B5E8" },
  { name: "Databricks", abbr: "DBX", color: "#FF3621" },
  { name: "OpenAI", abbr: "OAI", color: "#10A37F" },
  { name: "Anthropic", abbr: "Ant", color: "#D4A574" },
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-[#020817] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="enterprise-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Technology Stack
          </div>
          <h2 className="text-headline text-white mb-4">
            Built on{" "}
            <span className="gradient-text">Best-in-Class</span> Technology
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We engineer with the tools that power the world&apos;s most demanding systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                y: -6,
                boxShadow: `0 0 30px ${tech.color}30`,
              }}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
            >
              {/* Color dot accent */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: `${tech.color}18`,
                  border: `1px solid ${tech.color}30`,
                  color: tech.color,
                }}
              >
                {tech.abbr.slice(0, 2)}
              </div>
              <span className="text-white/50 text-xs font-medium group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 20px ${tech.color}12` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
