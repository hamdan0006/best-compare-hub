import React from "react";
import "./AboutUs.css"; 

const skills = [
  { name: "Node.js", filledPercentage: 80 },
  { name: "AI & ML", filledPercentage: 90 },
  { name: "Blockchain", filledPercentage: 75 },
];

const bars = [
  { label: "Innovation", filledPercentage: 85 },
  { label: "Teamwork", filledPercentage: 90 },
  { label: "Quality", filledPercentage: 80 },
];

const AboutUs = () => {
  return (
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
            We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals.
          </p>
        </div>

        <div className="about-sub-sec">
          <h2>Our Mission Is To Deliver A High-Quality Service That Exceeds Client's Expectations</h2>
          <p>
            Qubit Cube Solutions is a leading provider of industry-specific software solutions based in Dubai – United Arab Emirates. We offer tailored innovative software solutions using Node.js, iOS, Artificial Intelligence, Machine Learning, Blockchain, Cloud & DevOps, IoT, Cybersecurity, Extended Reality, and Experience Design.
          </p>
        </div>

        <section className="skill-container">
          <div className="skill-section">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-section-elem"
                style={{ background: `conic-gradient(#056DAE ${skill.filledPercentage}%, #ddd 0%)` }}
              >
                <div className="skill-text">
                  <p>{skill.filledPercentage}%</p>
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-container">
          <div className="team-section">
            <div className="team-section-elem">
              <h2>A Leader Must Inspire Or His Team Will Expire!</h2>
              <p>
                We strive to understand the challenges that the industry is facing today and use our strong business acumen to find exclusive and unprecedented solutions for them.
              </p>
              <button id="abt-btn">ABOUT MORE</button>
            </div>
            <div className="team-section-elem">
              <img className="about-img" src="../../public/about-us/group.jpg" alt="Team" />
            </div>
          </div>
        </section>

        <section className="team-container">
          <div className="team-section">
            <div className="team-element">
              <h2>Teamwork Makes The Dream Work!</h2>
              <p className="team-element-p">
                Technology is subservient to human potential. The human mind is a great creation, twisted and perverse yet paving the way to concrete advancements.
              </p>
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
  );
};

export default AboutUs;
