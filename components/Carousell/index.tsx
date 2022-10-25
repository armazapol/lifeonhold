import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousell = (props: any) => {
  return (
    <div {...props}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={false}
        stopOnHover={false}
        className="rounded-3xl"
      >
        <div className="w-full h-screen grid grid-cols-3">
          <div className="row-span-3 col-span-2 flex items-center justify-center bg-blue-500">text1</div>
          <div className="flex items-center justify-center bg-red-500">text2</div>
          <div className="flex items-center justify-center bg-green-500">text3</div>
          <div className="flex items-center justify-center bg-violet-500">text4</div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          page 2
        </div>
        <div className="w-full h-screen grid grid-cols-3 grid-rows-3">
          <div className="row-span-2 col-span-2 flex items-center justify-center bg-blue-500">text1</div>
          <div className="col-start-3 row-span-3 grid grid-rows-2">
            <div className="flex items-center justify-center bg-red-500">text2</div>
            <div className="flex items-center justify-center bg-pink-500">text5</div>
            </div>
          <div className="flex items-center justify-center bg-green-500">text3</div>
          <div className="flex items-center justify-center bg-violet-500">text4</div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          page 4
        </div>
        <div className="w-full h-screen grid grid-cols-4 grid-rows-4">
          <div className="row-span-4 col-span-2 flex items-center justify-center bg-blue-500">text1</div>
          <div className="row-span-2 col-span-2 flex items-center justify-center bg-red-500">text2</div>
          <div className="row-span-2  flex items-center justify-center bg-pink-500">text3</div>
          <div className="flex items-center justify-center bg-green-500">text4</div>
          <div className="flex items-center justify-center bg-violet-500">text5</div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          page 6
        </div>
        <div className="w-full h-screen grid grid-cols-12 grid-rows-3">
          <div className="row-span-2 col-span-7 flex items-center justify-center bg-blue-500">text1</div>
          <div className="row-span-2 col-span-5 flex items-center justify-center bg-red-500">text2</div>
          <div className="col-span-4  flex items-center justify-center bg-pink-500">text3</div>
          <div className="col-span-4 flex items-center justify-center bg-green-500">text4</div>
          <div className="col-span-4 flex items-center justify-center bg-violet-500">text5</div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousell;
