"use client";
import Image from "next/image";
import { bebasNeue } from "@/lib";
import Link from "next/link";
import { Title } from "../common/Title";

export const Ubicacion = () => {
  return (
    <section
      id="ubicacion"
      className="w-screen flex flex-col  h-auto items-center justify-center relative   text-white px-4 md:px-10 "
    >
      <Title className="mb-8 md:mb-12 text-left w-full max-w-7xl" section="Ubicacion">
        Estamos en Bahía Blanca
      </Title>

      

      <div className="max-w-7xl w-full aspect-[9/12] lg:aspect-video   relative">
        <Image
          src="/location.jpg"
          alt="Mapa de Milano Padel"
          className="object-cover object-left w-full h-full rounded absolute top-0 left-0 brightness-90 z-0"
          fill
        />

        <div
          className="absolute bottom-0 left-0 h-96 lg:h-96 w-full bg-gradient-to-t gap-8 lg:gap-24 px-8 lg:px-24 pb-10 from-custom-dark to-transparent backdrop-opacity-60 z-50
         flex flex-col lg:flex-row items-center justify-evenly"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.257089892307!2d-62.22173592336023!3d-38.71190608590196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda3744f1e0f13%3A0xba462c769500e46!2sParera%20%26%20Carlos%20Leuman%2C%20B8002%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1751124807469!5m2!1ses!2sar"
            className="flex-1 h-full rounded-lg shadow-lg grayscale hidden lg:block"
            loading="lazy"
          ></iframe>

          <div className=" lg:flex-2 h-fit bg-[#00000051] rounded">
            <div className="flex flex-col items-start justify-center h-full p-8">
              <h3 className={"text-3xl font-bold mb-4 " + bebasNeue.className}>
                Visítanos
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Estamos ubicados en Parera & Carlos Leuman, Bahía Blanca, Buenos
                Aires.
              </p>
              <p className="text-sm text-gray-300">
                Puedes encontrarnos con facilidad, cerca de importantes puntos
                de referencia y con fácil acceso a través de transporte público.
              </p>

              <Link
                href="https://maps.app.goo.gl/wrmGb6rXZr9s1oBk9"
                target="_blank"
                className="mt-4  flex items-center gap-10   px-4 py-2 group uppercase text-xs font-bold bg-custom-blue hover:text-black hover:bg-white text-white rounded  transition-colors duration-300"
              >
                Cómo llegar
                <div className="bg-white size-7 aspect-square rounded flex items-center justify-center group-hover:bg-black">
                  <svg
                    className="stroke-custom-blue group-hover:stroke-white group-hover:rotate-45  transition-all duration-300"
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 11 11 1m0 0v10m0-10H1"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

         
      </div>


     

     
    </section>
  );
};
