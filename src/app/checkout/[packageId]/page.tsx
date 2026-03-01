"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, CreditCard, Loader2 } from "lucide-react";

const packagesData: Record<string, { name: string; price: string; description: string }> = {
    "1-day": {
        name: "1-Day Launch",
        price: "$999",
        description: "Perfect for single-page landing pages, waitlists, and simple portfolios.",
    },
    "3-day": {
        name: "3-Day Growth",
        price: "$1,999",
        description: "Ideal for small businesses needing multiple pages and a CMS.",
    },
    "5-day": {
        name: "5-Day Custom",
        price: "$3,999",
        description: "Full-scale web applications, dashboards, and complex setups.",
    },
};

export default function CheckoutPage({ params }: { params: Promise<{ packageId: string }> }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const packageId = resolvedParams.packageId;
    const pkg = packagesData[packageId] || packagesData["1-day"];

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate payment & account creation process
        setTimeout(() => {
            setIsSubmitting(false);
            router.push("/dashboard");
        }, 500);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Complete your order</h1>
                    <p className="text-zinc-400">Tell us about your project and secure your spot in line.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Intake Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-xl text-white">Project Details & Intake</CardTitle>
                                <CardDescription className="text-zinc-400">Fill out these details so we can hit the ground running.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-zinc-300">First Name</Label>
                                            <Input id="firstName" required className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-zinc-300">Last Name</Label>
                                            <Input id="lastName" required className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-zinc-300">Email Address</Label>
                                        <Input id="email" type="email" required className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500" placeholder="john@company.com" />
                                        <p className="text-xs text-zinc-500">We'll use this to create your dashboard account.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-zinc-300">Company / Project Name</Label>
                                        <Input id="company" required className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500" placeholder="Acme Corp" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="style" className="text-zinc-300">Desired Style</Label>
                                        <select id="style" required className="w-full h-10 rounded-md bg-zinc-950 border border-zinc-800 text-white px-3 focus:outline-none focus:border-blue-500">
                                            <option value="">Select a style</option>
                                            <option value="modern">Modern & Minimal</option>
                                            <option value="bold">Bold & Colorful</option>
                                            <option value="corporate">Corporate & Professional</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="inspiration" className="text-zinc-300">Inspiration Links (Optional)</Label>
                                        <Input id="inspiration" className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500" placeholder="https://awwwards.com/..." />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="notes" className="text-zinc-300">Project Concept & Requirements</Label>
                                        <Textarea
                                            id="notes"
                                            className="min-h-[120px] bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500 resize-none"
                                            placeholder="Tell us what you want to build, specific colors/branding you like, and any features you absolutely need."
                                        />
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Order Summary & Payment */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24">
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-xl text-white">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold text-white">{pkg.name}</h3>
                                            <p className="text-xs text-zinc-400 mt-1 line-clamp-2 pr-4">{pkg.description}</p>
                                        </div>
                                        <span className="font-bold text-lg text-white">{pkg.price}</span>
                                    </div>

                                    <div className="space-y-2 text-sm text-zinc-400">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span className="text-white">{pkg.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Taxes & Fees</span>
                                            <span className="text-white">Included</span>
                                        </div>
                                        <div className="pt-4 border-t border-zinc-800 flex justify-between items-center font-bold text-lg text-white">
                                            <span>Total Due Today</span>
                                            <span>{pkg.price}</span>
                                        </div>
                                    </div>

                                    <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded-lg flex gap-3 text-sm text-blue-200">
                                        <ShieldCheck className="w-5 h-5 shrink-0 text-blue-400" />
                                        <p>Money-back guarantee if we don't deliver within the specified timeframe.</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col gap-3">
                                    <Button
                                        type="submit"
                                        form="checkout-form"
                                        disabled={isSubmitting}
                                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
                                        ) : (
                                            <><CreditCard className="mr-2 h-5 w-5" /> Continue to Payment</>
                                        )}
                                    </Button>
                                    <Button
                                        type="button"
                                        disabled={isSubmitting}
                                        variant="outline"
                                        onClick={() => {
                                            const form = document.getElementById("checkout-form") as HTMLFormElement;
                                            if (form.reportValidity()) handleSubmit({ preventDefault: () => { } } as React.FormEvent);
                                        }}
                                        className="w-full h-12 border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold"
                                    >
                                        Continue to PayPal
                                    </Button>
                                    <p className="text-center text-xs text-zinc-500 mt-2">
                                        Secured by Stripe & PayPal. You will receive an email receipt.
                                    </p>
                                </CardFooter>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
