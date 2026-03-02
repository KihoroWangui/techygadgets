import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>

      <ul className={open ? "active" : ""}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
        </li>
        <li>
          <li>
          <Link to="/auth" onClick={() => setOpen(false)}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;