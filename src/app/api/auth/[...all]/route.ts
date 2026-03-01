import { getAuth } from "@/lib/auth";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    // Menggunakan process.env bawaan sebagai ganti getRequestContext().env
    const env = process.env;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const auth = getAuth(env as any);
    return auth.handler(request);
}

export async function POST(request: NextRequest) {
    // Menggunakan process.env bawaan sebagai ganti getRequestContext().env
    const env = process.env;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const auth = getAuth(env as any);
    return auth.handler(request);
}