import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pathvis",
  description: "Path visualizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-xl min-h-screen items-center justify-center flex flex-col relative p-2">
          {children}
        </div>
      </body>
    </html>
  );
}
