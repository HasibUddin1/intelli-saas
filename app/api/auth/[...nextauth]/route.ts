import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// ----------------------------------------------------------
// Declare (augment) the session user type (fixes unknown issue)
// ----------------------------------------------------------
declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            name: string;
            email: string;
            token: string;
        };
    }

    interface User {
        id: number;
        name: string;
        email: string;
        token: string;
    }
}

// ----------------------------------------------------------
// NextAuth configuration
// ----------------------------------------------------------
const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials) return null;

                const res = await fetch("http://localhost:8000/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                });

                const data = await res.json();

                if (!res.ok || !data.user || !data.token) return null;

                return {
                    id: data.user.id,
                    name: data.user.name,
                    email: data.user.email,
                    token: data.token,
                };
            },
        }),
    ],

    // ----------------------------------------------------------
    // Callbacks
    // ----------------------------------------------------------
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.token = user.token; // Laravel token
            }
            return token;
        },

        async session({ session, token }) {
            session.user = {
                id: token.id as number,
                name: token.name as string,
                email: token.email as string,
                token: token.token as string,
            };
            return session;
        },
    },
});

export { handler as GET, handler as POST };
