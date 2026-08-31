import Marquee from "./Marquee.tsx";
// Remember to import images located in the src folder!
import selfPortrait from '../assets/images/Self Portrait.png';

function About() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-bg2 text-white"> 
            <div className="size-full bg-repeat bg-[url(/grid-ellipsis.svg)] bg-[length:100px_100px]">
                <div className="relative size-full bg-gradient-to-tr from-zinc-950/100 via-zinc-950/80 to-zinc-950/100 overflow-hidden">
                    <div className="absolute top-1/4 -translate-y-1/2 w-full z-0 opacity-90 pointer-events-none">
                        <Marquee/>
                    </div>
                    <div className="relative z-10 flex w-full pt-10">
                        <div className="flex flex-col justify-center w-full gap-2 p-20 pt-40">
                            <h1 className="text-3xl font-bold text-left"> Fritz Harold P. Bautista </h1>
                            <h2 className="text-2xl font-medium text-left text-gray-300"> Graphic Designer & UX Designer </h2>
                            <p className="text-2xl font-google text-left mt-1 w-full">
                            A passionate Graphic and UX Designer and a Software Developer, he graduated with a Bachelor of Science in Computer Science from Pamantasan 
                            ng Lungsod ng Pasig. During his studies, he worked as a freelance graphic designer, creating impactful visual content for promotions 
                            and events.
                            </p>
                        </div>
                        <img className="w-170 h-200 object-cover pointer-events-none" src={selfPortrait} alt="Self Portrait"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;