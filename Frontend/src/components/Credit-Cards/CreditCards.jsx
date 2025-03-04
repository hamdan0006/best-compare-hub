import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./CreditCard.css";
import { TextField, MenuItem } from "@mui/material"; // Importing MUI components
import { Helmet } from "react-helmet-async";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import AOS from "aos";
import "aos/dist/aos.css";

function CreditCards() {


  const slides = [


    {
      id: 1,
      title: "Best Credit Cards in UAE",
      description: "Apply for the best credit cards in the UAE and enjoy the fastest service available!",
      image: "/hero/slider1.webp",
      bgColor: "#19258a",
      link: '/credit-cards'

    },


  ];


  // State Management
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [bankFilter, setBankFilter] = useState("");
  const [cardNameFilter, setCardNameFilter] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [loading, setLoading] = useState(true);
  const [openCardId, setOpenCardId] = useState(null); // Track open card
  const [welcomeOfferFilter, setWelcomeOfferFilter] = useState(false);
  const [salaryTransferFilter, setSalaryTransferFilter] = useState(false);
  const [islamicFinanceFilter, setIslamicFinanceFilter] = useState(false);
  const [cashbackFilter, setCashbackFilter] = useState(false);
  const [balanceTransferFilter, setBalanceTransferFilter] = useState(false);
  const [airportServiceFilter, setAirportServiceFilter] = useState(false);
  const [freeForLifeFilter, setFreeForLifeFilter] = useState(false);



  const [showFilters, setShowFilters] = useState(false);

  const cardsPerPage = 9;

  // Fetch Data from API
  useEffect(() => {
    setLoading(true);
    axios
    .get(`${import.meta.env.VITE_API_URL}/credit-cards`)

      .then((response) => {
        setCards(response.data.cards || []);
        setTotalPages(response.data.totalPages || 1);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
        setCards([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Reset Pagination on Search or Filter Change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, bankFilter, cardNameFilter, minSalary, maxSalary]);

  // Filtered Cards based on Search and Filters
  const filteredCards = cards.filter((card) => {
    const isSearchMatch =
      card.CardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.BankName.toLowerCase().includes(searchQuery.toLowerCase());
    const isBankMatch = bankFilter
      ? card.BankName.toLowerCase() === bankFilter.toLowerCase()
      : true;
    const isCardNameMatch = cardNameFilter
      ? card.CardName.toLowerCase() === cardNameFilter.toLowerCase()
      : true;
    const isSalaryMatch =
      (minSalary ? card.MinimumSalary >= minSalary : true) &&
      (maxSalary ? card.MinimumSalary <= maxSalary : true);
    const isWelcomeOfferMatch = welcomeOfferFilter
      ? card.WelcomeOffer === true
      : true;
    const isSalaryTransferMatch = salaryTransferFilter
      ? card.SalaryTransfer === true
      : true;
    const isIslamicFinanceMatch = islamicFinanceFilter
      ? card.IslamicFinance === true
      : true;
    const isCashbackMatch = cashbackFilter
      ? card.Cashback === true
      : true;
    const isBalanceTransferMatch = balanceTransferFilter
      ? card.BalanceTransfer === true
      : true;
    const isAirportServiceMatch = airportServiceFilter
      ? card.AirportService === true
      : true;
    const isFreeForLifeMatch = freeForLifeFilter
      ? card.FreeForLife === true
      : true;

    return (
      isSearchMatch &&
      isBankMatch &&
      isCardNameMatch &&
      isSalaryMatch &&
      isWelcomeOfferMatch &&
      isSalaryTransferMatch &&
      isIslamicFinanceMatch &&
      isCashbackMatch &&
      isBalanceTransferMatch &&
      isAirportServiceMatch &&
      isFreeForLifeMatch
    );
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalFilteredPages = Math.ceil(filteredCards.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Dropdown Toggle
  const toggleDropdown = (cardId) => {
    setOpenCardId((prev) => (prev === cardId ? null : cardId)); // Toggle open/close
  };


  const [activeIndex, setActiveIndex] = useState(0);


  // Auto-change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };


  const [visibleIndex, setVisibleIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false, // Ensure animation plays every time on scroll
        mirror: true, // Repeats animation when scrolling up
      });
    }, []);
    


  return (
    <>
      <Helmet>
        <title>Best Credit Cards - Compare & Apply Now</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="Compare and apply for the best credit cards! Find low-interest, cashback, and rewards credit cards suited to your income. Get approved instantly!" />
        {/* social links  */}

        <meta property="og:title" content="Best Credit Cards - Compare & Apply Now" />
        <meta property="og:description" content="Easily compare top credit cards, check eligibility, and apply instantly. Find cashback, rewards, and low-interest cards today!" />
        <meta property="og:image" content="https://bestcomparehub.com/credit-cards-thumbnail.jpg" />
        <meta property="og:url" content="https://bestcomparehub.com/credit-cards" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Credit Cards - Compare & Apply Now" />
        <meta name="twitter:description" content="Find the best credit cards with cashback, rewards, and low interest. Apply now in minutes!" />
        <meta name="twitter:image" content="https://bestcomparehub.com/credit-cards-thumbnail.jpg" />



        <meta name="keywords" content="Credit Cards, Best Credit Cards, Apply Credit Card, Bank Credit Cards" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Best Credit Cards",
            "description": "Compare the best credit cards available and apply instantly. Find cashback, travel, and low-interest credit cards from top banks.",
            "provider": {
              "@type": "BankOrCreditUnion",
              "name": "Top Banks",
              "url": "https://bankcomparehub.com"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "0",
              "url": "https://bestcomparehub/credit-cards"
            }
          })}
        </script>


      </Helmet>


      <section className="hero hero-credit">
        <div
          className="hero-section-credit"
          style={{
            backgroundImage: `url(${slides[activeIndex].image})`,
            backgroundColor: slides[activeIndex].bgColor,
          }}
        >
          <div className="hero-wrapper">
            {/* Left Side Content */}
            <div className="hero-content">
              <h1>{slides[activeIndex].title}</h1>
              <p>{slides[activeIndex].description}</p>
              <NavLink className='hero-link' to={slides[activeIndex].link}>
                <div className="inquire-container">

                  <span className="hero-inquire-btn">Inquire Now</span>

                  <svg className="inquire-svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>

              </NavLink>
            </div>

            {/* Swiper Slider (Hidden Images, Only Background Changes) */}

          </div>

          {/* Bottom Button Container */}





        </div>
      </section>

      <div className="credit-card-container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>

            <main className="credit-card-main">


             <div
        className="res-filter"
        onClick={() => setShowFilters(!showFilters)}
      >
        Apply filters
      </div>
              <section className="card-section-main container-fluid">
                <div className="row">
                <div className={`filter col-lg-4 card-section-main-sec ${showFilters ? "show" : "hide"}`}>
                    <h3 className="filter-heading">Filters</h3>

                    {/* Search Input */}
                    <div className="filter-section">
                      <input
                        type="text"
                        placeholder="Search by Card or Bank Name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="filter-input"
                      />
                    </div>

                    {/* Bank Name Filter (Checkboxes) */}
                    <div className="filter-section">
                      <h4 className="filter-title">Filter by Bank</h4>
                      <div className="checkbox-group">
                        {Array.from(new Set(cards.map((card) => card.BankName))).map((bankName, idx) => (
                          <div key={idx} className="checkbox-item">
                            <input
                              type="checkbox"
                              id={`bank-${idx}`}
                              checked={bankFilter === bankName}
                              onChange={() => setBankFilter(bankFilter === bankName ? "" : bankName)}
                            />
                            <label htmlFor={`bank-${idx}`}>{bankName}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Name Filter (Dropdown) */}
                    <div className="filter-section">
                      <h4 className="filter-title">Filter by Card Name</h4>
                      <select
                        value={cardNameFilter}
                        onChange={(e) => setCardNameFilter(e.target.value)}
                        className="filter-select"
                      >
                        <option value="">All Cards</option>
                        {Array.from(new Set(cards.map((card) => card.CardName))).map((cardName, idx) => (
                          <option key={idx} value={cardName}>
                            {cardName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Salary Range Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Salary Range</h4>
                      <div className="salary-range">
                        <input
                          type="number"
                          placeholder="Min Salary"
                          value={minSalary}
                          onChange={(e) => setMinSalary(e.target.value)}
                          className="filter-input"
                        />
                        <input
                          type="number"
                          placeholder="Max Salary"
                          value={maxSalary}
                          onChange={(e) => setMaxSalary(e.target.value)}
                          className="filter-input"
                        />
                      </div>
                    </div>

                    {/* Special Offers Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Special Offers</h4>
                      {/* Add other special offer filters here if needed */}
                    </div>

                    {/* Welcome Offer Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Welcome Offer</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="welcome-offer"
                            checked={welcomeOfferFilter}
                            onChange={() => setWelcomeOfferFilter(!welcomeOfferFilter)}
                          />
                          <label htmlFor="welcome-offer">Show cards with welcome offers</label>
                        </div>
                      </div>
                    </div>

                    {/* Salary Transfer Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Salary Transfer</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="salary-transfer"
                            checked={salaryTransferFilter}
                            onChange={() => setSalaryTransferFilter(!salaryTransferFilter)}
                          />
                          <label htmlFor="salary-transfer">Show cards with salary transfer</label>
                        </div>
                      </div>
                    </div>

                    {/* Islamic Finance Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Islamic Finance</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="islamic-finance"
                            checked={islamicFinanceFilter}
                            onChange={() => setIslamicFinanceFilter(!islamicFinanceFilter)}
                          />
                          <label htmlFor="islamic-finance">Show Islamic finance cards</label>
                        </div>
                      </div>
                    </div>

                    {/* Cashback Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Cashback</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="cashback"
                            checked={cashbackFilter}
                            onChange={() => setCashbackFilter(!cashbackFilter)}
                          />
                          <label htmlFor="cashback">Show cards with cashback</label>
                        </div>
                      </div>
                    </div>

                    {/* Balance Transfer Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Balance Transfer</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="balance-transfer"
                            checked={balanceTransferFilter}
                            onChange={() => setBalanceTransferFilter(!balanceTransferFilter)}
                          />
                          <label htmlFor="balance-transfer">Show cards with balance transfer</label>
                        </div>
                      </div>
                    </div>

                    {/* Airport Service Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Airport Service</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="airport-service"
                            checked={airportServiceFilter}
                            onChange={() => setAirportServiceFilter(!airportServiceFilter)}
                          />
                          <label htmlFor="airport-service">Show cards with airport service</label>
                        </div>
                      </div>
                    </div>

                    {/* Free for Life Filter */}
                    <div className="filter-section">
                      <h4 className="filter-title">Free for Life</h4>
                      <div className="checkbox-group">
                        <div className="checkbox-item">
                          <input
                            type="checkbox"
                            id="free-for-life"
                            checked={freeForLifeFilter}
                            onChange={() => setFreeForLifeFilter(!freeForLifeFilter)}
                          />
                          <label htmlFor="free-for-life">Show free-for-life cards</label>
                        </div>
                      </div>
                    </div>

                    {/* Reset Filters Button */}
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setBankFilter("");
                        setCardNameFilter("");
                        setMinSalary("");
                        setMaxSalary("");
                        setWelcomeOfferFilter(false);
                        setSalaryTransferFilter(false);
                        setIslamicFinanceFilter(false);
                        setCashbackFilter(false);
                        setBalanceTransferFilter(false);
                        setAirportServiceFilter(false);
                        setFreeForLifeFilter(false);
                      }}
                      className="reset-filters"
                    >
                      Reset Filters
                    </button>
                  </div>

                  <div className="card-list col-lg-8 card-section-main-sec" >
                    <div>
                      {currentCards.length > 0 ? (
                        <div>
                          {currentCards.map((card) => {
                            return (
                              <div className="card-item" key={card._id} data-aos="fade-right">
                                <div className="line"></div>

                                <div className="card-dtl-wrapper">
                                  {card.image && (
                                    <div>
                                      <img
                                        className="c-card-img"
                                        loading="lazy"
                                        src={card.image}
                                        alt={`${card.CardName} - ${card.BankName}`}
                                      />
                                    </div>
                                  )}
                                  <div className="card-dtl-sec">
                                    <div className="card-dtl-txt">
                                      <h3 className="card-name">{card.CardName}</h3>
                                      <p className="bank-name">{card.BankName}</p>
                                      <p className="card-description">{card.description}</p>
                                    </div>

                                    <div className="card-dtl-sec-2">
                                      <div className="card-dtl-sec-2-div">
                                        <strong>Min Salary</strong>
                                        <p>{card.MinimumSalary}</p>
                                      </div>
                                      <div className="card-dtl-sec-2-div">
                                        <strong>Annual Fee</strong>
                                        <p>{card.AnnualFee}</p>
                                      </div>
                                      <div className="card-dtl-sec-2-div">
                                        <strong>Rate</strong>
                                        <p>{card.Rate}%</p>
                                      </div>
                                    </div>

                                  </div>
                                </div>

                                <div className="card-btn-container">
                                  <Link to={`/credit-cards/${card._id}`}>
                                    <button className="apply-btn-card">Apply Now</button>
                                  </Link>
                                  <Link to={`/credit-cards/${card._id}`}>
                                    <button className="learn-more-btn">Learn More</button>
                                  </Link>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="no-card-found">No Cards Found.</p>
                      )}
                    </div>
                  </div>

                </div>


              </section>



            </main>

            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>

              {currentPage > 2 && (
                <>
                  <button onClick={() => paginate(1)} className="pagination-btn">
                    1
                  </button>
                  {currentPage > 3 && <span className="pagination-dots">...</span>}
                </>
              )}

              {Array.from({ length: totalFilteredPages }, (_, idx) => idx + 1)
                .filter((page) => page === currentPage || page === currentPage - 1 || page === currentPage + 1)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                  >
                    {page}
                  </button>
                ))}

              {currentPage < totalFilteredPages - 1 && (
                <>
                  {currentPage < totalFilteredPages - 2 && <span className="pagination-dots">...</span>}
                  <button onClick={() => paginate(totalFilteredPages)} className="pagination-btn">
                    {totalFilteredPages}
                  </button>
                </>
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalFilteredPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>



          </>
        )}
      </div>

      

    </>
  );
}

export default CreditCards;
