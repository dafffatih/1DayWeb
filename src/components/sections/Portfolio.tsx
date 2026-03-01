"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "SaaS Dashboard",
        category: "Web App • 5-Day Custom",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Boutique E-commerce",
        category: "Storefront • 3-Day Growth",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        title: "AI Startup Waitlist",
        category: "Landing Page • 1-Day Launch",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Fintech Marketing Site",
        category: "Marketing • 3-Day Growth",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-black text-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className=" max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Work</span></h2>
                        <p className="text-xl text-zinc-400">
                            Take a look at what we've built recently. High quality, delivered at record speed.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-video block"
                        >
                            {/* Note: since there are no actual images on disk, we use external unsplash images */}
                            <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Placeholder while loading */}
                            {/* Use div with background image instead of Next.js Image to avoid domain config issues for MVP */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.imageUrl})` }}
                                title={project.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-sm font-semibold text-purple-400 mb-2 block tracking-wider uppercase">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
