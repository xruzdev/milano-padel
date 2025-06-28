import Link from "next/link";
import React from "react";

export const BtnLink = ({
  href,
  title,
  target,
  className = "",
}: {
  href: string;
  title: string;
  target?: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      title={title}
      target={target}
      className={
        "mt-4  flex items-center gap-10   px-4 py-2 group uppercase text-sm font-bold border border-white hover:text-black hover:bg-white text-white rounded  transition-colors duration-300 " +
        className
      }
    >
      {title}
      <div className="bg-white size-10 aspect-square rounded flex items-center justify-center group-hover:bg-black">
        <svg
          className="stroke-custom-dark group-hover:stroke-white group-hover:rotate-45  transition-all duration-300"
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 11 11 1m0 0v10m0-10H1"></path>
        </svg>
      </div>
    </Link>
  );
};
