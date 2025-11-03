import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";


export const metadata: Metadata = {
  title: "Florian Cheheb - Independent Creative Developer",
  description: "Florian is an independent creative developer from Paris, France. He loves helping organisations to build ambitious yet accessible web projects.",
  authors: [{ name: "Florian Cheheb" }],
  icons: {
    icon: "/images/square-image3.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
