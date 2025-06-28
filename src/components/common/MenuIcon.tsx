import React from "react";

type Props = {
  className?: string;
};

export const MenuIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <title />

      <g id="Complete">
        <g id="align-left">
          <g>
            <polygon
              fill="#ffffff"
              points="12.9 18 4.1 18 4.1 18 12.9 18 12.9 18"
              stroke="#000000"
              strokeLinecap="round"
             strokeLinejoin="round"
              strokeWidth="2"
            />

            <polygon
              fill="#ffffff"
              points="20 14 4 14 4 14 20 14 20 14"
              stroke="#000000"
              strokeLinecap="round"
             strokeLinejoin="round"
              strokeWidth="2"
            />

            <polygon
              fill="#ffffff"
              points="12.9 10 4.1 10 4.1 10 12.9 10 12.9 10"
              stroke="#000000"
              strokeLinecap="round"
             strokeLinejoin="round"
              strokeWidth="2"
            />

            <polygon
              fill="#ffffff"
              points="20 6 4 6 4 6 20 6 20 6"
              stroke="#000000"
              strokeLinecap="round"
             strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
