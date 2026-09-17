import { motion } from "framer-motion";

import Marquee from "./Marquee.tsx";
import QuoteCard from "./Card/QuoteCard.tsx";
import selfPortrait from '../assets/images/Self Portrait.png';
import selfPortrait2 from '../assets/images/ImageSelf1.jpg';
import selfPortrait3 from '../assets/images/PSSC.jpeg';

const FadeInOnScroll =  ({ children }: {children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full"
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity:  1, y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}  
    </motion.div>
  )
}

function About() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-bg2 text-white"> 
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/80 to-zinc-950/100 overflow-hidden">
                    <div className="absolute top-1/12 -translate-y-1/2 w-full z-0 opacity-90 pointer-events-none hidden md:block">
                        <Marquee/>
                    </div>
                    <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full pt-10">
                        <div className="flex flex-col  lg:justify-center w-full lg:gap-2 p-10 lg:p-20 lg:pt-40">
                            <h1 className="text-xl lg:text-4xl font-bold text-left"> Fritz Harold P. Bautista </h1>
                            <h2 className="text-lg text-center lg:text-2xl font-medium lg:text-left text-gray-300"> Web Developer & Graphic Designer </h2>
                            <p className="text-md text-center lg:text-2xl lg:text-justify font-google  mt-1 w-full">
                            A passionate Graphic and UX Designer and a Software Developer, he graduated with a Bachelor of Science in Computer Science from Pamantasan 
                            ng Lungsod ng Pasig. During his studies, he worked as a freelance graphic designer, creating impactful visual content for promotions 
                            and events.
                            </p>
                        </div>
                        <div className="relative size-full overflow-hidden">
                            <img 
                                // Added mask-image classes here:
                                className="lg:w-170 lg:h-200 object-cover pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" 
                                src={selfPortrait} 
                                alt="Self Portrait"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-12 p-10 lg:p-20 lg:pt-40">
                        <FadeInOnScroll>
                            <div className="flex flex-col lg:flex-row w-full items-center ">
                                <div className="z-0 h-full w-full lg:w-200">
                                    <img src={selfPortrait3} alt="Self Portrait" className="w-full h-full object-cover lg:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]" />
                                </div>
                                <div className="z-10 w-150 -ml-20 h-full item-center justify-center">
                                    <QuoteCard
                                    title="PASSION keeps me going!"
                                    description="I am passionate in what I do, this is the reason why I always go beyond the standard and produce outputs with quality. This passion for programming and graphic designing gives me the commitment and discipline to learn new skills and produce great outputs. "
                                    />
                                </div>
                            </div>
                        </FadeInOnScroll>
                        <FadeInOnScroll>
                            <div className="flex w-full items-center">
                                <div className="z-10 w-150 -mr-20 h-full item-center justify-center">
                                    <QuoteCard
                                    title="PURPOSE gives depth to work."
                                    description="With passion comes purpose. With purpose, it gives me a sense of what I am doing. I am not just doing something out of obligation but with a purpose in mind: what to do and what I am doing it for. This gives what I do more meaning and also a sense of direction. "
                                    />
                            </div>
                            <div className="z-0 h-full w-200">
                                <img src={selfPortrait2} alt="Self Portrait" className="w-full h-full object-cover [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_60%,transparent_100%)]" />
                            </div>
                        </div>
                        </FadeInOnScroll>
                        <FadeInOnScroll>
                            <div className="flex w-full items-center">
                                <div className="z-0 h-full w-200">
                                    <img src={selfPortrait2} alt="Self Portrait" className="w-full h-full object-cover [mask-image:linear-gradient(to_right,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]" />
                                </div>
                                <div className="z-10 w-150 -ml-20 h-full item-center justify-center">
                                    <QuoteCard
                                    title="IDENTITY to my work."
                                    description="Lastly comes Identity. I value the identity of the crafts I do, since each project is distinct and unique. I make sure each one aligns to the identity needed. I also make sure that my identity is reflected in the work I do, since it is a reflection of who I am and what I stand for."
                                    />
                                </div>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;