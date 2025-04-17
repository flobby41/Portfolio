import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
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
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
