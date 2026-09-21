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
            <div className="grid grid-cols-6 gap-0.5 w-full">
                <div className="bg-black w-full">1</div>
                <div className="col-span-4 flex w-full justify-center bg-black p-20">
                    <h1 className="text-5xl font-bold text-white">What software do I use?</h1>
                </div>
                <div className="col-start-6 bg-black">4</div>
            </div>
            <div className="grid grid-cols-6 grid-rows-3 gap-0.5 w-full">
                <div className="row-span-3 bg-black">1</div>
                <div className="col-span-2 row-span-3 bg-blue-700 text-white flex flex-col justify-center p-10">
                    <h1 className="font-bold text-2xl">Software Development</h1>
                </div>
                <div className="col-span-2 row-span-3 col-start-4 p-5 bg-black w-full flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-6 w-full h-full">
                        {logosSoftDev.map((Icon, index) => (
                            <div 
                            key = {index}
                            className="flex w-18 h-18 bg-white rounded-2xl items-center justify-center transition-transform hover:scale-110"
                            >
                                <Icon className="text-5xl"/>
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="row-span-3 col-start-6 bg-black">4</div>
            </div>
            <div className="grid grid-cols-6 grid-rows-3 gap-0.5 w-full">
                <div className="row-span-3 bg-black">1</div>
                <div className="col-span-2 row-span-3 bg-yellow-500 text-white flex flex-col justify-center p-10">
                    <h1 className="font-bold text-2xl">Graphic Designing</h1>
                </div>
                <div className="col-span-2 row-span-3 col-start-4 bg-black p-5 w-full flex items-center">
                    <div className="grid grid-cols-5 gap-6 w-full">
                        {logosGraphic.map((Icon, index) => (
                            <div 
                            key = {index}
                            className="flex w-18 h-18 bg-white rounded-2xl items-center justify-center transition-transform hover:scale-110"
                            >
                                <Icon className="text-5xl"/>
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="row-span-3 col-start-6 bg-black">4</div>
            </div>
            <div className="grid grid-cols-6 grid-rows-1 gap-0.5 w-full">
                <div className="bg-black w-full">1</div>
                <div className="col-span-4 flex w-full justify-center bg-black p-20"></div>
                <div className="col-start-6 bg-black">4</div>
            </div>
        </div>
        </>
    )
}

export default Skills;
