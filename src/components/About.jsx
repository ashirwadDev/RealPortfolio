import { motion } from 'framer-motion';


const About = () => (
<section id="about" className="py-20 max-w-5xl mx-auto px-6">
<motion.h2
className="text-3xl font-heading text-center mb-8"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
About Me
</motion.h2>
<motion.p
className="text-gray-400 text-center text-lg leading-relaxed"
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ delay: 0.3, duration: 1 }}
>
I'm a self-taught <span className="text-emerald-400">web Developer</span> specializing in creating smooth and responsive web applications.
My goal is to merge functionality with great design and deliver experiences users love.
</motion.p>
</section>
);


export default About;