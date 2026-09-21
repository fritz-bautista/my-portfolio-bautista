import { webProjectData } from '../data/webProjectData.ts';
import { graphicProjectData } from '../data/graphicProjectData.ts';
import { motion, type Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


function ProjectMenu() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const isWeb = data === 'webProjectData';
    const projectDisplay = isWeb ? webProjectData : graphicProjectData;
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
            {/*  */}
            {projectDisplay.map((project, index) => (
                <motion.div 
                variants = {containerVariants}
                initial="hidden"
                animate="show"
                key={index} 
                className="grid grid-cols-6 gap-0.5 w-full h-full mb-0.5">
                    <motion.div variants={itemVariants} className="row-span-2 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="col-span-4 row-span-2 bg-black flex items-center hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                        <div 
                        onClick={() => navigate('/projects/menu/page', {state: project.id} )}
                        className="grid grid-cols-2">
                            <div className="flex items-center">
                                <img src={project.thumbnail} alt={project.thumbnail} className="object-cover h-full"></img>  
                            </div>
                            <div className={`h-full flex flex-col p-10 gap-5 justify-center ${project.color}`}>
                                <h1 className="text-2xl text-white font-bold text-left">{project.title}</h1>
                                <p className="text-xl text-white font-medium">{project.quickDes}</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="row-span-2 col-start-6 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="row-start-3 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="col-span-4 row-start-3 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="col-start-6 row-start-3 bg-white h-20"></motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectMenu;