import type { Metadata } from "next";
import TNavbar from "@/components/top-navbar";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Link to Satoshi Font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* Link to Integral CF Font (Example URL) */}
        <link
          href="https://fonts.cdnfonts.com/css/integral-cf" 
          rel="stylesheet"
        />
      </head>
      <body
        className={`$antialiased`}
      >
        <TNavbar/>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
