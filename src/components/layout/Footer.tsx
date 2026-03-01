"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 py-12">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-white">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <span className="font-bold text-xl tracking-tight">1DayWeb</span>
                </div>

                <p className="text-sm">
                    &copy; {new Date().getFullYear()} 1DayWeb Platform. Built securely and fast.
                </p>

                <div className="flex gap-6 text-sm">
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
                </div>
            </div>
        </footer>
    );
}
