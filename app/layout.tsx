import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muneeb.design"),
  title: "Muneeb Ur Rehman - UI/UX Designer | Product Design Expert",
  description:
    "UI/UX designer specializing in product design, design systems, and user-centered interfaces. I create intuitive, scalable digital experiences that solve real problems.",
  keywords: [
    "UI designer",
    "UX designer",
    "product designer",
    "web designer",
    "design systems",
    "user experience",
    "interface design",
    "design thinking",
    "figma",
    "prototyping",
  ],
  authors: [{ name: "Muneeb Ur Rehman" }],
  creator: "Muneeb Ur Rehman",
  publisher: "Muneeb Ur Rehman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muneeb.design",
    title: "Muneeb Ur Rehman - UI/UX Designer & Product Design Expert",
    description:
      "UI/UX designer specializing in product design, design systems, and user-centered interfaces. I create intuitive, scalable digital experiences that solve real problems.",
    siteName: "Muneeb Ur Rehman Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muneeb Ur Rehman - UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muneeb Ur Rehman - UI/UX Designer",
    description:
      "UI/UX designer specializing in product design, design systems, and user-centered interfaces.",
    images: ["/og-image.jpg"],
    creator: "@muneebdesigner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  canonical: "https://muneeb.design",
  alternates: {
    canonical: "https://muneeb.design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muneeb Ur Rehman",
              url: "https://muneeb.design",
              image: "https://muneeb.design/assets/avatar.png",
              description: "UI/UX Designer and Product Design Expert",
              jobTitle: "Product Designer",
              sameAs: [
                "https://twitter.com/muneebdesigner",
                "https://instagram.com/muneebdesigner",
                "https://linkedin.com/in/muneebdesigner",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
