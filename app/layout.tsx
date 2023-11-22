import type { Metadata } from "next";
import Link from "next/link";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Metaversus",
  description: "A Metaverse Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Link rel="preconnect" href="https://stijndv.com" />
      <Link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      <body>{children}</body>
    </html>
  );
}
