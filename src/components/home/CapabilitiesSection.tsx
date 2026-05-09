"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Database,
  Code2,
  ShieldCheck,
  Layers,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Engineering",
    description:
      "LLM integrations, RAG pipelines, AI agents, and MLOps platforms at production scale.",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description:
      "Multi-cloud architecture on AWS, Azure, and GCP with Kubernetes orchestration.",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/20",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Snowflake, Databricks, vector databases, real-time pipelines, and analytics platforms.",
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-violet-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Code2,
    title: "Product Development",
    description:
      "Full-stack React, Next.js, mobile apps, and enterprise API platforms.",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    description:
      "CI/CD automation, infrastructure as code, security hardening, and compliance.",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    glow: "group-hover:shadow-orange-500/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Layers,
    title: "Enterprise Architecture",
    description:
      "System design, microservices, event-driven architecture, and scalability patterns.",
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
    glow: "group-hover:shadow-pink-500/20",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CapabilitiesSection() {
  return (
    <section className="py-24 bg-[hsl(var(--background))] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="enterprise-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Trusted Expertise
          </div>
          <h2 className="text-headline text-foreground mb-4">
            Built for{" "}
            <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep technical expertise across every layer of the modern enterprise
            technology stack.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={item}
              whileHover={{ y: -6 }}
              className={`group relative rounded-xl border ${cap.border} bg-gradient-to-br ${cap.color} p-6 backdrop-blur-sm cursor-default transition-all duration-300 shine`}
              style={{ boxShadow: "0 0 0 transparent" }}
            >
              <div
                className={`w-11 h-11 rounded-xl ${cap.iconBg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
              >
                <cap.icon className={`w-5 h-5 ${cap.iconColor}`} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {cap.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cap.description}
              </p>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${cap.glow} shadow-xl`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
