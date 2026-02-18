import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.png"; // make sure the file is here

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Logo" /> {/* Use the imported variable */}
      </a>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>
      <ul className={open ? "active" : ""}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">How It Works</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
