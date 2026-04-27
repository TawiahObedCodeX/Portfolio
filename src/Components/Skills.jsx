// Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ==================== SKILLS DATA (Mid-Level Portfolio) ====================
// Based on the provided categories: Languages, Frontend, Backend, Database, Tools & Cloud
// Each skill includes name, icon (simple-icons CDN), brand color, proficiency text, and percentage.
const skills = [
  // ----- Languages -----
  { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg', color: '#F7DF1E', proficiency: '2.5 years', percentage: 92 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/typescript.svg', color: '#3178C6', proficiency: '2 years', percentage: 88 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/python.svg', color: '#3776AB', proficiency: '1.5 years', percentage: 78 },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/html5.svg', color: '#E34F26', proficiency: '3 years', percentage: 98 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/css3.svg', color: '#1572B6', proficiency: '3 years', percentage: 94 },

  // ----- Frontend -----
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', proficiency: '2.5 years', percentage: 94 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nextdotjs.svg', color: '#FFFFFF', proficiency: '2 years', percentage: 91 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tailwindcss.svg', color: '#06B6D4', proficiency: '2.5 years', percentage: 96 },
  { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/framer.svg', color: '#0055FF', proficiency: '1.5 years', percentage: 89 },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/figma.svg', color: '#F24E1E', proficiency: '1.5 years', percentage: 87 },

  // ----- Backend -----
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg', color: '#339933', proficiency: '2 years', percentage: 86 },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/express.svg', color: '#FFFFFF', proficiency: '2 years', percentage: 85 },
  { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/swagger.svg', color: '#85EA2D', proficiency: '2.5 years', percentage: 90 },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/redis.svg', color: '#DC382D', proficiency: '1 year', percentage: 74 },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/postman.svg', color: '#FF6C37', proficiency: '2 years', percentage: 89 },

  // ----- Database -----
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/postgresql.svg', color: '#4169E1', proficiency: '1.8 years', percentage: 82 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mongodb.svg', color: '#47A248', proficiency: '2 years', percentage: 86 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/firebase.svg', color: '#FFCA28', proficiency: '1.8 years', percentage: 84 },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/supabase.svg', color: '#3ECF8E', proficiency: '1.2 years', percentage: 78 },

  // ----- Tools & Cloud -----
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/git.svg', color: '#F05032', proficiency: '2.5 years', percentage: 93 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', color: '#FFFFFF', proficiency: '2.5 years', percentage: 92 },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/jest.svg', color: '#C21325', proficiency: '1.2 years', percentage: 76 },
  { name: 'Jira', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/jira.svg', color: '#0052CC', proficiency: '1.5 years', percentage: 80 },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/vercel.svg', color: '#FFFFFF', proficiency: '2 years', percentage: 88 },
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/netlify.svg', color: '#00C7B7', proficiency: '2 years', percentage: 87 },
  { name: 'Render', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/render.svg', color: '#46E3B7', proficiency: '1.8 years', percentage: 84 },
  { name: 'Gateway (API Gateway)', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/cloudflare.svg', color: '#F38020', proficiency: '1 year', percentage: 72 }
];

// ==================== ANIMATION VARIANTS ====================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 45, opacity: 0, scale: 0.96 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 140, damping: 14, mass: 0.8 },
  },
};

// ==================== SKILLS COMPONENT ====================
export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-7 auto-rows-fr"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -6, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.98 }}
          className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400/40"
        >
          {/* Animated gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Subtle shine effect (top-left to bottom-right) */}
          <div className="absolute -inset-full group-hover:inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 transform transition-all duration-700 group-hover:translate-x-full pointer-events-none" />

          <div className="p-5 sm:p-6 md:p-7 relative z-10">
            {/* Icon + Title Row */}
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center p-2 sm:p-2.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                style={{ backgroundColor: `${skill.color}18`, boxShadow: `0 0 0 1px ${skill.color}30` }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain transition-transform group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 0 6px ${skill.color}80)` }}
                  loading="lazy"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 truncate">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium tracking-wide">
                  {skill.proficiency}
                </p>
              </div>
            </div>

            {/* Proficiency Progress Bar */}
            <div className="mt-4 sm:mt-5">
              <div className="flex justify-between text-xs sm:text-sm mb-2">
                <span className="text-gray-300 font-medium">Proficiency</span>
                <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded-full text-xs">
                  {skill.percentage}%
                </span>
              </div>

              <div className="relative h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.percentage}%` : 0 }}
                  transition={{ duration: 1.4, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 70%, ${skill.color}aa 100%)`,
                    boxShadow: `0 0 8px ${skill.color}80`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}