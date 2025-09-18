import { Lenis, Nav } from "@/components";
import type { Metadata } from "next";

import { inter } from "@/lib";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milano Pádel Club",
  description:
    "Complejo deportivo de pádel en Bahía Blanca,Buenos Aires, Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
       style={{
        overflow: "hidden"
       }}
        className={`${inter.className}  antialiased   text-white min-h-screen flex flex-col items-center justify-start relative`}
      >
        <Nav />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
