import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Guess The Song Title",
  description: "Guess The Song Title",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sansserif bg-neutral-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
