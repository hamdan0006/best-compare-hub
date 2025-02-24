import React from 'react';
import './Mortgage.css';
import { NavLink } from 'react-router-dom';

function Mortgage({ bankName, bankLogo, planName, minSalary, fixedRate, applyLink }) {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mortgage-main">
        <div className="w-90 w-md-75 p-3 border mortgage-container">
          {/* First Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            
            <div className="p-3 text-center text-md-start">
              <p className="fs-3 m-f-color fw-medium">{bankName}</p>
            </div>
            <div className="p-3 d-flex justify-content-center justify-content-md-end align-items-end">
              <div className="img-container">
                <img
                  className="bnk-logo img-fluid"
                  src={bankLogo}
                  alt={`${bankName} Logo`}
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="p-3 text-center text-md-start">
              <p className="fs-5 fw-medium">Offers</p>
              <p className="fs-5 fw-medium m-f-color">
                {planName}
              </p>
            </div>
            <div className="p-3 d-flex flex-column align-items-center align-items-md-end">
              <p className="fs-5 fw-medium m-f-color">Minimum Salary (AED)</p>
              <span className="fs-5 fw-medium">{minSalary}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Third Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="p-3 text-center text-md-start">
              <p className="fs-5 fw-medium m-f-color">Fixed Rate</p>
              <p className="fs-5 fw-medium m-f-color">{fixedRate}</p>
            </div>
            <div className="p-3 d-flex justify-content-center justify-content-md-end">
                <NavLink to={applyLink} >
                <button className="mor-apply-btn btn btn-primary" role="button">
                Apply Now
              </button>
                </NavLink>
              
            </div>
          </div>

          {/* List Container */}
          
        </div>
      </div>
    </>
  );
}

export default Mortgage;