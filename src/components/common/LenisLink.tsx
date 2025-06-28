"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LenisLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  isLenis?: boolean; // Añadido para controlar si se usa Lenis
  target?: string; // Añadido para controlar el target del enlace
}

export const LenisLink = ({
  children,
  href,
  className,
  onClick = () => {},
  title,
  isLenis = true,
  target = "_self",
}: LenisLinkProps) => {

  const pathname = usePathname();


  const lenisRef = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!lenisRef || !isLenis || pathname!=="/") return;

    e.preventDefault();

 


    lenisRef.start();
    lenisRef.scrollTo(`${href.substring(1)}`, {
      duration: 1.0, // duración de 1 segundo
      easing: (t) => 1 - Math.pow(1 - t, 3), // easing suave
    });

    onClick();
  };

  return (
    <Link
      target={target}
      title={title}
      onClick={handleClick}
      className={className+" "+" transition-all duration-400   hover:scale-102"}
      href={href}
    >
      {children}
    </Link>
  );
};
