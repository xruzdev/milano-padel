import { Lenis, Nav } from "@/components";
import type { Metadata } from "next";

import { inter } from "@/lib";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milano Pádel Club",
  description: "Complejo ",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className}  antialiased   text-white min-h-screen flex flex-col items-center justify-start relative`}
      >
        <Nav/>
        <Lenis>
          
       
          {children}</Lenis>
      </body>
    </html>
  );
}
