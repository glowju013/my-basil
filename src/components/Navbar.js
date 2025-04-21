import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png"
function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <button className="hamburger" onClick={toggleSidebar}>
              ☰
            </button>
          
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          </div>
          </div>
        </nav>

        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <ul className="sidebar-menu">
            <li>
              <Link to="/" onClick={toggleSidebar}>
                홈
              </Link>
            </li>
            <li>
              <Link  onClick={toggleSidebar}>
                바질
              </Link>
            </li>
            <li>
              <Link onClick={toggleSidebar}>
                츄르
              </Link>
            </li>
          </ul>
        </div>
        {isSidebarOpen && <div className="overlay" onClick={toggleSidebar} />}
      </>
    );
}

export default Navbar;