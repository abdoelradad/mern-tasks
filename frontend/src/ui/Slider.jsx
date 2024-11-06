import { motion } from "framer-motion";

import img1 from "../data/img/slider1_1.png";
import img2 from "../data/img/slider1_2.png";
import img3 from "../data/img/slider1_3.png";
import img4 from "../data/img/slider1_4.png";
import img5 from "../data/img/slider1_5.png";
import img6 from "../data/img/slider1_6.png";
import img7 from "../data/img/slider1_7.png";
import img8 from "../data/img/slider1_8.png";
import img9 from "../data/img/slider1_9.png";
import img10 from "../data/img/slider1_10.png";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Slider() {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="container mx-auto mt-20 hidden md:block">
      {/* slider */}
      <div className="slider mx-auto w-[80%] overflow-hidden">
        {/* wrapper */}
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="mr-5 flex h-full flex-col items-center justify-center">
                <img src={slide} alt={slide} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Slider;
