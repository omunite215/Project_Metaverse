import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
