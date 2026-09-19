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
        <div className="flex flex-col bg-bg2 w-full items-center font-google gap-20 p-30">
            <div className="flex w-full justify-center">
                <h1 className="text-5xl font-bold text-white">What software do I use?</h1>
            </div>
            <div className="flex w-full pl-40 pr-40 gap-10 justify-center items-center">
                <div className="text-white w-2/4">
                    <h1 className="font-bold text-2xl">Software Development</h1>
                    <p className="text-lg">Here are the softwares and tools I use for my projects in Software Development</p>
                </div>
                <div>
                    <div className="grid grid-cols-5 gap-6">
                        {logosSoftDev.map((Icon, index) => (
                            <div 
                            key = {index}
                            className="flex w-20 h-20 bg-white rounded-2xl items-center justify-center transition-transform hover:scale-110"
                            >
                                <Icon className="text-6xl"/>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
            <div className="flex w-full pl-40 pr-40 gap-10 justify-center items-center">
                <div className="text-white w-2/4">
                    <h1 className="font-bold text-2xl">Graphic Designing</h1>
                    <p className="text-lg">Here are the softwares and tools I use for my projects in Graphic Designing</p>
                </div>
                <div>
                    <div className="grid grid-cols-5 gap-6">
                        {logosGraphic.map((Icon, index) => (
                            <div 
                            key = {index}
                            className="flex w-20 h-20 bg-white rounded-2xl items-center justify-center transition-transform hover:scale-110"
                            >
                                <Icon className="text-6xl"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;
