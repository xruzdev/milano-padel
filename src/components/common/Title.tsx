import { bebasNeue } from "@/lib";
import React from "react";

export const Title = ({
  section,
  children,
  className = "",
}: {
  section: string;
className?: string;
   children: React.ReactNode;

}) => {
  return (
    <div className={className+" w-full "}>
      <span className=" text-base">
        {" "}
        <span className="text-custom-blue">|</span> {section}
      </span>
      <h2
        className={
          " " +
          bebasNeue.className +
          " text-3xl md:text-5xl lg:text-4xl xl:text-6xl font-bold text-start mt-4  "
        }
      >
        {children}
      </h2>
    </div>
  );
};
