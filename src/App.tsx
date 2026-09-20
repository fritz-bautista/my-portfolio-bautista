import {useState} from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Import Router components
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import ProjectMenu from './components/ProjectMenu.tsx';
import ProjectPage from './components/ProjectPage.tsx';
import ProjectHome from './pages/ProjectHome.tsx';
import { IoMenu } from "react-icons/io5";

import './App.css'
import Footer from './components/Footer.tsx';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className={`fixed flex top-0 w-full p-10 z-[999] justify-end mix-blend-difference transition-transform duration-1100 ease-in-out ${
          showNav ? '-translate-x-64' : 'translate-x-0'
        }`}>
          <IoMenu className="text-white text-3xl hover:cursor-pointer" onClick={() => setShowNav(!showNav)}/>
      </div>
      <Navbar show={showNav}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectHome />} />
        <Route path="/projects/menu" element={<ProjectMenu />} />
        <Route path="/projects/menu/page" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
