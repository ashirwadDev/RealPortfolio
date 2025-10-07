import { motion } from 'framer-motion';
import profile from '../assets/profile.png';
import SocialLinks from './SocialLinks';

const Hero = () => {
return (
<section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
<motion.img
src={profile}
alt="Profile"
className="w-40 h-40 rounded-full border-4 border-primary shadow-lg mb-6"
initial={{ scale: 0, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 1 }}
/>
<motion.h1
className="text-4xl md:text-6xl font-heading mb-4"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3, duration: 1 }}
>
Hi, I'm <span className="text-emerald-400">Ashirwad Dwivedi</span>
</motion.h1>
<motion.p
className="text-lg md:text-xl text-gray-400 max-w-2xl"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.6, duration: 1 }}
>
A passionate Web Developer crafting modern, fast, and user-friendly web experiences.
</motion.p>
<SocialLinks />
</section>
);
};


export default Hero;