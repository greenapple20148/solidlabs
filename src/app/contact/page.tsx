"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactSection } from "@/components/home/ContactSection";
import { Mail, MapPin, Phone, Globe, Linkedin, Twitter, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#020817] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Contact Us"
          title="Let&apos;s Build"
          titleHighlight="Together"
          subtitle="Ready to modernize your infrastructure or scale your AI platform? Reach out to our senior architects today."
          className="mb-12"
        />

        {/* Reusing the high-conversion form section but wrapping it in page context */}
        <ContactSection />
        
        {/* Additional Contact Info Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/5 text-center"
           >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 mx-auto">
                 <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold mb-4">Email Us</h3>
              <div className="space-y-2">
                 <a href="mailto:info@solidlabsai.com" className="block text-white/50 hover:text-blue-400 transition-colors">info@solidlabsai.com</a>
                 <a href="mailto:support@solidlabsai.com" className="block text-white/50 hover:text-blue-400 transition-colors">support@solidlabsai.com</a>
              </div>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 text-center"
           >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 mx-auto">
                 <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold mb-4">Our Presence</h3>
              <p className="text-white/50 leading-relaxed">
                 United States<br />
                 Distributed Team of Elite Engineers
              </p>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-white/5 text-center"
           >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 mx-auto">
                 <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold mb-4">Social Connect</h3>
              <div className="flex justify-center gap-4 mt-2">
                 <a href="https://linkedin.com/company/solidlabs-solutions" target="_blank" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-all text-white/50 hover:text-blue-400">
                    <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="https://twitter.com/solidlabsai" target="_blank" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-all text-white/50 hover:text-blue-400">
                    <Twitter className="w-5 h-5" />
                 </a>
                 <a href="https://github.com/solidlabsai" target="_blank" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-all text-white/50 hover:text-blue-400">
                    <Github className="w-5 h-5" />
                 </a>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
