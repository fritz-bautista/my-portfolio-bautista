import {useState} from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import ProjectPage from './pages/ProjectPage.tsx';

import './App.css'

export type Page = 'home' | 'about' | 'projects';

const renderContent = (page: Page) => {
  switch (page) {
    case 'home':
      return <Home />
    case 'about':
      return <About />
    case 'projects':
      return <ProjectPage />
    default:
      return <Home />;
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <>
    <Navbar setCurrentPage={setCurrentPage} />
    {renderContent(currentPage)}
    </>
  )
}

export default App
