import { BlurIn } from './TextComponents/Blur_in.tsx';
import { WordsPullUp } from "./TextComponents/words-pull-up.tsx";
import { motion, type Variants } from "framer-motion";

function Hero() {
  const containerVariants: Variants = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 }, // Starts small and invisible
    show: {
      opacity: 1,
      scale: 1, // Scales to original size
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 50,
      },
    },
  }

  return (
    <div className="flex flex-col bg-black items-center justify-center w-full h-screen overflow-hidden">
      <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-5 grid-rows-5 gap-0.5 flex w-full h-auto items-center justify-center">
          <motion.div variants={itemVariants} className="row-span-2 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="col-span-3 row-span-2 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="row-span-2 col-start-5 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="col-span-3 col-start-2 row-start-3 flex flex-col bg-white w-full h-full">
            <div className="grid grid-cols-1 grid-rows-2 flex p-10 items-center justify-center">
              <BlurIn>FRITZ PORTFOLIO</BlurIn>
              <div className="w-full pl-15 pr-15">
                <WordsPullUp text="This is a collection of my Graphic design, UI design, and Website application projects and commissions."/>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="col-start-1 row-start-3 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="col-start-5 row-start-3 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="row-span-2 row-start-4 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="col-span-3 row-span-2 row-start-4 bg-white w-full h-full"></motion.div>
          <motion.div variants={itemVariants} className="row-span-2 col-start-5 row-start-4 bg-white w-full h-full"></motion.div>
      </motion.div>
    </div>
  )
}

export default Hero; 