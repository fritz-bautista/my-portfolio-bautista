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
        <div className="flex flex-col items-center w-full h-full min-h-screen bg-black font-google">
            
            {/* HEADER GRID: Stacks on mobile, 6-col grid on desktop */}
            <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-1 gap-0.5 w-full lg:h-full m-0.5">
                <button 
                    className="bg-white flex items-center justify-center p-4 lg:p-0 h-full w-full cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => navigate('/projects')}
                >
                    <IoIosArrowBack className="text-3xl lg:text-4xl"/>
                    <h1 className="text-2xl lg:text-3xl font-medium">Back</h1>
                </button>
                <div className="lg:col-span-4 bg-white w-full flex justify-center text-center p-6 lg:p-10">
                    <h1 className="text-2xl lg:text-4xl">{titleDisplay}</h1>
                </div>
                {/* Right Margin Spacer - Hidden on mobile */}
                <div className="hidden lg:block lg:col-start-6 bg-white"></div>
            </div>

            {titleDisplay === "Software Development Projects" ? (
                projectDisplay.map((project, index) => (
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show" // Note: If the list is long, consider changing this to whileInView="show"
                        key={index} 
                        // Flex column on mobile, 6-column grid on desktop
                        className="flex flex-col lg:grid lg:grid-cols-6 gap-0.5 w-full h-full mb-0.5"
                    >
                        {/* Spacers - Hidden on mobile */}
                        <motion.div variants={itemVariants} className="hidden lg:block lg:row-span-2 bg-white"></motion.div>
                        
                        {/* MAIN PROJECT CARD */}
                        <motion.div variants={itemVariants} className="w-full lg:col-span-4 lg:row-span-2 bg-black flex items-center hover:cursor-pointer lg:hover:scale-105 transition duration-300 ease-in-out">
                            <div 
                                onClick={() => navigate('/projects/menu/page', {state: project.id} )}
                                // Stacks image and text vertically on mobile, side-by-side on desktop
                                className="flex flex-col lg:grid lg:grid-cols-2 w-full h-full"
                            >
                                <div className="flex items-center w-full">
                                    {/* Set height for mobile (h-56) so it doesn't squash, full height on desktop */}
                                    <img src={project.thumbnail} alt={project.title} className="object-cover w-full h-56 lg:h-full"></img>  
                                </div>
                                <div className={`w-full h-full flex flex-col p-6 lg:p-10 gap-3 lg:gap-5 justify-center ${project.color}`}>
                                    <h1 className="text-xl lg:text-2xl text-white font-bold text-left">{project.title}</h1>
                                    <p className="text-base lg:text-xl text-white font-medium">{project.quickDes}</p>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Outer & Bottom Spacers - Hidden on mobile */}
                        <motion.div variants={itemVariants} className="hidden lg:block lg:row-span-2 lg:col-start-6 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="hidden lg:block lg:row-start-3 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="hidden lg:block lg:col-span-4 lg:row-start-3 bg-white"></motion.div>
                        <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-start-3 bg-white lg:h-20"></motion.div>
                    </motion.div>
                )) 
            ) : (
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col lg:grid lg:grid-cols-6 gap-0.5 w-full min-h-[60vh] lg:h-screen mb-0.5"
                >
                    <motion.div variants={itemVariants} className="hidden lg:block lg:row-span-2 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="w-full h-full lg:col-span-4 lg:row-span-2 bg-white flex items-center justify-center p-10 text-center">                        
                        <h1 className="text-2xl lg:text-4xl font-bold">Oops! Sorry this page is still under construction.</h1>
                    </motion.div>
                    <motion.div variants={itemVariants} className="hidden lg:block lg:row-span-2 lg:col-start-6 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="hidden lg:block lg:row-start-3 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="hidden lg:block lg:col-span-4 lg:row-start-3 bg-white"></motion.div>
                    <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-start-3 bg-white"></motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default ProjectMenu;