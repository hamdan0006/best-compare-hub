import React, { useState } from 'react';
import Mortgage from '../Mortgage/Mortgage';
import './PersonalLoanWrapper.css';
import CommonHero from '../CommonHero/CommonHero';
import backgroundImage from '/commonhero/dirham2.jpg';

function PersonalLoanWrapper() {
    const [searchQuery, setSearchQuery] = useState('');

    // List of all Mortgage components
    const mortgages = [
        {
            bankName: "Abu Dhabi Bank (FAB)",
            bankLogo: "/mortgage-bank-img/fab-logo.png",
            planName: "Personal loans, with flexible repayment terms.",
            minSalary: "5,000",
            fixedRate: "3.49%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Bank-FAB")}`,
        },
        {
            bankName: "Emirates NBD",
            bankLogo: "/mortgage-bank-img/Emirates NBD.png",
            planName: "Personal loans with competitive rates and fast approval.",
            minSalary: "5,000",
            fixedRate: "2.99%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Emirates-NBD")}`,
        },
        {
            bankName: "Abu Dhabi Commercial Bank",
            bankLogo: "/mortgage-bank-img/ADCB.jpeg",
            planName: "Unsecured personal loans with attractive rates and terms.",
            minSalary: "5,000",
            fixedRate: "3.49%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`,
        },
        {
            bankName: "Dubai Islamic Bank",
            bankLogo: "/mortgage-bank-img/Dubai-Islamic.jpeg",
            planName: "Sharia-compliant personal loans, with competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "3.49%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Dubai-Islamic-Bank")}`,
        },
        {
            bankName: "Sharjah Islamic Bank",
            bankLogo: "/mortgage-bank-img/Sharjah Islamic Bank.png",
            planName: "Islamic personal financing options, competitive rates.",
            minSalary: "5,000",
            fixedRate: "3.75%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Sharjah-Islamic-Bank")}`,
        },
        {
            bankName: "Bank of Sharjah",
            bankLogo: "/mortgage-bank-img/Bank of Sharjah.png",
            planName: "Personal loans with competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "4.0%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Bank-of-Sharjah")}`,
        },
        {
            bankName: "National Bank of Fujairah",
            bankLogo: "/mortgage-bank-img/National Bank of Fujairah.png",
            planName: "Unsecured personal loans with flexible terms.",
            minSalary: "5,000",
            fixedRate: "3.99%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("National-Bank-of-Fujairah")}`,
        },
        {
            bankName: "United Arab Bank",
            bankLogo: "/mortgage-bank-img/United Arab Bank.jpeg",
            planName: "Personal loans with competitive rates and flexible repayment options.",
            minSalary: "5,000",
            fixedRate: "4.25%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("United-Arab-Bank")}`,
        },
        {
            bankName: "Commercial Bank of Dubai",
            bankLogo: "/mortgage-bank-img/Commercial Bank of Dubai.png",
            planName: "Personal loans with a fast and simple process.",
            minSalary: "5,000",
            fixedRate: "3.75%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Commercial-Bank-of-Dubai")}`,
        },
        {
            bankName: "Al Masraf (Arab Bank for Investment & Foreign Trade)",
            bankLogo: "/mortgage-bank-img/Al-Masraf.png",
            planName: "Personal financing with competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "4.5%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Al-Masraf-(Arab-Bank-for-Investment-&-Foreign-Trade)")}`,
        },
        {
            bankName: "Ajman Bank",
            bankLogo: "/mortgage-bank-img/Ajman Bank.png",
            planName: "Sharia-compliant personal loans, flexible terms.",
            minSalary: "5,000",
            fixedRate: "4.25%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Ajman-Bank")}`,
        },
        {
            bankName: "Al Hilal Bank",
            bankLogo: "/mortgage-bank-img/Al Hilal Bank.png",
            planName: "Islamic personal loans, competitive interest rates.",
            minSalary: "5,000",
            fixedRate: "3.99%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("Al-Hilal-Bank")}`,
        },
        {
            bankName: "RAKBANK",
            bankLogo: "/mortgage-bank-img/rak.webp",
            planName: "Unsecured personal loans with a variety of features.",
            minSalary: "5,000",
            fixedRate: "3.49%",
            applyLink: `/personal-loan/apply-now?bankName=${encodeURIComponent("RAKBANK")}`,
        },
    ];

    const filteredMortgages = mortgages.filter((mortgage) =>
        mortgage.bankName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <CommonHero
                heading="Personal Loan"
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

export default PersonalLoanWrapper;