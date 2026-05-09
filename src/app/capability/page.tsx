"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Download, ShieldCheck, CheckCircle, FileText, Globe, Zap, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const coreCompetencies = [
  "Production-Scale AI & Machine Learning Engineering",
  "Cloud Native Infrastructure (Kubernetes, AWS, Azure, GCP)",
  "Big Data Platform Architecture (Snowflake, Databricks)",
  "HIPAA & FedRAMP Ready Software Systems",
  "Enterprise MLOps & AI Data Pipelines",
  "DevSecOps & CI/CD Lifecycle Automation",
  "Custom API Platform & Microservices Design",
  "High-Performance Digital Product Engineering"
];

const naicsCodes = [
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "541690", label: "Other Scientific & Technical Consulting" },
  { code: "518210", label: "Data Processing, Hosting, and Related Services" },
  { code: "541715", label: "R&D in Physical, Engineering, and Life Sciences" }
];

const differentiators = [
  { title: "Elite Technical Pedigree", desc: "Our team consists of senior engineers and architects from industry leaders like Palantir, Databricks, and AWS." },
  { title: "Regulated Industry Mastery", desc: "Deep expertise in healthcare and federal compliance (HIPAA, FedRAMP, SOC2)." },
  { title: "Production-First Philosophy", desc: "We focus on scalable, maintainable, and resilient systems—not just prototypes." },
  { title: "Full-Stack AI Synergy", desc: "The rare ability to engineer both the AI models and the complex cloud infrastructure required to serve them." }
];

export default function CapabilityPage() {
  return (
    <div className="pt-32 pb-24 bg-[hsl(var(--background))] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-12">
           <div>
              <div className="enterprise-badge mb-4">Federal Contractor Profile</div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Capability Statement</h1>
              <p className="text-muted-foreground text-lg">SolidLabs Solutions | CAGE: [PENDING] | UEI: [PENDING]</p>
           </div>
           <Button size="lg" icon={<Download className="w-4 h-4" />}>Download PDF Version</Button>
        </div>

        <div className="space-y-16">
           {/* Section 1: Intro */}
           <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">Company Overview</h2>
              <p className="text-foreground/60 leading-relaxed text-lg">
                 SolidLabs Solutions is a specialized technology firm providing high-end engineering services for enterprise, healthcare, and federal clients. We bridge the gap between complex data science and production-scale software engineering, delivering resilient architectures that power mission-critical operations.
              </p>
           </section>

           {/* Section 2: Competencies */}
           <section className="grid md:grid-cols-2 gap-12">
              <div>
                 <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">Core Competencies</h2>
                 <ul className="space-y-4">
                    {coreCompetencies.map(cc => (
                      <li key={cc} className="flex items-start gap-3 text-foreground/70">
                         <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                         <span>{cc}</span>
                      </li>
                    ))}
                 </ul>
              </div>
              
              <div className="glass p-8 rounded-2xl border border-border bg-blue-500/[0.02]">
                 <h2 className="text-xl font-bold text-foreground mb-6">Codes & Classifications</h2>
                 <div className="space-y-4">
                    <div className="pb-4 border-b border-border">
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">NAICS Codes</p>
                       <div className="grid grid-cols-1 gap-2">
                          {naicsCodes.slice(0, 5).map(nc => (
                            <div key={nc.code} className="flex justify-between text-sm">
                               <span className="text-blue-400 font-mono">{nc.code}</span>
                               <span className="text-muted-foreground truncate max-w-[200px]">{nc.label}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Certifications</p>
                       <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-muted rounded text-xs text-foreground/60">SBA Certified Small Business</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs text-foreground/60">HubZone [In Progress]</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs text-foreground/60">SOC 2 Type II Ready</span>
                       </div>
                    </div>
                 </div>
              </div>
           </section>

           {/* Section 3: Differentiators */}
           <section>
              <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-blue-500 pl-4">Differentiators</h2>
              <div className="grid md:grid-cols-2 gap-8">
                 {differentiators.map((d, i) => (
                   <div key={d.title} className="p-6 rounded-xl bg-white/[0.01] border border-border">
                      <h3 className="text-foreground font-bold mb-2">{d.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                   </div>
                 ))}
              </div>
           </section>

           {/* Section 4: Contact */}
           <section className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Procurement & Teaming</h2>
              <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
                 SolidLabs is seeking prime and sub-contracting opportunities in AI modernization, cloud infrastructure, and data platform initiatives across Federal and State agencies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <Button href="/contact">Contact Procurement Lead</Button>
                 <Button variant="outline" href="mailto:info@solidlabsai.com">info@solidlabsai.com</Button>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
