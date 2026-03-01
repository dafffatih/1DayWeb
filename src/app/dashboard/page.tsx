"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, FileText, CheckCircle2, CircleDashed, CheckCircle } from "lucide-react";

export default function ClientDashboard() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "admin", text: "Hi John! I've received your requirements for Acme Corp. I'll get started on the design right away. Let me know if you have any questions!", time: "10:00 AM" },
        { id: 2, sender: "client", text: "Thanks! Can we make sure the primary color is a dark indigo?", time: "10:15 AM" },
        { id: 3, sender: "admin", text: "Absolutely, I'll incorporate that into the primary theme.", time: "10:20 AM" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        setMessages([...messages, {
            id: messages.length + 1,
            sender: "client",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setNewMessage("");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Welcome back, John!</h1>
                    <p className="text-zinc-400 mt-1">Here is the status of your website project.</p>
                </div>
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-sm">
                    Status: In Progress
                </Badge>
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-zinc-900 border border-zinc-800 text-zinc-400 w-full justify-start p-1 rounded-lg">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white rounded-md">Order Overview</TabsTrigger>
                    <TabsTrigger value="messages" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white rounded-md relative">
                        Messages
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Project Timeline</CardTitle>
                            <CardDescription className="text-zinc-400">Your 3-Day Growth package is on track.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-8 pb-4">
                                {/* Step 1 */}
                                <div className="relative pl-8">
                                    <div className="absolute -left-[17px] bg-zinc-900 rounded-full">
                                        <CheckCircle className="w-8 h-8 text-green-500 bg-zinc-900 rounded-full" />
                                    </div>
                                    <h3 className="font-semibold text-white">Requirements Submitted</h3>
                                    <p className="text-sm text-zinc-500 mt-1">Intake form completed and payment verified.</p>
                                </div>
                                {/* Step 2 */}
                                <div className="relative pl-8">
                                    <div className="absolute -left-[17px] bg-zinc-900 rounded-full">
                                        <CircleDashed className="w-8 h-8 text-blue-500 bg-zinc-900 rounded-full animate-[spin_4s_linear_infinite]" />
                                    </div>
                                    <h3 className="font-semibold text-white">Designing & Building</h3>
                                    <p className="text-sm text-zinc-500 mt-1">We are currently crafting your website.</p>
                                </div>
                                {/* Step 3 */}
                                <div className="relative pl-8">
                                    <div className="absolute -left-[17px] bg-zinc-900 rounded-full">
                                        <CheckCircle2 className="w-8 h-8 text-zinc-700 bg-zinc-900 rounded-full" />
                                    </div>
                                    <h3 className="font-semibold text-zinc-500">Client Review</h3>
                                    <p className="text-sm text-zinc-600 mt-1">Waiting for initial draft completion.</p>
                                </div>
                                {/* Step 4 */}
                                <div className="relative pl-8">
                                    <div className="absolute -left-[17px] bg-zinc-900 rounded-full">
                                        <CheckCircle2 className="w-8 h-8 text-zinc-700 bg-zinc-900 rounded-full" />
                                    </div>
                                    <h3 className="font-semibold text-zinc-500">Final Delivery</h3>
                                    <p className="text-sm text-zinc-600 mt-1">Handover of source files and deployment.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800 text-white">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Project Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm text-zinc-300">
                            <div className="grid grid-cols-2 gap-4 border-b border-zinc-800 pb-4">
                                <div><span className="text-zinc-500 block">Package</span>3-Day Growth</div>
                                <div><span className="text-zinc-500 block">Deadline</span>Jan 28, 2026</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><span className="text-zinc-500 block">Company Name</span>Acme Corp</div>
                                <div><span className="text-zinc-500 block">Amount Paid</span>$1,999.00</div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="messages" className="mt-6">
                    <Card className="bg-zinc-900 border-zinc-800 flex flex-col h-[600px]">
                        <CardHeader className="border-b border-zinc-800 pb-4">
                            <CardTitle className="text-lg text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-400" />
                                Chat with Admin
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${msg.sender === 'client'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none'
                                        }`}>
                                        <p className="text-sm md:text-base">{msg.text}</p>
                                        <span className={`text-[10px] mt-1 block ${msg.sender === 'client' ? 'text-blue-200 text-right' : 'text-zinc-500'}`}>
                                            {msg.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                        <div className="p-4 border-t border-zinc-800 bg-zinc-950/50">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <Input
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500 h-12"
                                />
                                <Button type="submit" disabled={!newMessage.trim()} className="h-12 w-12 shrink-0 bg-blue-600 hover:bg-blue-700 p-0 text-white">
                                    <Send className="w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
}
