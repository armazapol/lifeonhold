import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import View1 from "../views/View1";
import Modal from "../Modal";
import ViewImages from "../Modal/ViewImages";



const Carousell = (props: any) => {
  const [stateModalVideo, setStateModalVideo] = useState <boolean>(false);
  const [stateModalImages, setStateModalImages] = useState <boolean>(false);

  const viewVideo = ()=>{
    setStateModalVideo(!stateModalVideo)
  }

  const toggleViewImages = ()=>{
    setStateModalImages(!stateModalImages)
  }

  return (
    <div {...props}>
      {stateModalVideo && <Modal viewVideo={viewVideo} />}
      {stateModalImages && <ViewImages toggleViewImages={toggleViewImages} />}
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={false}
        stopOnHover={false}
        className="rounded-3xl text-white"
      >
        <View1 viewVideo={viewVideo} toggleViewImages={toggleViewImages} />
      
        <div className="w-full h-screen flex items-center justify-center bg-slate-400">
          page 2
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
    </div>
  );
};

export default Carousell;
