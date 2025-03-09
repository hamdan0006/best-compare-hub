import React, { useState } from 'react';
import Mortgage from '../Mortgage/Mortgage';
import './Mortgage-Wrapper.css';
import CommonHero from '../CommonHero/CommonHero';
import backgroundImage from '/commonhero/mortgage.jpg';

function MortgageWrapper() {
    const [searchQuery, setSearchQuery] = useState('');

    // List of all Mortgage components
    const mortgages = [
        {
            bankName: "Abu Dhabi Bank (FAB)",
            bankLogo: "/mortgage-bank-img/fab-logo.png",
            planName: "Flexible mortgage options with competitive rates and various",
            minSalary: "5,000",
            fixedRate: "3.24%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Bank-FAB")}`,
        },
        {
            bankName: "Emirates NBD",
            bankLogo: "/mortgage-bank-img/Emirates NBD.png",
            planName: "Flexible mortgage options with competitive rates and various repayment terms.",
            minSalary: "5,000",
            fixedRate: "3.19%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Emirates-NBD")}`,
        },
        {
            bankName: "Abu Dhabi Commercial Bank",
            bankLogo: "/mortgage-bank-img/ADCB.jpeg",
            planName: "Starting from 3.20% per annum (for fixed-rate mortgages)",
            minSalary: "5,000",
            fixedRate: "3.19%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`,
        },
        {
            bankName: "Dubai Islamic Bank",
            bankLogo: "/mortgage-bank-img/Dubai-Islamic.jpeg",
            planName: "Sharia-compliant mortgage solutions with flexible terms.",
            minSalary: "5,000",
            fixedRate: "3.39%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Dubai-Islamic-Bank")}`,
        },
        {
            bankName: "Sharjah Islamic Bank",
            bankLogo: "/mortgage-bank-img/Sharjah Islamic Bank.png",
            planName: "Islamic mortgages with competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "3.75%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Sharjah-Islamic-Bank")}`,
        },
        {
            bankName: "Bank of Sharjah",
            bankLogo: "/mortgage-bank-img/Bank of Sharjah.png",
            planName: "Home loans with flexible repayment tenures and competitive",
            minSalary: "5,000",
            fixedRate: "4.0%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Bank-of-Sharjah")}`,
        },
        {
            bankName: "National Bank of Fujairah",
            bankLogo: "/mortgage-bank-img/National Bank of Fujairah.png",
            planName: "Flexible mortgage loans with competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "4.25%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("National-Bank-of-Fujairah")}`,
        },
        {
            bankName: "United Arab Bank",
            bankLogo: "/mortgage-bank-img/United Arab Bank.jpeg",
            planName: "Home financing with attractive rates and flexible repayment",
            minSalary: "5,000",
            fixedRate: "4.25%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("United-Arab-Bank")}`,
        },
        {
            bankName: "Commercial Bank of Dubai",
            bankLogo: "/mortgage-bank-img/Commercial Bank of Dubai.png",
            planName: "Competitive rates for home financing and property purchase.",
            minSalary: "5,000",
            fixedRate: "3.75%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Commercial-Bank-of-Dubai")}`,
        },
        {
            bankName: "Al Masraf (Arab Bank for Investment & Foreign Trade)",
            bankLogo: "/mortgage-bank-img/Al-Masraf.png",
            planName: "Mortgage products with flexible terms and competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "4.5%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Al-Masraf-(Arab-Bank-for-Investment-&-Foreign-Trade)")}`,
        },
        {
            bankName: "Ajman Bank",
            bankLogo: "/mortgage-bank-img/Ajman Bank.png",
            planName: "Sharia-compliant mortgage loans with flexible repayment options.",
            minSalary: "5,000",
            fixedRate: "4.25%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Ajman-Bank")}`,
        },
        {
            bankName: "Al Hilal Bank",
            bankLogo: "/mortgage-bank-img/Al Hilal Bank.png",
            planName: "Islamic mortgage loans with competitive rates.",
            minSalary: "5,000",
            fixedRate: "3.99%",
            applyLink: `/mortgage/apply-now?bankName=${encodeURIComponent("Al-Hilal-Bank")}`,
        },
    ];

    const filteredMortgages = mortgages.filter((mortgage) =>
        mortgage.bankName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <CommonHero
                heading="Mortgage"
                backgroundImage={backgroundImage}
            />

<main className="autoloan-main">
        <div className="container-fluid">
          <div className="row loan-row">
            {/* Filter Section */}
            <div className="loan-filter loan-filter-1 col-lg-3 col-md-12 col-sm-12">
              <h3>Search by Bank Name</h3>
              <input
                type="text"
                className="form-control"
                placeholder="Type bank name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Display Filtered Mortgages */}
            <div className="loan-filter loan-filter-2 auto-loan-wrapper col-lg-9 col-md-12 col-sm-12">
              {filteredMortgages.length > 0 ? (
                filteredMortgages.map((mortgage, index) => (
                  <Mortgage
                    key={index}
                    bankName={mortgage.bankName}
                    bankLogo={mortgage.bankLogo}
                    planName={mortgage.planName}
                    minSalary={mortgage.minSalary}
                    fixedRate={mortgage.fixedRate}
                    applyLink={mortgage.applyLink}
                  />
                ))
              ) : (
                <p>No banks found matching your search.</p>
              )}
            </div>
          </div>
        </div>
      </main>

        </>
    );
}

export default MortgageWrapper;