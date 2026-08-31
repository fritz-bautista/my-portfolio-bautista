import React from "react";
// 1. Importing framer-motion and the Variants type
import { motion, type Variants } from "framer-motion";

// 2. Defining Variants with the TypeScript type applied
const marqueeVariants: Variants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

// 3. Typed as a React Functional Component (React.FC)
const Marquee: React.FC = () => {
  return (
    <div>
      <div className="marquee">
        {/* 4. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            Passion - Purpose - Identity - Passion - Purpose - Identity - Passion - Purpose - Identity - Passion - Purpose - Identity - Passion - Purpose - Identity - Passion - Purpose - Identity
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;