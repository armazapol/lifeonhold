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
import View5 from "../views/View5";
import View6 from "../views/View6";
import View3 from "../views/View3";
import View4 from "../views/View4";
import View7 from "../views/View7";
import View8 from "../views/View8";
import View9 from "../views/View9";
import View10 from "../views/View10";
import View11 from "../views/View11";
import View12 from "../views/View12";
import View13 from "../views/View13";
import View14 from "../views/View14";
import View15 from "../views/View15";
import View16 from "../views/View16";
import View17 from "../views/View17";
import View18 from "../views/View18";
import View20 from "../views/View20";
import View19 from "../views/View19";
import View21 from "../views/View21";
import View22 from "../views/View22";
import ViewGeneral from "../ViewGeneral";

const Carousell = (props) => {
  // const [stateModalVideo, setStateModalVideo] = useState<boolean>(false);
  // const [stateModalImages, setStateModalImages] = useState<boolean>(false);
  // const [stateMenu, setStateMenu] = useState<boolean>(false);
  // const [stateHamburger, setStateHamburger] = useState<boolean>(false);
  const [stateModalVideo, setStateModalVideo] = useState(false);
  const [stateModalImages, setStateModalImages] = useState(false);
  // const [stateMenu, setStateMenu] = useState(false);
  const [stateHamburger, setStateHamburger] = useState(false);
  const [stateCarousel, setStateCarousel] = useState(0);
  const [stateSide, setStateSide] = useState("left");

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
      { opacity: 0, display: "none" },

      {
        opacity: 1,
        display: "block",
        duration: 0.5,
      }
    );
  }, []);

  const updateState = (index) => {
    // console.log(stateCarousel)
    index > stateCarousel ? setStateSide("left") : setStateSide("right");
    setStateCarousel(index);
  };

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
        <div className="contentMenu hidden">
          <Menu />
        </div>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        // infiniteLoop={true}
        autoPlay={false}
        transitionTime={2000}
        onChange={(index) => updateState(index)}
        // stopOnHover={false}
        className="rounded-3xl text-white carousel1"
      >
        <View1
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={0}
          index={stateCarousel}
          stateSide={stateSide}
        />
        {/* <View2 keyCarrousel={1} index={stateCarousel} stateSide={stateSide} />    */}
        <ViewGeneral
          keyCarrousel={1}
          index={stateCarousel}
          stateSide={stateSide}
          title={`curso lúdico a modo de videojuego.`}
          text={`Creamos el personaje Salva y mini-juegos ligados a la política de salvaguarda y canales de atención al cuidado de los niños, niñas y adolescentes.`}
          urlBackground="/img/view1/img1.png"
          urlLogo="/img/view1/logo.png"
        />
        <View3
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={2}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View4 />
        </div>
        <View5
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={4}
          index={stateCarousel}
          stateSide={stateSide}
        />

        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View6 />
        </div>
        <View7
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={6}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View8 />
        </div>
        <View9
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={8}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View10 />
        </div>
        <View11
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={10}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View12 />
        </div>
        <View13
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={12}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View14 />
        </div>
        <View15
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={14}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View16 />
        </div>
        <View17
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={16}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View18 />
        </div>
        <View19
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={18}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View20 />
        </div>
        <View21
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={20}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          <View22 />
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
