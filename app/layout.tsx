import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axora",
  description: "Global B2B Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}