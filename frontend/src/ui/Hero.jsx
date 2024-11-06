import { motion } from "framer-motion";
import HeroImg from "../data/img/tasks.png";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function Hero() {
  return (
    <div className="container mx-auto grid px-4 pt-32 sm:grid-cols-2">
      {/* text */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center gap-8 text-center sm:items-start sm:justify-start sm:text-left"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl font-extrabold sm:text-7xl"
        >
          All your <span className="text-indigo-600">Tasks</span> <br /> in one
          place, Fast grow 🚀
        </motion.h1>

        <motion.h3 variants={textVariants} className="text-2xl font-semibold">
          No ADS, All time free access 💙
        </motion.h3>

        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <motion.button
            variants={textVariants}
            className="rounded-md bg-red-400 px-6 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:scale-[1.1]"
          >
            <span className="">Try Now for free 🔥</span>
          </motion.button>
        </div>
      </motion.div>
      {/* image */}
      <div className="hidden rotate-6 items-center justify-center sm:flex">
        <img src={HeroImg} alt="" className="w-[450px]" />
      </div>
    </div>
  );
}

export default Hero;
