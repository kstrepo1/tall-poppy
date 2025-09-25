import type { Metadata } from "next";
import { Merriweather, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google';


const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Tall Poppy Studios",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <head>
        <meta name="color-scheme" content="light" />
        <GoogleAnalytics gaId="G-E0RMVMQ88N" />
      </head>
      <body
        className={`${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
