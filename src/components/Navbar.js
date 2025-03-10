import React from "react";
import "../App.css"; // Custom CSS file for styling
import { Link } from 'react-scroll';
import porthunterlogo from "../Assets/porthunterlogo.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">

        <img src={porthunterlogo} alt="Logo" width={200} />
      </div>
      <ul className="links">
        
        <li>
        <Link 
            to="about" 
            smooth={true} 
            offset={-70} 
            duration={500} 
          >
          About
          </Link>
        </li>
        
        <li>
        <Link 
            to="Docs" 
            smooth={true} 
            offset={-70} 
            duration={500} 
          >
          Docs
          </Link>
        </li>
        <li>
        <Link 
            to="Contact" 
            smooth={true} 
            offset={-70} 
            duration={500} 
          >
          Contact
          </Link>
        </li>
      </ul>
      <div className="nav-btn">
      <a href="https://ko-fi.com/yassineyahya" target="_blank" rel="noopener noreferrer">
        <button>Donate</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
