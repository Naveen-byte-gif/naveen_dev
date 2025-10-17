import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tungana Naveen | Full Stack Developer (Flutter & Next.js)",
  description:
    "Tungana Naveen is a Full Stack Developer specializing in Flutter & Next.js with 4+ years of experience building responsive, high-quality mobile and web applications.",

    keywords: [
    "Full Stack Developer",
    "Flutter Developer",
    "Next.js Developer",
    "React Developer",
    "Mobile App Developer",
    "Web App Developer",
    "Cross Platform Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI UX Developer",
    "Professional Flutter Developer",
    "Freelance Full Stack Developer",
    "Responsive Web Developer",
    "Clean UI Developer",
    "Modern App Developer",
    "JavaScript Developer",
    "Flutter App Development",
    "Next.js Web Development",
    "Hire Full Stack Developer India",
  ],
  
  authors: [{ name: "Tungana Naveen" }],
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
  themeColor: "#0d6efd",
  openGraph: {
    title: "Tungana Naveen | Full Stack Developer (Flutter & Next.js)",
    description:
      "Expert Flutter & Next.js Developer creating modern, scalable, and responsive applications for web and mobile.",
    url: "https://naveentechlabs.netlify.app",
    siteName: "Tungana Naveen Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://naveentechlabs.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tungana Naveen Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tungana Naveen | Full Stack Developer (Flutter & Next.js)",
    description:
      "Full Stack Developer specializing in Flutter & Next.js. Building elegant, performant, and user-friendly digital experiences.",
    creator: "@tungananaveen",
    images: ["https://naveentechlabs.netlify.app/og-image.jpg"],
  },
  metadataBase: new URL("https://naveentechlabs.netlify.app"),
  alternates: {
    canonical: "https://naveentechlabs.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="eI8suGCpSqDnH3jXbbRMrjnSHwRmzUi_XH553lbZUJ8"
        />

        {/* ✅ Canonical Link */}
        <link rel="canonical" href="https://naveentechlabs.netlify.app" />

        {/* ✅ Sitemap Reference */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />

        {/* ✅ Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
