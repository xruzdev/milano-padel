"use client";
import { inter } from "@/lib";
import Image from "next/image";
import { BtnLink } from "../common/BtnLink";
import { Title } from "../common/Title";
import Link from "next/link";
import { FaInstagram, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Line } from "../common/Line";

const logos = [
  "big-six.jpg",
  "fullsport.png",
  "heiniken.png",
  "lager.png",
  "levite.png",
  "senior.png",
  "la-virginia.png",
  "villavicencio.png",
];

export const Contacto = () => {
  return (
    <>
      <section
        id="contacto"
        className="  flex flex-col lg:flex-row h-auto  items-start justify-start max-w-7xl relative gap-10  w-full text-white px-4 md:px-10  "
      >
        <Title section="Contacto" className="max-w-7xl flex-1   ">
          Hablemos de pádel
          <p
            className={
              "text-sm text-[#4e4e4e] mt-2 pr-8" + " " + inter.className
            }
          >
            Cualquier consulta, duda o sugerencia que tengas, no dudes en
            contactarnos.
          </p>
        </Title>

        <div className="h-50 md:h-96 w-full lg:h-120 xl:h-150  2xl:h-180 lg:flex-1 relative">
          <Image
            src="/contact.jpg"
            alt="Contacto Milano Padel"
            className="object-cover object-center w-full h-full rounded"
            fill
          />
        </div>

        <div className="flex  flex-col items-center justify-center w-full lg:w-auto lg:justify-end lg:h-120 xl:h-150  2xl:h-180  flex-1 gap-4 ">
          <ul className="flex items-center justify-evenly w-full gap-4 text-2xl ">
            <li>
              <Link
                target="_blank"
                className=""
                href="https://maps.app.goo.gl/wrmGb6rXZr9s1oBk9"
              >
                <FaLocationDot className="hover:animate-rotate-x" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/milanopadel.bb/"
                target="_blank"
                className=""
              >
                <FaInstagram className="hover:animate-rotate-x" />
              </Link>
            </li>
            <li>
              <Link href="">
                <FaWhatsapp className="hover:animate-rotate-x" />
              </Link>
            </li>
          </ul>

          <BtnLink
            //href="mailto:user@gmail.com"
            href=""
            // target="_blank"
            title="Formá parte de Milano Pádel"
            className="!gap-4"
          />
        </div>
      </section>


        <Line />
      <Title section="Sponsors" className="px-4 md:px-10 max-w-7xl flex-1   ">
        Nuestros Sponsors
        <p
          className={"text-sm text-[#4e4e4e] mt-2 pr-8" + " " + inter.className}
        >
          Gracias a ellos, podemos seguir creciendo y ofreciendo lo mejor a
          nuestra comunidad.
        </p>
      </Title>

      <div className=" md:px-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-7xl ">
        {logos.map((logo) => (
          <div
          key={logo}
          className="flex items-center justify-center  h-24 bg-[#1a1a1a] rounded p-4 "
          >
            <Image
              src={`/logos/${logo}`}
              alt={logo}
              className="object-contain h-full"
              width={150}
              height={60}
            />
          </div>
        ))}
      </div>
    </>
  );
};
