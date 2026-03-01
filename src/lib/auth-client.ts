import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    // Make sure you define NEXT_PUBLIC_APP_URL in .env.local 
})

export const { useSession, signIn, signUp, signOut } = authClient;
