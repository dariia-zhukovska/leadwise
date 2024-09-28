import type { Metadata } from "next";
import ProximaNova from "next/font/local";
import Helvetica from "next/font/local";

import "@styles/globals.scss";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import next from "next";

const proximaNova = ProximaNova({
  src: "../styles/fonts/ProximaNova-Regular.woff",
});

export const helvetica = Helvetica({
  src: "../styles/fonts/Helvetica.woff",
});

// export const metadata: Metadata = {
//   title: "Leadwise",
//   description: "Tool for your buisness",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
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
