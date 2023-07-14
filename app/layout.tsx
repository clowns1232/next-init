import { Inter } from "next/font/google";
import Header from "./Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 version</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
