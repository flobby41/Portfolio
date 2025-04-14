import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";


const bitter = Bitter({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-bitter",
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
    <html lang="en" className={`${bitter.variable}`}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
