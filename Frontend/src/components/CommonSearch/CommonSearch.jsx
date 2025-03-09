import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CommonSearch.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const routes = {
      // Credit Cards
      "credit card": "/credit-cards",
      "credit cards": "/credit-cards",
      "apply credit card": "/credit-cards",
      "credit card offers": "/credit-cards/welcome-offers",
      "balance transfer": "/credit-cards/balance-transfer",
      "airport services": "/credit-cards/airport-services",
      "free for life credit card": "/credit-cards/free-for-life",

      // Loans
      "home loan": "/mortgage",
      "apply home loan": "/mortgage/apply-now",
      "mortgage": "/mortgage",
      "mortgage home loan": "/mortgage",
      "auto loan": "/auto-loan",
      "apply auto loan": "/auto-loan/apply-now",
      "personal loan": "/personal-loan",
      "apply personal loan": "/personal-loan/apply-now",
      "loan": "/personal-loan",
      "debt consolidation": "/debt-consolidation",

      // Promotions & Offers
      "hot promotions": "/hot-promotions",
      "vouchers": "/hot-promotions",
      "discounts": "/hot-promotions",
      "special offers": "/hot-promotions",
      "apply promotion": "/hot-promotions/apply-now",

      // Financial Services
      "islamic finance": "/islamic-finance",
      "shariah compliant loans": "/islamic-finance",

      // Company & Info
      "contact": "/contact-us",
      "contact us": "/contact-us",
      "support": "/contact-us",
      "customer service": "/contact-us",
      "about": "/about-us",
      "about us": "/about-us",
      "company listing": "/company-listing",
      "privacy policy": "/privacy-policy",
      "terms and conditions": "/terms-and-conditions",
    };

    const searchTerm = query.toLowerCase().trim();
    const matchedRoute = routes[searchTerm];

    if (matchedRoute) {
      navigate(matchedRoute);
      setIsOpen(false);
    } else {
      alert("No matching results found.");
    }
  };

  return (
    <>
      {isOpen && (
        <section className="common-search">
          <div className="search-container">
            {/* Close Button */}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search for services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="search-input"
              />
              <button type="submit" className="search-button">Search</button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default SearchBar;