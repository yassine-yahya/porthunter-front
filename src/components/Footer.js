import React from "react";
import porthunterlogo from "../Assets/porthunterlogo.png"
const Footer = () => {

    return(
<footer className="foo">
  <div className="logo">
        <img src={porthunterlogo} alt="Logo" width={50} />
        </div>
        <p>&copy; 2025 PortHunter. made in Barcelona with ❤️ All rights reserved.</p>
</footer>

    )
}
export default Footer;