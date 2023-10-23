import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.scss";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leadwise",
  description: "Tool for your buisness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
