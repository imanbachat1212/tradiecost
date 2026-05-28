import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s | TradieCost",
    default: "TradieCost – Honest Trade Cost Guides for Australia",
  },
  description:
    "Real price guides for electrical, plumbing, and other trade jobs in Melbourne and across Australia. All prices are estimates based on real market data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-[family-name:var(--font-geist-sans)] bg-white text-slate-900 antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
