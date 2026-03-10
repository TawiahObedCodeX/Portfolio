// src/Components/Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Cv from './Cv';

const sections = [
  { id: 'about',    label: 'About',    path: '/about',    component: <About /> },
  { id: 'skills',   label: 'Skills',   path: '/skills',   component: <Skills /> },
  { id: 'projects', label: 'Projects', path: '/projects', component: <Project /> },
  { id: 'cv',       label: 'CV',       path: '/cv',       component: <Cv /> },
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
        initial={{ y: isMobile ? 100 : -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed z-50 ${
          isMobile
            ? 'bottom-0 left-0 right-0'
            : 'top-0 left-0 right-0'
        } bg-[#050308]/95 border-b border-[#17121a]`}
      >
        {/* Desktop / tablet */}
        {!isMobile && (
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-8 py-3">
            <div className="flex items-center gap-2 sm:gap-3">
            </div>

            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
              {sections.map((section, i) => (
                <Link
                  key={section.id}
                  to={section.path}
                  onClick={() => changeSection(i)}
                  className="relative px-2 py-1.5 sm:px-3 md:px-4 rounded-full text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.16em] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/70"
                >
                  <span
                    className={
                      activeIndex === i
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white'
                    }
                  >
                    {section.label}
                  </span>
                  {activeIndex === i && (
                    <div className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full bg-purple-500" />
                  )}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  const contactIndex = sections.findIndex((s) => s.id === 'contact');
                  if (contactIndex >= 0) changeSection(contactIndex);
                }}
                className="hidden sm:inline-flex items-center rounded-full bg-cyan-300 px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-black hover:bg-cyan-200 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              >
                Download
              </button>
            </div>
          </div>
        )}

        {/* Mobile */}
        {isMobile && (
          <div className="mx-auto flex w-full max-w-md items-center justify-between px-3 py-2">
            {sections.map((section, i) => (
              <Link
                key={section.id}
                to={section.path}
                onClick={() => changeSection(i)}
                className="flex-1 rounded-full px-2 py-1 text-center text-[0.65rem] xs:text-[0.7rem] font-semibold uppercase tracking-[0.16em] focus:outline-none focus:ring-2 focus:ring-purple-500/70"
              >
                <span
                  className={
                    activeIndex === i
                      ? 'inline-block rounded-full bg-purple-500 px-2 py-0.5 text-white'
                      : 'text-neutral-400'
                  }
                >
                  {section.label}
                </span>
              </Link>
            ))}
          </div>
        )}
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