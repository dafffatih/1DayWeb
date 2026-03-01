"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Choose a Package",
        description: "Select the timeline that fits your needs: 1-Day, 3-Day, or 5-Day custom build.",
    },
    {
        number: "02",
        title: "Tell Us What You Need",
        description: "Fill out a quick 5-minute intake form about your brand, goals, and design preferences.",
    },
    {
        number: "03",
        title: "We Build It",
        description: "Sit back and relax. We'll design, develop, and deliver your premium website before the deadline.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-black text-white relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">How it <span className="text-purple-400">works</span></h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        A streamlined process designed to get you online as fast as possible without sacrificing quality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-36 h-36 rounded-full bg-zinc-950 border-4 border-zinc-800 flex items-center justify-center text-5xl font-black text-white mb-8 shadow-2xl relative">
                                {/* Inner glow */}
                                <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl" />
                                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">{step.number}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-zinc-400 text-lg">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
