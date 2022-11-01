import React, { useEffect } from "react";
import { gsap } from "gsap";

type Props = {
  viewVideo: () => void;
};

const Modal = ({ viewVideo }: Props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".video", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div className="h-screen w-full z-50 bg-black/60 flex items-center justify-center fixed modal" onClick={viewVideo}>
      <div className="flex video gap-2">
        <iframe
          width="1020"
          height="630"
          src="https://www.youtube.com/embed/C3iW3Zhv3Ns?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <a onClick={viewVideo} className="cursor-pointer text-white text-xl font-semibold">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
