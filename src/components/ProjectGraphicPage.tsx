import React from 'react';
import { graphicProjectData } from '../data/graphicProjectData.ts';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import ImageSlide from '../components/ImageSlide.tsx';
import { motion, type Variants } from "framer-motion";

function ProjectPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    // Renamed parameter to projectItem to avoid shadowing the imported data array
    const filteredData = graphicProjectData.filter(projectItem => projectItem.id === data)

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
        hidden: { opacity: 0, scale: 0.9 }, 
        show: {
            opacity: 1,
            scale: 1, 
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 50,
            },
        },
    }

    return (
        <div className="flex flex-col bg-black h-full w-full font-google">
            
            {/* HEADER SECTION */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-1 gap-0.5 w-full lg:h-full mb-0.5"
            >
                <motion.div
                    variants={itemVariants}
                    className="relative z-20 bg-white flex items-center justify-center p-4 lg:p-0 h-full w-full cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => navigate('/projects/menu', {state: 'graphicProjectData'})} // Updated state to return to correct tab
                >
                    <IoIosArrowBack className="text-3xl lg:text-4xl"/>
                    <h1 className="text-2xl lg:text-3xl font-medium">Back</h1>
                </motion.div>
                <motion.div variants={itemVariants} className="lg:col-span-4 bg-white w-full flex justify-center p-6 lg:p-10">
                    <h1 className="text-2xl lg:text-4xl"></h1>
                </motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 bg-white"></motion.div>
            </motion.div>

            {filteredData.map((project, index) => {
                // Convert string[] to { image: string }[] for ImageSlide
                const formattedSlideData = project.image.map(imgString => ({
                    image: imgString
                }));

                return (
                    <React.Fragment key={index}>
                        
                        {/* MAIN PROJECT INFO SECTION */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show" 
                            className="flex flex-col lg:grid lg:grid-cols-6 gap-0.5 mb-0.5 w-full h-full"
                        >
                            {/* Spacers */}
                            <motion.div variants={itemVariants} className="hidden lg:block bg-white"></motion.div>
                            
                            {/* Image */}
                            <motion.div variants={itemVariants} className="w-full lg:col-span-4 flex items-center h-full bg-white lg:bg-transparent">
                                <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover" />
                            </motion.div>
                            
                            {/* Spacers */}
                            <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 bg-white"></motion.div>
                            <motion.div variants={itemVariants} className="hidden lg:block lg:row-start-2 bg-white"></motion.div>
                            
                            {/* Title */}
                            <motion.div variants={itemVariants} className="w-full lg:col-span-4 lg:row-start-2 bg-white flex items-center justify-center">
                                <h1 className="text-xl lg:text-2xl font-bold text-center p-6 lg:p-10">{project.title}</h1>
                            </motion.div>
                            
                            {/* Spacers */}
                            <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-start-2 bg-white"></motion.div>
                            <motion.div variants={itemVariants} className="hidden lg:block lg:row-start-3 bg-white"></motion.div>
                            
                            {/* Description */}
                            <motion.div variants={itemVariants} className="w-full lg:col-span-4 lg:row-start-3 p-6 lg:p-10 flex bg-white">
                                <p className="text-black font-medium text-base lg:text-xl text-center lg:text-left">{project.description}</p>
                            </motion.div>
                            
                            {/* Bottom Spacers */}
                            <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-start-3 bg-white"></motion.div>
                            <motion.div variants={itemVariants} className="hidden lg:block lg:row-start-4 bg-white"></motion.div>
                            <motion.div variants={itemVariants} className="hidden lg:block lg:col-span-4 lg:row-start-4 bg-white lg:h-20"></motion.div>
                            <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-start-4 bg-white"></motion.div>
                        </motion.div>
                        
                        {/* TECH STACK SECTION */}
                        <div className="flex flex-col lg:grid lg:grid-cols-6 gap-0.5 mb-0.5 bg-black">
                            <div className="hidden lg:block lg:row-span-3 bg-white"></div>
                            
                            <div className="w-full lg:col-span-4 lg:row-span-3 bg-white flex flex-wrap items-center justify-center p-6 lg:p-10 gap-4">
                                {project.techStack.map((Icon, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex w-16 h-16 lg:w-18 lg:h-18 bg-gray-100 lg:bg-white rounded-2xl items-center justify-center shadow-sm lg:shadow-none"
                                    >
                                        <Icon className="text-4xl lg:text-5xl"/>
                                    </div>
                                ))} 
                            </div>
                            
                            <div className="hidden lg:block lg:row-span-3 lg:col-start-6 bg-white"></div>
                            <div className="hidden lg:block lg:row-start-4 bg-white"></div>
                            <div className="hidden lg:block lg:col-span-4 lg:row-start-4 bg-white lg:h-20"></div>
                            <div className="hidden lg:block lg:col-start-6 lg:row-start-4 bg-white"></div>
                        </div> 
                        
                        {/* Passing the mapped formattedSlideData */}
                        <ImageSlide featuresData={formattedSlideData}/>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default ProjectPage;