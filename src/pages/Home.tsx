
import { motion } from "framer-motion";

import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Contact from '../components/Contact.tsx';
import History from '../components/History.tsx';
import Projects from '../components/Projects.tsx';

const FadeInOnScroll =  ({ children }: {children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full"
      initial={{opacity: 0}}
      whileInView={{opacity:  1}}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}  
    </motion.div>
  )
}

function Home() {
  return (
    <div 
      className="flex flex-col items-center w-full"
      >
        <Hero />

        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>
        
        <FadeInOnScroll>
          <Projects />
        </FadeInOnScroll>
        
        <FadeInOnScroll>
          <History />
        </FadeInOnScroll>
        
        <FadeInOnScroll>
          <Contact />
        </FadeInOnScroll>
    </div>
  )
}

export default Home;
