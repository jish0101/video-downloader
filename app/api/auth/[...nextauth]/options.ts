import config from "@/lib/config";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    // Uncomment if using GitHub authentication
    // GithubProvider({
    //   clientId: config.GITHUB_CLIENT_ID,
    //   clientSecret: config.GITHUB_CLIENT_SEC,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials) => {
        try {
          if (credentials?.email && credentials?.password) {
            return {
              id: "1",
              email: credentials.email,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
};
