// Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', proficiency: '1.5 years', percentage: 95 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nextdotjs.svg', color: '#FFFFFF', proficiency: '1.5 years', percentage: 95 },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/vuedotjs.svg', color: '#4FC08D', proficiency: '8 months', percentage: 80 },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg', color: '#61DAFB', proficiency: '7 months', percentage: 75 },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/flutter.svg', color: '#02569B', proficiency: '5 months', percentage: 65 },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/html5.svg', color: '#E34F26', proficiency: '1.5 years', percentage: 100 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/css3.svg', color: '#1572B6', proficiency: '1.5 years', percentage: 92 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg', color: '#F7DF1E', proficiency: '1.5 years', percentage: 85 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/typescript.svg', color: '#3178C6', proficiency: '1 year', percentage: 82 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg', color: '#339933', proficiency: '1.2 years', percentage: 80 },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/express.svg', color: '#FFFFFF', proficiency: '1 year', percentage: 78 },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/graphql.svg', color: '#E10098', proficiency: '8 months', percentage: 75 },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/prisma.svg', color: '#FFFFFF', proficiency: '8 months', percentage: 75 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/firebase.svg', color: '#FFCA28', proficiency: '10 months', percentage: 78 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/tailwindcss.svg', color: '#06B6D4', proficiency: '1.3 years', percentage: 98 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mongodb.svg', color: '#47A248', proficiency: '1 year', percentage: 82 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/postgresql.svg', color: '#4169E1', proficiency: '9 months', percentage: 75 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/mysql.svg', color: '#4479A1', proficiency: '1 year', percentage: 75 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/git.svg', color: '#F05032', proficiency: '1.5 years', percentage: 95 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/github.svg', color: '#FFFFFF', proficiency: '1.5 years', percentage: 90 },
  { name: 'Render', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/render.svg', color: '#46E3B7', proficiency: '1.5 years', percentage: 80 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/docker.svg', color: '#2496ED', proficiency: '5 months', percentage: 45 },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/vercel.svg', color: '#FFFFFF', proficiency: '1.5 years', percentage: 85 },
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/netlify.svg', color: '#00C7B7', proficiency: '1.5 years', percentage: 85 },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/amazonwebservices.svg', color: '#FF9900', proficiency: '1.5 years', percentage: 80 },
  { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/framer.svg', color: '#0055FF', proficiency: '1 year', percentage: 90 },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/figma.svg', color: '#F24E1E', proficiency: '1 year', percentage: 85 },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/threedotjs.svg', color: '#FFFFFF', proficiency: '6 months', percentage: 70 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
        >
          {/* Subtle gradient hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="p-5 sm:p-6 md:p-8">
            {/* Icon + Name */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-2.5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-full md:h-full object-contain"
                  style={{ filter: `drop-shadow(0 0 8px ${skill.color}80)` }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">
                  {skill.proficiency}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 sm:mt-6">
              <div className="flex justify-between text-xs sm:text-sm mb-1.5 sm:mb-2">
                <span className="text-gray-300">Proficiency</span>
                <span className="font-medium text-white">{skill.percentage}%</span>
              </div>

              <div className="relative h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.percentage}%` : 0 }}
                  transition={{ duration: 1.8, delay: index * 0.06, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}cc 100%)`,
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