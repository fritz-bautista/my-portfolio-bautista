import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Contact from '../components/Contact.tsx';
import History from '../components/History.tsx';
import Projects from '../components/Projects.tsx';
import Footer from '../components/Footer.tsx';
import TextMarquee from '../components/TextMarquee.tsx';
import VideoPresentation from '../components/VideoPresentation.tsx';

function Home() {
  return (
    <>
    <div className="flex flex-col items-center w-full">
      <Hero />
      <TextMarquee />
      <About />
      <Projects />
      <VideoPresentation />
      <History />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default Home;
