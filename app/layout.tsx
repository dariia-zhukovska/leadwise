import type { Metadata } from "next";
import ProximaNova from "next/font/local";
import "@styles/globals.scss";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";

const proximaNova = ProximaNova({
  src: "../styles/fonts/ProximaNova-Regular.woff",
});

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
      <body className={proximaNova.className}>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
