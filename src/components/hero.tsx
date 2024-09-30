import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroProps {
  imgData: StaticImageData;
  alt: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div>
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.alt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
