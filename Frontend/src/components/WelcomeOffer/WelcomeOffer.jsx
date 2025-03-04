import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./WelcomeOffer.css";
import { TextField, MenuItem } from "@mui/material"; // Importing MUI components

function WelcomeOffer() {
  
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
  const cardsPerPage = 4;

  // Fetch Data from API
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/credit-cards")
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
    const isWelcomeOffer = card.WelcomeOffer === true; // Check WelcomeOffer value
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
  
    return isWelcomeOffer && isSearchMatch && isBankMatch && isCardNameMatch && isSalaryMatch;
  });
  


  // Pagination Logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalFilteredPages = Math.ceil(filteredCards.length / cardsPerPage);

  // Handle Page Change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Dropdown Toggle
  const toggleDropdown = (cardId) => {
    setOpenCardId((prev) => (prev === cardId ? null : cardId)); // Toggle open/close
  };

  return (
    <div className="credit-card-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>

          <main className="credit-card-main">

            <div className="search-container">

              <div className="filters search-container-item">
                <p className="d-inline-flex gap-1">
                  <span
                    className="filter-txt"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Apply Filters
                  </span>
                </p>
                <div className="row filter-wrapper">
                  <div className="col-lg-6 filter-container-drop-down">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                      <div className="card card-body">
                        <div className="filter-container">
                          {/* Bank Filter */}
                          <TextField
                            select
                            value={bankFilter}
                            onChange={(e) => setBankFilter(e.target.value)}
                            label="Select Bank"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                          >
                            <MenuItem value="">All Banks</MenuItem>
                            {Array.from(new Set(cards.map((card) => card.BankName))).map((bank, idx) => (
                              <MenuItem key={idx} value={bank}>
                                {bank}
                              </MenuItem>
                            ))}
                          </TextField>

                          {/* Card Name Filter */}
                          <TextField
                            select
                            value={cardNameFilter}
                            onChange={(e) => setCardNameFilter(e.target.value)}
                            label="Select Card Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                          >
                            <MenuItem value="">All Cards</MenuItem>
                            {Array.from(new Set(cards.map((card) => card.CardName))).map((cardName, idx) => (
                              <MenuItem key={idx} value={cardName}>
                                {cardName}
                              </MenuItem>
                            ))}
                          </TextField>

                          {/* Min and Max Salary Filters */}
                          <TextField
                            type="number"
                            label="Min Salary"
                            value={minSalary}
                            onChange={(e) => setMinSalary(e.target.value)}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                          />
                          <TextField
                            type="number"
                            label="Max Salary"
                            value={maxSalary}
                            onChange={(e) => setMaxSalary(e.target.value)}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="search-wrapper search-container-item">
                <input
                  type="text"
                  placeholder="Search by Card Name or Bank..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <i className="fas fa-search search-icon"></i> {/* Font Awesome icon */}
              </div>


            </div>



            <div className="credit-card-hero">
              <div className="credit-card-hero-content">
                <h1>Select Your Credit Card</h1>
              </div>
            </div>


            <div className="card-list container-fluid">
              {currentCards.length > 0 ? (
                <div className="row d-flex justify-content-center align-items-center">
                  {currentCards.map((card) => {
                    const collapseId = `collapseWidthExample-${card._id}`; // Unique ID for each card
                    return (
                      <div key={card._id} className="col-lg-4 col-md-6 col-sm-12 mb-4 card-container ">
                        <div className="card d-flex justify-content-center align-items-start">
                          {/* Card Image */}
                          {card.image && (
                            <div className="card-img-container">
                              <img
                                src={card.image}
                                alt={card.CardName}
                                className="card-img"
                              />
                            </div>
                          )}

                          {/* Card Details */}
                          <div className="card-detail-section">
                            <h3 className="card-name">{card.CardName}</h3>
                            <p className="bank-name">{card.BankName}</p>

                            {/* Bootstrap Collapsible Section */}
                            <p>
                              <div
                                className="card-collapse-dropdown"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${collapseId}`}
                                aria-expanded="false"
                                aria-controls={collapseId}
                              >
                                View Details

                                <svg width="24px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.104"> <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" fill="#383838"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" fill="#383838"></path> </g></svg>

                              </div>
                            </p>
                            <div style={{ minHeight: "auto" }}>
                              <div className="collapse collapse-horizontal" id={collapseId}>
                                <div className="card card-body" style={{ width: "300px" }}>
                                  <p className="detail-card-txt">
                                    <strong>Min Salary:</strong> {card.MinimumSalary}
                                  </p>
                                  <p className="detail-card-txt">
                                    <strong>Annual Fee:</strong> {card.AnnualFee}
                                  </p>
                                  <p className="detail-card-txt">
                                    <strong>Rate:</strong> {card.Rate}%
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Card Description */}
                            <p className="card-des">{card.description}</p>

                            {/* Action Buttons */}
                            <Link
                              to={`/credit-cards/${card._id}`}
                              className="card-link"
                            >
                              <button className="card-apply-btn">Apply Now</button>
                            </Link>

                            <Link
                              to={`/credit-cards/${card._id}`}
                              className="card-link"
                            >
                              <button className="card-learn-more-btn">Learn More</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>No cards found.</p>
              )}
            </div>
          </main>
          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              Previous
            </button>
            {Array.from({ length: totalFilteredPages }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => paginate(idx + 1)}
                className={`pagination-btn ${currentPage === idx + 1 ? "active" : ""}`}
              >
                {idx + 1}
              </button>
            ))}
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
  );
}

export default WelcomeOffer;
