import React from "react";
import "./Privacy.css"; // Ensure you have the required CSS file
import { NavLink } from 'react-router-dom';

const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect the following types of personal information: Personal Identification Information (name, address, phone number, email address, etc.), Financial Information (account details, transaction history, financial preferences, and data provided by banks, financial institutions, or other partners), Technical Data (IP address, browser type, device type, cookies, etc.), and Usage Data (browsing behavior and interaction with our website).",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to provide, maintain, and improve our services; personalize user experience; communicate with you regarding your accounts, transactions, and promotions; process payments and prevent fraud; comply with legal and regulatory requirements; and improve security and prevent misuse of our services.",
  },
  {
    title: "Data Sharing and Disclosure",
    content:
      "We may share your personal data with trusted third-party service providers, financial institutions, and banks; to comply with legal obligations; or in the event of a business transfer (merger, acquisition, or asset sale). We do not ask for sensitive documents such as KYC and do not share your data with unauthorized parties.",
  },
  {
    title: "Data Security",
    content:
      "We employ industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure. We work with banks and financial institutions to ensure secure data handling.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your personal data; withdraw consent for data processing; request information about data processing; and lodge complaints with relevant authorities if you believe your data rights are violated.",
  },
  {
    title: "Cookies",
    content:
      "We use cookies to enhance your experience. Cookies are small text files stored on your device that allow us to recognize your preferences. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Third-Party Websites",
    content:
      "Our website may contain links to third-party websites, including those of banks and financial institutions. We are not responsible for the content, privacy practices, or security of these third-party sites.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal data as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law, including financial regulations.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on our website with the new effective date.",
  },
];

const PrivacyPolicy = () => {
  return (
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
          <span>Privacy Policy</span>
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>

        <div className="privacy-content">
          {privacySections.map((section, index) => (
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
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: [Insert email address]</li>
                <li>Address: [Insert physical address]</li>
              </ul>
              <NavLink to='/contact-us'>
                <button id="privacy-btn">CONTACT US</button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
