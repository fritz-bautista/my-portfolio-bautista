import { Link } from 'react-router-dom';

interface NavbarProps {
  show: boolean;
}

function Navbar({show }: NavbarProps) {
  return (
    <>
    <nav className={`fixed top-0 right-0 z-50 bg-black w-64 h-full 
                    ${show ? 'sidebar active' : 'sidebar'}`}>
      <div className="flex flex-col w-full place-content-between items-center gap-5 pr-15 pt-8 pl-14 pb-8 text-white"  >
        {/* <h1 className="text-2xl font-bold">FP</h1> */}
        <ul className="flex flex-col gap-3 font-semibold text-left w-full">
          <li className="w-full">
            <Link
            to="/"
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
            to="/projects"
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Projects
            </Link>
          </li>

          <li className="w-full">
            <Link
            to="/contact"
              className="inline-block transition-all duration-200 hover:scale-110 hover:cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;