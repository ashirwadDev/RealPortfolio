import { motion } from 'framer-motion';


const projects = [
{
title: 'Welfare Awareness Gorakhpur',
desc: 'A modern official website for welfare awareness built with React,Framer Motion & Tailwind',
link: 'https://welfare-awareness-gorakhpur.netlify.app/',
},
{
title: 'Weather App',
desc: 'A Weather App with speech-recognition feature and accurate stats fetched with api.',
link: 'https://weather-app-5510.netlify.app',
},
{
    title:'Todo App',
    desc:'A Full-stack Todo Application with OAuth login system of google.',
    link:'https://todo-app5510.netlify.app'

},
{
    title:'Currency Converter',
    desc:'A Currency Converter App built with react & tailwind.',
    link:'https://currency-convertor-lime-eta.vercel.app/'
},
{
    title:'Music Player',
    desc:'A Music Player App built with core React and simple styling,it fetches the data using spotify api.',
    link:'https://music-app-three-ashy.vercel.app/'
},
{
    title:'Joke generater',
    desc:'A Joke generater app that generates the joke of different types.',
    link:'https://joke-app-sandy-five.vercel.app/'
} 
];


const Projects = () => (
<section id="projects" className="py-20 max-w-6xl mx-auto px-6">
<motion.h2
className="text-3xl font-heading text-center mb-12"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
Projects
</motion.h2>
<div className="grid md:grid-cols-2 gap-8">
{projects.map((p, i) => (
<motion.div
key={i}
className="border border-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.2, duration: 0.6 }}
>
<h3 className="text-xl font-heading mb-2">{p.title}</h3>
<p className="text-gray-400 mb-4">{p.desc}</p>
<a href={p.link} className="text-primary hover:underline">View Project →</a>
</motion.div>
))}
</div>
</section>
);


export default Projects;