"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

const competencies = [
  "AI & Machine Learning Engineering",
  "Data Platform & Analytics Architecture",
  "Cloud Infrastructure (AWS, Azure, GCP)",
  "DevSecOps & CI/CD Automation",
  "Healthcare IT & HIPAA Compliance",
  "Federal Systems & FedRAMP Readiness",
  "Enterprise Product Development",
  "Kubernetes & Container Orchestration",
];

const differentiators = [
  "Production-first engineering approach",
  "Domain expertise in regulated industries",
  "Full-stack AI + Data + Cloud capability",
  "Agile delivery with enterprise rigor",
];

const naicsCodes = [
  { code: "541511", label: "Custom Computer Programming" },
  { code: "541512", label: "Computer Systems Design" },
  { code: "541519", label: "Other Computer Services" },
  { code: "518210", label: "Data Processing & Hosting" },
  { code: "541715", label: "R&D in Physical Science" },
];

export function CapabilitySection() {
  return (
    <section className="py-24 bg-[#030b1a] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Federal-style top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="enterprise-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Capability Statement
          </div>
          <h2 className="text-headline text-white mb-4">
            Federal <span className="gradient-text">Contractor Profile</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            SolidLabs Solutions is a qualified technology partner for federal, healthcare, and enterprise procurement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.02] p-8"
          >
            <h3 className="text-white font-semibold text-lg mb-6 pb-4 border-b border-white/5">
              Core Competencies
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {competencies.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-white/80 font-medium text-sm mb-4">Key Differentiators</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {differentiators.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                    <span className="text-white/50 text-sm">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* NAICS + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold text-sm mb-4 pb-3 border-b border-white/5 uppercase tracking-widest">
                NAICS Codes
              </h3>
              <div className="space-y-3">
                {naicsCodes.map(({ code, label }) => (
                  <div key={code} className="flex items-center justify-between">
                    <span className="text-blue-400 font-mono text-sm">{code}</span>
                    <span className="text-white/40 text-xs text-right ml-3">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6 text-center">
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Download our full capability statement for procurement officers and contracting vehicles.
              </p>
              <Link
                href="/capability"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm transition-all shadow-lg shadow-blue-600/25 mb-3"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Link>
              <Link
                href="/capability"
                className="flex items-center justify-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Full Statement <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
