import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter, FaTiktok, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  // Replace these with your actual links
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/',
      icon: <FaGithub className="text-2xl" />,
      color: 'hover:text-gray-300',
    },
    // {
    //   name: 'LinkedIn',
    //   href: 'https://www.linkedin.com/in/tawiah-obed-73941a3ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    //   icon: <FaLinkedinIn className="text-2xl" />,
    //   color: 'hover:text-blue-500',
    // },
    // {
    //   name: 'X (Twitter)',
    //   href: 'https://x.com/yourusername',
    //   icon: <FaTwitter className="text-2xl" />,
    //   color: 'hover:text-sky-500',
    // },
    // {
    //   name: 'TikTok',
    //   href: 'https://tiktok.com/@yourusername',
    //   icon: <FaTiktok className="text-2xl" />,
    //   color: 'hover:text-pink-500',
    // },
    // {
    //   name: 'Telegram',
    //   href: 'https://t.me/yourusername',
    //   icon: <FaTelegramPlane className="text-2xl" />,
    //   color: 'hover:text-blue-400',
    // },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/0539526814', // Replace with your number (international format)
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'hover:text-green-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 text-center md:text-left"
    >
      <div className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Reach out through any of the channels below!
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center md:items-start">
          <FiMail className="text-4xl text-purple-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <a
            href="mailto:hello@yourdomain.com"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            tawiaho858@gmail.com
          </a>
        </div>

        {/* WhatsApp */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center md:items-start">
          <FiPhone className="text-4xl text-green-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
          <a
            href="https://wa.me/1234567890"
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            +123 53 952 6814
          </a>
        </div>

        {/* Location */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center md:items-start">
          <FiMapPin className="text-4xl text-cyan-500 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Location</h4>
          <p className="text-gray-300">Lakeside Estate, Accra, Ghana</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="space-y-6">
        <h4 className="text-2xl font-semibold text-center">Connect with Me</h4>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors ${link.color}`}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Google Maps Embed - Lakeside Estate / Lake Kalmoni area, Accra */}
      <div className="space-y-4">
        <h4 className="text-2xl font-semibold text-center">Find Me Here</h4>
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <iframe
            title="Lakeside Estate, Accra, Ghana"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.123456789!2d-0.123456789!3d5.678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnMjQuMCJOIDDCsDA3JzI0LjAiVw!5e0!3m2!1sen!2sgh!4v1698765432100!5m2!1sen!2sgh"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Lakeside Estate, near Lake Kalmoni – Accra, Ghana
        </p>
      </div>
    </motion.div>
  );
}