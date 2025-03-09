import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Home from './components/Home/Home'
import HomeLoan from './components/HomeLoan/HomeLoan'
import HotPromotion from './components/HotPromotion/HotPromotion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CreditCards from './components/Credit-Cards/CreditCards'
import AutoLoan from './components/AutoLoan/AutoLoan'
import PersonalLoan from './components/PersonalLoan.jsx/PersonalLoan'
// In index.js or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

import Offcanvas from './components/OffCanvas/Offcanvas'
import ApplyForm from './components/Apply/ApplyForm'
import Mortgage from './components/Mortgage/Mortgage'
import MortgageWrapper from './components/Mortgage-wrapper/MortgageWrapper'
import MortgageApply from './components/Mortgage-Apply/MortgageApply'
import WelcomeOffer from './components/WelcomeOffer/WelcomeOffer'
import BalanceTransfer from './components/BalanceTransfer/BalanceTrasnfer'
import Airportservice from './components/AirportService/AirportService'
import FreeForLife from './components/FreeForLife/FreeForLife'
import PersonalLoanWrapper from './components/PersonalLoanWrapper/PersonalLoanWrapper'
import WhattsappIcon from './components/Whattsapp/WhattsappIcon'
import AutoLoanWrapper from './components/AutoLoanWrapper/AutoLoanWrapper'
import HotPromotionApply from './components/HotPromotionApply/HotPromotionApply'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs'
import { Policy } from '@mui/icons-material'
import PrivacyPolicy from './components/Privacy/Privacy'
import NotFound from './components/NotFound/NotFound'
import CompanyListing from './components/CompanyListing/CompanyListing'

import { HelmetProvider } from 'react-helmet-async';
import TermsAndConditions from './components/Terms/Terms'
import ScrollToTop from './components/ScrollTop/ScrollTop'
import CommonSearchCont from './components/CommonSearchCont/CommonSearchCont'
import SearchBar from './components/CommonSearch/CommonSearch'
import IslamicFinance from './components/Islamic-Finance/Islamic-finance'
import DebtConsolidation from './components/DebtConsol/DebtConsol'




function App() {



  return (
    <>

      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />

          <Offcanvas />




          <Navbar />




          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/credit-cards/welcome-offers" element={<WelcomeOffer />} />
            <Route path="/credit-cards/balance-transfer" element={<BalanceTransfer />} />

            <Route path="/credit-cards/airport-services" element={<Airportservice />} />

            <Route path="/credit-cards/free-for-life" element={<FreeForLife />} />







            <Route path="/credit-cards/:id" element={<ApplyForm />} /> {/* Route for card detail */}



            <Route path="/Home-Loan" element={<HomeLoan />} />

            <Route path="/Debt-consolidation" element={<DebtConsolidation />} />
            <Route path="/Islamic-finance" element={<IslamicFinance />} />



            <Route path="/auto-Loan" element={<AutoLoanWrapper />} />
            <Route path="/auto-Loan/apply-now" element={<AutoLoan />} />



            <Route path="/personal-Loan" element={<PersonalLoanWrapper />} />
            <Route path="/personal-Loan/apply-now" element={<PersonalLoan />} />


            <Route path="/Hot-Promotions" element={<HotPromotion />} />
            <Route path="/hot-promotions/:id" element={<HotPromotionApply />} /> {/* Route for card detail */}

            <Route path="/mortgage" element={<MortgageWrapper />} />
            <Route path="/mortgage/apply-now" element={<MortgageApply />} />

            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />


            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/company-listing" element={<CompanyListing />} />

          



            <Route path="*" element={<NotFound />} />




          </Routes>
         


          <WhattsappIcon></WhattsappIcon>




          <Footer />


        </BrowserRouter>

      </HelmetProvider>
    </>
  )
}

export default App
