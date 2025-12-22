// src/App.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Laptop from "./assets/laptop.png"; // Make sure this path is correct
import Home from "./Components/Home";

function LandingPage({ onEnter }) {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Section - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block text-left space-y-12"
          >
            <motion.h1
              className="text-6xl xl:text-7xl font-black leading-tight"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p className="text-xl xl:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
              Great software is built with intention—solving real problems through clean code, thoughtful design, and responsible engineering.
            </motion.p>
          </motion.div>
          {/* Laptop Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.4 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src={Laptop}
                alt="Portfolio Mockup"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              {/* Enter Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.button
                  onClick={onEnter}
                  className="pointer-events-auto bg-white text-black font-bold py-4 px-10 sm:py-5 sm:px-12 md:py-6 md:px-16 rounded-full text-xl sm:text-2xl md:text-3xl shadow-2xl hover:shadow-purple-600/60 hover:scale-105 transition-all duration-500 border-4 border-white/30 backdrop-blur-lg"
                  whileHover={{ y: -8, boxShadow: "0 0 60px rgba(168, 85, 247, 0.7)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  Enter Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const [isZoomed, setIsZoomed] = useState(false);
  const location = useLocation();

  // Only show landing if we're on root and haven't zoomed yet
  const showLanding = location.pathname === "/" && !isZoomed;

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden font-['Inter']">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0 ? "bg-purple-500" : "bg-cyan-500"
            } opacity-30 blur-3xl will-change-transform`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LandingPage onEnter={() => setIsZoomed(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-black"
          >
            {/* Optional zoom-out effect on laptop when leaving landing */}
            {isZoomed && location.pathname === "/" && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ scale: 5, opacity: 1 }}
                animate={{ scale: 1, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img src={Laptop} alt="Entering" className="w-96 drop-shadow-2xl" />
              </motion.div>
            )}

            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home initialSection="about" />} />
              <Route path="/skills" element={<Home initialSection="skills" />} />
              <Route path="/projects" element={<Home initialSection="projects" />} />
              <Route path="/contact" element={<Home initialSection="contact" />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;