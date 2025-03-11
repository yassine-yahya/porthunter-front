import React, { useState } from "react";
import "../App.css"; // Custom CSS file for styling
import { Link } from "react-scroll";
import porthunterlogo from "../Assets/porthunterlogo.png";
import { Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={porthunterlogo} alt="Logo" width={200} />
      </div>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setMenuOpen(true)}>
        <Menu size={30} />
      </div>

      {/* Navigation Links */}
      <ul className={`links ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={30} />
        </div>

        <li>
          <Link to="about" smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="Docs" smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Docs
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Donate Button */}
      <div className="nav-btn">
        <a href="https://ko-fi.com/yassineyahya" target="_blank" rel="noopener noreferrer">
          <button>Donate</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
