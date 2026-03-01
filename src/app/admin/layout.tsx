import Link from "next/link";
import { Zap, LayoutDashboard, MessageSquare, Image, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar for Admin */}
            <aside className="w-64 bg-zinc-950 border-r border-zinc-900 hidden md:flex flex-col h-screen sticky top-0">
                <div className="h-16 flex items-center px-6 border-b border-zinc-900">
                    <Link href="/admin" className="flex items-center gap-2 text-white">
                        <Zap className="w-6 h-6 text-yellow-500" />
                        <span className="font-bold text-lg">Admin View</span>
                    </Link>
                </div>

                <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
                    {/* We will route within the same page using tabs for simplicity in MVP, but let's make them look like links */}
                    <Link href="/admin" className="flex items-center gap-3 px-3 py-2 bg-blue-600 rounded-md text-white font-medium">
                        <LayoutDashboard className="w-5 h-5" />
                        Workspace
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">
                        <LogOut className="w-5 h-5" />
                        Exit Admin
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-screen flex flex-col pt-16 md:pt-0">
                <header className="md:hidden h-16 fixed top-0 w-full bg-zinc-950 border-b border-zinc-900 flex items-center px-4 z-40">
                    <Link href="/admin" className="flex items-center gap-2 text-white">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold">Admin</span>
                    </Link>
                </header>

                <div className="flex-1 p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
