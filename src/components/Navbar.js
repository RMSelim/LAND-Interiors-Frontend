import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="" />
        <ul className="ul1">
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>Studio</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>

        <ul className="ul2">
          <li>
            <button>Join as Design Expert</button>
          </li>
          <li>
            <button>Partner with LAND Interiors</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
