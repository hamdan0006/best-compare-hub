import React from "react";
import "./Terms.css"; // Ensure you have the required CSS file
import { NavLink } from 'react-router-dom';

import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/Policy.jpg';



const termsSections = [
  {
    title: "Introduction",
    content:
      "These Terms and Conditions govern your use of our services and the relationship between you and the financial institutions or banks we partner with. By using our platform, you agree to these terms.",
  },
  {
    title: "Eligibility",
    content:
      "To use our services, you must be at least 18 years old and legally capable of entering into a binding agreement. You must also comply with all applicable laws and regulations.",
  },
  {
    title: "User Responsibilities",
    content:
      "You are responsible for providing accurate and complete information when using our services. You must not misuse our platform, including but not limited to fraud, unauthorized access, or any illegal activities.",
  },
  {
    title: "Bank and Financial Institution Partnerships",
    content:
      "We partner with banks and financial institutions to provide you with financial products and services. These third parties have their own terms and conditions, which you must agree to when using their services.",
  },
  {
    title: "Account Security",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately if you suspect any unauthorized access to your account.",
  },
  {
    title: "Fees and Charges",
    content:
      "Some services may involve fees or charges, which will be disclosed to you before you use the service. These fees are determined by the banks or financial institutions we partner with.",
  },
  {
    title: "Limitation of Liability",
    content:
      "We are not liable for any damages arising from your use of our platform or the services provided by our partner banks and financial institutions. This includes but is not limited to financial losses, data breaches, or service interruptions.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to terminate or suspend your access to our platform at any time, without notice, for any reason, including violation of these terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by the laws of the jurisdiction in which we operate. Any disputes will be resolved in accordance with these laws.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms and Conditions from time to time. Any changes will be posted on our website, and your continued use of our platform constitutes acceptance of the updated terms.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
    <CommonHero
     heading="Terms & Conditions" 
     backgroundImage={backgroundImage} 
   />
    <div className="app-wrapper">
      <div className="terms-and-conditions">
        <div className="terms-heading">
          <a href="/">
            Home
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-home"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </a>
          <span>Terms and Conditions</span>
          <h1>Terms and Conditions</h1>
          <p>
            These terms govern your use of our platform and the services provided by our partner banks and financial institutions.
          </p>
        </div>

        <div className="terms-content">
          {termsSections.map((section, index) => (
            <div key={index} className="terms-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <section className="team-container">
          <div className="team-section">
            <div className="team-section-elem">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <ul>
                <li>Email: Sales@bestcomaprehub.com</li>
              </ul>
              <NavLink to='/contact-us'>
                <button id="terms-btn">CONTACT US</button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default TermsAndConditions;