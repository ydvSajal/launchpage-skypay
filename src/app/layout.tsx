import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SkyPay | Crypto payment gateway for checkout, links, subscriptions and invoices",
  description:
    "Accept crypto with hosted checkout, links, subscriptions and invoices. Escrowed disputes and refunds run underneath. Funds never leave your custody.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-white font-sans text-[#0f0f0f] antialiased">{children}</body>
    </html>
  );
}
