// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const passions = [
  'Writing clean, maintainable, and well-documented code',
  'Prioritizing performance, accessibility (a11y) & SEO from day one',
  'Mastering both modern frontend and robust backend architectures',
  'Building responsive web & mobile applications that scale',
  'Teaching others best practices in full-stack development',
  'Creating intuitive user interfaces people love to use',
  'Staying up-to-date with the latest tools and technologies',
];

const profileMetrics = [
  { value: '3+', label: 'Years Experience' },
  { value: 'Full Stack', label: 'Engineering Focus' },
  { value: '100s', label: 'Students Mentored' },
];

export default function About() {
  const experienceYears = 3;

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Hero / Intro */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.div
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
            variants={fadeInUp}
          >
            About Me
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Hi, I'm <span className="text-cyan-300">Tawiah Obed</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Full-Stack Developer, educator, and problem solver building modern digital products.
          </motion.p>

          <motion.p
            className="mt-4 text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            With {experienceYears} years of experience, I craft scalable web and mobile applications that combine beautiful interfaces, reliable architecture, and thoughtful user experience.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl mx-auto"
            variants={staggerChildren}
          >
            {profileMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm"
              >
                <p className="text-2xl sm:text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-white/50">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content - Two-column layout on large screens, stacked on smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
          {/* Left Column - Bio */}
          <motion.div
            className="space-y-8 md:space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                About Me
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-white/75 leading-8">
                <p>
                  I'm a passionate full-stack developer with over {experienceYears} years of hands-on experience building everything from pixel-perfect user interfaces to high-performance back-end systems.
                </p>

                <p>
                  I specialize in <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and modern mobile development with <strong>React Native</strong> & <strong>Expo</strong>.
                </p>

                <p>
                  I also love teaching — I've guided hundreds of students through complete full-stack web and mobile app development, from UI/UX design principles to deployment and DevOps best practices.
                </p>

                <p>
                  My mission is simple: build products that solve real problems, perform exceptionally, and are a joy to maintain — while helping others become better developers along the way.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">Core Focus</p>
                  <p className="mt-3 text-base font-semibold text-white">Design-forward interfaces backed by dependable full-stack engineering.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">Approach</p>
                  <p className="mt-3 text-base font-semibold text-white">Clean architecture, solid UX decisions, and products built to scale.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Passions + Teaching */}
          <motion.div
            className="space-y-6 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                What Drives Me
              </h3>

              <motion.ul
                className="space-y-5 text-base sm:text-lg text-white/75"
                variants={staggerChildren}
              >
                {passions.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="inline-flex w-6 h-6 shrink-0 mt-1 mr-4 rounded-full bg-cyan-400/15 items-center justify-center">
                      <span className="text-cyan-300 text-sm">✓</span>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>


          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 md:mt-24 text-center rounded-3xl border border-white/10 bg-white/5 px-6 py-10 sm:px-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl text-white mb-3">
            Ready to build something exceptional — or learn together?
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/60 mb-8 leading-relaxed">
            If you need someone who can combine product thinking, modern UI, and dependable full-stack delivery, let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="/contact"
              className="inline-block px-10 py-4 bg-cyan-300 hover:bg-cyan-200 text-slate-950 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(34,211,238,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch →
            </motion.a>

            <motion.a
              href="/projects"
              className="inline-block px-10 py-4 border border-white/15 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}