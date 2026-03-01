"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const packages = [
    {
        id: "1-day",
        name: "1-Day Launch",
        description: "Perfect for single-page landing pages, waitlists, and simple portfolios.",
        price: "$999",
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        features: [
            "Delivery in 24 hours",
            "1 Premium Landing Page",
            "Mobile Responsive Design",
            "Contact Form Integration",
            "Basic SEO Setup",
        ],
        popular: false,
    },
    {
        id: "3-day",
        name: "3-Day Growth",
        description: "Ideal for small businesses needing multiple pages and a CMS.",
        price: "$1,999",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        features: [
            "Delivery in 3 days",
            "Up to 5 Pages",
            "CMS Setup (e.g., Blog)",
            "Premium Animations",
            "Advanced SEO & Analytics",
            "1 Revision Round",
        ],
        popular: true,
    },
    {
        id: "5-day",
        name: "5-Day Custom",
        description: "Full-scale web applications, dashboards, and complex setups.",
        price: "$3,999",
        icon: <Crown className="w-6 h-6 text-purple-500" />,
        features: [
            "Delivery in 5 days",
            "Custom Frontend Architecture",
            "Web App & Dashboard UI",
            "Database / Auth Integration",
            "Complex Micro-animations",
            "Unlimited Revisions (within scope)",
        ],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="packages" className="py-24 bg-zinc-950 text-white relative">
            <div className="absolute inset-0 bg-blue-900/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Simple, Transparent <span className="text-blue-400">Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        Choose the package that fits your timeline and project complexity. Secure payment upfront, and we start designing immediately.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative ${pkg.popular ? 'md:-translate-y-4' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs uppercase tracking-wider font-bold shadow-lg">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <Card className={`relative h-full bg-zinc-900/80 border-zinc-800 backdrop-blur-xl overflow-hidden ${pkg.popular ? 'border-blue-500/50 shadow-2xl shadow-blue-900/20' : ''}`}>
                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] -z-10" />
                                )}

                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        {pkg.icon}
                                        <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                                    </div>
                                    <CardDescription className="text-zinc-400 min-h-[40px]">{pkg.description}</CardDescription>
                                    <div className="mt-6">
                                        <span className="text-5xl font-black text-white">{pkg.price}</span>
                                        <span className="text-zinc-500 ml-2">/ one-time</span>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <ul className="space-y-4 mt-4">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                <span className="text-zinc-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="mt-8">
                                    <Button
                                        className={`w-full h-12 text-lg ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-black hover:bg-zinc-200'}`}
                                        asChild
                                    >
                                        <Link href={`/checkout/${pkg.id}`}>Select {pkg.name}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
