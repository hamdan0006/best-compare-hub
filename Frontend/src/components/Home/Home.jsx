import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet-async";


function Home() {
  return (
    <>
   <Helmet>
   <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Compare banking products, including home loans, auto loans, mortgages, and credit cards. Find the best financial solutions tailored to your needs." />
    <meta name="keywords" content="home loan, auto loan, mortgage, credit cards, banking products, loan comparison, finance solutions" />
    <meta name="author" content="Your Bank Name" />
    <meta name="robots" content="index, follow"/>
    <title>Compare Best Banking Products </title>

        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BestCompareHub",
    "description": "Compare and apply for the best financial products.",
    "publisher": {
      "@type": "Organization",
      "name": "BestCompareHub"
    }
  })}
</script>

      </Helmet>


    
      <main className='home flex'>

        <section className='hero flex '>
          <div className='hero-content px-1 py-5 mx-5 mt-5'>
            <h1 className='mb-1 '>
              Compare
              <span>.Choose. Save</span>
            </h1>
            <div className='txt-container'>
              <p>Find and apply for the best financial products tailored to your needs, and get approved faster with <span> BestCompareHub </span></p>
            </div>
            <NavLink to='/credit-cards' title="Explore and compare credit cards">
              <button type="button" class="button ">Inquire Now</button>
            </NavLink>


          </div>


        </section>


        {/* main section 1 */}
        <div class="container-fluid container-1">

          <div class="row d-flex justify-content-center align-items-center">

            <div class="col-lg-2 col-md-6 col-sm-12 custom-column">
              <div class="custom-container">

                <svg width="44px" height="44px" viewBox="-5.76 -5.76 35.52 35.52" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#918d8d"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-5.76" y="-5.76" width="35.52" height="35.52" rx="17.76" fill="#DCDCDA" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M6 15H8M3 11H21M3 8H21M12 15H16M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#056DAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M6 15H8M3 11H21M3 8H21M12 15H16M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#056DAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                <h6>Credit Cards</h6>

                <div className="row mt-4">
                  <div className='col-lg-6'>
                    <NavLink to='credit-cards'>
                    <button className='button-view'>View Cards</button>

                    </NavLink>
                  </div>

                  <div className="col-lg-4">
                  <NavLink to='credit-cards'>

                    <button type="button" class="button-apply">Apply Now</button>
                    </NavLink>


                  </div>

                </div>



              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-12 custom-column">
                <div class="custom-container">


                  <svg width="44px" height="44px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#DCDCDA" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9264 5.32698 19.3619C5 18.7202 5 17.8801 5 16.2V9.7774M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z" stroke="#056DAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                  <h6>Mortgage</h6>

                  <div className="row mt-4">
                    <div className='col-lg-6'>
                    <NavLink to='/mortgage' className='custom-Navlink'>

                      <button className='button-view button-view-txt'>Rate Calculator</button>
                     </NavLink>
                    </div>

                    <div className="col-lg-4">
                    <NavLink to='/mortgage' className='custom-Navlink'>

                      <button type="button" class="button-apply">Apply Now</button>
                      </NavLink>

                    </div>

                  </div>


                </div>

            </div>


            <div class="col-lg-2 col-md-6 col-sm-12 custom-column">
              <div class="custom-container">

                <svg width='44' height='44' viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#DCDCDA" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.77988 6.77277C6.88549 6.32018 7.28898 6 7.75372 6H16.2463C16.711 6 17.1145 6.32018 17.2201 6.77277L17.7398 9H17H7H6.26019L6.77988 6.77277ZM2 11H2.99963C2.37194 11.8357 2 12.8744 2 14V15C2 16.3062 2.83481 17.4175 4 17.8293V20C4 20.5523 4.44772 21 5 21H6C6.55228 21 7 20.5523 7 20V18H17V20C17 20.5523 17.4477 21 18 21H19C19.5523 21 20 20.5523 20 20V17.8293C21.1652 17.4175 22 16.3062 22 15V14C22 12.8744 21.6281 11.8357 21.0004 11H22C22.5523 11 23 10.5523 23 10C23 9.44772 22.5523 9 22 9H21C20.48 9 20.0527 9.39689 20.0045 9.90427L19.9738 9.77277L19.1678 6.31831C18.851 4.96054 17.6405 4 16.2463 4H7.75372C6.35949 4 5.14901 4.96054 4.8322 6.31831L4.02616 9.77277L3.99548 9.90426C3.94729 9.39689 3.51999 9 3 9H2C1.44772 9 1 9.44772 1 10C1 10.5523 1.44772 11 2 11ZM7 11C5.34315 11 4 12.3431 4 14V15C4 15.5523 4.44772 16 5 16H6H18H19C19.5523 16 20 15.5523 20 15V14C20 12.3431 18.6569 11 17 11H7ZM6 13.5C6 12.6716 6.67157 12 7.5 12C8.32843 12 9 12.6716 9 13.5C9 14.3284 8.32843 15 7.5 15C6.67157 15 6 14.3284 6 13.5ZM16.5 12C15.6716 12 15 12.6716 15 13.5C15 14.3284 15.6716 15 16.5 15C17.3284 15 18 14.3284 18 13.5C18 12.6716 17.3284 12 16.5 12Z" fill="#056DAE"></path> </g></svg>

                <h6>Auto Loan</h6>

                <div className="row mt-4">
                  <div className='col-lg-6'>
                  <NavLink to='/auto-loan' className='custom-Navlink'>

                    <button className='button-view button-view-txt'>Rate Calculator</button>
                    </NavLink>

                  </div>

                  <div className="col-lg-4">
                  <NavLink to='/auto-loan' className='custom-Navlink'>

                    <button type="button" class="button-apply">Apply Now</button>
                    </NavLink>


                  </div>

                </div>


              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12 custom-column">
              <div class="custom-container">
                <svg height="44px" width="44px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    <rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="307.2" fill="#DCDCDA" strokeWidth="0"></rect>
                  </g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path style={{ fill: "#056DAE" }} d="M341.942,356.432c-20.705-12.637-28.134-11.364-28.134-36.612c0-8.837,0-25.256,0-40.403 c11.364-12.62,15.497-11.049,25.107-60.597c19.433,0,18.174-25.248,27.34-47.644c7.471-18.238,1.213-25.632-5.08-28.654 c5.144-66.462,5.144-112.236-70.292-126.436c-27.344-23.437-68.605-15.48-88.158-11.569c-19.536,3.911-37.159,0-37.159,0 l3.356,31.49c-28.608,34.332-14.302,80.106-18.908,106.916c-6.002,3.27-11.416,10.809-4.269,28.253 c9.165,22.396,7.906,47.644,27.34,47.644c9.61,49.548,13.742,47.977,25.107,60.597c0,15.147,0,31.566,0,40.403 c0,25.248-8.581,25.683-28.133,36.612c-47.14,26.349-108.569,41.658-119.575,124.01C48.468,495.504,134.952,511.948,256,512 c121.048-0.052,207.528-16.496,205.517-31.558C450.511,398.09,388.519,384.847,341.942,356.432z"></path>
                  </g>
                </svg>
                <h6>Personal Loan</h6>

                <div className="row mt-4">
                  <div className='col-lg-6'>
                  <NavLink to='/personal-loan' className='custom-Navlink'>

                    <button className='button-view button-view-txt '>Rate Calculator</button>
                    </NavLink>

                  </div>

                  <div className="col-lg-4">
                  <NavLink to='/personal-loan' className='custom-Navlink'>

                    <button type="button" class="button-apply">Apply Now</button>
                    </NavLink>


                  </div>

                </div>

              </div>
            </div>


          </div>

        </div>


        {/* main section 2 */}

        <div className="container-fluid d-flex justify-content-center align-items-center mb-5">
          <div className="row align-items-center w-80 ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="acc-content">
                <h1>News & Promotions</h1>

                <p className="acc-content-txt">
                  <ul className='news-list'>
                    <li><b> Exclusive Deals:</b> Find limited time promotion and low interest rates from top banks </li>

                    <li><b> Financial News:</b> Stay informed with the latest trends and updates in personal finance </li>


                  </ul>


                </p>
                <NavLink to='/personal-loan'>
                  <button type="button" className="button">Inquire Now</button>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 mt-sm-4 mt-md-4 mt-3">
              <img loading="lazy" src="/home/acc.jpg" alt="Checking Accounts" className="img-fluid" />
            </div>
          </div>
        </div>



      </main>
    </>
  )
}

export default Home;
