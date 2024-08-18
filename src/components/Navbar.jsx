import React, { useState } from "react";
import "./navbar.css";
import Hamburger from "./Hamburger";

function Navbar() {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    sethamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-brush-circle-creative-brush-effect-png-image_6020152.jpg"></img>
      </div>
      <ul className="list">
        <li>
          {" "}
          <a> Home </a>
        </li>
        <li>
          {" "}
          <a> Projects </a>
        </li>
        <li>
          {" "}
          <a> About </a>
        </li>
        <li>
          {" "}
          <a> Contact </a>
        </li>
      </ul>
      <div className="mobile-view" onClick={toggleHamburger}>
        <Hamburger />
        <ul className="mobileList">
          <li>
            {" "}
            <a> Home </a>
          </li>
          <li>
            {" "}
            <a> Projects </a>
          </li>
          <li>
            {" "}
            <a> About </a>
          </li>
          <li>
            {" "}
            <a> Contact </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .mobileList {
          width: 100vw;
          height: 100vh;
          margin-top: 70px;
          position: absolute;
          display: ${hamburgerOpen ? "flex" : "none"};
          background-color: aqua;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
