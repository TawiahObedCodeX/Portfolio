import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/TawiahObedCodeX?tab=repositories",
      icon: <FaGithub />,
      color: "hover:bg-white hover:text-black",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tawiah-obed-73941a3ab",
      icon: <FaLinkedinIn />,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/233539526814",
      icon: <FaWhatsapp />,
      color: "hover:bg-green-500 hover:text-white",
    },
    {
      name: "X",
      href: "https://x.com/CodeX_winer",
      icon: <FaTwitter />,
      color: "hover:bg-sky-500 hover:text-white",
    },
  ];

  return (
    <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden selection:bg-cyan-500/30">
      {/* Background Cinematic Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none -z-10 select-none">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.03 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[15rem] lg:text-[25rem] font-black text-white leading-none"
        >
          CONTACT
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Impactful Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
                Available for Work
              </span>
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-tight">
                Let’s build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                  extraordinary.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400 max-w-md leading-relaxed"
            >
              Whether you have a question or just want to say hi, my inbox is
              always open. I'll get back to you within 24 hours.
            </motion.p>

            {/* Quick Contact Cards */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-8">
              {[
                {
                  icon: <FiMail />,
                  label: "Email",
                  value: "tawiaho858@gmail.com",
                  href: "mailto:tawiaho858@gmail.com",
                  color: "text-purple-400",
                },
                {
                  icon: <FiPhone />,
                  label: "WhatsApp",
                  value: "+233 53 952 6814",
                  href: "https://wa.me/233539526814",
                  color: "text-green-400",
                },
                {
                  icon: <FiMapPin />,
                  label: "Location",
                  value: "Accra, Ghana, Lakeside ",
                  href: "#",
                  color: "text-cyan-400",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/20 hover:bg-white/6 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                      {item.label}
                    </p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                  <FiArrowUpRight className="ml-auto text-slate-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Social Grid & Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Connection Grid */}
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-24 rounded-3xl flex flex-col items-center justify-center gap-2 border border-white/10 bg-white/[0.02] text-2xl text-slate-400 transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                  <span className="text-[10px] uppercase tracking-tighter font-bold">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Map Section */}
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <iframe
                title="Lakeside Estate, Accra"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.428414402633!2d-0.1557!3d5.6963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf837426177891%3A0xc31248450f38b293!2sLakeside%20Estate%2C%20Accra!5e0!3m2!1sen!2sgh!4v1712650000000!5m2!1sen!2sgh"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(0.9) contrast(1.2)",
                }}
                allowFullScreen=""
                loading="lazy"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <p className="text-xs text-white/70 font-mono italic">
                  Based in Accra, Ghana 🇬🇭
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
