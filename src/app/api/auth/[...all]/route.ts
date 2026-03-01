import { getAuth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const env = getRequestContext().env;
    const auth = getAuth(env as any);
    return auth.handler(request);
}

export async function POST(request: NextRequest) {
    const env = getRequestContext().env;
    const auth = getAuth(env as any);
    return auth.handler(request);
}
