import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tungana Naveen - Full Stack Developer",
  description:
    "Full Stack Developer specializing in Flutter & Next.js. 4+ years of experience building mobile apps and web applications with clean, responsive UI.",
  keywords:
    "Full Stack Developer, Flutter, Next.js, React, Mobile Development, Web Development",
  authors: [{ name: "Tungana Naveen" }],
  openGraph: {
    title: "Tungana Naveen - Full Stack Developer",
    description: "Full Stack Developer specializing in Flutter & Next.js",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
