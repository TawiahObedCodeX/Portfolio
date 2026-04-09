import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const passions = [
  'Writing clean, maintainable, and well-documented code',
  'Prioritizing performance, accessibility (a11y) & SEO',
  'Mastering modern frontend & robust backend architectures',
  'Building scalable web & mobile applications',
  'Teaching others best practices in development',
  'Creating intuitive user interfaces people love',
];

const profileMetrics = [
  { value: '3+', label: 'Years Experience' },
  { value: 'Full Stack', label: 'Engineering Focus' },
  { value: '100s', label: 'Students Mentored' },
];

export default function About() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden selection:bg-cyan-500/30">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mb-20"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4"
          >
            // 01. Introduction
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Crafting digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">experiences</span> that matter.
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl"
          >
            I'm <span className="text-white font-medium">Tawiah Obed</span>. A Full-Stack Developer and educator dedicated to building high-performance applications with human-centric design.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24"
        >
          {profileMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <h3 className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">{metric.value}</h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed"
          >
            <p>
              I bridge the gap between complex engineering and intuitive design. With over 3 years of experience, I’ve refined my ability to build <span className="text-white">production-ready</span> systems that don't just work—they excel.
            </p>
            <p>
              My toolkit focuses on the <span className="text-cyan-300">Modern Web Stack</span>: React, Next.js, and Node.js. I specialize in turning ambiguous problems into scalable, well-documented technical solutions.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
                <h4 className="text-white font-semibold mb-2">Technical Excellence</h4>
                <p className="text-sm">Clean architecture, type-safety, and rigorous performance optimization.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
                <h4 className="text-white font-semibold mb-2">Mentorship</h4>
                <p className="text-sm">Helping the next generation of devs master the full-stack landscape.</p>
              </div>
            </div>
          </motion.div>

          {/* Passions Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">What I Bring to the Team</h3>
            <ul className="space-y-4">
              {passions.map((passion, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300 text-md">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {passion}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Let's build the future together.</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            I am currently open to full-stack roles and interesting collaborations. Let's talk about how I can contribute to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105">
              Hire Me
            </a>
            <a href="/projects" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}