import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css';

import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/contact.jpg';

function ContactUs() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { FirstName, LastName, Email, PhoneNumber, Message } = formData;

    if (!FirstName || !LastName || !Email || !PhoneNumber || !Message) {
      toast.error("All fields are required.");
      return false;
    }

    if (FirstName.length < 3 || LastName.length < 3) {
      toast.error("First Name and Last Name must be at least 3 characters long.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (PhoneNumber.length < 9 || PhoneNumber.length > 20) {
      toast.error("Phone number must be between 9 and 20 digits.");
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
      const response = await axios.post("http://localhost:3000/contact-us", formData);
      toast.success("Application submitted successfully!");
      console.log(response.data);
    } catch (error) {
      toast.error("Failed to submit application. Please try again later.");
    }
  };

  return (
    <>

<CommonHero
     heading="Contact Us" 
     backgroundImage={backgroundImage} 
   />

      <div className="contact-us-container container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 contact-us-sub-container contact-us-sub-container-1">
            <div className="contact-txt-container">
              <h1 className="contact-us-title">Contact Us</h1>
              <p className='contact-txt-container-txt'>
                You can contact us through our online contact form or by phone.
                We’re here to assist you with any inquiries or support you need.
                Feel free to reach.
              </p>
              <p>Sales@bestcomaprehub.com</p>
              <p>+971505976209</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 contact-us-sub-container contact-us-sub-container-2">
            <div className="conatact-inpt-container">
              <h2>Get in Touch</h2>
              <p>Reach us Anytime</p>

              <form onSubmit={handleSubmit} className='contact-form'>
                <div className="names-conatiner">
                  <input 
                    placeholder='First Name' 
                    type="text" 
                    className='conatct-name cntc-inpt'
                    value={formData.FirstName}
                    name="FirstName"
                    onChange={handleChange}
                  />
                  <input 
                    placeholder='Last Name' 
                    type="text" 
                    className='conatct-name cntc-inpt'
                    value={formData.LastName}
                    name="LastName"
                    onChange={handleChange}
                  />
                </div>

                <div className="email-container">
                  <input 
                    type="email" 
                    placeholder='Enter your Email' 
                    className='conatct-email cntc-inpt'
                    value={formData.Email}
                    name="Email"
                    onChange={handleChange}
                  />
                </div>

                <div className="email-container">
                  <input 
                    placeholder='Enter Your Phone Number' 
                    type="text" 
                    className='conatct-email cntc-inpt'
                    value={formData.PhoneNumber}
                    name="PhoneNumber"
                    onChange={handleChange}
                  />
                </div>

                <div className="email-container">
                  <textarea 
                    placeholder='How Can We Help?'  
                    className='conatct-email cntc-inpt cntct-txt'
                    value={formData.Message}
                    name="Message"
                    onChange={handleChange}
                  />
                </div>

                <button type='submit' className='btn btn-primary contc-btn'>
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default ContactUs;
