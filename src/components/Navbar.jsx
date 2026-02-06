function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <span className="nav-logo">Zeeshu</span>
          <span className="nav-role">Frontend Developer</span>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
