import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CompanyListing.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function CompanyListing() {
 




  // State for form fields
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [State, setState] = useState("");

  // Update loan and down payment when values change
 

  const handleSubmit = async () => {
    if (!FirstName || !LastName || !PhoneNumber) {
      toast.error("Please fill out all mandatory fields.");
      return;
    }

    if (PhoneNumber.length < 9 || PhoneNumber.length > 20 || !/^\d+$/.test(PhoneNumber)) {
      toast.error("Please enter a valid phone number (9-20 digits).");
      return;
    }

    if (Email && !/\S+@\S+\.\S+/.test(Email) || Email == '') {
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

    };

    try {
      const response = await fetch("http://localhost:3000/company-listing/apply-now", {
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
       

        {/* Second Column - Form */}
        <div className="col-lg-5 col-md-8 col-sm-10 custom-apply-column-2 mt-4 mt-lg-0">
          <h2 className="mor-apply-now-heading fs-2">Apply Now</h2>
          <p className="fs-6 mor-apply-now-txt">
            Enter your details, and we will call you back within 24 hours to proceed with your application. (* denotes mandatory fields)
          </p>
          <div className="mor-inpt-field-container">
            <TextField required label="First Name " value={FirstName} onChange={(e) => setFirstName(e.target.value)} fullWidth margin="normal" />
            <TextField required label="Last Name " value={LastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal" />
            <TextField required label="Company Name " value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} fullWidth margin="normal" />
            <TextField required label="Phone Number " value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} fullWidth margin="normal" />
            <TextField required label="Email" value={Email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
            <FormControl fullWidth margin="normal" sx={{ position: "relative" }}>
              <InputLabel sx={{ padding: "0 6px" }}>Emirate *</InputLabel>
              <Select
                value={State}
                required
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

export default CompanyListing;
