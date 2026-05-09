"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HeartPulse, Shield, ShoppingBag, Home, Cpu, BarChart3 } from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant AI platforms, EHR integrations, and secure health data analytics for providers and payers.",
    tags: ["HIPAA", "FHIR", "HL7"],
    color: "from-rose-500/10 to-rose-900/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    href: "/industries#healthcare",
  },
  {
    icon: Shield,
    title: "Federal & Government",
    description: "FedRAMP-ready systems, secure analytics, and mission-critical platforms for federal agencies.",
    tags: ["FedRAMP", "FISMA", "NIST"],
    color: "from-blue-500/10 to-blue-900/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    href: "/industries#federal",
  },
  {
    icon: ShoppingBag,
    title: "Retail & eCommerce",
    description: "High-volume order platforms, real-time inventory systems, and personalized AI shopping experiences.",
    tags: ["High TPS", "Real-Time", "Personalization"],
    color: "from-orange-500/10 to-orange-900/5",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    href: "/industries#retail",
  },
  {
    icon: Home,
    title: "Real Estate Tech",
    description: "Property intelligence platforms, market analytics, and AI-powered search for real estate enterprises.",
    tags: ["PropTech", "ML Search", "Analytics"],
    color: "from-emerald-500/10 to-emerald-900/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    href: "/industries#real-estate",
  },
  {
    icon: Cpu,
    title: "AI SaaS Startups",
    description: "Go-to-market AI infrastructure, scalable API platforms, and ML pipelines for high-growth startups.",
    tags: ["LLMs", "Scalability", "APIs"],
    color: "from-violet-500/10 to-violet-900/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    href: "/industries#ai-startups",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Enterprise data lakes, Snowflake/Databricks platforms, and self-serve BI for analytics-driven organizations.",
    tags: ["Snowflake", "Databricks", "BI"],
    color: "from-cyan-500/10 to-cyan-900/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    href: "/industries#data-analytics",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-[hsl(var(--background))] relative overflow-hidden">
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
            Industries Served
          </div>
          <h2 className="text-headline text-foreground mb-4">
            Vertical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Deep domain knowledge across regulated and high-growth industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-xl border ${ind.border} bg-gradient-to-br ${ind.color} p-6 cursor-default shine`}
            >
              <div className={`w-11 h-11 rounded-xl ${ind.iconBg} flex items-center justify-center mb-4`}>
                <ind.icon className={`w-5 h-5 ${ind.iconColor}`} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{ind.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed mb-4">{ind.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {ind.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground/40 border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <Link href={ind.href} className={`inline-flex items-center gap-1.5 text-xs font-semibold ${ind.iconColor} opacity-70 group-hover:opacity-100 group-hover:gap-2.5 transition-all`}>
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
