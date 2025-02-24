import React from 'react'
import Mortgage from '../Mortgage/Mortgage'
import './Mortgage-Wrapper.css'

function MortgageWrapper() {
  return (
    <>
      <main className='mortgage-main'>


        <div className="mortgage-wrapper ">

          <Mortgage
            bankName="Abu Dhabi Bank (FAB)"
            bankLogo="../../public/mortgage-bank-img/fab-logo.png"
            planName="Flexible mortgage options with competitive rates and various"
            minSalary="5,000"
            fixedRate="3.24%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Bank-FAB")}`}

          />

          <Mortgage
            bankName="Emirates NBD"
            bankLogo="../../public/mortgage-bank-img/Emirates NBD.png"
            planName="Flexible mortgage options with competitive rates and various repayment terms."
            minSalary="5,000"
            fixedRate="3.19%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Emirates-NBD")}`}

          />

          <Mortgage
            bankName="Abu Dhabi Commercial Bank"
            bankLogo="../../public/mortgage-bank-img/ADCB.jpeg"
            planName="Starting from 3.20% per annum (for fixed-rate mortgages)"
            minSalary="5,000"
            fixedRate="3.19%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`}

          />

          <Mortgage
            bankName="Dubai Islamic Bank"
            bankLogo="../../public/mortgage-bank-img/Dubai-Islamic.jpeg"
            planName="Sharia-compliant mortgage solutions with flexible terms."
            minSalary="5,000"
            fixedRate="3.39%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Dubai-Islamic-Bank")}`}

          />

          <Mortgage
            bankName="Abu Dhabi Commercial Bank"
            bankLogo="../../public/mortgage-bank-img/ADCB.jpeg"
            planName="Starting from 3.20% per annum (for fixed-rate mortgages)"
            minSalary="5,000"
            fixedRate="3.19%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`}

          />

<Mortgage
            bankName="Sharjah Islamic Bank"
            bankLogo="../../public/mortgage-bank-img/Sharjah Islamic Bank.png"
            planName="Islamic mortgages with competitive interest rates."
            minSalary="5,000"
            fixedRate="3.75%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Sharjah-Islamic-Bank")}`}

          />

<Mortgage
            bankName="Bank of Sharjah"
            bankLogo="../../public/mortgage-bank-img/Bank of Sharjah.png"
            planName="Home loans with flexible repayment tenures and competitive "
            minSalary="5,000"
            fixedRate="4.0%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Bank-of-Sharjah")}`}

          />

<Mortgage
            bankName="National Bank of Fujairah"
            bankLogo="../../public/mortgage-bank-img/National Bank of Fujairah.png"
            planName="Flexible mortgage loans with competitive interest rates."
            minSalary="5,000"
            fixedRate=" 4.25%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("National-Bank-of-Fujairah")}`}

          />

<Mortgage
            bankName="United Arab Bank"
            bankLogo="../../public/mortgage-bank-img/United Arab Bank.jpeg"
            planName="Home financing with attractive rates and flexible repayment "
            minSalary="5,000"
            fixedRate=" 4.25%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("United-Arab-Bank")}`}

          />

<Mortgage
            bankName="Commercial Bank of Dubai"
            bankLogo="../../public/mortgage-bank-img/Commercial Bank of Dubai.png"
            planName="Competitive rates for home financing and property purchase. "
            minSalary="5,000"
            fixedRate="  3.75%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Commercial-Bank-of-Dubai")}`}

          />

<Mortgage
            bankName="	Al Masraf (Arab Bank for Investment & Foreign Trade)"
            bankLogo="../../public/mortgage-bank-img/Al-Masraf.png"
            planName=" Mortgage products with flexible terms and competitive interest rates."
            minSalary="5,000"
            fixedRate="  4.5%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Al-Masraf-(Arab-Bank-for-Investment-&-Foreign-Trade)")}`}

          />


<Mortgage
            bankName="	Ajman Bank"
            bankLogo="../../public/mortgage-bank-img/Ajman Bank.png"
            planName="Sharia-compliant mortgage loans with flexible repayment options."
            minSalary="5,000"
            fixedRate="  4.25%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Ajman-Bank")}`}

          />

<Mortgage
            bankName="	Al Hilal Bank"
            bankLogo="../../public/mortgage-bank-img/Al Hilal Bank.png"
            planName="Islamic mortgage loans with competitive rates."
            minSalary="5,000"
            fixedRate="  3.99%"
            applyLink={`/mortgage/apply-now?bankName=${encodeURIComponent("Al-Hilal-Bank")}`}

          />


        </div>
      </main>
    </>
  )
}

export default MortgageWrapper