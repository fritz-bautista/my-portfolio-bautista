import {motion} from 'framer-motion';
import { useState } from "react";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";

function Hero() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const handWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setCurrent((prev) => Math.min(prev + 1, images.length - 1));
    } else {
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen p-30 ">
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-8xl font-bold w-full text-left "> Hi! Welcome </h1>
            <p className="text-2xl font-google text-left mt-1">
              This is a collection of my Graphic design, UI design, and Website application projects and commissions. 
            </p>
        </div>  
        <div className="flex flex-col items-center justify-center gap-1">
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Hero; 