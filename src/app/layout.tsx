import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components";
import { cn } from "@/helpers/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-slate-890 flex gap-2 text-slate-300",
          inter.className,
        )}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
