// components/Carousel.tsx
"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

interface CarouselProps {
  images: string[];
  interval?: number; // Añadimos una prop opcional para el intervalo
  rounded?: boolean;
  imageBrightness?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  interval = 3000,
  rounded = false,
  imageBrightness = 100,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(autoSlide); // Limpiar el intervalo al desmontar el componente
  }, [currentIndex, interval, nextSlide]);

  return (
    <div className="group  relative w-full h-full mx-auto ">
      <div className="overflow-hidden relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex ? ` opacity-100 ` : `opacity-0`
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              className={`w-full h-full object-cover ${image} brightness-${imageBrightness}  ${
                rounded && "rounded-lg"
              }`}
            />
          </div>
        ))}
      </div>
      <button
        title="Prev slide"
        onClick={prevSlide}
        className="cursor-pointer absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-1/2 left-0 transform -translate-y-1/2  text-white p-2 rounded-full"
      >
        <GrPrevious size={23} />
      </button>
      <button
        title="Next slide"
        onClick={nextSlide}
        className="cursor-pointer absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-1/2 right-0 transform -translate-y-1/2  text-white p-2 rounded-full"
      >
        <GrNext size={23} />
      </button> 
    </div>
  );
};

export default Carousel;
