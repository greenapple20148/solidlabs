"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Mail, Building2, CheckCircle } from "lucide-react";

const projectTypes = [
  "AI/ML Engineering",
  "Data Platform & Analytics",
  "Cloud Infrastructure",
  "Product Development",
  "DevSecOps",
  "Healthcare IT",
  "Federal/Government",
  "Other",
];

const budgetRanges = [
  "< $50K",
  "$50K – $150K",
  "$150K – $500K",
  "$500K – $1M",
  "$1M+",
  "Ongoing Retainer",
];

const timelines = [
  "ASAP (< 1 month)",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "12+ months",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        alert(errData.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to connect to the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#020817] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="enterprise-badge mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Get in Touch
            </div>
            <h2 className="text-headline text-white mb-4">
              Talk to a{" "}
              <span className="gradient-text">Solutions Architect</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Tell us about your project and we&apos;ll connect you with a senior
              engineer who specializes in your domain.
            </p>

            {/* Trust indicators */}
            <div className="space-y-4 mb-10">
              {[
                "Response within 24 business hours",
                "Senior architect on every call",
                "No sales pressure — just expertise",
                "NDA available on request",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {[
                { icon: Mail, label: "General Inquiries", value: "info@solidlabsai.com", href: "mailto:info@solidlabsai.com" },
                { icon: Mail, label: "Ravi Shanmugam", value: "ravi.shanmugam@solidlabsai.com", href: "mailto:ravi.shanmugam@solidlabsai.com" },
                { icon: Mail, label: "Nanda Jagadish", value: "nanda.jagadish@solidlabsai.com", href: "mailto:nanda.jagadish@solidlabsai.com" },
                { icon: Calendar, label: "Schedule a Call", value: "Book on Calendly", href: "#calendly" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{label}</p>
                    <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Received</h3>
                <p className="text-white/50">A solutions architect will reach out within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Name *</label>
                    <input name="name" required type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Company *</label>
                    <input name="company" required type="text" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Email *</label>
                  <input name="email" required type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all" />
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Project Type</label>
                  <select name="projectType" className="w-full px-4 py-3 rounded-lg bg-[#030b1a] border border-white/10 text-white/70 text-sm focus:outline-none focus:border-blue-500/50 transition-all">
                    <option value="">Select project type...</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Budget Range</label>
                    <select name="budget" className="w-full px-4 py-3 rounded-lg bg-[#030b1a] border border-white/10 text-white/70 text-sm focus:outline-none focus:border-blue-500/50 transition-all">
                      <option value="">Select range...</option>
                      {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Timeline</label>
                    <select name="timeline" className="w-full px-4 py-3 rounded-lg bg-[#030b1a] border border-white/10 text-white/70 text-sm focus:outline-none focus:border-blue-500/50 transition-all">
                      <option value="">Select timeline...</option>
                      {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea name="message" rows={4} placeholder="Describe your project, goals, and any technical context..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
