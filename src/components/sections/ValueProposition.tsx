"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        icon: <Clock className="w-8 h-8 text-blue-400" />,
        title: "No Months of Waiting",
        description: "We skip the endless meetings and deliver in days, not months. The base package is ready in just 24 hours.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
        title: "Transparent Pricing",
        description: "No hidden fees, no unexpected retainers, no feature creep. You pay a single flat rate upfront.",
    },
    {
        icon: <Sparkles className="w-8 h-8 text-purple-400" />,
        title: "Premium Quality",
        description: "Fast doesn't mean cheap. We build high-converting, bespoke designs that make your business look like a million bucks.",
    },
];

export default function ValueProposition() {
    return (
        <section className="py-24 bg-zinc-950 text-white relative flex flex-col items-center">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why choose <span className="text-blue-400">1DayWeb?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-zinc-400"
                    >
                        Traditional agencies take too long and cost too much. DIY builders are frustrating and look generic. We offer the perfect middle ground.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors h-full backdrop-blur-sm">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-400 leading-relaxed text-lg">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
