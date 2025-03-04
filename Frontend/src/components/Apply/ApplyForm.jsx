import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/personal-loan.jpg';

import './ApplyForm.css';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function ApplyForm() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    CompanyName: "",
    Income: "",
    State: "",
    BankName: "",
    CardName: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/credit-cards/${id}`)
      .then((response) => {
        setCard(response.data);
        setFormData((prevData) => ({
          ...prevData,
          CardName: response.data.CardName,
          BankName: response.data.BankName,
        }));
      })
      .catch((error) => {
        toast.error("Error fetching card details. Please try again later.");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { Username, Email, State } = formData;

    if (!Username.trim()) {
      toast.error("Name is required.");
      return false;
    }
    if (Username.length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return false;
    }
    if (!Email.trim()) {
      toast.error("Email is required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      toast.error("Invalid email format.");
      return false;
    }
    if (!State.trim()) {
      toast.error("Please select an Emirate.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/credit-cards/apply`,
        formData
      );
      toast.success("Application submitted successfully!");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = error.response.data.errors;
        errors.forEach((err) => {
          toast.error(`Error: ${err.msg}`);
        });
      } else {
        toast.error("Failed to submit application. Please try again later.");
      }
    }
  };

  if (!card) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <>
    <CommonHero
     heading="Apply Now" 
     backgroundImage={backgroundImage} 
   />
      <ToastContainer />

      <div className="table-container">
        <table className="card-dtl-table">
          <tr>
            <td colSpan="12">Credit Card Details</td>
          </tr>
          <tr>
            <td className="table-r-hding" rowSpan="2">
              {card.image && <img src={card.image} alt={card.CardName} className="card-img" />}
            </td>
            <td className="table-r-hding">Bank Name</td>
            <td className="table-r-hding">Minimum Salary</td>
            <td className="table-r-hding">Annual Fee</td>
            <td className="table-r-hding">Rate</td>
            <td className="table-r-hding">Welcome Offer</td>
            <td className="table-r-hding">Salary Transfer</td>
            <td className="table-r-hding">Cashback</td>
            <td className="table-r-hding">Islamic Finance</td>
            <td className="table-r-hding">Balance Transfer</td>
            <td className="table-r-hding">Airport Service</td>
            <td className="table-r-hding">Free For Life</td>
          </tr>
          <tr>
            <td className="table-r-item">{card.BankName}</td>
            <td className="table-r-item">{card.MinimumSalary}</td>
            <td className="table-r-item">{card.AnnualFee}</td>
            <td className="table-r-item">{card.Rate}%</td>
            <td className="table-r-item">{card.WelcomeOffer ? 'Yes' : 'No'}</td>
            <td className="table-r-item">{card.SalaryTransfer ? 'Yes' : 'No'}</td>
            <td className="table-r-item">{card.Cashback ? 'Yes' : 'No'}</td>
            <td className="table-r-item">{card.IslamicFinance ? 'Yes' : 'No'}</td>
            <td className="table-r-item">{card.BalanceTransfer ? 'Yes' : 'No'}</td>
            <td className="table-r-item">{card.AirportService ? 'Yes' : 'No'}</td>
            <td className="table-r-item">{card.FreeForLife ? 'Yes' : 'No'}</td>
          </tr>
        </table>
      </div>

      <div className="form-layout">
        <div className="form-container">
          <div className="form-container-element form-container-element-1">
            <h1>Request A Callback</h1>
          </div>
        </div>

        <div className="form-container">
          <div className="form-wrapper form-container-element form-container-element-2">
            <Box>
              <form onSubmit={handleSubmit} className="credit-card-form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      className="card-inpt-txt-field"
                      required
                      fullWidth
                      label="Name"
                      name="Username"
                      value={formData.Username}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="card-inpt-txt-field"
                      required
                      fullWidth
                      label="Email"
                      name="Email"
                      type="email"
                      value={formData.Email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="card-inpt-txt-field"
                      fullWidth
                      label="Company Name"
                      name="CompanyName"
                      value={formData.CompanyName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="card-inpt-txt-field"
                      fullWidth
                      label="Monthly Income"
                      name="Income"
                      type="number"
                      value={formData.Income}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth className="card-inpt-txt-field">
                      <InputLabel>Emirates*</InputLabel>
                      <Select
                        required
                        name="State"
                        value={formData.State}
                        onChange={handleChange}
                        label="Emirates"
                      >
                        <MenuItem value="">
                          <em>Select Below</em>
                        </MenuItem>
                        <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                        <MenuItem value="Dubai">Dubai</MenuItem>
                        <MenuItem value="Sharjah">Sharjah</MenuItem>
                        <MenuItem value="Ajman">Ajman</MenuItem>
                        <MenuItem value="Umm Al Quwain">Umm Al Quwain</MenuItem>
                        <MenuItem value="Ras Al Khaimah">Ras Al Khaimah</MenuItem>
                        <MenuItem value="Fujairah">Fujairah</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="morbutton mor-apply-btn-2 credit-card-apply-btn"
                    >
                      Apply Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
