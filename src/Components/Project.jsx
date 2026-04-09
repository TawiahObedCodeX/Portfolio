// src/Components/Project.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react'; // Assuming lucide-react is installed

const projects = [
  {
    id: 1,
    title: 'JobFinder',
    description:
      'A comprehensive job search platform featuring advanced filtering, user authentication, real-time job postings, and responsive design. Built with React for frontend, Node.js and Express for backend, and MongoDB for data storage.',
    screenshot: 'https://i.pinimg.com/1200x/77/6b/a0/776ba0a6f16808a1621beb1197085ff5.jpg',
    tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Full Stack',
    liveLink: 'https://carrier-finder.netlify.app/',
    githubLink: 'https://github.com/codeob/JOB_Finder.git',
  },
  {
    id: 2,
    title: 'Event Planner',
    description:
      'A dynamic event management application with real-time collaboration, calendar integration, and automated notifications. Features event creation, participant management, and Firebase-powered backend for seamless data synchronization.',
    screenshot: 'https://i.pinimg.com/1200x/39/a5/33/39a533650d582306cc4911e46172693b.jpg',
    tech: ['React', 'Firebase', 'Node.js'],
    category: 'Full Stack',
    liveLink: 'https://effortless-sunshine-c5b87e.netlify.app/',
    githubLink: 'https://github.com/allianatenadu/Planner.git',
  },
  {
    id: 3,
    title: 'Guessing Game',
    description:
      'An engaging interactive number guessing game with dynamic difficulty levels, score tracking, and responsive design. Implements game logic with JavaScript and features a clean, intuitive React-based user interface.',
    screenshot: 'https://i.pinimg.com/1200x/19/d8/88/19d888eafaf67437f6cab03f7f85bb7d.jpg',
    tech: ['JavaScript', 'React', 'Tailwind'],
    category: 'Game Development',
    liveLink: 'https://polite-cajeta-65e913.netlify.app/',
    githubLink: 'https://github.com/codeob/Game.git',
  },
  {
    id: 4,
    title: 'Movie App',
    description:
      'A sophisticated movie browsing platform with search functionality, detailed movie information, and responsive grid layout. Built with React for smooth user interactions and optimized for performance across devices.',
    screenshot: 'https://i.pinimg.com/originals/dc/4f/c6/dc4fc66a552cd9570c3555790ced6b75.jpg',
    tech: ['React', 'Tailwind'],
    category: 'Frontend',
    liveLink: 'https://cozy-meringue-a0fdad.netlify.app/',
    githubLink: 'https://github.com/codeob/react-9-home-work.git',
  },
  {
    id: 5,
    title: 'Todo List',
    description:
      'A robust task management application with full CRUD operations, local storage persistence, and drag-and-drop functionality. Features include task categorization, priority levels, and a clean, accessible user interface.',
    screenshot: 'https://i.pinimg.com/1200x/85/71/bd/8571bd1743df90f07075be5c80d76ae9.jpg',
    tech: ['React', 'Local Storage', 'Tailwind'],
    category: 'Frontend',
    liveLink: 'https://curious-marshmallow-8df031.netlify.app/',
    githubLink: 'https://github.com/codeob/TodoList.git',
  },
  {
    id: 6,
    title: 'E-commerce Website',
    description:
      'A full-featured online marketplace with secure payment processing, product catalog management, and user authentication. Includes shopping cart functionality, order tracking, and admin dashboard for inventory management.',
    screenshot: 'https://i.pinimg.com/1200x/03/42/15/0342152dc7068df42f9eb386ed193b72.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    liveLink: 'https://ecommerce-for-spices.vercel.app/',
    githubLink: 'https://github.com/codeob/E-commerce.git',
  },
  {
    id: 7,
    title: 'Spices Store',
    description:
      'A modern e-commerce platform specializing in spices with mobile-optimized design, product filtering, and secure checkout. Features include product reviews, wishlist functionality, and responsive design using Tailwind CSS.',
    screenshot: 'https://i.pinimg.com/1200x/6c/f7/1a/6cf71a421154d71781e2b6ea62a0a485.jpg',
    tech: ['React', 'Tailwind'],
    category: 'Frontend',
    liveLink: 'https://ecommerce-for-spices.vercel.app/',
    githubLink: 'https://github.com/codeob/Spices-product.git',
  },
  {
    id: 8,
    title: 'Artist Gallery (Kojo Cue)',
    description:
      'An interactive, map-based digital experience that takes users on a nostalgic journey through Ko-Jo Cue’s life, blending music, storytelling, and visuals across key childhood locations in Kumasi.',
    screenshot: 'https://i.pinimg.com/1200x/3d/3a/11/3d3a11114458e0099cb1e616e8c31d2f.jpg',
    tech: ['React', 'Tailwind'],
    category: 'Frontend',
    liveLink: 'https://kani-album.netlify.app/',
    githubLink: 'https://github.com/codeob/KANI-KOJO-CUE-PROJECT.git',
  },
  {
    id: 9,
    title: 'Decentralized Voting System (Ballot)',
    description:
      'A decentralized voting system ensures secure, transparent, and tamper-proof elections by recording votes on the blockchain, eliminating fraud and centralized control.',
    screenshot: 'https://i.pinimg.com/1200x/3f/52/02/3f5202c1d50a1f57bca0880b7eb9dd32.jpg',
    tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'Local Storage'],
    category: 'Full Stack',
    liveLink: '',
    githubLink: 'https://github.com/codeob/Decentralized-Voting-System-main-nodejs-version.git',
  },
];

const Project = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.04, y: -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="group relative bg-gradient-to-b from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-xl"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="font-medium">{project.category}</span>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;