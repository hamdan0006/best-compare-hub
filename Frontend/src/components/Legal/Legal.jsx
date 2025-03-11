import React from "react";

import { NavLink } from 'react-router-dom';

import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/Policy.jpg';

const legalSections = [
  {
    title: "Introduction",
    content:
      "This Legal Notice outlines the terms and conditions under which we operate. Please read carefully. We act as an intermediary between users and banks, helping you access relevant financial services and products. We do not offer banking or financial services ourselves, nor do we collect sensitive financial documents such as KYC documents. We ensure data protection on our end to provide you with a safe experience."
  },
  {
    title: "Information We Collect",
    content:
      "We may collect Personal Identification Information (such as name, address, phone number, and email), Financial Preferences (such as services of interest), and Usage Data (such as browsing behavior and interactions with our website)."
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to provide, maintain, and improve our services; personalize user experience; communicate with you regarding relevant services; prevent misuse of our platform; and comply with legal requirements."
  },
  {
    title: "Data Sharing and Disclosure",
    content:
      "We may share your information with trusted third-party service providers or banks only to facilitate the requested services. We do not sell or share your data with unauthorized parties."
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard measures to protect your information. We ensure data protection on our end to provide a secure experience."
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your data; withdraw consent for data processing; and lodge complaints with relevant authorities if your data rights are violated."
  },
  {
    title: "Cookies",
    content:
      "We use cookies to enhance your experience. You can manage your cookie preferences through your browser settings."
  },
  {
    title: "Third-Party Websites",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or security of these websites."
  },
  {
    title: "Changes to This Legal Notice",
    content:
      "We may update this Legal Notice from time to time. Updates will be posted on this page with the new effective date."
  },
];

const Legal = () => {
  return (
    <>
    <CommonHero
     heading="Legal Notice" 
     backgroundImage={backgroundImage} 
   />
    <div className="app-wrapper">
      <div className="privacy-policy">
        <div className="privacy-heading">
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
          <span>Legal Notice</span>
          <h1>Legal Notice</h1>
          <p>
            We are an intermediary platform connecting users with banks and financial services. We do not offer financial services ourselves.
          </p>
        </div>

        <div className="privacy-content">
          {legalSections.map((section, index) => (
            <div key={index} className="privacy-section">
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
                For any inquiries, please contact us at:
              </p>
              <ul>
                <li>Email: Sales@bestcomaprehub.com</li>
              </ul>
              <NavLink to='/contact-us'>
                <button id="privacy-btn">CONTACT US</button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Legal;
