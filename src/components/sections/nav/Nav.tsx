"use client";
import { navLinks } from "@/data";
import { useAnimationsStore } from "@/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LenisLink } from "../../common/LenisLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MobileMenu } from "./MobileMenu";
 export const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const startNavAnimation = useAnimationsStore(
    (state) => state.startNavAnimation
  );

  useGSAP(
    () => {
      if (!navRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      if (startNavAnimation || pathname !== "/") {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      /*   ScrollTrigger.create({
        trigger: navRef.current,
        start: "top top",
        end: "bottom+=100 top",
        onUpdate: (self) => {
          if (self.scroll() > 10) {
            gsap.to(".bg-list", {
              opacity: 1,

              duration: 0.8,
              ease: "power4.out",
            });
          } else {
            gsap.to(".bg-list", {
              opacity: 0,

              duration: 0.8,
              ease: "power4.out",
            });
          }
        },
      }); */
    },
    {
      scope: navRef,
      dependencies: [startNavAnimation],
    }
  );

  return (
    <nav
      ref={navRef}
      className="fixed lg:absolute xl:fixed top-0 left-0 w-full  px-4 md:px-10  text-white  -translate-y-full h-24 z-100 "
    >
      <div className="max-w-[95rem] mx-auto px-4 py-3 flex justify-between items-center">
        <LenisLink href="/#hero" className="text-2xl z-20 ">
          <Image
            className="   object-cover"
            width={64}
            height={64}
            src={"/logo.png"}
            alt="Logo"
          />
        </LenisLink>


        <ul className="hidden lg:flex space-x-8 justify-evenly text-sm  font-medium pl-8  py-1  rounded  relative">
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
        <ul className="hidden lg:flex items-center justify-center gap-4 text-lg">
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
            <Link
            
            
            href="https://api.whatsapp.com/send?phone=">
              <FaWhatsapp className="hover:animate-rotate-x" />
            </Link>
          </li>
        </ul>

      <MobileMenu />
      </div>
    </nav>
  );
};

/**
 * 
 * <nav
ref={navRef}
className=" absolute -translate-y-96 top-6 left-1/5 w-3/5  py-4 px-10 flex  items-center  transition-colors duration-300 rounded-xl   z-5 justify-between"
>
<Image
className="   object-cover"
width={64}
height={64}
src={"/logo.png"}
alt="Logo"
/>

<div className="flex items-center justify-end w-full">

</div>
</nav>
*/

{
  /*   <LenisLink
  href="/reservas"
  isLenis={false}
  className=" px-4 py-2 rounded-lg group  flex items-center gap-4 justify-center   text-xs uppercase  hover:bg-white hover:text-black   bg-custom-blue text-white font-semibold "
>
  <span>Reservá tu cancha</span>

{/*    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-    stroke-white group-hover:stroke-black transition-all duration-300"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 4V2.5"

      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17 4V2.5"

      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 14.5L10.5 13V17"

      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z"

      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M21.5 9H16.625H10.75M2 9H5.875"

      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985"

      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg> 
</LenisLink> */
}
