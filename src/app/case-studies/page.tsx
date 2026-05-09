"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrendingUp, Zap, ShieldCheck, Database, LayoutGrid, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

const caseStudies = [
  {
    slug: "fortune-1-retail",
    label: "Commerce Excellence",
    title: "Fortune 1 Retail Platform Modernization",
    challenge: "Replacing a legacy monolith handling 5,000+ transactions per second with a modern, event-driven architecture — requiring zero downtime and perfect data consistency.",
    architecture: "Event-driven microservices utilizing Kafka, Kubernetes, and multi-region AWS infrastructure.",
    results: [
      "5,000+ TPS sustained capacity",
      "99.99% system availability",
      "40% reduction in infrastructure overhead",
      "Real-time inventory synchronization across 4,000+ locations"
    ],
    tech: ["Go", "Kafka", "K8s", "AWS", "PostgreSQL"],
    color: "blue"
  },
  {
    slug: "high-volume-qr",
    label: "Digital Infrastructure",
    title: "Enterprise QR & Digital Receipt Ecosystem",
    challenge: "Developing a nationwide infrastructure for digital receipts and QR-based engagement, serving 10M+ daily users with sub-100ms response times.",
    architecture: "Serverless edge functions combined with a global CDN and low-latency cache layers.",
    results: [
      "10M+ daily active transactions",
      "Sub-50ms p99 latency globally",
      "Seamless integration with 15+ POS providers",
      "Highly accessible web-based receipt viewing platform"
    ],
    tech: ["Next.js", "Redis", "Cloudflare", "Node.js", "GCP"],
    color: "cyan"
  },
  {
    slug: "ai-modernization",
    label: "Data & Intelligence",
    title: "Enterprise AI Data Lakehouse Transformation",
    challenge: "Unifying fragmented data silos across a global organization to enable real-time AI analytics and automated decision making.",
    architecture: "Unified lakehouse architecture with integrated MLOps pipelines for model lifecycle management.",
    results: [
      "80% reduction in data processing time",
      "Automated ML model deployment cycle",
      "Real-time executive dashboarding",
      "Significant improvement in demand forecasting accuracy"
    ],
    tech: ["Databricks", "Snowflake", "Python", "Airflow", "PyTorch"],
    color: "violet"
  },
  {
    slug: "order-processing",
    label: "Product Engineering",
    title: "Digital Order Processing Platform",
    challenge: "Streamlining a complex, multi-step order workflow for a large healthcare provider while maintaining HIPAA compliance and high availability.",
    architecture: "Highly resilient API gateway with robust state machine orchestration for complex workflows.",
    results: [
      "90% reduction in manual order intervention",
      "HIPAA-compliant data encryption at rest and in transit",
      "Scalable to handle 5x peak traffic loads",
      "Intuitive provider portal reducing training time by 60%"
    ],
    tech: ["TypeScript", "NestJS", "React", "Terraform", "Azure"],
    color: "emerald"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#020817] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Proven Impact"
          title="Case"
          titleHighlight="Studies"
          subtitle="A selection of high-stakes engineering projects delivered for global enterprise clients."
          className="mb-20"
        />

        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl border border-white/5 overflow-hidden flex flex-col lg:flex-row group"
            >
              <div className="lg:w-1/3 p-8 lg:p-12 bg-white/[0.01] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
                 <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{cs.label}</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{cs.title}</h3>
                 <div className="mt-auto pt-8">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                       {cs.tech.map(t => (
                         <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-white/50 text-xs">
                           {t}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-2/3 p-8 lg:p-12 space-y-10">
                 <div>
                    <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">The Challenge</h4>
                    <p className="text-white/50 leading-relaxed">{cs.challenge}</p>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-10">
                    <div>
                       <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">Architecture</h4>
                       <p className="text-white/50 text-sm leading-relaxed">{cs.architecture}</p>
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">Business Impact</h4>
                       <ul className="space-y-3">
                          {cs.results.map(r => (
                            <li key={r} className="flex items-start gap-3 text-sm text-white/70">
                               <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                               {r}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
                 
                 <div className="pt-4 flex justify-end">
                    <Button variant="outline" iconAfter>Full Technical Deep Dive</Button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckCircle(props: any) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
