"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Zap, Users, Target, Shield, Award, Trophy, Rocket, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Elite Engineers", value: "25+" },
  { label: "Projects Delivered", value: "100+" },
  { label: "Enterprise Clients", value: "15+" },
  { label: "Uptime Average", value: "99.99%" }
];

const values = [
  {
    icon: Target,
    title: "Production-First",
    description: "We don't build demos. We build systems designed to live and scale in production under extreme loads."
  },
  {
    icon: Zap,
    title: "Technical Rigor",
    description: "Our standards are extreme. We apply elite engineering principles to every line of code and every architectural decision."
  },
  {
    icon: Shield,
    title: "Reliability by Design",
    description: "Resilience is not an afterthought. We architect for failure to ensure your systems never truly fail."
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We embed with your teams to solve your hardest problems, acting as a technical force multiplier."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[hsl(var(--background))] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Our Identity"
          title="Engineering"
          titleHighlight="Excellence"
          subtitle="SolidLabs Solutions is a specialized engineering firm focused on the high-stakes world of enterprise AI and cloud platforms."
          className="mb-20"
        />

        {/* Mission / Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
           >
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                We founded SolidLabs with a simple realization: the gap between &quot;AI demos&quot; and &quot;AI in production&quot; is massive. Most companies can build a prototype, but very few can build a system that handles 10,000 requests per second while maintaining 99.99% reliability.
              </p>
              <p className="text-foreground/60 text-lg leading-relaxed">
                We exist to bridge that gap. Our team of elite architects and engineers specializes in building the mission-critical infrastructure that powers the modern enterprise. From healthcare data platforms to nationwide retail engines, we solve the technical challenges that keep CTOs up at night.
              </p>
              <div className="pt-4">
                 <Button href="/contact" size="lg">Work with Us</Button>
              </div>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
           >
              {stats.map((stat, i) => (
                <div key={stat.label} className="glass p-8 rounded-2xl border border-border text-center">
                   <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                   <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide every architectural decision we make.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-secondary border border-border hover:border-blue-500/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <v.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Leadership Callout */}
        <div className="rounded-3xl border border-border bg-gradient-to-br from-blue-600/5 to-transparent p-12 lg:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
           <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Built by Engineers, for Engineers</h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                SolidLabs is led by veterans of the tech industry who have built and scaled systems at Palantir, Databricks, and AWS. We speak the language of engineering leaders and understand the pressures of delivering complex projects on aggressive timelines.
              </p>
              <div className="flex flex-wrap gap-8">
                 <div className="space-y-1">
                    <div className="text-foreground font-bold">Ravi Shanmugam</div>
                    <div className="text-blue-400 text-sm">Managing Partner</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-foreground font-bold">Nanda Jagadish</div>
                    <div className="text-blue-400 text-sm">Technical Lead</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
