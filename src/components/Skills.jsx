import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiSupabase,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-[#0A0A0A]">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center text-white"
      >
        Skills & Tools
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-6 bg-[#121212] rounded-2xl shadow-lg shadow-black/50 hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-white text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
