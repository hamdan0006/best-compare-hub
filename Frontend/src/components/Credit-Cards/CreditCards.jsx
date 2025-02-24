import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CreditCard.css";
import { TextField, MenuItem } from "@mui/material"; // Importing MUI components
import { Helmet } from "react-helmet-async";

function CreditCards() {
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
  const cardsPerPage = 9;

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

    return isSearchMatch && isBankMatch && isCardNameMatch && isSalaryMatch;
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
                  <i className="fas fa-search search-icon"></i>
                </div>


              </div>



              <div className="credit-card-hero">
                <div className="credit-card-hero-content">
                  <h1>Compare the Best Credit Cards </h1>
                </div>
              </div>


              <div className="card-list container-fluid">
                {currentCards.length > 0 ? (
                  <div className="row d-flex justify-content-center align-items-center">
                    {currentCards.map((card) => {
                      const collapseId = `collapseWidthExample-${card._id}`;
                      return (
                        <div key={card._id} className="col-lg-4 col-md-6 col-sm-12 mb-4 card-container ">
                          <div className="card d-flex justify-content-center align-items-start">
                            {/* Card Image */}
                            {card.image && (
                              <div className="card-img-container">
                                <img
                                  loading="lazy"
                                  src={card.image}
                                  alt={`${card.CardName} - ${card.BankName}`}
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
                              <Link to={`/credit-cards/${card._id}?name=${encodeURIComponent(card.CardName)}?bankname =${encodeURIComponent(card.BankName)} `} className="card-link">
                                <button className="card-apply-btn">Apply Now</button>
                              </Link>

                              <Link to={`/credit-cards/${card._id}?name=${encodeURIComponent(card.CardName)}?bankname =${encodeURIComponent(card.BankName)}`} className="card-link">
                                <button className="card-learn-more-btn">Learn More</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="no-card-found">No Cards Found.</p>
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
      <main className="faq-wrapper">
  <div className="faq">
    <h1 className="fs-3 mb-4">Got Questions?</h1>

    {[
      {
        question: "What should I do if I’m struggling to meet the minimum payment on my card?",
        answer:
          "Arrange to meet with your bank and discuss your options with them. Perhaps you can convert the outstanding balance to a loan in order to pay off the card quicker and with lesser interest payments to be made. If you do manage to arrange this, cut the card up and don’t ever use it again!",
      },
      {
        question: "Should I take out a credit card if I have a big purchase to make?",
        answer:
          "No. You would be better taking out a personal loan instead where the interest is less and payments often more manageable. You then avoid the temptation and option of just putting one more thing on your credit card.",
      },
      {
        question: "How will the spending limit on my credit card be determined?",
        answer:
          "Your bank will determine the spending limit on your card based on your ability to pay back the debt and the type of credit card you have. Your limit will usually be set at two or three times your monthly salary. Since interest rates in the UAE are very high, we advise you not to borrow more than you can realistically afford to pay back.",
      },
      {
        question: "Do all credit card products charge the same or a similar rate of interest?",
        answer:
          "No. Some credit cards will charge no interest for up to 12 months, while others charge 30-35% interest. Be warned, rates in the UAE are much higher than in most other countries.",
      },
      {
        question: "How do I make repayments on my credit card?",
        answer:
          "You can make repayments in one of three ways:\n- ATM machine\n- In the branch\n- Online",
      },
      {
        question: "Are there Islamic Finance credit cards available?",
        answer:
          "Yes. Some Islamic credit cards come with a monthly fee and others with a monthly profit rate. These cards often still have an annual fee, so make sure that you check all associated fees clearly.",
      },
      {
        question: "How can I save with a balance transfer?",
        answer:
          "You can save interest charges by transferring your outstanding balance to another bank’s credit card that charges no interest.",
      },
      {
        question: "What is a premium credit card?",
        answer:
          "A premium credit card normally requires the holder to have a higher income and will often incur a higher annual fee in exchange for premium benefits.",
      },
      {
        question: "How can I have a credit card without paying interest?",
        answer:
          "Most credit cards offer an interest-free period of 50-55 days. If you pay the full outstanding balance within this period, you will not have to pay interest.",
      },
      {
        question: "What criteria should be considered before taking out a credit card?",
        answer:
          "- **Interest Rates** – Is the rate communicated by a monthly interest rate or an annual rate? Rates may also vary based on your salary, place of employment, or whether you’re already a customer of the bank.\n" +
          "- **Salary Requirement** – What is the minimum salary requirement? Identify which cards you’re eligible for, then compare rates, fees, and benefits accordingly.\n" +
          "- **Foreign Currency Rate** – If you travel frequently, check how much extra you’ll pay when making transactions in a foreign currency. Banks charge a fee as a percentage of your spend for transactions outside the UAE.\n" +
          "- **Annual Fee** – Even if a bank advertises no annual fee, make sure a fee does not apply from the second year onwards.\n" +
          "- **Other Fees and Charges** – Look at late payment charges and any hidden costs.\n" +
          "- **Benefits** – Consider perks like air miles, airport lounge access, hotel and car hire discounts, or cashback rewards.",
      },
    ].map((faq, index) => {
      const collapseId = `collapseExample${index}`;
      return (
        <div className="faq-questions" key={index}>
          <p className="d-inline-flex gap-1">
            <div className="faq-q-container">
              <a className="faq-svg-container">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#056dae"
                      d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"
                    ></path>
                  </g>
                </svg>
              </a>

              <a
                className="faq-q fs-5"
                data-bs-toggle="collapse"
                href={`#${collapseId}`}
                role="button"
                aria-expanded="false"
                aria-controls={collapseId}
              >
                {faq.question}
              </a>
            </div>
          </p>

          <div className="collapse faq-c-container" id={collapseId}>
            <div className="fs-7">
              {faq.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</main>

    </>
  );
}

export default CreditCards;
