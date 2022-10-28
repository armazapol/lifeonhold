import React from "react";
import Image from "next/image";
import Link from 'next/link'
import img1 from "../../public/img/view1/img1.png";
import img2 from "../../public/img/view1/img2.png";
import img3 from "../../public/img/view1/img3.png";
import img4 from "../../public/img/view1/img4.png";
import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";
// import video from '../../public/img/view1/video.mp4';
// import img5 from '../../public/img/view1/img1.png';

const View1 = () => {
  return (
    <div className="w-full h-screen grid grid-cols-3 grid-rows-3">
      <div className="row-span-2 col-span-2 flex items-center justify-center  relative">
        <Image alt="img1" src={img1} placeholder="blur" fill />
        <div className="flex flex-col z-20 relative items-center">
          <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
              curso lúdico a modo de videojuego.
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                Creamos el personaje Salva y mini-juegos ligados a la política
              </p>
              <p>
                de salvaguarda y canales de atención al cuidado de los niños,{" "}
              </p>
              <p>niñas y adolescentes.</p>
            </div>
          
          </div>
          <div className="flex gap-10 mt-5">
                <Button text="Play" />
                <Button text="Compartir" />
            </div>
        </div>
      </div>
      <div className="col-start-3 row-span-3 grid grid-rows-2">
        <div className="flex items-center justify-center  relative">
          <Image alt="img2" src={img2} placeholder="blur" fill />
          <Button text="Galería de Fotos" />
        </div>
        <div className="flex items-center justify-center  relative">
          <video
            className="h-full w-full object-cover "
            autoPlay
            loop
            muted
            // poster="/video/particulas.mp4"
          >
            <source src="/img/view1/video.mp4" type="video/mp4" />
          </video>
  
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image alt="img3" src={img3} placeholder="blur" fill />
        <Button text="Ver Video" />
      </div>
      <div className="flex items-center justify-center  relative">
        <Image alt="img2" src={img4} placeholder="blur" fill />
       <a className="z-20" href="https://www.google.com/" target="_blank" rel="noreferrer">
       <Button text="Web" />
       </a>
      </div>
    </div>
  );
};

export default View1;