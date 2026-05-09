"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeartPulse, Shield, ShoppingBag, Home, Cpu, BarChart3, Rocket, Landmark } from "lucide-react";
import { Button } from "@/components/ui/Button";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Building the next generation of digital health. From interoperability to secure AI diagnostics, we help healthcare organizations navigate complex technical landscapes while ensuring total compliance.",
    solutions: ["HIPAA-Compliant Platforms", "Patient Data Analytics", "EHR/FHIR Integration", "Telehealth Infrastructure"],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Federal & Government",
    description: "Secure, mission-critical engineering for public sector agencies. We deliver high-reliability systems that meet the stringent security and reporting requirements of federal contracting.",
    solutions: ["FedRAMP Authorization Support", "Secure Cloud Migration", "Mission-Critical APIs", "Data Modernization"],
    color: "cyan"
  },
  {
    icon: ShoppingBag,
    title: "Retail & eCommerce",
    description: "Architecting high-scale commerce engines. We specialize in real-time inventory, personalized AI recommendations, and checkout systems handling extreme transaction volumes.",
    solutions: ["High-Volume Transaction Engines", "Inventory Management", "AI Personalization", "Cross-Platform Loyalty"],
    color: "violet"
  },
  {
    icon: Home,
    title: "Real Estate Tech",
    description: "Transforming PropTech through data. We build platforms that aggregate complex market data, automate property management, and deliver AI-powered valuation models.",
    solutions: ["Property Portals", "Market Data Lakes", "Automated Underwriting", "AI Valuation Engines"],
    color: "emerald"
  },
  {
    icon: Rocket,
    title: "AI & Tech Startups",
    description: "Hyper-growth engineering for the AI era. We partner with startups to build scalable MVP infrastructure, production-ready ML pipelines, and high-performance API platforms.",
    solutions: ["MVP Development", "MLOps Pipelines", "Scalable API Design", "Infrastructure Strategy"],
    color: "orange"
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Modernizing FinTech with secure, data-driven architectures. We build resilient systems for transaction processing, fraud detection, and regulatory reporting.",
    solutions: ["Secure Payments", "Fraud Detection AI", "Ledger Systems", "Regulatory Reporting"],
    color: "rose"
  }
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24 bg-[hsl(var(--background))] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Market Expertise"
          title="Industry-Specific"
          titleHighlight="Solutions"
          subtitle="Deep domain knowledge applied to the world's most complex technical challenges."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-border flex flex-col hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ind.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{ind.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed mb-6 flex-grow">
                {ind.description}
              </p>
              <div className="space-y-3 mb-8">
                 <p className="text-xs font-semibold text-foreground/30 uppercase tracking-widest">Key Solutions</p>
                 {ind.solutions.map(sol => (
                   <div key={sol} className="flex items-center gap-2 text-xs text-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      {sol}
                   </div>
                 ))}
              </div>
              <Button variant="ghost" className="w-full justify-between" href="/contact">
                Industry Details <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-border text-center"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Don&apos;t see your industry?</h2>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Our engineering fundamentals apply to any high-stakes, data-driven environment. We specialize in solving the &quot;unsolvable&quot; technical debt and scaling challenges.
          </p>
          <Button size="lg" href="/contact">Start a Technical Discussion</Button>
        </motion.div>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
