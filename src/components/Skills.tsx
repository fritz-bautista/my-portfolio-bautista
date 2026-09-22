import { FaReact, FaVuejs, FaHtml5, FaCss3, FaPhp, FaLaravel, FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";

import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect } from "react-icons/tb";

const logosSoftDev = [FaReact, FaVuejs, FaHtml5, FaCss3, FaPhp, FaLaravel, VscVscode, SiIntellijidea, RiTailwindCssFill, IoLogoJavascript]
const logosGraphic = [TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect, FaFigma, FiFramer]

function Skills() {
    return (
        <>
        <div className="flex flex-col bg-white w-full items-center font-google gap-0.5 m-0.5">
            {/* Header Block */}
            <div className="flex flex-col lg:grid lg:grid-cols-6 gap-0.5 w-full">
                <div className="hidden lg:block bg-black w-full">1</div>
                <div className="lg:col-span-4 flex w-full justify-center bg-black p-10 lg:p-20">
                    <h1 className="text-3xl lg:text-5xl text-center lg:text-left font-bold text-white pointer-events-none">What software do I use?</h1>
                </div>
                <div className="hidden lg:block lg:col-start-6 bg-black">4</div>
            </div>

            {/* Software Development Block */}
            <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-3 gap-0.5 w-full">
                <div className="hidden lg:block lg:row-span-3 bg-black">1</div>
                <div className="lg:col-span-2 lg:row-span-3 bg-blue-700 text-white flex flex-col justify-center p-8 lg:p-10 text-center lg:text-left">
                    <h1 className="font-bold text-2xl pointer-events-none">Software Development</h1>
                </div>
                <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 p-6 lg:p-5 bg-black w-full flex items-center justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 w-full h-full place-items-center">
                        {logosSoftDev.map((Icon, index) => (
                            <div 
                            key={index}
                            className="flex w-16 h-16 lg:w-18 lg:h-18 bg-white rounded-2xl items-center justify-center transition-transform hover:scale-110"
                            >
                                <Icon className="text-4xl lg:text-5xl"/>
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="hidden lg:block lg:row-span-3 lg:col-start-6 bg-black">4</div>
            </div>

            {/* Graphic Designing Block */}
            <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-3 gap-0.5 w-full">
                <div className="hidden lg:block lg:row-span-3 bg-black">1</div>
                <div className="lg:col-span-2 lg:row-span-3 bg-yellow-500 text-white flex flex-col justify-center p-8 lg:p-10 text-center lg:text-left">
                    <h1 className="font-bold text-2xl pointer-events-none">Graphic Designing</h1>
                </div>
                <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 p-6 lg:p-5 bg-black w-full flex items-center justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 w-full h-full place-items-center">
                        {logosGraphic.map((Icon, index) => (
                            <div 
                            key={index}
                            className="flex w-16 h-16 lg:w-18 lg:h-18 bg-white rounded-2xl items-center justify-center transition-transform hover:scale-110"
                            >
                                <Icon className="text-4xl lg:text-5xl"/>
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="hidden lg:block lg:row-span-3 lg:col-start-6 bg-black">4</div>
            </div>

            {/* Footer Spacer Block */}
            <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-1 gap-0.5 w-full">
                <div className="hidden lg:block bg-black w-full">1</div>
                <div className="lg:col-span-4 flex w-full justify-center bg-black p-10 lg:p-20"></div>
                <div className="hidden lg:block lg:col-start-6 bg-black">4</div>
            </div>
        </div>
        </>
    )
}

export default Skills;