"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

 
import { GoDot } from "react-icons/go";
 
import { bebasNeue, horizontalLoop } from "@/lib";

export const Marquee = ({ tags }: { tags: string[] }) => {


  const tlRef = useRef<gsap.core.Timeline>(null);

  const container = useRef(null);


  useGSAP(
    () => {
      gsap.registerPlugin(useGSAP);
      const words: HTMLElement[] = gsap.utils.toArray(".box");

      tlRef.current = horizontalLoop(words, {
        repeat: -1,
        paddingRight: "20px",
        speed: 0.9,
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div
      ref={container}
      className={`${bebasNeue.className} pointer-events-none   uppercase  font-mono   flex  gap-3 justify-start pt-2  h-full  w-full items-center group   `}
    >
      {tags.map((item, index) => (
        <span key={index} className="box flex items-center justify-center gap-3  mb-4 ">
          {item}  <GoDot className="pb-1 text-custom-blue text-6xl" />
        </span>
      ))}
    </div>
  );
};