import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AutoLoan.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams ,useLocation } from "react-router-dom";

import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/auto-loan.jpg';

function AutoLoan() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bankName = params.get("bankName");



  // State for mortgage calculator
  const [propertyValue, setPropertyValue] = useState(1000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [downPayment, setDownPayment] = useState(propertyValue * (downPaymentPercent / 100));
  const [loanAmount, setLoanAmount] = useState(propertyValue - downPayment);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(5);

  // State for form fields
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [State, setState] = useState("");

  // Update loan and down payment when values change
  useEffect(() => {
    const calculatedDownPayment = propertyValue * (downPaymentPercent / 100);
    setDownPayment(calculatedDownPayment);
    setLoanAmount(propertyValue - calculatedDownPayment);
  }, [propertyValue, downPaymentPercent]);

  const calculateMortgage = () => {
    if (propertyValue > 3000000) {
      toast.error("Property value cannot exceed 3,000,000");
      return;
    }
    if (downPaymentPercent >= 100) {
      toast.error("Down payment cannot be 100% or more of the property value");
      return;
    }
    if (loanPeriod > 5) {
      toast.error("Loan period cannot exceed 5 years");
      return;
    }
    if (downPaymentPercent < 20) {
      toast.error("Down payment must be at least 20%");
      return;
    }

    const annualInterestRate = 3; // Fixed at 3% annually
    const monthlyInterestRate = annualInterestRate / 100 / 12; // Convert to monthly rate
    const totalMonths = loanPeriod * 12;

    // Monthly Payment Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const monthlyPayment =
      loanAmount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2)); // Round to 2 decimal places
  };


  const handleSubmit = async () => {
    if (!FirstName || !LastName || !PhoneNumber) {
      toast.error("Please fill out all mandatory fields.");
      return;
    }

    if (PhoneNumber.length < 9 || PhoneNumber.length > 20 || !/^\d+$/.test(PhoneNumber)) {
      toast.error("Please enter a valid phone number (9-20 digits).");
      return;
    }

    if (Email && !/\S+@\S+\.\S+/.test(Email)) {
      toast.error("Please enter a valid Email address.");
      return;
    }

    const formData = {
      FirstName,
      LastName,
      CompanyName,
      PhoneNumber,
      Email,
      State,
      BankName: bankName, 
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auto-loan/apply-now`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        console.log("Form data sent to the backend:", formData);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <>
    
<CommonHero
     heading="Apply Now" 
     backgroundImage={backgroundImage} 
   />
    <div className="container-fluid d-flex justify-content-center align-items-center mortgageapply">
      <div className="row justify-content-center w-100">
        {/* First Column - Mortgage Calculator */}
        <div className="col-lg-5 col-md-8 col-sm-10 custom-apply-column">
          <div style={{ width: "100%", margin: "0 auto", padding: "20px" }}>
            <h1 className="main-calc-heading">Auto Loan Calculator</h1>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="propertyValue" style={{ display: "block", marginBottom: "10px" }}>
                Property Value (AED):
              </label>
              <input
                type="range"
                id="propertyValue"
                min="100000"
                max="3000000"
                step="10000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(parseInt(e.target.value, 10))}
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <input
                className="mor-number"
                type="number"
                id="propertyValueNumber"
                value={propertyValue}
                onChange={(e) => setPropertyValue(parseInt(e.target.value, 10))}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="downPaymentPercent" style={{ display: "block", marginBottom: "10px" }}>
                Down Payment (% of Property Value):
              </label>
              <input
                type="range"
                id="downPaymentPercent"
                min={0}
                max={100}
                step={1}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value, 10))}
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <input
                type="number"
                className="mor-number"
                id="downPaymentPercentNumber"
                value={downPaymentPercent || ""}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value, 10))}
                placeholder="Enter down payment percentage"
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="loanPeriod" style={{ display: "block", marginBottom: "10px" }}>
                Desired Loan Period (Years): {loanPeriod}
              </label>

              {/* Range Slider */}
              <input
                type="range"
                id="loanPeriodRange"
                min={1}
                max={5}
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(parseInt(e.target.value, 10))}
                className="mor-range-slider"
                style={{ width: "100%", marginBottom: "10px" }}
              />

              {/* Number Input */}
              <input
                type="number"
                id="loanPeriod"
                min={1}
                max={5}
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(parseInt(e.target.value, 10))}
                className="mor-number"
                placeholder="Enter loan period in years"
              />
            </div>



            <button className="morbutton" onClick={calculateMortgage}>
              Calculate Monthly Payment
            </button>

            {monthlyPayment > 0 && (
              <div className="result-display mt-4">
                <h3 className="mt-4">Your Average Monthly Payment</h3>
                <p>AED {monthlyPayment}</p>
              </div>
            )}
          </div>
        </div>

        {/* Second Column - Form */}
        <div className="col-lg-5 col-md-8 col-sm-10 custom-apply-column-2 mt-4 mt-lg-0">
          <h2 className="mor-apply-now-heading fs-2">Apply Now</h2>
          <p className="fs-6 mor-apply-now-txt">
            Enter your details, and we will call you back within 24 hours to proceed with your application. (* denotes mandatory fields)
          </p>
          <div className="mor-inpt-field-container">
            <TextField label="First Name *" value={FirstName} onChange={(e) => setFirstName(e.target.value)} fullWidth margin="normal" />
            <TextField label="Last Name *" value={LastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal" />
            <TextField label="Company Name (optional)" value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} fullWidth margin="normal" />
            <TextField label="Phone Number *" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} fullWidth margin="normal" />
            <TextField label="Email" value={Email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
            <FormControl fullWidth margin="normal" sx={{ position: "relative" }}>
              <InputLabel sx={{ padding: "0 6px" }}>Emirate *</InputLabel>
              <Select
                value={State}
                onChange={(e) => setState(e.target.value)}
                sx={{ marginTop: "8px" }}
                required
              >
                <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                <MenuItem value="Dubai">Dubai</MenuItem>
                <MenuItem value="Sharjah">Sharjah</MenuItem>
                <MenuItem value="Ajman">Ajman</MenuItem>
                <MenuItem value="Fujairah">Fujairah</MenuItem>
                <MenuItem value="Ras Al Khaimah">Ras Al Khaimah</MenuItem>
                <MenuItem value="Umm Al Quwain">Umm Al Quwain</MenuItem>
              </Select>
            </FormControl>
            <input type="hidden" name="BankName" value={bankName} />
            <button className="morbutton mor-apply-btn-2 mt-3" onClick={handleSubmit}>
              Apply now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
}

export default AutoLoan;
