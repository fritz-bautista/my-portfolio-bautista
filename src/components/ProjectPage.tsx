import React from 'react';
import { webProjectData } from '../data/webProjectData.ts';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import ImageSlide from '../components/ImageSlide.tsx';
import { motion, type Variants } from "framer-motion";


function ProjectPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const filteredData = webProjectData.filter(webProjectData => webProjectData.id === data)

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
        <div className="flex flex-col bg-black h-full w-full font-google">
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-6 grid-rows-1 gap-0.5 w-full h-full mb-0.5 ">
                <motion.div
                variants={itemVariants}
                className="relative z-20 bg-white flex items-center justify-center h-full w-full cursor-pointer"
                onClick={() => navigate('/projects/menu', {state: 'webProjectData'})}
                >
                    <IoIosArrowBack className="text-4xl"/>
                    <h1 className="text-3xl font-medium">Back</h1>
                </motion.div>
                <motion.div variants={itemVariants} className="col-span-4 bg-white w-full flex justify-center p-10">
                    <h1 className="text-4xl"></h1>
                </motion.div>
                <motion.div variants={itemVariants} className="col-start-6 bg-white"></motion.div>
            </motion.div>
            {filteredData.map((project, index) => ( 
                <React.Fragment key={index}>
                    <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show" 
                    className="grid grid-cols-6 gap-0.5 mb-0.5 flex h-full">
                        <motion.div variants={itemVariants} className="bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="col-span-4 flex items-center h-full">
                            <img src={project.thumbnail} alt={project.thumbnail} className=""></img>
                        </motion.div>
                        <motion.div variants={itemVariants} className="col-start-6 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="row-start-2 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="col-span-4 row-start-2 bg-white flex items-center justify-center">
                            <h1 className="text-2xl font-bold text-center p-10">{project.title}</h1>
                        </motion.div>
                        <motion.div variants={itemVariants} className="col-start-6 row-start-2 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="row-start-3 bg-white">1</motion.div>
                        <motion.div variants={itemVariants} className="col-span-4 row-start-3 p-10 flex auto-fit bg-white">
                              <p className="text-black font-medium text-xl text-center">{project.description}</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="col-start-6 row-start-3 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="row-start-4 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="col-span-4 row-start-4 bg-white h-20"></motion.div>
                        <motion.div variants={itemVariants} className="col-start-6 row-start-4 bg-white"></motion.div>
                    </motion.div>
                    <div className="grid grid-cols-6 gap-0.5 mb-0.5 bg-black">
                        <div className="row-span-3 bg-white">1</div>
                        <div className="col-span-4 row-span-3 bg-white flex items-center justify-center">
                            {project.techStack.map((Icon, index) => (
                                <div 
                                key = {index}
                                className="flex w-18 h-18 bg-white rounded-2xl items-center justify-center"
                                >
                                    <Icon className="text-5xl"/>
                                </div>
                            ))} 
                        </div>
                        <div className="row-span-3 col-start-6 bg-white"></div>
                        <div className="row-start-4 bg-white"></div>
                        <div className="col-span-4 row-start-4 bg-white"></div>
                        <div className="col-start-6 row-start-4 bg-white"></div>
                    </div> 
                    <ImageSlide featuresData={project.features}/>
                    <div className="grid grid-cols-6 gap-0.5 w-full h-full">
                        <div className="bg-white"></div>
                        <div className="col-span-4 bg-white flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold p-5"> Recommendations </h1>  
                        </div>
                        <div className="col-start-6 bg-white"></div>
                        <div className="row-start-2 bg-white"></div>
                        <div className="row-start-2 col-start-2 col-span-4 bg-white">
                            <div className="flex flex-col justify-center items-center p-10">
                                <p className="text-lg text-center">{project.recommendation}</p>
                            </div>
                        </div>
                        <div className="row-start-2 col-start-6 bg-white"></div>
                        <div className="row-start-3 bg-white"></div>
                        <div className="row-start-3 col-start-2 col-span-4 bg-white"></div>
                        <div className="row-start-3 col-start-6 bg-white h-20"></div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default ProjectPage;