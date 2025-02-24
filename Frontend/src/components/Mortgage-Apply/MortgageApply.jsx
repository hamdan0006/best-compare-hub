import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MortgageApply.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams ,useLocation } from "react-router-dom";


function MortgageApply() {
  // State for mortgage calculator
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bankName = params.get("bankName");


  const [propertyValue, setPropertyValue] = useState(1000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [downPayment, setDownPayment] = useState(propertyValue * (downPaymentPercent / 100));
  const [loanAmount, setLoanAmount] = useState(propertyValue - downPayment);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(25);

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
    const totalMonths = loanPeriod * 12;

    if(propertyValue > 3000000){
      toast.error("Property value cannot be more than 3,000,000");
      return;
    }

    if(downPaymentPercent >= 100){
      toast.error("Down payment cannot be more than 100% of property value");
      return
    }

    if(loanPeriod > 25){
      toast.error("Loan period cannot be more than 25 years");
      return;
    }
  
    if (downPayment === propertyValue) {
      toast.error("Down payment equals the property value. Loan amount is 0.");
      setMonthlyPayment(0);
      return;
    }
  
    const minDownPaymentPercent = 20;
    if (downPaymentPercent < minDownPaymentPercent) {
      toast.error(`Down payment must be at least ${minDownPaymentPercent}% of the property value.`);
      return;
    }
  
    const loan = propertyValue - downPayment;
    const first3YearsMonths = Math.min(totalMonths, 36); // First 3 years or the entire period if less than 3 years
    const remainingYearsMonths = Math.max(totalMonths - first3YearsMonths, 0); // Remaining period after 3 years
  
    const monthlyRateFirst3Years = 3 / 100 / 12; // 3% annual rate divided by 12
    const monthlyRateRemainingYears = 7.35 / 100 / 12; // 7.35% annual rate divided by 12
  
    // Calculate payments for the first 3 years
    const first3YearsPayment =
      (loan * monthlyRateFirst3Years * Math.pow(1 + monthlyRateFirst3Years, first3YearsMonths)) /
      (Math.pow(1 + monthlyRateFirst3Years, first3YearsMonths) - 1);
  
    // Remaining balance after 3 years
    const remainingBalance =
      loan * Math.pow(1 + monthlyRateFirst3Years, first3YearsMonths) -
      (first3YearsPayment * (Math.pow(1 + monthlyRateFirst3Years, first3YearsMonths) - 1)) /
      monthlyRateFirst3Years;
  
    let remainingYearsPayment = 0;
  
    // Calculate payments for the remaining period if applicable
    if (remainingYearsMonths > 0) {
      remainingYearsPayment =
        (remainingBalance * monthlyRateRemainingYears * Math.pow(1 + monthlyRateRemainingYears, remainingYearsMonths)) /
        (Math.pow(1 + monthlyRateRemainingYears, remainingYearsMonths) - 1);
    }
  
    // Calculate average monthly payment
    const averageMonthlyPayment =
      (first3YearsPayment * first3YearsMonths + remainingYearsPayment * remainingYearsMonths) / totalMonths;
  
    setMonthlyPayment(averageMonthlyPayment.toFixed(2));
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
      const response = await fetch("http://localhost:3000/apply-now", {
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
    <div className="container-fluid d-flex justify-content-center align-items-center mortgageapply">
      <div className="row justify-content-center w-100">
        {/* First Column - Mortgage Calculator */}
        <div className="col-lg-5 col-md-8 col-sm-10 custom-apply-column">
          <div style={{ width: "100%", margin: "0 auto", padding: "20px" }}>
            <h1 className="main-calc-heading">Mortgage Calculator</h1>
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
    max={25}
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
    max={25}
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
  );
}

export default MortgageApply;
