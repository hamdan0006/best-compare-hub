import React from "react";
import "./AboutUs.css";

import '../CommonHero/CommonHero'
import CommonHero from '../CommonHero/CommonHero'
import backgroundImage from '/commonhero/About.jpg';



const bars = [
  { label: "Innovation", filledPercentage: 85 },
  { label: "Teamwork", filledPercentage: 90 },
  { label: "Quality", filledPercentage: 80 },
];

const AboutUs = () => {
  return (
    <>
    <CommonHero
     heading="About Us" 
     backgroundImage={backgroundImage} 
   />
    <div className="app-wrapper">
      <div className="about">
        <div className="about-us-heading">
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
          <span>About Us</span>
          <h1>About Us</h1>
          <p>
            Welcome to BestCompareHub
          </p>
        </div>

        <div className="about-sub-sec">
          <h2>Our Mission Is To Simplify Financial Access</h2>
          <p>
            At BestCompareHub, our mission is to simplify the way you access financial products. Whether you’re searching for the right credit card, a personal loan to achieve your goals, an auto loan to get on the road, or a home loan or mortgage to secure your dream home, we are here to help you find the best options tailored to your needs.
          </p>
          <p>
            We know that navigating financial services can feel overwhelming. That’s why we’ve created a transparent, user-friendly platform that brings together top financial products from trusted third-party, financial institutions, and banks. Our website allows you to compare rates, terms, and features across a variety of options, helping you make informed decisions and find the right financial solution for your situation.
          </p>
        </div>

       

        <section className="team-container">
          <div className="team-section">
            <div className="team-section-elem">
              <h2>What We Do</h2>
              <p>
                We connect you with leading third-party, financial institutions, and banks offering:
              </p>
              <ul>
                <li><strong>Credit Cards:</strong> Whether you’re looking for rewards, low-interest options, or ways to build your credit, we help you find the perfect card for your lifestyle.</li>
                <li><strong>Auto Loans:</strong> From your first car to refinancing your current loan, we offer a range of auto loan options that help you secure a great deal.</li>
                <li><strong>Personal Loans:</strong> For debt consolidation, unexpected expenses, or anything in between, we connect you with personal loans that offer flexibility and favorable terms.</li>
                <li><strong>Home Loans:</strong> Whether you’re buying your first home or refinancing your current mortgage, we help you find the best home loan options with competitive rates and flexible terms.</li>
                <li><strong>Mortgage Loans:</strong> Secure financing for your new home with mortgage loans from trusted third-party, financial institutions, and banks, with options suited to your needs and financial goals.</li>
              </ul>
              <button id="abt-btn">LEARN MORE</button>
            </div>
            <div className="team-section-elem">
              <img className="about-img" src="../../public/about-us/group.jpg" alt="Team" />
            </div>
          </div>
        </section>

        <section className="team-container">
          <div className="team-section">
            <div className="team-element">
              <h2>Why Choose Us?</h2>
              <p className="team-element-p">
                At BestCompareHub, we’re dedicated to empowering you to make confident financial choices. We offer insightful resources, expert advice, and the latest financial products to help you take control of your financial future.
              </p>
              <ul>
                <li><strong>Easy Comparison:</strong> Quickly compare financial products, saving you time and effort.</li>
                <li><strong>Trusted Partners:</strong> We work with reputable third-party, financial institutions, and banks to provide you with secure, reliable, and competitive offers.</li>
                <li><strong>Transparency:</strong> We provide clear, honest details about rates, terms, and fees, so you can make the best decision.</li>
                <li><strong>Free Service:</strong> Our platform is completely free—no hidden fees or charges to compare the best offers.</li>
              </ul>
            </div>

            <div className="team-element">
              {bars.map((bar, index) => (
                <section key={index} className="bars-container">
                  <p className="bar-label">{bar.label}</p>
                  <div className="bar">
                    <div className="bar-fill" style={{ width: `${bar.filledPercentage}%` }}>
                      <p className="bar-text">{bar.label} - {bar.filledPercentage}%</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutUs;