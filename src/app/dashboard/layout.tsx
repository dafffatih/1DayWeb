import Link from "next/link";
import { Zap, Bell, User } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col pt-16 mt-0">
            {/* Dashboard Topbar */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-900 border-b border-zinc-800 h-16 flex items-center justify-between px-6 shadow-md">
                <Link href="/dashboard" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-lg tracking-tight">1DayWeb Portal</span>
                </Link>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                        <User className="w-4 h-4 text-zinc-400" />
                    </div>
                </div>
            </header>

            {/* Note: since the main layout already has a Navbar, we might have two headers overlapping. 
          To fix this in a real app, we'd restructure route groups (e.g., (marketing) and (app) folders). 
          For MVP, we just let it push content down or hide the global navbar on dashboard routes later. */}

            <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
                {children}
            </main>
        </div>
    );
}
