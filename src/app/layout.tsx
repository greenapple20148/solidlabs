import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solidlabsai.com"),
  title: {
    default: "SolidLabs Solutions | AI, Data Platform & Cloud Engineering",
    template: "%s | SolidLabs Solutions",
  },
  description:
    "SolidLabs Solutions is a premier AI, Data Platform, Cloud Engineering, and Product Development company serving enterprise, healthcare, federal, retail, and AI startup clients at production scale.",
  keywords: [
    "AI engineering",
    "data platform",
    "cloud engineering",
    "enterprise software",
    "MLOps",
    "Kubernetes",
    "LLM integration",
    "RAG systems",
    "federal contracting",
    "healthcare IT",
  ],
  authors: [{ name: "SolidLabs Solutions", url: "https://solidlabsai.com" }],
  creator: "SolidLabs Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solidlabsai.com",
    siteName: "SolidLabs Solutions",
    title: "SolidLabs Solutions | AI, Data Platform & Cloud Engineering",
    description:
      "Production-scale AI, cloud infrastructure, and data platform engineering for enterprise clients.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SolidLabs Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolidLabs Solutions | AI, Data Platform & Cloud Engineering",
    description:
      "Production-scale AI, cloud infrastructure, and data platform engineering for enterprise clients.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
