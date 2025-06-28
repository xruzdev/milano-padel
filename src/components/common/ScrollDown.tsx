import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

export const ScrollDown = () => {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    const customEase = CustomEase.create("custom", "M0,0 C0.624,0 0.1,1 1,1 ");

    gsap
      .timeline({
        repeat: -1,
        defaults: {
          ease: customEase,
          duration: 1.2,
        },
      })

      .to(".scroll-line", {
        scaleY: 0,
        
        transformOrigin: "bottom",
      })
      .to(".scroll-line", {
        scaleY: 1,
       
        transformOrigin: "top",
      });
  });

  return (
    <div className="scroll-bar flex absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0   flex-col justify-center items-center gap-2   h-20   w-auto ">
      <div className="scroll-line h-1/2 w-[1px] bg-white "></div>
      <span className="text-white tracking-wider   text-xs">scroll.</span>
    </div>
  );
};