import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Nishad | Full Stack Developer | .NET & Angular",
  description:
    "Portfolio of Amit Nishad, a Full Stack Developer specializing in .NET, Angular, REST APIs, SQL Server and modern business web applications.",
  keywords: [
    "Amit Nishad",
    "Full Stack Developer",
    ".NET Developer",
    "Angular Developer",
    "ASP.NET Core",
    "REST API",
    "SQL Server",
    "Web Developer India",
    "Business Web Applications",
    "Enterprise Software Developer",
  ],
  authors: [{ name: "Amit Nishad" }],
  creator: "Amit Nishad",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Amit Nishad | Full Stack Developer | .NET & Angular",
    description:
      "Portfolio of Amit Nishad, a Full Stack Developer specializing in .NET, Angular, REST APIs, SQL Server and modern business web applications.",
    siteName: "Amit Nishad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Nishad | Full Stack Developer",
    description:
      "Full Stack Developer specializing in .NET, Angular, REST APIs and enterprise web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
