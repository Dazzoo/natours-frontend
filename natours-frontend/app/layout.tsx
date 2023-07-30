import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natours | Exciting tours for adventurous people",
  description: "Natours | Exciting tours for adventurous people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,300i,700"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
