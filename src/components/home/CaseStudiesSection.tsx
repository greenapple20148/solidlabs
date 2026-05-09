"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, ShieldCheck } from "lucide-react";

const cases = [
  {
    label: "Fortune 1 Retail",
    title: "High-Volume Retail Platform Modernization",
    challenge: "A Fortune 1 retailer needed to replace a legacy monolith handling 5,000+ TPS with a cloud-native event-driven architecture — zero downtime, 100% data fidelity.",
    impact: ["5,000+ TPS sustained throughput", "99.99% uptime SLA achieved", "40% infrastructure cost reduction", "Sub-50ms p99 latency"],
    tech: ["Kubernetes", "Kafka", "AWS", "PostgreSQL", "React"],
    icon: TrendingUp,
    color: "blue",
  },
  {
    label: "QR Infrastructure",
    title: "Nationwide QR Code & Digital Receipt System",
    challenge: "Built a high-volume QR code generation and digital receipt delivery platform serving millions of transactions per day across thousands of locations.",
    impact: ["10M+ daily transactions", "Real-time delivery at scale", "Multi-region redundancy", "WCAG 2.1 compliant UX"],
    tech: ["Next.js", "Node.js", "Redis", "GCP", "PostgreSQL"],
    icon: Zap,
    color: "cyan",
  },
  {
    label: "AI Data Modernization",
    title: "Enterprise AI & Data Lakehouse Initiative",
    challenge: "Architected an end-to-end AI data platform — from raw ingestion to LLM-powered analytics — replacing fragmented data silos for a large enterprise.",
    impact: ["Unified data lakehouse", "LLM-powered analytics", "3x analyst productivity", "Real-time ML model serving"],
    tech: ["Databricks", "Snowflake", "OpenAI", "Python", "Airflow"],
    icon: ShieldCheck,
    color: "violet",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "rgba(59,130,246,0.12)" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "rgba(6,182,212,0.12)" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", glow: "rgba(139,92,246,0.12)" },
};

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="enterprise-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Case Studies
          </div>
          <h2 className="text-headline text-foreground mb-4">
            Real-World <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Systems built at enterprise scale — measured by reliability, performance, and business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const col = colorMap[c.color];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ boxShadow: `0 0 60px ${col.glow}`, y: -4 }}
                className={`relative rounded-xl border ${col.border} bg-[#030b1a] p-7 flex flex-col transition-all`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${col.bg} flex items-center justify-center`}>
                    <c.icon className={`w-5 h-5 ${col.text}`} />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${col.text}`}>{c.label}</span>
                </div>
                <h3 className="text-foreground font-bold text-lg mb-3 leading-snug">{c.title}</h3>
                <p className="text-foreground/45 text-sm leading-relaxed mb-5">{c.challenge}</p>

                <div className="space-y-2 mb-5">
                  {c.impact.map(m => (
                    <div key={m} className="flex items-center gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.color === "blue" ? "bg-blue-400" : c.color === "cyan" ? "bg-cyan-400" : "bg-violet-400"}`} />
                      <span className="text-foreground/60">{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                  {c.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-foreground/40">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/case-studies" className="inline-flex items-center gap-2 px-8 py-3.5 bg-muted hover:bg-white/10 text-foreground font-semibold rounded-lg border border-border hover:border-white/20 transition-all">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
