import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../../public/img/view1/img1.png";
import img2 from "../../public/img/view1/img2.png";
import img3 from "../../public/img/view1/img3.png";
import img4 from "../../public/img/view1/img4.png";

type Props = {
  toggleViewImages: () => void;
};

const ViewImages = ({ toggleViewImages }: Props) => {
    const handleChildElementClick = (e:any) => {
        e.stopPropagation()
        // Do other stuff here
     }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".img", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-50 bg-black/60 flex items-center justify-center fixed modal"
        onClick={toggleViewImages}
    >
      <div className="flex img gap-2" onClick={(e) => handleChildElementClick(e)}>
        <Carousel
          showThumbs={false}
          showStatus={false}
        //   showIndicators={false}
          infiniteLoop={true}
          autoPlay={false}
          stopOnHover={false}
          className=" text-white w-[50rem] h-[40rem] "
        >
          <div className=" flex items-center justify-center  relative">
            <div className="w-[50rem] h-[40rem] relative">
            <Image alt="img2" src={img2} placeholder="blur" fill />
            </div>
            {/* <img className="" src="/img/view1/img1.png" alt="" /> */}
          </div>
          <div className=" flex items-center justify-center  relative">
          <div className="w-[50rem] h-[40rem] relative">
            <Image alt="img3" src={img3} placeholder="blur" fill />
            </div>
          </div>
          <div className="w-[50rem] h-[40rem] relative">
            <Image alt="img4" src={img4} placeholder="blur" fill />
          </div>
        </Carousel>
        <div>
          <a
            onClick={toggleViewImages}
            className="cursor-pointer text-white text-xl font-semibold"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewImages;
