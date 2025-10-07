// src/components/SocialLinks.jsx
import React from "react";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/ashirwad_dev",
    color: "text-pink-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/ashirwadDev",
    color: "text-gray-300",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/ashirwad_dev",
    color: "text-blue-400",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-6 mt-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`text-2xl ${link.color} hover:opacity-80 transition`}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
