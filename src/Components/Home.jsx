// src/Components/Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const sections = [
  { id: 'about',    label: 'About',    path: '/about',    component: <About /> },
  { id: 'skills',   label: 'Skills',   path: '/skills',   component: <Skills /> },
  { id: 'projects', label: 'Projects', path: '/projects', component: <Project /> },
  { id: 'contact',  label: 'Contact',  path: '/contact',  component: <Contact /> },
];

const pageVariants = {
  initial: (dir) => ({ y: dir > 0 ? '100%' : '-100%', opacity: 0.8 }),
  enter: { y: 0, opacity: 1 },
  exit: (dir) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0.8 }),
};

const pageTransition = {
  type: 'spring',
  stiffness: 220,
  damping: 25,
  duration: 0.7,
};

export default function Home({ initialSection = 'about' }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(() => {
    const idx = sections.findIndex(s => s.id === initialSection);
    return idx >= 0 ? idx : 0;
  });
  const [direction, setDirection] = useState(0);

  const [isVerySmall, setIsVerySmall] = useState(window.innerWidth < 375);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsVerySmall(window.innerWidth < 375);
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeSection = (newIndex) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
    navigate(sections[newIndex].path);
  };

  // Sync URL with active section
  useEffect(() => {
    const currentPath = window.location.pathname;
    const idx = sections.findIndex(s => s.path === currentPath);
    if (idx >= 0 && idx !== activeIndex) {
      setActiveIndex(idx);
      setDirection(idx > activeIndex ? 1 : -1);
    }
  }, [window.location.pathname, activeIndex]);

  // Keyboard navigation (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        changeSection((activeIndex + 1) % sections.length);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        changeSection((activeIndex - 1 + sections.length) % sections.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, isMobile]);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-['Inter']">
      {/* Navigation */}
      <motion.nav
        initial={{ y: isMobile ? 100 : -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed z-50 ${
          isMobile
            ? 'bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 py-3 px-3 xs:px-4'
            : 'top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-white/10 py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-6 md:gap-10 max-w-7xl mx-auto">
          {sections.map((section, i) => (
            <Link
              key={section.id}
              to={section.path}
              onClick={() => changeSection(i)}
              className="relative group px-2 py-1.5 xs:px-3 sm:px-4 touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
            >
              <span
                className={`text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wider transition-colors ${
                  activeIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white'
                }`}
              >
                {section.label}
              </span>
              <motion.div
                className="absolute left-1/2 -bottom-1 h-0.5 w-5 xs:w-6 sm:w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full -translate-x-1/2"
                initial={false}
                animate={{ scale: activeIndex === i ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.section
          key={activeIndex}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={pageTransition}
          className={`absolute inset-0 flex flex-col overflow-y-auto overscroll-contain ${
            isMobile 
              ? isVerySmall 
                ? 'pt-14 pb-28 safe-area-inset-bottom'  // Extra bottom space for very small phones
                : 'pt-16 pb-28 safe-area-inset-bottom' 
              : 'pt-24 pb-16'
          }`}
        >
          <div className="w-full max-w-[90vw] xs:max-w-[88vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 py-6 xs:py-8 sm:py-12 md:py-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 xs:mb-8 md:mb-12 text-center text-white ${
                isVerySmall ? 'leading-tight' : ''
              }`}
            >
              {sections[activeIndex].label}
            </motion.h2>
            <div className="relative z-10">
              {sections[activeIndex].component}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}