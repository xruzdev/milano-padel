import Image from "next/image";
import { Title } from "../common/Title";
import { CTABtn } from "../common/CTABtn";

export const About = () => {
  return (
    <section
    id="comunidad" 
    className="w-screen flex flex-col items-center justify-center relative h-auto text-white ">
      <div className="max-w-7xl px-4 md:px-10 lg:px-16 w-full   h-auto rounded flsex flex-col items-start justify-start">

       


        <div className="p-8  2xl:p-24 w-full min-h-96 bg-gradient-to-l flex flex-col  bg-[#282828] relative">

    


          {/*Title header */}
        
            <Title section="Comunidad">Más que pádel, una comunidad.</Title>
        

          <div className="flex flex-col lg:flex-row items-center justify-between mt-8 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 w-full">
            <div className=" w-full aspect-video lg:aspect-auto lg:flex-2 relative  lg:w-auto lg:h-100">
              <Image
                src="/comunidad.jpg"
                alt=""
                className="object-cover w-full h-full rounded"
                fill
              />
            </div>

            <div className="flex-1">
              <p className="text-sm text-gray-300">
                {`
                En Milano Pádel, el juego no termina en la cancha. Creamos un espacio pensado para compartir, disfrutar y conectar. Desde el clásico "tercer tiempo" en nuestro quincho con vista al complejo, hasta reuniones, eventos y momentos inolvidables en el SUM, cada rincón está diseñado para fomentar la comunidad y la buena energía. Ya seas jugador, familiar o visitante, siempre vas a encontrar un lugar donde sentirte parte.
                `}
              </p>
            

              <CTABtn
                href="https://www.instagram.com/milanopadel.bb/"
                target="_blank"
                title="Instagram"
                className="mt-8 lg:mt-4 w-fit"
              />
            </div>
          </div>

          <div className="w-full aspect-video relative mt-8 lg:mt-12">
            <Image
              src="/comunidad-2.jpg"
              alt="Milano Padel Comunidad"
              className="object-cover w-full h-full rounded"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
