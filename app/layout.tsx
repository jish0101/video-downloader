import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import AuthProvider from "@/context/AuthProvider";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Downloader",
  description:
    "This is a video downloader, which can be used to download videos from internet with a link to the video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ThemeToggle />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
