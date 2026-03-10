// src/Components/Cv.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Cv() {
  return (
    <div className="space-y-8 text-sm sm:text-base text-neutral-100">
      {/* Header from PDF */}
      <div className="rounded-2xl border border-cyan-300/40 bg-neutral-950/90 p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-200">
              Tawiah Obed
            </h3>
            <p className="text-neutral-200 text-sm sm:text-base font-medium">
              Full-Stack Software Developer
            </p>
          </div>
          <div className="text-xs sm:text-sm text-neutral-300 space-y-1 md:text-right">
            <p>0539526814 · tawiaho858@gmail.com</p>
            <p>GitHub · Portfolio</p>
          </div>
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-[1.1fr,0.9fr]">
        {/* Left column – summary, experience, projects */}
        <div className="space-y-6">
          {/* Professional Summary */}
          <section>
            <h4 className="mb-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Professional Summary
            </h4>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5">
              <p className="text-neutral-200 leading-relaxed text-xs sm:text-sm">
                Full-Stack Software Developer with 3+ years of experience designing, developing,
                and deploying modern web applications. Experienced in building scalable backend
                APIs, responsive frontend interfaces, and efficient database architectures. Strong
                background in JavaScript ecosystems, cloud deployment, and software engineering
                best practices. Adept at transforming complex requirements into reliable
                production-ready applications while maintaining clean, maintainable, and
                well-documented codebases.
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h4 className="mb-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Professional Experience
            </h4>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5 space-y-3">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-semibold text-neutral-50 text-sm sm:text-base">
                    Freelance Software Developer — Remote
                  </p>
                </div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                  Jan 2023 – Present
                </p>
              </div>
              <ul className="mt-1 space-y-1.5 text-xs sm:text-sm text-neutral-200">
                <li>• Designed and developed full-stack web applications, managing both frontend user interfaces and backend services.</li>
                <li>• Built secure RESTful and GraphQL APIs using Node.js and Express.js with authentication, validation, and role-based access control.</li>
                <li>• Developed responsive and accessible user interfaces using React.js, Next.js, and Tailwind CSS.</li>
                <li>• Designed and optimized relational and NoSQL database architectures using PostgreSQL, MySQL, and MongoDB.</li>
                <li>• Integrated third-party APIs, authentication providers, and payment gateways into production applications.</li>
                <li>• Implemented containerized deployments using Docker and automated CI/CD pipelines with GitHub Actions.</li>
                <li>• Deployed scalable applications to cloud platforms including AWS, Vercel, Netlify, and Render.</li>
                <li>• Collaborated with clients to gather requirements, design solutions, and deliver maintainable production-ready software.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h4 className="mb-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Projects
            </h4>
            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-semibold text-neutral-50 text-sm sm:text-base">
                    Decentralized Voting System
                  </p>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    May 2025 – Aug 2025
                  </p>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-neutral-200">
                  <li>• Developed a secure digital voting platform designed to ensure transparency and integrity of election processes.</li>
                  <li>• Implemented encrypted vote storage and secure backend validation mechanisms to prevent tampering.</li>
                  <li>• Built scalable APIs for vote submission, authentication, and real-time vote counting dashboards.</li>
                  <li>• Technologies: Node.js, PostgreSQL, Prisma, Docker, AWS.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-semibold text-neutral-50 text-sm sm:text-base">
                    AI-Powered Job Finder Platform
                  </p>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Sep 2025 – Dec 2025
                  </p>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-neutral-200">
                  <li>• Built a job-matching platform that analyzes user resumes and recommends relevant job opportunities.</li>
                  <li>• Developed scalable APIs and optimized database queries to support high-traffic application usage.</li>
                  <li>• Implemented resume scoring and automated feedback features to improve job application success rates.</li>
                  <li>• Technologies: Next.js, TypeScript, Node.js, PostgreSQL.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-semibold text-neutral-50 text-sm sm:text-base">
                    Kani Album (Kojo Cue) — Interactive Platform
                  </p>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
                    Jun 2024 – Aug 2024
                  </p>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-neutral-200">
                  <li>• Created an interactive multimedia storytelling website combining music, visuals, and immersive web experiences.</li>
                  <li>• Built responsive UI components and optimized loading performance across mobile and desktop devices.</li>
                  <li>• Managed full-stack deployment and hosting infrastructure for public release.</li>
                  <li>• Technologies: React.js, Tailwind CSS, Node.js.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Right column – skills, education */}
        <div className="space-y-6">
          {/* Technical Skills */}
          <section>
            <h4 className="mb-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Technical Skills
            </h4>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-neutral-100">
              <p>
                <span className="font-semibold text-amber-300">Languages:</span>{' '}
                JavaScript, TypeScript, Python, Java, SQL, HTML, CSS
              </p>
              <p>
                <span className="font-semibold text-amber-300">Frameworks &amp; Libraries:</span>{' '}
                Node.js, Express.js, React.js, Next.js, Vue.js, GraphQL, Prisma, Tailwind CSS, React Native
              </p>
              <p>
                <span className="font-semibold text-amber-300">Databases:</span>{' '}
                PostgreSQL, MySQL, MongoDB
              </p>
              <p>
                <span className="font-semibold text-amber-300">DevOps &amp; Tools:</span>{' '}
                Git, GitHub, Docker, AWS, CI/CD (GitHub Actions), Linux, Nginx, Postman, Jest,
                REST API Testing, Vercel, Netlify, Render
              </p>
            </div>
          </section>

          {/* Education & Certification */}
          <section>
            <h4 className="mb-3 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Education &amp; Certification
            </h4>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5 text-xs sm:text-sm text-neutral-100">
              <p className="font-semibold text-neutral-50">
                Codetrain Africa — Full Stack Developer Certification
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Graduated: Oct 2025
              </p>
            </div>
          </section>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/95 px-4 py-3 text-xs sm:text-sm"
      >
        <p className="text-neutral-300">
          This CV page mirrors the content of your PDF resume so viewers see the exact same information here and in the downloaded file.
        </p>
      </motion.div>
    </div>
  );
}

