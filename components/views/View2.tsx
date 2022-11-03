import React from 'react'
import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";

const View2 = () => {
  return (
    <div>
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
            <Button text="Ver Video" />
            <Button text="Compartir" />
          </div>
        </div>
    </div>
  )
}

export default View2