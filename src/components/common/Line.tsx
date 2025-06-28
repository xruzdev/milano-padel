import React from "react";

export const Line = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 md:my-12 lg:my-16 xl:my-20 2xl:my-24  w-full h-5 relative ">
     

      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-custom-blue"></div>


      <div className="absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-custom-dark to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-custom-dark to-transparent pointer-events-none"></div>
    </div>
  );
};
