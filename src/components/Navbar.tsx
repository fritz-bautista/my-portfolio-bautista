import { type Page } from '../App.tsx';

interface NavbarProps {
  setCurrentPage: (page: Page) => void;
}

function Navbar({ setCurrentPage }: NavbarProps) {
  return (
    <>
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex place-content-between items-center pr-15 pt-8 pl-14" >
        <h1 className="text-2xl font-bold">FP</h1>
        <ul className="flex font-semibold">
          <li className="w-20 text-center">
            <a
              onClick={() => setCurrentPage('home')}
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="w-20 text-center">
            <a
              onClick={() => setCurrentPage('about')}
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              About
            </a>
          </li>
          <li className="w-20 text-center">
            <a
              onClick={() => setCurrentPage('projects')}
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Projects
            </a>
          </li>

          <li className="w-20 text-center">
            <a
              href="#contact"
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;