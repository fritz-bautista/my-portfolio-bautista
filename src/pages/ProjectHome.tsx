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
        <div className="flex flex-col items-center w-full h-screen bg-black font-google">
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-6 grid-rows-5 gap-0.5 w-full h-full m-0.5">
                <motion.div variants={itemVariants} className="bg-white"></motion.div>
                <motion.div variants={itemVariants} className="row-span-3 col-start-1 row-start-2 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="col-start-1 row-start-5 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="col-span-4 bg-white"></motion.div>
                <motion.div 
                variants={itemVariants} 
                className="col-span-2 row-span-3 col-start-2 row-start-2 bg-blue-700 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => navigate('/projects/menu', {state: category.web})}
                >
                    <h1 className="xl:text-4xl text-white font-bold">Software Development</h1>
                </motion.div>
                <motion.div 
                variants={itemVariants} 
                className="col-span-2 row-span-3 col-start-4 row-start-2 bg-yellow-500 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => navigate('/projects/menu', {state: category.graph})}
                >
                    <h1 className="lg:text-3xl xl:text-4xl text-white font-bold">Graphic Designing</h1>
                </motion.div>
                <motion.div variants={itemVariants} className="col-span-4 col-start-2 row-start-5 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="col-start-6 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="col-start-6 row-span-3 row-start-2 bg-white"></motion.div>
                <motion.div variants={itemVariants} className="col-start-6 row-start-1 bg-white"></motion.div>
            </motion.div>
        </div>
    )
}

export default ProjectHome;