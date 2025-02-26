import React from 'react'
import Mortgage from '../Mortgage/Mortgage'
import './PersonalLoanWrapper.css'

function PersonalLoanWrapper() {
  return (
    <>
      <main className='mortgage-main'>


        <div className="mortgage-wrapper ">

          <Mortgage
            bankName="Abu Dhabi Bank (FAB)"
            bankLogo="/mortgage-bank-img/fab-logo.png"
            planName="Personal loans, with flexible repayment terms."
            minSalary="5,000"
            fixedRate="3.49%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Bank-FAB")}`}

          />

          <Mortgage
            bankName="Emirates NBD"
            bankLogo="/mortgage-bank-img/Emirates NBD.png"
            planName="Personal loans with competitive rates and fast approval."
            minSalary="5,000"
            fixedRate="2.99%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Emirates-NBD")}`}

          />

          <Mortgage
            bankName="Abu Dhabi Commercial Bank"
            bankLogo="/mortgage-bank-img/ADCB.jpeg"
            planName="Unsecured personal loans with attractive rates and terms."
            minSalary="5,000"
            fixedRate="3.49%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`}

          />

          <Mortgage
            bankName="Dubai Islamic Bank"
            bankLogo="/mortgage-bank-img/Dubai-Islamic.jpeg"
            planName="Sharia-compliant personal loans, with competitive interest rates"
            minSalary="5,000"
            fixedRate="3.49%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Dubai-Islamic-Bank")}`}

          />

          <Mortgage
            bankName="Abu Dhabi Commercial Bank"
            bankLogo="/mortgage-bank-img/ADCB.jpeg"
            planName="Starting from 3.20% per annum (for fixed-rate mortgages)"
            minSalary="5,000"
            fixedRate="3.19%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`}

          />

<Mortgage
            bankName="Sharjah Islamic Bank"
            bankLogo="/mortgage-bank-img/Sharjah Islamic Bank.png"
            planName="Islamic personal financing options, competitive rates."
            minSalary="5,000"
            fixedRate="3.75%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Sharjah-Islamic-Bank")}`}

          />

<Mortgage
            bankName="Bank of Sharjah"
            bankLogo="/mortgage-bank-img/Bank of Sharjah.png"
            planName="Personal loans with competitive interest rates. "
            minSalary="5,000"
            fixedRate="4.0%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Bank-of-Sharjah")}`}

          />

<Mortgage
            bankName="National Bank of Fujairah"
            bankLogo="/mortgage-bank-img/National Bank of Fujairah.png"
            planName="Unsecured personal loans with flexible terms."
            minSalary="5,000"
            fixedRate=" 3.99% "
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("National-Bank-of-Fujairah")}`}

          />

<Mortgage
            bankName="United Arab Bank"
            bankLogo="/mortgage-bank-img/United Arab Bank.jpeg"
            planName="Personal loans with competitive rates and flexible repayment options. "
            minSalary="5,000"
            fixedRate=" 4.25%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("United-Arab-Bank")}`}

          />

<Mortgage
            bankName="Commercial Bank of Dubai"
            bankLogo="/mortgage-bank-img/Commercial Bank of Dubai.png"
            planName="Personal loans with a fast and simple process. "
            minSalary="5,000"
            fixedRate="  3.75%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Commercial-Bank-of-Dubai")}`}

          />

<Mortgage
            bankName="	Al Masraf (Arab Bank for Investment & Foreign Trade)"
            bankLogo="/mortgage-bank-img/Al-Masraf.png"
            planName=" Personal financing with competitive interest rates."
            minSalary="5,000"
            fixedRate="  4.5%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Al-Masraf-(Arab-Bank-for-Investment-&-Foreign-Trade)")}`}

          />


<Mortgage
            bankName="	Ajman Bank"
            bankLogo="/mortgage-bank-img/Ajman Bank.png"
            planName="Sharia-compliant personal loans, flexible terms."
            minSalary="5,000"
            fixedRate="  4.25%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Ajman-Bank")}`}

          />

<Mortgage
            bankName="	Al Hilal Bank"
            bankLogo="/mortgage-bank-img/Al Hilal Bank.png"
            planName=" Islamic personal loans, competitive interest rates."
            minSalary="5,000"
            fixedRate="  3.99%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Al-Hilal-Bank")}`}

          />

<Mortgage
            bankName="	Abu Dhabi Commercial Bank "
            bankLogo="/mortgage-bank-img/ADCB.jpeg"
            planName=" Unsecured personal loans with attractive rates and terms."
            minSalary="5,000"
            fixedRate="  3.49%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("Abu-Dhabi-Commercial-Bank")}`}

          />

<Mortgage
            bankName="	RAKBANK"
            bankLogo="/mortgage-bank-img/rak.webp"
            planName=" Unsecured personal loans with a variety of features."
            minSalary="5,000"
            fixedRate="  3.49%"
            applyLink={`/personal-loan/apply-now?bankName=${encodeURIComponent("RAKBANK")}`}

          />

        </div>
        
      </main>
    </>
  )
}

export default PersonalLoanWrapper;