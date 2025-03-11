import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import SearchBar from "../CommonSearch/CommonSearch";
import CommonSearchCont from "../CommonSearchCont/CommonSearchCont";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const toggleSearch = () => {
    setIsSearchOpen(false); // Ensure it closes first
    setTimeout(() => {
      setIsSearchOpen((prev) => !prev); // Then toggle state after a short delay
    }, 10); // Small delay to allow re-render
  };



  return (
    <nav className={`navbar navbar-expand custom-navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="container menu-list-container">
        {/* Logo */}
        <div className="navbar-brand">
          {/* <span id="logo">Best Compare Hub</span> */}
          <div className="logo-section-nav">
                    <img src="/logo-f.jpg" alt=""  id='main-logo'/>
                  </div>
          

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

            <li className="nav-item dropdown">
              <NavLink
                to="/Islamic-finance"
                className={({ isActive }) =>
                  `${isActive ? "active-link" : "inactive-link"} ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Islamic Finance
              </NavLink>

            </li>


            {/* Company Check with Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                
                className={({ isActive }) =>
                  `inactive-link ${scrolling ? "scrolled-link" : ""}`
                }
              >
                Other Services
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/Debt-consolidation" className="dropdown-item">
                  Debt Consolidation
                </NavLink>
                <NavLink to="/company-listing" className="dropdown-item">
                  Company Listing
                </NavLink>

              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="search-svg-cont" onClick={toggleSearch}>
                <svg className="search-item" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                  <path fill={scrolling ? "black" : "white"} d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
                </svg>
              </div>



            </li>

          </ul>

        </div>
      </div>
      {isSearchOpen && (
        <div >
          <SearchBar />
        </div>
      )}
    </nav>
  );
}

export default Navbar;