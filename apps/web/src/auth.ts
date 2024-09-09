/* eslint-disable @typescript-eslint/no-unused-vars */
// 'use server';
import NextAuth, { User } from "next-auth";
import Credential from "next-auth/providers/credentials";
import { api } from "./config/axios.config";
import { jwtDecode } from "jwt-decode";

export const { signIn, signOut, handlers, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credential({
      authorize: async (credentials) => {
        try {
          if (
            !credentials ||
            !credentials?.employee_code ||
            !credentials?.password
          )
            return null;

          const res = await api.post("/auth/v1", {
            employee_code: credentials?.employee_code,
            password: credentials?.password,
          });
          const token = res.data.data;
          if (!token) throw new Error("Can't login");
          const user = jwtDecode<User>(token);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.employee_code = token.employee_code as string;
        session.user.first_name = token.first_name as string;
        session.user.last_name = token.last_name as string;
        session.user.email = token.email as string;
        session.user.phone_number = token.phone_number as string;
        session.user.roleId = token.roleId as number;
        session.user.birthdate = token.birthdate as Date;
        session.user.department = token.department as string;
        session.user.gender = token.gender as string;
      }
      return session;
    },
    async jwt({ token, user, account, profile, trigger, session }) {
      if (user) {
        token.id = Number(user.id);
        token.employee_code = user.employee_code;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.birthdate = user.birthdate;
        token.gender = user.gender;
        token.department = user.department;
        token.email = user.email;
        token.phone_number = user.phone_number;
        token.roleId = Number(user.roleId);
      }

      if (trigger === "update" && session) {
        token = { ...token, ...session };
      }
      return token;
    },
  },
});
