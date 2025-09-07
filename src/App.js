import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// Placeholder components for each page
import About from "./pages/about";
import Home from "./pages/home";
import Members from "./pages/members";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Engage from "./pages/engage";
import Contact from "./pages/contact";

function App() {
  // State to manage the mobile navigation menu's expanded/collapsed state
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // State to manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState("home");

  // Function to handle navigation without a page reload
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsNavExpanded(false); // Close the mobile menu on click
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "members":
        return <Members />;
      case "events":
        return <Events />;
      case "gallery":
        return <Gallery />;
      case "engage":
        return <Engage />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="App">
        <header className="header">
          {" "}
          <div className="logo-container">
            <img src={logo} className="header-logo" alt="Logo" />
            <h1 className="site-title">
              Jawahar Navodaya Vidyalaya, Palair, Khammam - Alumni Association
            </h1>
          </div>
          <div className="header-content">
            {/*        <button
              className="hamburger"
              aria-label="Toggle navigation"
              aria-expanded={isNavExpanded}
              onClick={() => setIsNavExpanded((prev) => !prev)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button> */}
            <nav className={`nav-menu${isNavExpanded ? " expanded" : ""}`}>
              <ul>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("home")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("about")}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("members")}
                  >
                    Members
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("events")}
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("gallery")}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("engage")}
                  >
                    Engage
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => handlePageChange("contact")}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="page-content">{renderPage()}</main>
      </div>
    </>
  );
}

export default App;
