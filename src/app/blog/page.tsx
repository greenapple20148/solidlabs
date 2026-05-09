"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Search, Tag, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    title: "Scaling LLMs in Production: Beyond the Chatbot",
    excerpt: "Exploring the architectural requirements for high-availability RAG systems and autonomous AI agents in the enterprise.",
    author: "Ravi Shanmugam",
    date: "May 15, 2024",
    readTime: "8 min read",
    tag: "AI Engineering",
    category: "Technical Architecture"
  },
  {
    title: "Kubernetes for Regulated Industries: HIPAA and FedRAMP",
    excerpt: "Best practices for architecting containerized workloads in environments where security and compliance are non-negotiable.",
    author: "Nanda Jagadish",
    date: "April 28, 2024",
    readTime: "12 min read",
    tag: "Cloud",
    category: "Compliance"
  },
  {
    title: "The Modern Data Lakehouse: Snowflake vs. Databricks",
    excerpt: "A deep dive into selecting the right foundation for your enterprise data platform in 2024 and beyond.",
    author: "SolidLabs Engineering",
    date: "April 10, 2024",
    readTime: "10 min read",
    tag: "Data",
    category: "Data Platforms"
  },
  {
    title: "Event-Driven Architectures for Zero-Downtime Migration",
    excerpt: "How we used Kafka to migrate a Fortune 1 retail platform with 5,000+ TPS without dropping a single packet.",
    author: "SolidLabs Engineering",
    date: "March 22, 2024",
    readTime: "15 min read",
    tag: "Engineering",
    category: "Case Study"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-[hsl(var(--background))] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
           <SectionHeader 
             badge="Insights & Intelligence"
             title="The SolidLabs"
             titleHighlight="Insights"
             subtitle="Deep technical dives into AI, Cloud, and the future of enterprise engineering."
             centered={false}
             className="max-w-xl"
           />
           
           <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-muted border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-all"
              />
           </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-blue-600/10 to-transparent p-8 lg:p-16 mb-16 group cursor-pointer"
        >
           <div className="absolute top-0 right-0 p-8">
              <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-blue-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
           </div>
           <div className="max-w-2xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                 <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">Featured Insight</span>
                 <span className="text-muted-foreground text-sm">May 20, 2024</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                 Architecting for Reliability: Why &quot;Scale&quot; is More Than Just More Servers
              </h2>
              <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                 A comprehensive analysis of distributed system design for high-growth enterprises. Learn about the common pitfalls of vertical scaling and the power of event-driven resilience.
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-border">
                    <User className="w-5 h-5 text-blue-400" />
                 </div>
                 <div>
                    <div className="text-foreground font-bold text-sm">SolidLabs Solutions Team</div>
                    <div className="text-muted-foreground text-xs">Technical Strategy</div>
                 </div>
              </div>
           </div>
           {/* Decorative visual */}
           <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {posts.map((post, i) => (
             <motion.article
               key={post.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass rounded-2xl border border-border p-6 flex flex-col group cursor-pointer hover:border-blue-500/20 transition-all"
             >
                <div className="flex justify-between items-start mb-6">
                   <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{post.tag}</span>
                   <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-100 transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                <div className="pt-6 border-t border-border flex items-center justify-between">
                   <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                   </div>
                   <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                   </div>
                </div>
             </motion.article>
           ))}
        </div>

        {/* Newsletter Callout */}
        <div className="mt-24 rounded-3xl border border-border bg-white/[0.01] p-12 text-center">
           <h2 className="text-2xl font-bold text-foreground mb-4">Stay at the Cutting Edge</h2>
           <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Subscribe to our monthly technical digest for insights on AI, cloud architecture, and enterprise engineering.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-grow bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-blue-500 transition-all"
              />
              <Button>Subscribe</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
