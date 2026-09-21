import {useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // 1. Import Router components
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import ProjectMenu from './components/ProjectMenu.tsx';
import ProjectPage from './components/ProjectPage.tsx';
import ProjectHome from './pages/ProjectHome.tsx';
import Contact from './components/Contact.tsx';
import { IoMenu } from "react-icons/io5";

import './App.css'
import Footer from './components/Footer.tsx';

function App() {

  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect (() => {
    window.scrollTo(0,0);
  }, [pathname]);



  return (
    <>
      <div className={`fixed flex top-0 w-full p-10 z-[999] justify-end mix-blend-difference pointer-events-none transition-transform duration-1100 ease-in-out ${
          showNav ? '-translate-x-64' : 'translate-x-0'
        }`}>
          <IoMenu className="text-white text-3xl cursor-pointer pointer-events-auto" onClick={() => setShowNav(!showNav)}/>
      </div>
      <Navbar show={showNav}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectHome />} />
        <Route path="/projects/menu" element={<ProjectMenu />} />
        <Route path="/projects/menu/page" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
