/* eslint-disable @next/next/no-img-element */
"use client";

import { useAnimationsStore } from "@/store";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Lenis from "lenis";
import Image from "next/image";
import React, { useRef } from "react";
import { LenisLink } from "../common/LenisLink";
import { ScrollDown } from "../common/ScrollDown";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null | undefined>(null);

 

  const setStartNavAnimation = useAnimationsStore(
    (state) => state.setStartNavAnimation
  );

  const setStartLenis = useAnimationsStore(
    (state) => state.setStartLenis
  );

 
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const ball = containerRef.current.querySelector(".ball");
      const logo = containerRef.current.querySelector(".logo");
      const line = containerRef.current.querySelector(".line");
      const bg = containerRef.current.querySelector(".bg");

      gsap.set(ball, { rotationZ: -295 });

      gsap.set(line, { scaleX: 0 });

      const tl = gsap.timeline({
        onStart: function () {
          setStartLenis(false); // Detiene Lenis al iniciar la animación
        },
        onComplete: () => {
          //setStartLenis(true); // Inicia Lenis al completar la animación
        },
      });

      tl.to(ball, {
        y: "-50%",
        rotationZ: 0,
        duration: 2,
        ease: "bounce.out",
      })
        .to(
          line,
          {
            scaleX: 1,
            duration: 2,
          },
          "<2"
        ) // empieza 0.3s después de la animación anterior
        .to(
          [logo],
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "<1"
        ) // empieza al mismo tiempo que la animación anterior
        .to(
          [ball, line],
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          "<1.5"
        ) // empieza 1.5s después de la animación anterior
        .set(
          [ball, line],
          {
            display: "none",
            delay: -0.8,
           
          },
          
        )  
        .to(
          [logo],
          {
            scale: 0,
            duration: 0.5,
            delay: -0.5,
            ease: "power2.in",
          }, 
        ) // empieza 1.5s después de la animación anterior
        .to(bg, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onStart: () => {
            setStartNavAnimation(true); // Inicia la animación del nav
            setStartLenis(true);
          },
        })
        .to(
          ".scroll-bar",
          {
            opacity: 1,
            duration: 1.5,

            ease: "power4.out",
          },
          "<"
        )
        .to(
          ".header, p",
          {
            y: 0,
            duration: 0.6,

            ease: "power4.out",
          },
          "<"
        )
        .to(
          ".mask",
          {
            y: 0,
            duration: 2,
            scale: 1,

            ease: "power4.out",
          },
          "<"
        );

      const currentScroll = lenisRef.current?.actualScroll || window.scrollY;

      if (currentScroll > 10) {
        tl.progress(1).kill();
      }
    },
    { scope: containerRef }
  );
  return (
    <section
      id="hero"
      ref={containerRef}
      className="w-screen h-[95vh] md:h-screen  relative "
    >
      {/* Loader desktop */}

      <div className="flex loader   flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
        
        <img
          src="/loader-ball.png"
          alt="Hero Background"
          
          className="ball absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[700%] z-20  size-20 object-contain  md:size-24 lg:size-28"
        />
        <img
          src="/logo.png"
          alt="Hero Background"
          
          className="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 size-22 object-contain md:size-26 lg:size-30 "
        />

        <div className="line absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-screen bg-white scale-x-0 z-0" />
      </div>
     

      {/*Contenido Principal */}

      <div
        data-speed="-0.75"
        className="parallax size-full absolute top-0 left-0"
      >
       {/*  <video
          autoPlay
          loop
          muted
          src={"/milano-bg.mp4"}
          className="  bg object-cover size-full    brightness-50 absolute top-0 left-0  opacity-0"
        /> */}

         <Image
              fill
              src="/bg.jpg"
              alt="Logo"
              className="bg object-cover size-full    brightness-50 absolute top-0 left-0  opacity-0"
            />
        <div className="  absolute -bottom-2 left-0 w-screen h-32 bg-gradient-to-t from-custom-dark to-transparent z-10 " />
      </div>



      <div className="main-container flex flex-col items-center justify-center z-50 size-full mask scale-0">
        <div
          data-speed="0.22"
          className={"parallax overflow-hidden  " /*+ bebasNeue.className*/}
        >
          <div className="relative w-64   h-28  xl:w-124 xl:h-55 mx-auto">
            <Image
              fill
              src="/logo-letters.png"
              alt="Logo"
              className="object-contain header z-20  -translate-y-full"
            />
          </div>

          <p
            className={
              "z-50 mt-6 lg:mt-2 xl:mt-6 uppercase text-xs tracking-tight   translate-y-full text-center px-8"
            }
          >
            Tu lugar para disfrutar del mejor padel en Bahía Blanca
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5  mt-10 lg:mt-8 xl:mt-10 lg:gap-10">
          <LenisLink
            href="/#instalaciones"
            className=" px-4 py-2 rounded group  flex items-center gap-4 justify-center  text-xs uppercase  hover:bg-white hover:text-black   bg-custom-blue text-white font-semibold "
          >
            <span>Conocé el complejo</span>
          </LenisLink>
          <LenisLink
            href="/#contacto"
            className=" px-4 py-2 rounded group  flex items-center gap-4 justify-center  text-xs uppercase  hover:bg-white hover:text-black   bg-custom-blue text-white font-semibold "
          >
            <span>Contactanos</span>
          </LenisLink>
        </div>
      </div>

      <ScrollDown />
    </section>
  );
};
