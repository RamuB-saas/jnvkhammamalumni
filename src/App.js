import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Home = () => <h2>Welcome to the Homepage</h2>;
const About = () => <h2>About Us</h2>;
const Members = () => <h2>Members Directory</h2>;
const Events = () => <h2>Upcoming Events</h2>;
const Gallery = () => <h2>Photo Gallery</h2>;
const Engage = () => <h2>Engage with Alumni</h2>;
const Contact = () => <h2>Contact Us</h2>;

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
      <style>
        {`
          /* General Styles for the Header and Nav */
          body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
          }

          .header {
            background-color: #f0f0f0;
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo-container {
            display: flex;
            align-items: center;
          }

          .header-logo {
            height: 50px;
            margin-right: 15px;
          }

          .site-title {
            margin: 0;
            font-size: 1.5rem;
          }

          .nav-menu ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex; /* Default: horizontal nav for desktop */
          }

          .nav-menu li a {
            display: block;
            padding: 1rem;
            text-decoration: none;
            color: #333;
          }

          .nav-menu li a:hover {
            background-color: #ddd;
          }

          .nav-link-btn {
            background: none;
            border: none;
            padding: 1rem;
            color: #333;
            text-align: left;
            width: 100%;
            cursor: pointer;
            font: inherit;
            text-decoration: none;
            display: block;
          }

          .nav-link-btn:hover,
          .nav-link-btn:focus {
            background-color: #ddd;
            outline: none;
          }

          /* Hide hamburger button by default on desktop */
          .hamburger {
            display: none;
          }

          .page-content {
            padding: 2rem;
            text-align: center;
          }

          /* --- Mobile Styles --- */
          @media screen and (max-width: 768px) {
            .header-content {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .nav-menu {
              position: absolute;
              top: 60px; /* Adjust based on header height */
              left: 0;
              width: 100%;
              background-color: #fff;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              transform: translateY(-100%);
              transition: transform 0.3s ease-in-out;
            }

            /* Show the nav menu when the 'expanded' class is active */
            .nav-menu.expanded {
              transform: translateY(0);
            }

            .nav-menu ul {
              flex-direction: column; /* Stacks nav items vertically */
            }

            /* Show the hamburger button on mobile */
            .hamburger {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 25px;
              height: 20px;
              background: none;
              border: none;
              cursor: pointer;
              padding: 0;
            }

            .hamburger-line {
              width: 100%;
              height: 3px;
              background-color: #333;
            }
          }
        `}
      </style>
      <div className="App">
        <header className="header">
          <div className="header-content">
            <div className="logo-container">
              <img src={logo} className="header-logo" alt="Logo" />
              <h1 className="site-title">
                Jawahar Navodaya Vidyalaya, Palair, Khammam - Alumni Association
              </h1>
            </div>
            <button
              className="hamburger"
              aria-label="Toggle navigation"
              aria-expanded={isNavExpanded}
              onClick={() => setIsNavExpanded((prev) => !prev)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
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
