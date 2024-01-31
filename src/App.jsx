import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="left">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Services</a>
          <button className="menu-button">Open</button>
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
