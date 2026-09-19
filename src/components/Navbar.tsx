import { type Page } from '../App.tsx';

interface NavbarProps {
  setCurrentPage: (page: Page) => void;
  show: boolean;
}

function Navbar({ setCurrentPage, show }: NavbarProps) {
  return (
    <>
    <nav className={`fixed top-0 right-0 z-50 bg-black w-64 h-full 
                    ${show ? 'sidebar active' : 'sidebar'}`}>
      <div className="flex flex-col w-full place-content-between items-center gap-5 pr-15 pt-8 pl-14 pb-8 text-white"  >
        {/* <h1 className="text-2xl font-bold">FP</h1> */}
        <ul className="flex flex-col gap-3 font-semibold text-left w-full">
          <li className="w-full">
            <a
              onClick={() => setCurrentPage('home')}
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="w-full">
            <a
              onClick={() => setCurrentPage('projects')}
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Projects
            </a>
          </li>

          <li className="w-full">
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