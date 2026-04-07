import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth";

//uses a helper adaptor from Better Auth to create Next.js-compatible GET and POST request handlers.
export const { POST, GET } = toNextJsHandler(auth);
