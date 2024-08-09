import type { Metadata } from "next";
import { Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guardvid.com"),
  title: "GuardVideo Platform | Secure Video Hosting",
  description:
    "GuardVideo offers secure video hosting with advanced encryption, DRM, and content protection features for businesses and content creators.",
  keywords: [
    "secure video hosting",
    "video encryption",
    "DRM",
    "content protection",
    "video platform",
  ],
  authors: [{ name: "GuardVideo Team" }],
  openGraph: {
    title: "GuardVideo Platform | Secure Video Hosting",
    description:
      "Protect your video content with GuardVideo's advanced encryption and DRM solutions.",
    url: "https://guardvid.com",
    siteName: "GuardVideo",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "GuardVideo Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GuardVideo Platform | Secure Video Hosting",
    description:
      "Protect your video content with GuardVideo's advanced encryption and DRM solutions.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  //   yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  //   bing: "YOUR_BING_VERIFICATION_CODE",
  // },
};

export const viewport: Viewport = {
  themeColor: "#44c09b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="shortcut icon"
          href="/logo.png"
        />
        <link
          rel="apple-touch-icon"
          href="/logo.png"
        />
        <link
          rel="mask-icon"
          href="/logo.png"
        />
      </head>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
