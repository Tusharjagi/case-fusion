import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
