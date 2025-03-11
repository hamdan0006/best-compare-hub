import React, { useState, useEffect } from "react";
import './Offcanvas.css';
import { NavLink } from 'react-router-dom';
import SearchBar from "../CommonSearch/CommonSearch";



function Offcanvas() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
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
    
  
    const toggleSearch = () => {
      setIsSearchOpen(false); // Ensure it closes first
      setTimeout(() => {
        setIsSearchOpen((prev) => !prev); // Then toggle state after a short delay
      }, 10); // Small delay to allow re-render
    };
  return (
    <>
      <div className={`canvas ${scrolling ? "scrolled" : ""}`}>
<div className="mobile-res-container">

<div className={`mobile-res-container-elem ${scrolling ? "scrolled-bg" : ""}`}>

        <div className="three-line" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <svg  
  width="50px" 
  height="30px" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg" 
  fill={scrolling ? "black" : "white"} 
  stroke={scrolling ? "black" : "white"} 
  strokeWidth="2" 
  className="three-line"
>
  <g strokeLinecap="round" strokeLinejoin="round">
    <line className="cls-1" x1="0.5" y1="13" x2="23.5" y2="13"></line>
    <line className="cls-1" x1="0.5" y1="7.25" x2="23.5" y2="7.25"></line>
    <line className="cls-1" x1="0.5" y1="18.75" x2="12.96" y2="18.75"></line>
  </g>
</svg>


        </div>

        <div className="search-svg-cont" onClick={toggleSearch}>
        <svg 
  className="search-item" 
  xmlns="http://www.w3.org/2000/svg" 
  x="0px" 
  y="0px" 
  width="30" 
  height="30" 
  viewBox="0 0 30 30" 
  stroke={scrolling ? "black" : "white"} 
  fill={scrolling ? "black" : "white"}
>
  <path  
    d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"
  ></path>
</svg>

              </div>

              </div>

        </div>


        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className='offcanvas-menu'>
              <li className='offcanvas-menu-item'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} data-bs-dismiss="offcanvas">
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Home</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink to="/credit-cards" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Credit-Cards</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink to="/auto-loan" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Auto Loan</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink to="/personal-loan" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Personal Loan</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink to="/mortgage" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Mortgage</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink to="/hot-promotions" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Hot Promotion</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink to="/islamic-finance" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  <span className='canvas-main-hding' data-bs-dismiss="offcanvas">Islamic Finance</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <div className="container-fluid drop-down-container-off-canvas">
                  <div className="row">
                    <div className="col-10">
                      <NavLink  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                        <p className="d-flex align-items-center" >
                          <span className='canvas-main-hding' >Other Services</span>
                        </p>
                      </NavLink>
                    </div>
                    <div className="col-2 text-end">
                      <span className="canvas-main-hding" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <span className="fs-1">+</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="collapse sub-heading-main-container" id="collapseExample">
                  <div className="container sub-heading-container">
                    <p className='sub-heading'>
                      <NavLink to="/company-listing" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                        <span className='canvas-sub-hding' data-bs-dismiss="offcanvas">Comapny Listing</span>
                      </NavLink>
                    </p>

                    <p className='sub-heading'>
                      <NavLink to="/debt-consolidation" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                        <span className='canvas-sub-hding' data-bs-dismiss="offcanvas">Debt Consolidation</span>
                      </NavLink>
                    </p>



                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div >
          <SearchBar />
        </div>
      )}
    </>
  );
}

export default Offcanvas;
