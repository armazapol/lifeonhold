import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import View1 from "../views/View1";
import Modal from "../Modal";
import ViewImages from "../Modal/ViewImages";
import Menu from "../Menu";
import View2 from "../views/View2";

const Carousell = (props) => {
  // const [stateModalVideo, setStateModalVideo] = useState<boolean>(false);
  // const [stateModalImages, setStateModalImages] = useState<boolean>(false);
  // const [stateMenu, setStateMenu] = useState<boolean>(false);
  // const [stateHamburger, setStateHamburger] = useState<boolean>(false);
  const [stateModalVideo, setStateModalVideo] = useState(false);
  const [stateModalImages, setStateModalImages] = useState(false);
  // const [stateMenu, setStateMenu] = useState(false);
  const [stateHamburger, setStateHamburger] = useState(false);

  const menuTimeline = useRef();

  const viewVideo = () => {
    setStateModalVideo(!stateModalVideo);
  };

  const toggleViewImages = () => {
    setStateModalImages(!stateModalImages);
  };

  const toggleMenu = () => {
    setStateHamburger(!stateHamburger);
  };

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.to(".background", {
      width: "200vw",
      height: "200vw",
      bottom: "-95%",
      right: "-75%",
      duration: 1,
    });
    menuTimeline.current.fromTo(
      ".contentMenu",
      { opacity: 0, display:"none" },
      
      {
        opacity: 1,
        display:"block",
        duration: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    stateHamburger
      ? menuTimeline.current.play()
      : menuTimeline.current.reverse();
  }, [stateHamburger]);

  return (
    <div {...props} className="relative overflow-hidden">
      {stateModalVideo && <Modal viewVideo={viewVideo} />}
      {stateModalImages && <ViewImages toggleViewImages={toggleViewImages} />}

      <div className="absolute -bottom-20 -right-20 bg-blue-900/90 rounded-full w-40 h-40 text-white z-40 background">
        <div className="contentMenu">
          <Menu />
        </div>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={false}
        stopOnHover={false}
        className="rounded-3xl text-white carousel1"
      >
        <View1 viewVideo={viewVideo} toggleViewImages={toggleViewImages} />

        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View2 />
        </div>
        <div className="w-full h-screen grid grid-cols-3">
          <div className="row-span-3 col-span-2 flex items-center justify-center bg-blue-500">
            text1
          </div>
          <div className="flex items-center justify-center bg-red-500">
            text2
          </div>
          <div className="flex items-center justify-center bg-green-500">
            text3
          </div>
          <div className="flex items-center justify-center bg-violet-500">
            text4
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          page 4
        </div>
        <div className="w-full h-screen grid grid-cols-4 grid-rows-4">
          <div className="row-span-4 col-span-2 flex items-center justify-center bg-blue-500">
            text1
          </div>
          <div className="row-span-2 col-span-2 flex items-center justify-center bg-red-500">
            text2
          </div>
          <div className="row-span-2  flex items-center justify-center bg-pink-500">
            text3
          </div>
          <div className="flex items-center justify-center bg-green-500">
            text4
          </div>
          <div className="flex items-center justify-center bg-violet-500">
            text5
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          page 6
        </div>
        <div className="w-full h-screen grid grid-cols-12 grid-rows-3">
          <div className="row-span-2 col-span-7 flex items-center justify-center bg-blue-500">
            text1
          </div>
          <div className="row-span-2 col-span-5 flex items-center justify-center bg-red-500">
            text2
          </div>
          <div className="col-span-4  flex items-center justify-center bg-pink-500">
            text3
          </div>
          <div className="col-span-4 flex items-center justify-center bg-green-500">
            text4
          </div>
          <div className="col-span-4 flex items-center justify-center bg-violet-500">
            text5
          </div>
        </div>
      </Carousel>
      <div
        className="absolute -bottom-20 -right-20 bg-blue-900 rounded-full w-40 h-40 text-white cursor-pointer z-50"
        onClick={toggleMenu}
      >
        <div className="absolute top-7 left-6 ">
          <Hamburger toggled={stateHamburger} />
        </div>
      </div>
    </div>
  );
};

export default Carousell;
