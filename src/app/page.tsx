import {
  About,
  Contacto,
  Footer,
  Hero,
  Instalaciones,
  Line,
  Ubicacion,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />

      <Instalaciones />
      <Line />
      <About />
      <Line />
      <Ubicacion />
      <Line />
      <Contacto />
      <Line />
      <Footer />
    </>
  );
}
