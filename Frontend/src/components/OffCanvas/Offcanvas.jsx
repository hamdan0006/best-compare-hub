import React from 'react'
import './Offcanvas.css'
import { NavLink } from 'react-router-dom';


function Offcanvas() {
  return (
    <>
      <div className="canvas">
        <div class="three-line" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

          <svg
            id='three-line'
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#322f2f"
            stroke="#322f2f"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <defs>
                <style>
                  {`.cls-1 {
           fill: none;
           stroke: #3e3737;
           stroke-miterlimit: 10;
           stroke-width: 1.92px;
        }`}
                </style>
              </defs>
              <line className="cls-1" x1="0.5" y1="13" x2="23.5" y2="13"></line>
              <line className="cls-1" x1="0.5" y1="7.25" x2="23.5" y2="7.25"></line>
              <line className="cls-1" x1="0.5" y1="18.75" x2="12.96" y2="18.75"></line>
            </g>
          </svg>



        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">

            <ul className='offcanvas-menu'>

              <li className='offcanvas-menu-item'>
                <NavLink
                  class="canvas-main-hding navlink"
                  to="/"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >
                  <span className='canvas-main-hding'>
                    Home
                  </span>

                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>

                <div className="container-fluid drop-down-container-off-canvas">
                  <div className="row ">
                    <div className="col-10">
                      <NavLink
                        class="canvas-main-hding navlink"
                        to="/credit-cards"
                        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                      >
                        <p className=" d-flex align-items-center">
                          <span className='canvas-main-hding'>
                            Credit Cards
                          </span>
                        </p>
                      </NavLink>
                    </div>
                    <div className="col-2 text-end">
                      <span className="canvas-main-hding" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">

                        <span className="fs-4 ">+</span>
                      </span>

                    </div>
                  </div>
                </div>




                <div class="collapse sub-heading-main-container " id="collapseExample">

                  <div class="container sub-heading-container">
                    <p className='sub-heading'>
                      <NavLink
                        class="canvas-main-hding navink"
                        to="/credit-cards/welcome-offers "
                        className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                      >
                        <span className='canvas-sub-hding'>Welcome Offers</span>

                      </NavLink></p>
                    <p className='sub-heading'> <NavLink
                      class="canvas-main-hding navink"
                      to="/credit-cards/balance-transfer"
                      className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                      <span className='canvas-sub-hding'>Balance Transfer</span>

                    </NavLink></p>
                    <p className='sub-heading'> <NavLink
                      class="canvas-main-hding navink"
                      to="/credit-cards/airport-services"
                      className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                      <span className='canvas-sub-hding'>Airport Service</span>

                    </NavLink>


                    </p>




                  </div>



                </div>


              </li>

              <li className='offcanvas-menu-item'>
                <NavLink
                  class="canvas-main-hding navink"
                  to="/auto-loan"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >
                  <span className='canvas-main-hding'>Auto Loan</span>

                </NavLink>
              </li>


              <li className='offcanvas-menu-item'>
                <NavLink
                  class="canvas-main-hding navink"
                  to="/personal-loan"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >
                  <span className='canvas-main-hding'>Personal Loan</span>

                </NavLink>
              </li>



              <li className='offcanvas-menu-item'>
                <NavLink
                  class="canvas-main-hding navink"
                  to="/mortgage"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >

                  <span className='canvas-main-hding'>Mortgage</span>
                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink
                  class="canvas-main-hding navink"
                  to="/hot-promotions"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >
                  <span className='canvas-main-hding'> Hot Promotion</span>


                </NavLink>
              </li>

              <li className='offcanvas-menu-item'>
                <NavLink
                  class="canvas-main-hding navink"
                  to="/company-listing"
                  className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                >
                  <span className='canvas-main-hding'> Company Check</span>

                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offcanvas