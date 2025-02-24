import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>

    <main className='footer'>
      <div className='container-fluid'>

        <div className='row d-flex justify-content-center align-items-center'>

          <div className='col-lg-2 col-md-6 col-sm-12'>
            <div className="footer-container">
              

              <ul className='footer-main-list'>
                <li>
                <h5>Why us</h5>

              </li>

                <li className='footer-main-list-item'>Our Story</li>
                <li className='footer-main-list-item'>Special Offers</li>
                <li className='footer-main-list-item'>Benifit and Services</li>

              </ul>

            </div>

          </div>

          <div className='col-lg-2 col-md-6 col-sm-12'>
            <div className="footer-container">
               <ul className='footer-main-list'>
                <li>
                <h5>Wealth Management
                </h5>

              </li>
                <li  className='footer-main-list-item'>Our Story</li>
                <li className='footer-main-list-item'>Special Offers</li>
                <li className='footer-main-list-item'>Benifit and Services</li>

              </ul>

              </div>

          </div>

          <div className='col-lg-2 col-md-6 col-sm-12'>
            <div className="footer-container">

            <ul className='footer-main-list'>
                <li>
                <h5>
                Business Banking
                </h5>

              </li>
                <li className='footer-main-list-item'>Small Business account</li>
                <li className='footer-main-list-item'>Commercial Business account</li>
                <li className='footer-main-list-item'>Personal account</li>


              </ul>

            </div>

          </div>

          <div className='col-lg-2 col-md-6 col-sm-12'>
            <div className="footer-container">

            <ul >
                <li>
                <h5>
                Rates
                </h5>

              </li>
              <NavLink className='navlink' to='/credit-cards'>
              <li className='footer-main-list-item'>Credit Cards</li>

              </NavLink>
              <NavLink className='navlink' to='/personal-loan'>
              <li className='footer-main-list-item'>Personal-Loan</li>

              </NavLink>
              <NavLink className='navlink' to='/mortgage'>
              <li className='footer-main-list-item'>Mortgage</li>

              </NavLink>
                <li className='footer-main-list-item'></li>


              </ul>


            </div>

          </div>

          <div className='col-lg-2 col-md-6 col-sm-12'>
            <div className="footer-container">

            <ul className='footer-main-list'>
                <li>
                <h5>
                Help & Support

                </h5>

              </li>
              <NavLink className='navlink' to='/contact-us'>
              <li className='footer-main-list-item'>Contact Us</li>

              </NavLink>
                <li className='footer-main-list-item'>Help & FAQs</li>
                <li className='footer-main-list-item'>Security Center</li>
                <li className='footer-main-list-item'></li>

                


              </ul>
              
            </div>

          </div>

        </div>

        

      </div>

      <div className="social-m-icons container-fluid">
          <div className="row d-flex justify-content-end align-items-center">
            <div className='icons col-lg-1 col-sm-6 col-md-4'>

             <img src="/footer-img/fblogos.png" alt="" className='logo'/>
             <img src="/footer-img/xlogo.png" alt="" className='logo'/>
             <img src="/footer-img/ytlogo.png" alt="" className='logo'/>



              
              
              </div>
           

          </div>
        </div>

        <div className="terms">
          

          <ul className='term-list'>

            <li className="term-list-item">
              Terms & condition
            </li>

            <li className="term-list-item">
              <NavLink className='navlink' to ='/privacy-policy' >
              Privacy Policy
              </NavLink>
            </li>

            <li className="term-list-item">
              Notice at Collection
            </li>

            <li className="term-list-item">
              Accessability
            </li>

           

          </ul>
          

          </div>

          <div className="legal">
            <h4>Important Legal Disclosures & Information</h4>
            <p>The content on BestCompareHub about financial products is for general informational purposes only. We strive for accuracy but do not guarantee the reliability, completeness, or suitability of the information provided.</p>
          </div>

          
          <div className="copy-rights">

            © 2025 bestcomparehub. All Rights Reserved.
            </div>

    </main>
    </>
  )
}

export default Footer