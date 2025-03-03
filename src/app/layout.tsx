import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alfred Pathsetter",
  description: "Alfred",
  icons: {
    icon: "/assets/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='relative'>
      <body className={clsx(dmSans.className, "antialiased ")}>
        {/* <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}> */}
        {children}
        {/* Google tag (gtag.js) */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XX9JB0F56E'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XX9JB0F56E');
          `}
        </Script>
        <Toaster position='top-right' reverseOrder={false} />
      </body>
    </html>
  );
}
