import {useState} from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import ProjectMenu from './pages/ProjectMenu.tsx';
import { IoMenu } from "react-icons/io5";

import './App.css'
import Footer from './components/Footer.tsx';

export type Page = 'home' | 'about' | 'projects';

const renderContent = (page: Page) => {
  switch (page) {
    case 'home':
      return <Home />
    case 'about':
      return <About />
    case 'projects':
      return <ProjectMenu />
    default:
      return <Home />;
  }
};

function App() {
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <>
      <div className="fixed top-0 w-full p-10 justify-right">
          <IoMenu className="text-black text-3xl hover:cursor-pointer" onClick={() => setShowNav(!showNav)}/>
      </div>
      <Navbar setCurrentPage={setCurrentPage} show={showNav}/>
      {renderContent(currentPage)}
      <Footer />
    </>
  )
}

export default App
