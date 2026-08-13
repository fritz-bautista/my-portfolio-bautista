function Navbar() {
  return (
    <>
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex place-content-between items-center pr-15 pt-8 pl-14" >
        <h1 className="text-2xl font-bold">FP</h1>
        <ul className="flex font-semibold">
          <li className="w-20 text-center">
            <a
              href="#about"
              className="inline-block transition-all duration-200 hover:scale-110"
            >
              About
            </a>
          </li>
          <li className="w-20 text-center">
            <a
              href="#projects"
              className="inline-block transition-all duration-200 hover:scale-110"
            >
              Projects
            </a>
          </li>
          <li className="w-20 text-center">
            <a
              href="#skills"
              className="inline-block transition-all duration-200 hover:scale-110"
            >
              Skills
            </a>
          </li>

          <li className="w-20 text-center">
            <a
              href="#contact"
              className="inline-block transition-all duration-200 hover:scale-110"
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