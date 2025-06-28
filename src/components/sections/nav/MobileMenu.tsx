import { navLinks } from "@/data";
import { useAnimationsStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>();

  const setStartLenis = useAnimationsStore((state) => state.setStartLenis);
 

  useEffect(() => {


     if ("ontouchstart" in window) {
      if (isOpen) {
        setStartLenis(false);
        document.body.classList.add("!overflow-hidden");
      } else if( isOpen === false) {
        document.body.classList.remove("!overflow-hidden");
        setStartLenis(true);
      }

      return;
    }

    if (isOpen) {
      setStartLenis(false);
    } else if (isOpen === false) {
      setStartLenis(true);
    } 
  }, [isOpen, setStartLenis]);

  return (
    <>
      <button
        className="relative   size-8 overflow-hidden lg:hidden z-[100]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgMenuRight
          style={{
            transform: isOpen ? "translateY(-100%)" : "translateY(0)",
          }}
          className="absolute top-0 text-3xl  transition-all duration-1000  "
        />
        <RxCross2
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(100%)",
          }}
          className="absolute top-0 text-3xl transition-all duration-1000 text-custom-dark-gray md:text-custom-light-gray "
        />
      </button>

      <aside
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        className="fixed top-0 left-0 w-3/4 md:w-[60vw] h-[100dvh] bg-black text-gray-300 z-10 flex flex-col  items-start justify-start px-4 md:px-10 transition-all duration-1000 ease-in-out pt-24"
      >
        <div className="w-full  h-[1px] bg-custom-dark-gray" />

        <ul className="flex flex-col gap-4 w-full mt-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => setIsOpen(false)}
                className={`btn  text-xs md:text-lg uppercase font-bold `}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/*  <div className="w-full  h-[1px] bg-custom-dark-gray mt-4  " /> */}

        <ul className="flex w-full justify-evenly mt-4 absolute bottom-4 border-t border-t-custom-dark-gray pt-4 left-0 ">
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
            <Link href="https://api.whatsapp.com/send?phone=">
              <FaWhatsapp className="hover:animate-rotate-x" />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
