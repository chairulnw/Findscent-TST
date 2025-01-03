import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import { compare } from "bcrypt";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
      strategy : "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials?.email || !credentials?.password){
                return null;
            }
            const existingUser = await prisma.user.findUnique({
                where:{email: credentials?.email}
            });
            if(!existingUser){
                return null;
            }
            const passwordMatch = await compare(credentials.password, existingUser.password);

            if (!passwordMatch) {
            return null;
            }
            return {
            id: `${existingUser.id}`,
            name: existingUser.name,
            email: existingUser.email,
            };
          }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
          token.accessToken = user.accessToken; // Include accessToken from user
            return {
              ...token,
              name: user.name,
            }
          }
          return token
        },
        async session({ session, token }) {
          return {
            ...session,
            user: {
              ...session.user,
              name: token.name,
              accessToken: token.accessToken, // Add accessToken to session
            }
          }
        },
      },
      
}