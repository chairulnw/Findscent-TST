// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Tambahkan properti id
      name: string;
      email: string;
      image?: string;
    };
  }

  interface User {
    id: string; // Tambahkan properti id
  }
}
