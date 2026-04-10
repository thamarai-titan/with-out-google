import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://ilotus.dev"),

  title: {
    default: "Google Alternatives | Curated Tools",
    template: "%s | ilotus.dev",
  },

  description:
    "Discover better, privacy-first alternatives to popular Google products.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Google Alternatives | Curated Tools",
    description:
      "Discover better, privacy-first alternatives to popular Google products.",
    url: "https://ilotus.dev",
    siteName: "ilotus.dev",
    images: [
      {
        url: "/favicon.ico", // you can replace with og-image later
        width: 256,
        height: 256,
        alt: "ilotus.dev",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Google Alternatives | Curated Tools",
    description:
      "Discover better, privacy-first alternatives to popular Google products.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${epilogue.className} `} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
