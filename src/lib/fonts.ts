import { Inter, Bebas_Neue,Rajdhani,Rubik } from "next/font/google";

/*Textos */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

/* Textos segunda opcion */
export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
  weight: [  "300", "400", "500", "600", "700", "800", "900"],
});

/* Títulos */
export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
  weight: "400",
});


/*Titulos segunda opcion */
export const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
  weight:  ["300", "400", "500", "600", "700",  ], 
});

