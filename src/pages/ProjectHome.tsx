import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProjectHome() {

  const navigate = useNavigate();

  const category = {
    web: "webProjectData",
    graph: "graphProjectData"
  }
    
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
        <div className="flex flex-col items-center w-full h-screen bg-black font-google">
            {/* RESPONSIVE CONTAINER: Stacks vertically on mobile, 6x5 grid on large screens */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-5 gap-0.5 w-full h-full m-0.5"
            >
                {/* Spacers - Hidden on mobile, block on desktop */}
                <motion.div variants={itemVariants} className="hidden lg:block bg-white"></motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:row-span-3 lg:col-start-1 lg:row-start-2 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-1 lg:row-start-5 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-span-4 bg-white"></motion.div>
                
                {/* Software Development Button */}
                {/* Added flex-1 for mobile so it takes up half the vertical space */}
                <motion.div 
                    variants={itemVariants} 
                    className="flex-1 lg:flex-none w-full h-full lg:col-span-2 lg:row-span-3 lg:col-start-2 lg:row-start-2 bg-blue-700 flex items-center justify-center hover:cursor-pointer lg:hover:scale-105 transition duration-300 ease-in-out p-5 lg:p-0"
                    onClick={() => navigate('/projects/menu', {state: category.web})}
                >
                    <h1 className="text-3xl lg:text-3xl xl:text-4xl text-white font-bold text-center">Software Development</h1>
                </motion.div>
                
                {/* Graphic Designing Button */}
                {/* Added flex-1 for mobile so it takes up half the vertical space */}
                <motion.div 
                    variants={itemVariants} 
                    className="flex-1 lg:flex-none w-full h-full lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-2 bg-yellow-500 flex items-center justify-center hover:cursor-pointer lg:hover:scale-105 transition duration-300 ease-in-out p-5 lg:p-0"
                    onClick={() => navigate('/projects/menu', {state: category.graph})}
                >
                    <h1 className="text-3xl lg:text-3xl xl:text-4xl text-white font-bold text-center">Graphic Designing</h1>
                </motion.div>
                
                {/* Bottom & Right Spacers - Hidden on mobile, block on desktop */}
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-span-4 lg:col-start-2 lg:row-start-5 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-span-3 lg:row-start-2 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="hidden lg:block lg:col-start-6 lg:row-start-1 bg-white"></motion.div>
            </motion.div>
        </div>
    )
}

export default ProjectHome;