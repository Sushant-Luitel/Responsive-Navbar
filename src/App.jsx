import { useState } from "react";
import "./App.css";
import { MenuOutlined } from "@ant-design/icons";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
