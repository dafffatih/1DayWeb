"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <span className="font-bold text-xl tracking-tight">1DayWeb</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
                    <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link href="#packages" className="hover:text-white transition-colors">Pricing</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block">
                        Login
                    </Link>
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200" asChild>
                        <Link href="#packages">Start Project</Link>
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
