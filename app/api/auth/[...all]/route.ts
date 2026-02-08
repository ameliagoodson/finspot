import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Uses a helper from Better Auth to create Next.js-compatible GET and POST request handlers. 
export const { POST, GET } = toNextJsHandler(auth);