import { webProjectData } from '../data/webProjectData.ts';
import { graphicProjectData } from '../data/graphicProjectData.ts';
import { motion, type Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


function ProjectMenuGraphics() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const isWeb = data === 'webProjectData';
    const titleDisplay = isWeb ? "Software Development Projects" : "Graphic Design Projects";


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
        <div className="flex flex-col items-center w-full h-full bg-black font-google">
            <div className="grid grid-cols-6 grid-rows-1 gap-0.5 w-full h-full m-0.5 ">
                <button 
                className="bg-white flex items-center justify-center h-full w-full cursor-pointer"
                onClick={() => navigate('/projects')}
                >
                    <IoIosArrowBack className="text-4xl"/>
                    <h1 className="text-3xl font-medium">Back</h1>
                </button>
                <div className="col-span-4 bg-white w-full flex justify-center p-10">
                    <h1 className="text-4xl">{titleDisplay}</h1>
                </div>
                <div className="col-start-6 bg-white"></div>
            </div>
        </div>
    )
}

export default ProjectMenuGraphics;