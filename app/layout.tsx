import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muneeb Ur Rehman - UI/UX Designer",
  description:
    "I am a passionate UI/UX designer with a knack for creating intuitive and visually appealing digital experiences. With a strong background in design principles and user-centered methodologies, I specialize in crafting seamless interfaces that enhance user engagement and satisfaction. My portfolio showcases a diverse range of projects, reflecting my commitment to delivering innovative solutions that meet both user needs and business goals.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
