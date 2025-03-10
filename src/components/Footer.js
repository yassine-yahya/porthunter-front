import React from "react";
import porthunterlogo from "../Assets/porthunterlogo.png"
const Footer = () => {
    return(
<footer>
<p>  <div className="logo">
        <img src={porthunterlogo} alt="Logo" width={100} />
        </div>&copy; 2025 PortHunter. made in Barcelona with ❤️ All rights reserved.</p>
</footer>

    )
}
export default Footer;