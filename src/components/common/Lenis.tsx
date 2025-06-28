"use client";

import { useAnimationsStore } from "@/store";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { LenisRef, ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { RefObject, SetStateAction, useEffect, useRef, useState } from "react";

/**
 *
 *
 * Si cambias el largo de la barra de desplazamiento entonces debes cambiar el valor de la propiedad "translateY" en la línea 64
 */

interface LenisProps {
  children: React.ReactNode;
}

export function Lenis({ children }: LenisProps) {
  const lenisRef: RefObject<LenisRef | null> = useRef(null);

  const startLenis = useAnimationsStore((state) => state.startLenis);
   const startNavAnimation = useAnimationsStore(
    (state) => state.startNavAnimation
  );

  useLenis(
    (lenis) => {
      if (startLenis) {
        lenis.start();
      } else {
        lenis.stop();
      }
    },
    [startLenis]
  );

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const scrollbarThumbRef = useRef<HTMLDivElement>(null);

  const [velocity, setVelocity] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const pathname = usePathname();

  useGSAP(() => {
    const parallaxElements = gsap.utils.toArray(".parallax") as HTMLElement[];

    gsap.registerPlugin(ScrollTrigger);

    parallaxElements.forEach((el) => {
      gsap.to(el, {
        y: Number(el.dataset.speed) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
          markers: false, // Puedes activar los marcadores para depuración
        },
      });
    });
  }, []);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);

    if (isTouchDevice) {
      document.body.style.setProperty("overflow", "auto");
    } else {
      document.body.style.setProperty("overflow", "hidden");
    }
  }, [isTouchDevice]);

  const handleMouseDown = (e: { clientY: SetStateAction<number> }) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(lenisRef.current?.lenis?.scroll || 0);
  };

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: { clientY: number }) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      lenisRef.current?.lenis?.scrollTo(scrollTop + deltaY * 10); // Ajusta el factor de multiplicación según sea necesario
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, scrollTop, isTouchDevice]);

  useLenis(
    (lenis) => {
      if (isTouchDevice) return;

      setVelocity(lenis.velocity);
      setScrollPercentage(lenis.scroll / lenis.limit);

      return () => {
        lenis.destroy();
      };
    },
    [isTouchDevice]
  );

  useEffect(() => {
    if (isTouchDevice) return;

    if (!scrollbarThumbRef.current) return;

    if (isDragging) {
      scrollbarThumbRef.current.style.setProperty("opacity", "1");

      scrollbarThumbRef.current.style.setProperty("cursor", "grabbing");
    } else {
      scrollbarThumbRef.current.style.setProperty("cursor", "grab");
      scrollbarThumbRef.current.style.setProperty("opacity", "0.1");
    }
  }, [isDragging, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;
    if (!scrollbarThumbRef.current) return;

    if (velocity == 0) {
      scrollbarThumbRef.current.style.setProperty("opacity", "0.1");
    } else {
      scrollbarThumbRef.current.style.setProperty("opacity", "0.6");
    }
  }, [velocity, isTouchDevice]);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    if (document.body.scrollHeight <= window.innerHeight) {
      scrollbarThumbRef.current?.style.setProperty("display", "none");
    }
  }, [pathname]);

  return (
    <ReactLenis
      ref={lenisRef}
      className="overflow-x-hidden lg:overflow-hidden"
      options={{
        syncTouch: false,
        lerp: 0.11,
        autoRaf: false,
      }}
      root
    >
      {children}
      <div className="hidden lg:block fixed  z-[9999] top-0 right-0 w-10 mr-1 h-full  bg-transparent ">
        <div
          onMouseEnter={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.setProperty("opacity", "1");
          }}
          onMouseLeave={(e) => {
            if (isDragging) return;

            const target = e.target as HTMLDivElement;
            target.style.setProperty("opacity", "0.1");
          }}
          style={{ transform: `translateY(${scrollPercentage * 1900}%)`,display: startNavAnimation ? "block" : "none" }}
          ref={scrollbarThumbRef}
          onMouseDown={handleMouseDown}
          className=" absolute top-0 right-0 w-1.5  mx-auto h-[5%] bg-white rounded-lg  active:scale-y-95 transition-all opacity-0 ease-out duration-300"
        ></div>
      </div>
    </ReactLenis>
  );
}
