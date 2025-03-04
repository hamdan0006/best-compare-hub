import React from 'react';
import './Offcanvas.css';
import { NavLink } from 'react-router-dom';

function Offcanvas() {
  return (
    <>
      <div className="canvas">
        <div className="three-line" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <svg id='three-line' width="50px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#322f2f" stroke="black">
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <line className="cls-1" x1="0.5" y1="13" x2="23.5" y2="13"></line>
              <line className="cls-1" x1="0.5" y1="7.25" x2="23.5" y2="7.25"></line>
              <line className="cls-1" x1="0.5" y1="18.75" x2="12.96" y2="18.75"></line>
            </g>
          </svg>
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
                <div className="container-fluid drop-down-container-off-canvas">
                  <div className="row">
                    <div className="col-10">
                      <NavLink to="/company-listing" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                        <p className="d-flex align-items-center" data-bs-dismiss="offcanvas">
                          <span className='canvas-main-hding'>Other Services</span>
                        </p>
                      </NavLink>
                    </div>
                    <div className="col-2 text-end">
                      <span className="canvas-main-hding" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <span className="fs-4">+</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="collapse sub-heading-main-container" id="collapseExample">
                  <div className="container sub-heading-container">
                    <p className='sub-heading'>
                      <NavLink to="/Islamic-finance" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                        <span className='canvas-sub-hding' data-bs-dismiss="offcanvas">Islamic Finance</span>
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
    </>
  );
}

export default Offcanvas;
