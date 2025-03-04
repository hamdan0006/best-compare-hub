import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand custom-navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="container menu-list-container">
        {/* Logo */}
        <div className="navbar-brand">
          <span id="logo">Best Compare Hub</span>
        </div>

        {/* Menu Items */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/credit-cards"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Credit Cards
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/auto-loan"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Auto Loan
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/personal-loan"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Personal Loan
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/mortgage"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Mortgage
              </NavLink>
            </li>

            {/* Hot Promotion with Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/hot-promotions"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Hot Promotion
              </NavLink>
           
            </li>

            {/* Company Check with Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/company-listing"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Other Services
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/Islamic-finance" className="dropdown-item">
                  Islamic Finance
                </NavLink>
                <NavLink to="/Debt-consolidation" className="dropdown-item">
                  Debt Consolidation
                </NavLink>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;