import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="JNV Logo" className="header-logo" />
            <h1 className="site-title">JNV Alumni</h1>
          </div>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* Hamburger icon lines */}
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        <nav className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/members">Members</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/engage">Engage</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Welcome to JNV Alumni</p>
      </main>
    </div>
  );
}

export default App;
