"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Cloud, HeartPulse, Code2 } from "lucide-react";

const services = [
  {
    icon: Brain,
    id: "ai-data",
    label: "01",
    title: "AI & Data Engineering",
    tagline: "Intelligence at scale",
    description:
      "End-to-end AI/ML platforms built for production — from LLM integrations and RAG systems to real-time analytics and MLOps pipelines.",
    features: [
      "LLM & Multimodal Integration",
      "RAG Systems & Vector Databases",
      "AI Agent Orchestration",
      "MLOps & Model Serving",
      "Real-Time Analytics Platforms",
      "Data Lakehouse Architecture",
    ],
    color: "blue",
    accent: "from-blue-600 to-blue-800",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: Cloud,
    id: "cloud",
    label: "02",
    title: "Cloud & Platform Engineering",
    tagline: "Resilient infrastructure",
    description:
      "Multi-cloud architecture, Kubernetes orchestration, CI/CD automation, and infrastructure-as-code for high-availability enterprise systems.",
    features: [
      "Kubernetes & Container Orchestration",
      "AWS / Azure / GCP Multi-Cloud",
      "CI/CD Pipeline Automation",
      "Infrastructure as Code (Terraform)",
      "Scalable Backend Systems",
      "Observability & SRE Practices",
    ],
    color: "cyan",
    accent: "from-cyan-600 to-cyan-800",
    border: "border-cyan-500/20",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: HeartPulse,
    id: "healthcare-federal",
    label: "03",
    title: "Healthcare & Federal Solutions",
    tagline: "Secure. Compliant. Scalable.",
    description:
      "Purpose-built systems for regulated industries — HIPAA-compliant architectures, secure analytics, and interoperable health data platforms.",
    features: [
      "HIPAA-Ready Cloud Architecture",
      "Secure Analytics & BI Platforms",
      "EHR/FHIR Interoperability",
      "FedRAMP Compliance Support",
      "Zero-Trust Security Models",
      "Audit & Governance Frameworks",
    ],
    color: "emerald",
    accent: "from-emerald-600 to-emerald-800",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: Code2,
    id: "product",
    label: "04",
    title: "Product Engineering",
    tagline: "Products users love",
    description:
      "Full-stack product development from MVP to enterprise — React platforms, mobile apps, API systems, and AI-powered user experiences.",
    features: [
      "Next.js & React Enterprise Apps",
      "Mobile App Development",
      "API Platform Design",
      "Enterprise UX & Design Systems",
      "Performance Engineering",
      "Accessibility & Compliance",
    ],
    color: "violet",
    accent: "from-violet-600 to-violet-800",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.15)",
  },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
};

const bgMap: Record<string, string> = {
  blue: "bg-blue-500/10",
  cyan: "bg-cyan-500/10",
  emerald: "bg-emerald-500/10",
  violet: "bg-violet-500/10",
};

const checkMap: Record<string, string> = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="enterprise-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Core Services
          </div>
          <h2 className="text-headline text-foreground mb-4">
            Enterprise-Grade{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            From AI infrastructure to cloud platforms — we architect, build, and scale
            the systems that power modern enterprises.
          </p>
        </motion.div>

        {/* Service blocks */}
        <div className="space-y-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              id={svc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${svc.border} overflow-hidden group`}
              style={{ boxShadow: `0 0 0 transparent` }}
              whileHover={{ boxShadow: `0 0 60px ${svc.glow}` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left panel */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${bgMap[svc.color]} flex items-center justify-center`}
                    >
                      <svc.icon className={`w-6 h-6 ${colorMap[svc.color]}`} />
                    </div>
                    <span className="text-foreground/20 text-4xl font-bold">
                      {svc.label}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest mb-2 ${colorMap[svc.color]}`}
                  >
                    {svc.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-foreground/50 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  <Link
                    href={`/services#${svc.id}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colorMap[svc.color]} hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right panel — features */}
                <div className="p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-border bg-white/[0.02]">
                  <p className="text-xs font-semibold text-foreground/30 uppercase tracking-widest mb-5">
                    Capabilities
                  </p>
                  <ul className="space-y-3">
                    {svc.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-sm text-foreground/60"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${bgMap[svc.color].replace(
                            "10",
                            "80"
                          )}`}
                          style={{
                            backgroundColor: `${svc.color === "blue" ? "#3b82f6" : svc.color === "cyan" ? "#06b6d4" : svc.color === "emerald" ? "#10b981" : "#8b5cf6"}`,
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-muted hover:bg-white/10 text-foreground font-semibold rounded-lg border border-border hover:border-white/20 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
