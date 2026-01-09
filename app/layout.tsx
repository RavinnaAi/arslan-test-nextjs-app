import type { Metadata } from "next";
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
      </body>
    </html>
  );
}

