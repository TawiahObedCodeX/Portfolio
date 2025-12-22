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

export default function About() {
  const experienceYears = new Date().getFullYear() - 2022;

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 ">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Hero / Intro */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Hi, I'm <span className="text-blue-700 dark:text-blue-400">Tawiah Obed </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Full-Stack Developer & Educator
          </motion.p>

          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Crafting beautiful, scalable web & mobile applications with modern technologies
          </motion.p>
        </motion.div>

        {/* Main Content - Two-column layout on large screens, stacked on smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            className="space-y-8 md:space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                About Me
              </h2>

              <div className="space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
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
            </motion.div>
          </motion.div>

          {/* Right Column - Passions + Teaching */}
          <motion.div
            className="space-y-10 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                What Drives Me
              </h3>

              <motion.ul
                className="space-y-5 text-lg text-gray-700 dark:text-gray-300"
                variants={staggerChildren}
              >
                {passions.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-6 h-6 shrink-0 mt-1 mr-4 rounded-full bg-blue-100 dark:bg-blue-900/30 items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Teaching / Mentorship */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Teaching & Mentorship
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I regularly create in-depth tutorials, courses, and live coding sessions covering the full development lifecycle — from wireframing and design systems to building production-ready web and mobile applications.
              </p>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My teaching style focuses on <strong>real-world projects</strong>, clean architecture, testing, and preparing developers for modern job requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Ready to build something exceptional — or learn together?
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="/contact"
              className="inline-block px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(37,99,235,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch →
            </motion.a>

            <motion.a
              href="/projects"
              className="inline-block px-10 py-4 border-2 border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 font-semibold rounded-xl transition-all duration-300"
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