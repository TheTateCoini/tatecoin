import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/basic/header";
import Subscribe from "./_components/home/subscribe";
import Footer from "./_components/basic/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tatecoin",
  description: "Fast, Secure, and Borderless Transactions for a Decentralized",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
