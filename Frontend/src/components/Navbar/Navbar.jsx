import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <nav className={`navbar navbar-expand custom-navbar ${scrolling ? 'scrolled' : ''}`}>

        <div className="container menu-list-container">
          {/* Logo Section */}
          <div className="navbar-brand">
           
          </div>

          {/* Links Section */}
          <div className="collapse navbar-collapse">

            <ul className="navbar-nav ms-auto ">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >
                  Home
                </NavLink>


              </li>



              <li className="nav-item" >

                <NavLink
                  to="/credit-cards"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  Credit Cards
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="/credit-cards/welcome-offers">Welcome offers</NavLink>
                  <NavLink to="/credit-cards/balance-transfer">Balance transfer</NavLink>
                  <NavLink to="/credit-cards/airport-services">Airport services</NavLink>
                  <NavLink to="/credit-cards/free-for-life">Free for life </NavLink>

                </div>

                <svg width="28px" height="28px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#5C5F62" d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"></path></g></svg>

              </li>


              <li className="nav-item">
                <NavLink
                  to="/auto-loan"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  Auto Loan
                </NavLink>
                

              

              </li>
              <li className="nav-item">
                <NavLink
                  to="/personal-loan"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  Personal Loan
                </NavLink>
                

              </li>

              <li className="nav-item">

                <NavLink
                  to="/mortgage"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  Mortgage
                </NavLink>


              </li>

              <li className="nav-item">

                <NavLink
                  to="/hot-promotions"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  Hot Promotion
                </NavLink>

          

            

              </li>

              <li className="nav-item">
                <NavLink
                  to="/company-listing"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  Company check
                </NavLink>

                


              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>

  );
}

export default Navbar;
