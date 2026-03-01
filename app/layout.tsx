import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Swarnim Bastola ✌️",
  description: "A frontend developer by profession, a creative at heart.",
  keywords: "Swarnim Bastola, Frontend Engineer, React Developer, Three.js, Creative Developer, Web Development, Angular, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Swarnim Bastola" }],
  creator: "Swarnim Bastola",
  publisher: "Swarnim Bastola",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Swarnim Bastola - Frontend Engineer",
    description: "Frontend engineer by profession, creative at heart.",
    url: "https://yourportfoliosite.com", // Update with your actual URL
    siteName: "Swarnim Bastola's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarnim Bastola - Frontend Engineer",
    description: "Frontend engineer by profession, creative at heart.",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your code
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={'YOUR_GOOGLE_ANALYTICS_ID'}/>
    </html>
  );
}
