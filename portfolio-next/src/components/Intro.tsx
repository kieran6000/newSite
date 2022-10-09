import { FC, Fragment } from "react";

import { BiChevronDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro: FC = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-1">
      <Canvas />
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[150px] h-[150px] z-[2] mb-4" viewBox="0 0 698.92 698.92">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <polygon
              className="cls-1 fill-white"
              points="698.92 698.92 349.52 698.92 349.52 349.52 698.92 698.92"
            />
            <polygon
              className="cls-1 fill-white"
              points="698.92 0 0 698.92 0 337.67 337.67 0 698.92 0"
            />
          </g>
        </g>
      </svg>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="text-3xl font-semibold text-center z-[1] overflow-hidden"
      >
        {`Kieran`}
      </m.p>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-sm font-semibold text-center z-[1] overflow-hidden"
      >
        {`Web Developer & Graphics Designer`}
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
