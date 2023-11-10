import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Providers } from "../components/providers";
import "./globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Alex Alexeev - Software Engineer",
  description: "I help companies to build products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} font-mono `}
    >
      <body className="min-h-screen">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
