import React from "react";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
        <MenuOutlined />
      </button>
      <div className="left" id={showMenu ? "hidden" : ""}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Services</a>
      </div>

      <div className="right">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
