"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Clock, User, FileUp } from "lucide-react";

const ORODERS = [
    { id: "ORD-001", client: "Acme Corp", pkg: "3-Day Growth", status: "In Progress", due: "Tomorrow" },
    { id: "ORD-002", client: "StartupX", pkg: "1-Day Launch", status: "Pending", due: "Today" },
    { id: "ORD-003", client: "Local Shop", pkg: "5-Day Custom", status: "Review", due: "In 2 days" },
];

export default function AdminDashboard() {
    const [activeChat, setActiveChat] = useState("ORD-001");
    const [message, setMessage] = useState("");

    // States for interaction
    const [orders, setOrders] = useState(ORODERS);
    const [chatMessages, setChatMessages] = useState([
        { id: 1, sender: "admin", text: "Hi John! I've received your requirements. I'll get started." },
        { id: 2, sender: "client", text: "Thanks! Can we make sure the primary color is a dark indigo?" }
    ]);

    const handleMessageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        setChatMessages([...chatMessages, { id: Date.now(), sender: "admin", text: message }]);
        setMessage("");
    };

    const handleStatusChange = (orderId: string, newStatus: string) => {
        setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Admin Workspace</h1>
                <p className="text-zinc-400 mt-1">Manage orders, chat with clients, and update portfolio.</p>
            </div>

            <Tabs defaultValue="board" className="w-full">
                <TabsList className="bg-zinc-900 border border-zinc-800 text-zinc-400 w-full md:w-auto h-auto flex flex-wrap gap-2 p-1.5 rounded-lg justify-start">
                    <TabsTrigger value="board" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white px-6 py-2">Kanban Board</TabsTrigger>
                    <TabsTrigger value="chat" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white px-6 py-2 relative">
                        Chat Hub
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                    </TabsTrigger>
                    <TabsTrigger value="services" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white px-6 py-2">Service Manager</TabsTrigger>
                </TabsList>

                <TabsContent value="board" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                        {/* Columns */}
                        {["Pending", "In Progress", "Review", "Completed"].map((status) => (
                            <div key={status} className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-4 min-h-[500px]">
                                <div className="flex items-center justify-between mb-4 px-1">
                                    <h3 className="font-semibold text-zinc-300">{status}</h3>
                                    <Badge variant="outline" className="text-zinc-500 border-zinc-800">
                                        {ORODERS.filter(o => o.status === status).length}
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    {orders.filter(o => o.status === status).map((order) => (
                                        <Card key={order.id} className="bg-zinc-900 border-zinc-800 transition-colors">
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="text-xs font-mono text-zinc-500">{order.id}</span>
                                                    <span className="text-xs text-red-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {order.due}</span>
                                                </div>
                                                <h4 className="font-bold text-white mb-1">{order.client}</h4>
                                                <div className="flex items-center justify-between mt-4">
                                                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800">{order.pkg}</Badge>
                                                    <User className="w-4 h-4 text-zinc-500" />
                                                </div>
                                                <div className="mt-3">
                                                    <select
                                                        value={order.status}
                                                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                        className="w-full h-8 text-xs rounded border border-zinc-700 bg-zinc-950 text-zinc-300"
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="Review">Review</option>
                                                        <option value="Completed">Completed</option>
                                                    </select>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="chat" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[700px]">
                        {/* Conversation List */}
                        <div className="col-span-1 bg-zinc-950/50 border border-zinc-900 rounded-xl flex flex-col overflow-hidden">
                            <div className="p-4 border-b border-zinc-900">
                                <h3 className="font-semibold text-white">Active Conversations</h3>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {ORODERS.map((order) => (
                                    <button
                                        key={order.id}
                                        onClick={() => setActiveChat(order.id)}
                                        className={`w-full text-left p-4 border-b border-zinc-900 transition-colors ${activeChat === order.id ? 'bg-zinc-800/50' : 'hover:bg-zinc-900'}`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-semibold text-zinc-200">{order.client}</span>
                                            <span className="text-xs text-zinc-500">10:20 AM</span>
                                        </div>
                                        <p className="text-sm text-zinc-400 line-clamp-1">Latest message preview here...</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="col-span-1 md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col overflow-hidden relative">
                            <div className="p-4 border-b border-zinc-800 bg-zinc-950/50 flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-white">{ORODERS.find(o => o.id === activeChat)?.client}</h3>
                                    <span className="text-xs text-zinc-400">{activeChat}</span>
                                </div>
                                <Button size="sm" variant="outline" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
                                    <FileUp className="w-4 h-4 mr-2" />
                                    Deliver Work
                                </Button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {chatMessages.map(msg => (
                                    <div key={msg.id} className={`flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[70%] px-4 py-3 rounded-2xl ${msg.sender === "admin" ? "bg-blue-600 text-white rounded-br-none" : "bg-zinc-800 text-zinc-200 rounded-bl-none"}`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-zinc-950/80 border-t border-zinc-800">
                                <form className="flex gap-2" onSubmit={handleMessageSubmit}>
                                    <Input
                                        placeholder="Reply to client..."
                                        className="bg-zinc-900 border-zinc-700 text-white"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <Button aria-label="Send" type="submit" disabled={!message.trim()} className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="services" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-white">Add to Portfolio</CardTitle>
                                <CardDescription className="text-zinc-400">Publish a newly completed project to the landing page.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-zinc-300">Project Title</Label>
                                    <Input className="bg-zinc-950 border-zinc-800 text-white" placeholder="e.g. Acme Dashboard" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-zinc-300">Category / Package</Label>
                                    <Input className="bg-zinc-950 border-zinc-800 text-white" placeholder="e.g. Web App • 5-Day Custom" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-zinc-300">Image URL</Label>
                                    <Input className="bg-zinc-950 border-zinc-800 text-white" placeholder="https://..." />
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Publish to Portfolio</Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-white">Update Pricing Packages</CardTitle>
                                <CardDescription className="text-zinc-400">Modify the price or description of your tiers.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-zinc-300">Select Tier to Edit</Label>
                                    <select className="w-full h-10 rounded-md bg-zinc-950 border border-zinc-800 text-white px-3 mt-1">
                                        <option>1-Day Launch</option>
                                        <option>3-Day Growth</option>
                                        <option>5-Day Custom</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-zinc-300">New Price</Label>
                                    <Input className="bg-zinc-950 border-zinc-800 text-white" placeholder="$999" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-zinc-300">Features (comma separated)</Label>
                                    <Textarea className="bg-zinc-950 border-zinc-800 text-white h-24" placeholder="Delivery in 24 hours, Mobile Responsive..." />
                                </div>
                                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white">Save Changes</Button>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
