"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Brain, Cloud, HeartPulse, Code2, ShieldCheck, Database, Layers, Workflow, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/Button";

const allServices = [
  {
    id: "ai-data",
    title: "AI & Data Engineering",
    description: "Production-scale intelligence systems designed to transform raw data into enterprise-grade AI capabilities.",
    icon: Brain,
    features: [
      { title: "LLM & RAG Systems", desc: "Custom retrieval-augmented generation for enterprise knowledge bases." },
      { title: "AI Agent Orchestration", desc: "Autonomous agent workflows for complex task automation." },
      { title: "MLOps & Model Governance", desc: "End-to-end pipelines for model training, deployment, and monitoring." },
      { title: "Vector Database Strategy", desc: "Scalable search and retrieval architectures using Pinecone, Weaviate, or Milvus." }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Platform Engineering",
    description: "Modern infrastructure architectures that provide the foundation for scalable, resilient enterprise applications.",
    icon: Cloud,
    features: [
      { title: "Kubernetes Orchestration", desc: "Production-grade container management and scaling strategies." },
      { title: "Multi-Cloud Architecture", desc: "Redundant and optimized setups across AWS, Azure, and GCP." },
      { title: "Infrastructure as Code", desc: "Automated provisioning with Terraform, Pulumi, and CloudFormation." },
      { title: "SRE & Observability", desc: "Deep visibility into system health with advanced monitoring and alerting." }
    ]
  },
  {
    id: "healthcare-federal",
    title: "Healthcare & Federal Solutions",
    description: "Specialized engineering services for highly regulated environments requiring extreme security and compliance.",
    icon: ShieldCheck,
    features: [
      { title: "HIPAA-Ready Systems", desc: "Full-stack healthcare applications built with privacy and security at the core." },
      { title: "FedRAMP Compliance", desc: "Support for federal security requirements and cloud authorization." },
      { title: "Interoperability (FHIR/HL7)", desc: "Secure data exchange between disparate healthcare systems." },
      { title: "Audit & Governance", desc: "Comprehensive logging and control frameworks for regulatory adherence." }
    ]
  },
  {
    id: "product",
    title: "Product Engineering",
    description: "User-centric product development that combines elite technical execution with premium enterprise design.",
    icon: Code2,
    features: [
      { title: "Next.js & React Platforms", desc: "High-performance web applications built for speed and SEO." },
      { title: "Mobile Ecosystems", desc: "Native and cross-platform mobile solutions for enterprise users." },
      { title: "API First Development", desc: "Robust, well-documented API platforms that scale with your business." },
      { title: "Design Systems", desc: "Custom, scalable UI libraries that ensure brand consistency." }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#020817] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Our Services"
          title="Engineering the"
          titleHighlight="Future of Enterprise"
          subtitle="Comprehensive technical solutions for AI, Data, Cloud, and Product development."
          className="mb-20"
        />

        <div className="space-y-32">
          {allServices.map((service, index) => (
            <motion.section 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  {service.features.map((feature) => (
                    <div key={feature.title} className="space-y-2">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        {feature.title}
                      </h4>
                      <p className="text-white/40 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Button href="/contact">Inquire about {service.title}</Button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                 <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/5 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for architectural visual */}
                    <div className="absolute inset-0 grid-pattern opacity-20" />
                    <service.icon className="w-48 h-48 text-blue-500/20 blur-sm absolute" />
                    <service.icon className="w-32 h-32 text-blue-400 relative z-10" />
                 </div>
              </div>
            </motion.section>
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
