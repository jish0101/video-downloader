import config from "@/lib/config";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: config.GITHUB_CLIENT_ID,
      clientSecret: config.GITHUB_CLIENT_SEC,
    }),
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
        // csrfToken
        if (credentials?.email) {
          return new Promise((res) =>
            res({
              id: "1",
              email: credentials.email,
            })
          );
        }
        return null;
      },
    }),
  ],
  secret: config.NEXTAUTH_SECRET,
};
