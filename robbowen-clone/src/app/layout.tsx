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
  title: "Robb Owen - Independent Creative Developer",
  description: "Robb is an independent creative developer from South Wales. He loves helping organisations to build ambitious yet accessible web projects.",
  authors: [{ name: "Robb Owen" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bitter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
