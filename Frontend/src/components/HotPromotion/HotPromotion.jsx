import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HotPromotion.css";
import { TextField, MenuItem } from "@mui/material";
import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/hot-promotion.jpg';

function HotPromotion() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [bankFilter, setBankFilter] = useState("");
  const [cardNameFilter, setCardNameFilter] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [loading, setLoading] = useState(true);
  const [openCardId, setOpenCardId] = useState(null);
  const cardsPerPage = 9;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/hot-promotions`)
      .then((response) => {
        console.log(response.data);
        setCards(response.data.cards || []);
        setTotalPages(response.data.totalPages || 1);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
        setCards([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, bankFilter, cardNameFilter, minSalary, maxSalary]);

  // Filter Cards based on Search and Filters
  const filteredCards = cards.filter((card) => {
    const isSearchMatch =
      card.VoucherName?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const isBankMatch = bankFilter
      ? card.VoucherName?.toLowerCase() === bankFilter.toLowerCase()
      : true;
    const isCardNameMatch = cardNameFilter
      ? card.CardName?.toLowerCase() === cardNameFilter.toLowerCase()
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDropdown = (cardId) => {
    setOpenCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <>
    <CommonHero
     heading="Vouchers" 
     backgroundImage={backgroundImage} 
   />
      <div className="voucher-main container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 voucher-container">


            <div className="voucher-search">
              {/* Search and Filters */}
              <TextField
                label="Search by Voucher Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />


            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-8 col-md-6 col-sm-12 voucher-container">




            <div className="voucher-list">
              <div className="card-list ">
                {loading ? (
                  <p>Loading...</p>
                ) : currentCards.length > 0 ? (
                  <div className="row ">
                    {currentCards.map((card) => (
                      <div key={card._id} className=" card-container">
                        <div className="card ">
                          {/* Card Image */}
                          {card.image && (
                            <div className="card-img-container">
                              <img src={card.image} alt={card.CardName} className="card-img" />
                            </div>
                          )}

                          {/* Card Details */}
                          <div className="card-detail-section">
                            <h3 className="card-name">{card.VoucherName}</h3>
                            <p className="voucher-description">{card.Description}</p>
                            <p className="voucher-price"><strong>AED :</strong>{card.voucherPrice}</p>


                            {/* Bootstrap Collapsible Section */}

                            <Link
                              to={`/hot-promotions/${card._id}`}
                              className="card-link"
                            >
                              <button
                                className="btn btn-primary"
                                type="button"

                              >
                                Apply Now
                              </button>
                            </Link>




                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-card-found">No Vouchers Found.</p>
                )}
              </div>
              
            </div>

          </div>

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

        </div>
      </div>
    </>
  );
}

export default HotPromotion;
