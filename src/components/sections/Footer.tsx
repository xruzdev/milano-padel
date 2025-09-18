import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LenisLink } from "../common/LenisLink";
import { Marquee } from "../common/Marquee";
import { ByXruzLogo } from "../common/by-xruz-logo/ByXruzLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12  overflow-hidden  w-screen mb-8 md:mb-12  relative">
      {/* Left Gradient Overlay */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-15 lg:w-64 bg-gradient-to-r from-custom-dark/90 to-transparent z-10" />

      {/* Right Gradient Overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-15 lg:w-64 bg-gradient-to-l from-custom-dark/90 to-transparent z-10" />

      <div className="w-[600vw] md:w-[450vw] lg:w-[375vw] xl:w-[350vw]  text-4xl md:text-6xl lg:text-7xl  xl:text-9xl">
        <Marquee
          tags={[
            "Milano Pádel",
            "Bahía Blanca",
            "Pádel",
            "Club de Pádel",
            "Deporte",
            "Entrenamiento",
            "Competencia",
            "Diversión",
            "Comunidad",
          ]}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly gap-10 w-full  ">
        <Image
          className="object-cover mx-auto "
          width={150}
          height={150}
          src={"/logo.png"}
          alt="Logo"
        />

        <ul className=" flex flex-col lg:flex-row text-center lg:space-x-8 justify-evenly text-sm  font-medium   py-1  rounded  relative mx-auto ">
          {navLinks.map((link) => (
            <li key={link.href} className="block   z-10">
              <LenisLink
                href={link.href}
                className={`text-white  block  uppercase text-xs font-semibold  py-1   rounded-lg  relative group `}
              >
                {link.label}

                <div className="absolute w-full bg-custom-blue h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </LenisLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[95rem] mx-auto  w-full h-5 relative ">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-custom-blue"></div>

        <div className="absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-custom-dark to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-custom-dark to-transparent pointer-events-none"></div>
      </div>
      <div className="w-5/6 text-center flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-4 text-xs  ">
        <span>© {new Date().getFullYear()} Milano Pádel · Bahía Blanca</span>
        <ByXruzLogo />
        <Link
          target="_blank"
          href="https://www.flexmkt.com.ar"
          className="flex items-center gap-1"
        >
          <span>Multimedia by Flex Mkt Agency</span>{" "}
          <Image
            src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1739909337/Logo_FLEX_sin_fondo_RGB_npunhf.png"
            width={25}
            height={25}
            alt="Xruz Logo"
          />
        </Link>
      </div>
    </footer>
  );
};

/**
 *
 *    © {new Date().getFullYear()} Milano Pádel · Bahía Blanca
 */
