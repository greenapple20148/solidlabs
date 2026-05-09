"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI & Data Engineering", href: "/services#ai-data" },
    { label: "Cloud Platform Engineering", href: "/services#cloud" },
    { label: "Healthcare & Federal", href: "/services#healthcare-federal" },
    { label: "Product Engineering", href: "/services#product" },
    { label: "DevSecOps", href: "/services#devsecops" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Capability Statement", href: "/capability" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Federal & Government", href: "/industries#federal" },
    { label: "Retail & eCommerce", href: "/industries#retail" },
    { label: "AI Startups", href: "/industries#ai-startups" },
    { label: "Enterprise", href: "/industries#enterprise" },
  ],
};

const contacts = [
  { icon: Mail, label: "info@solidlabsai.com", href: "mailto:info@solidlabsai.com" },
  { icon: Mail, label: "support@solidlabsai.com", href: "mailto:support@solidlabsai.com" },
  { icon: MapPin, label: "United States", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#020817] border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-48 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg opacity-90" />
                <Zap className="relative z-10 w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">
                  SolidLabs
                </span>
                <span className="text-blue-400 font-light text-lg tracking-tight ml-1">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Production-scale AI, Data Platform, Cloud Engineering, and Product Development
              for enterprise, healthcare, federal, and AI startup clients.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              {contacts.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 text-white/40 hover:text-blue-400 text-sm transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-1">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/solidlabs-solutions", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/solidlabsai", label: "Twitter" },
                { icon: Github, href: "https://github.com/solidlabsai", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-500/20 text-white/40 hover:text-blue-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} SolidLabs Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
