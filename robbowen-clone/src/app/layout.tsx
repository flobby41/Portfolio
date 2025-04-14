import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-bitter",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Florian Cheheb - Independent Creative Developer",
  description: "Florian is an independent creative developer from Paris, France. He loves helping organisations to build ambitious yet accessible web projects.",
  authors: [{ name: "Florian Cheheb" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
