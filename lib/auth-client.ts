import { createAuthClient } from 'better-auth/react'

// Client-side utility to interact with the auth endpoints from your React components
// Creates the React hooks and functions you'll use in your UI
export const { signIn, signUp, signOut, useSession } = createAuthClient()