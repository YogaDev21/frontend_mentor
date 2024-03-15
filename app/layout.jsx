import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor",
  description: "Frontend Mentor Challanges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
