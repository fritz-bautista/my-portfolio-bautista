import { motion, type Variants } from "framer-motion";

import Marquee from "./Marquee.tsx";
import selfPortrait from '../assets/images/Self Portrait.png';
import selfPortrait2 from '../assets/images/ImageSelf1.jpg';
import selfPortrait3 from '../assets/images/PSSC.jpg';
import selfPortrait4 from '../assets/images/ImageSelf3.png';

function About() {
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
        <div className="flex flex-col w-full min-h-screen bg-bg2 text-white font-google"> 
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/80 to-zinc-950/100 overflow-hidden">
                    <div className="absolute top-1/4 -translate-y-1/2 w-full z-0 opacity-90 pointer-events-none hidden md:block lg:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]">
                        <Marquee/>
                    </div>
                    <div className="relative z-10 flex md:flex-col-reverse lg:flex-row w-full lg:items-center lg:justify-center p-20">
                        <div className="flex flex-col  lg:justify-center w-full lg:w-1/2 lg:gap-2 p-10 lg:p-20 lg:pt-40">
                            <h1 className="text-xl lg:text-3xl font-bold text-left"> {aboutInfo.name} </h1>
                            <h2 className="text-lg text-center lg:text-xl font-medium lg:text-left text-gray-300"> {aboutInfo.title} </h2>
                            <p className="text-md text-center lg:text-lg lg:text-justify mt-1 w-full">
                            {aboutInfo.description}
                            </p>
                        </div>
                        <div className="relative size-cover overflow-hidden">
                            <img 
                                className="lg:w-auto lg:h-150 object-fit pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" 
                                src={selfPortrait} 
                                alt="Self Portrait"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                {/* Made the QuoteCard into an array of objects to make it easier to add more cards int the future. */}
                {quoteCardData.map((item) => (
                    <div className="bg-black w-full">
                        <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once:true, amount: 0.2}}
                        className="grid grid-cols-6 grid-rows-5 gap-0.5 w-full text-black">
                            <motion.div variants={itemVariants} className="bg-white w-full h-full"></motion.div>
                            <motion.div variants={itemVariants} className="row-span-3 col-start-1 row-start-2 bg-white w-full h-full"></motion.div>
                            <motion.div variants={itemVariants} className="col-span-4 row-span-2 col-start-2 row-start-2 lg:col-span-2 lg:row-span-3 lg:col-start-2 lg:row-start-2 bg-white w-full h-full">
                                <img src={item.img} alt="Self Portrait" className="w-full h-full object-cover lg:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]" />
                            </motion.div>
                            <motion.div variants={itemVariants} className="col-span-4 col-start-2 row-start-4 lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-2 bg-blue-600 w-full h-full flex flex-col gap-2 justify-center items-center text-center lg:text-left p-15">
                                <h1 className="text-3xl font-bold w-full text-white">{item.title}</h1>
                                <p className="w-full font-medium text-center lg:text-lg lg:text-justify text-white">{item.description}</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="row-span-3 col-start-6 row-start-2 w-full h-full bg-white"></motion.div>
                            <motion.div variants={itemVariants} className="col-span-4 col-start-2 row-start-1 bg-white w-full h-full"></motion.div>
                            <motion.div variants={itemVariants} className="col-start-6 row-start-1 bg-white w-full h-full"></motion.div>
                            <motion.div variants={itemVariants} className="col-start-1 row-start-5 bg-white w-full h-full"></motion.div>
                            <motion.div variants={itemVariants} className="col-span-4 col-start-2 row-start-5 bg-white w-full h-full"></motion.div>
                            <motion.div variants={itemVariants} className="col-start-6 row-start-5 bg-white w-full h-full"></motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const aboutInfo = {
    name: "Fritz Harold P. Bautista",
    title: "Software Developer & Graphic Designer",
    description: "A passionate Software Developer and Graphic Designer, he graduated with a Bachelor of Science in Computer Science from Pamantasan ng Lungsod ng Pasig. During his studies, he worked as a freelance graphic designer, creating impactful visual content for promotions and events."
}

const quoteCardData = [
    {
        title: "PASSION keeps me going!",
        description: "I am passionate in what I do, this is the reason why I always go beyond the standard and produce outputs with quality. This passion for programming and graphic designing gives me the commitment and discipline to learn new skills and produce great outputs. ",
        img: selfPortrait3
    },
    {
        title: "PURPOSE gives depth to work.",
        description: "With passion comes purpose. With purpose, it gives me a sense of what I am doing. I am not just doing something out of obligation but with a purpose in mind: what to do and what I am doing it for. This gives what I do more meaning and also a sense of direction. ",
        img: selfPortrait2
    },
    {
        title: "IDENTITY to my work.",
        description: "Lastly comes Identity. I value the identity of the crafts I do, since each project is distinct and unique. I make sure each one aligns to the identity needed. I also make sure that my identity is reflected in the work I do, since it is a reflection of who I am and what I stand for.",
        img: selfPortrait4
    }
]

export default About;