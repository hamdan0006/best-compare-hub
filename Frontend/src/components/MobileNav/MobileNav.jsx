import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const OffCanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <button className="dropdown-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Services
            </button>
            <ul className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">SEO Optimization</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        .hamburger {
          position: fixed;
          top: 15px;
          left: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: -100%;
          width: 250px;
          height: 100%;
          background: #222;
          color: white;
          transition: 0.3s ease-in-out;
          padding-top: 60px;
        }

        .sidebar.show {
          left: 0;
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: white;
        }

        .sidebar ul {
          list-style: none;
          padding: 20px;
        }

        .sidebar ul li {
          margin: 15px 0;
        }

        .sidebar ul li a,
        .dropdown-btn {
          text-decoration: none;
          color: white;
          font-size: 18px;
          display: block;
          padding: 10px;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .dropdown {
          display: none;
          padding-left: 15px;
        }

        .dropdown.open {
          display: block;
        }

        .dropdown li {
          margin: 5px 0;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default OffCanvasMenu;
