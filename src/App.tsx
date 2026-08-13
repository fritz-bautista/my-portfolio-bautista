import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';
import TextMarquee from './components/TextMarquee.tsx';
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center w-full">
      <Hero />
      <TextMarquee />
      <About />
    </div>
    {/* 
    <Projects />
    <Skills />
    <Contact />
    <Footer /> */}
    </>
  )
}

export default App
