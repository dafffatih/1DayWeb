import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createDb } from "./db";

// Better Auth instance
// Note: D1 database needs to be passed dynamically via request context. 
// For Edge environments, you initialize inside the API route based on request context.
// Therefore, we export a function that accepts the environment object containing D1 binding.

export function getAuth(env: { DB: D1Database, BETTER_AUTH_SECRET: string, BETTER_AUTH_URL: string, GOOGLE_CLIENT_ID: string, GOOGLE_CLIENT_SECRET: string, RESEND_API_KEY: string }) {
    const db = createDb(env.DB);

    return betterAuth({
        database: drizzleAdapter(db, {
            provider: "sqlite", // D1 uses sqlite
        }),
        secret: env.BETTER_AUTH_SECRET,
        baseURL: env.BETTER_AUTH_URL,
        socialProviders: {
            google: {
                clientId: env.GOOGLE_CLIENT_ID,
                clientSecret: env.GOOGLE_CLIENT_SECRET,
            }
        },
        emailOTP: {
            async sendVerificationOTP({ email, otp, type, request }: { email: string; otp: string; type: string; request?: any }) {
                // Send the OTP via Resend
                const response = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        from: "onboarding@resend.dev", // Update to your domain in production
                        to: email,
                        subject: "Verify Your Email",
                        html: `Your verification code is: <strong>${otp}</strong>`
                    })
                });

                if (!response.ok) {
                    console.error("Failed to send email OTP via Resend", await response.text());
                }
            },
        },
    });
}
