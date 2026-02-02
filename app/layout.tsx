import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import RouteTransition from "@/components/RouteTransition";

export const metadata: Metadata = {
  title: "Nesti AI - The Real Estate Intelligence",
  description: "Transform Real Estate With AI Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RouteTransition />
        {children}
        {/* <Script
          src="http://localhost:8000/chatbot/widget.js?token=Um31KGOufQ"
          strategy="afterInteractive"
        /> */}        
        <Script src="https://nesti-be.onrender.com//chatbot/widget.js?token=BS3nxRzzfH" strategy="afterInteractive" />
        {/* <iframe
          src="http://localhost:8000/chatbot/o4r3d6Y4uO"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe> */}
      </body>
    </html>
  );
}

