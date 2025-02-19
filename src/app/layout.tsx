import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
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
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Toaster position='top-right' reverseOrder={false} />
      </body>
    </html>
  );
}
