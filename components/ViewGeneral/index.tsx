import React, { useEffect } from "react";
import { gsap } from "gsap";
// import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
// import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";

type Props = {
  keyCarrousel: number;
  index: number;
  stateSide: string;
  title:string;
  urlLogo:string;
  urlBackground: string;
  text:string;
};

const ViewGeneral = ({ keyCarrousel, index, stateSide, title, urlLogo, urlBackground, text }: Props) => {
  useEffect(() => {
    // console.log(keyCarrousel, index)
    if (keyCarrousel === index) {
      if (stateSide === "left") {
        gsap.fromTo(
          ".animate_background",
          { backgroundPosition: `40%` },
          { backgroundPosition: 0, duration: 2 }
        );
      } else {
        gsap.fromTo(
          ".animate_background",
          { backgroundPosition: `-40%` },
          { backgroundPosition: 0, duration: 2 }
        );
      }
    }
    if (keyCarrousel + 1 === index) {
      gsap.to(
        ".animate_background",
        { backgroundPosition: "10%", duration: 2 }
      );
    } if (keyCarrousel - 1 === index) {
      gsap.to(
        ".animate_background",
        { backgroundPosition: "10%", duration: 2 }
      );
    }
  }, [index]);
  return (
    <div
      className={`w-full h-screen flex items-center justify-center z-10 bg-fixed bg-no-repeat animate_background `}
      style={{ 
        backgroundImage: `url(${urlBackground})` 
      }}
    >
      {/* <Image
        className="animate_background "
        alt="img1"
        src={img1}
        placeholder="blur"
        fill
      /> */}
      {/* <img className="fixed w-full h-full z-20 " src="/img/view1/img1.png" alt="" /> */}
      <div className="flex flex-col z-20 relative items-center w-[30rem] ">
        <div className="w-52 relative h-40">
          <Image  alt="logo" src={urlLogo} placeholder="empty" fill  />
        </div>
        <div className="">
          <p className="uppercase font_MilkyNiceClean text-2xl py-5">
            {title}
          </p>
          <div className="font_LatoRegular text-lg leading-tight">
            <p>
            {text}
            </p>
          </div>
        </div>
        <div className="flex gap-10 mt-5">
          <Button text="Ver Video" />
          <Button text="Compartir" />
        </div>
      </div>
    </div>
  );
};

export default ViewGeneral;
