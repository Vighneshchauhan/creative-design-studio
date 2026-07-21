import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import "./css/navbar.css";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Industries", link: "#industries" },
  { name: "Process", link: "#process" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">

        <a href="#home" className="logo">
          Creative<span>Studio</span>
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>


        <button
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </motion.header>
  );
}

export default Navbar;