import React from "react";
import './FAQComp.css'


const FAQComp = ({ faqs }) => {
  return (
    <main className="faq-wrapper">
      <div className="faq">
        <h1 className="fs-3 mb-4">Got Questions?</h1>
        <div className="faq-questions">
          {faqs.map((faq, index) => (
            <div key={index}>
              <p className="d-inline-flex gap-1">
                <div className="faq-q-conatiner">
                  <a className="faq-svg-conatiner">
                    <svg
                      width="28px"
                      height="28px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#CCCCCC"
                        strokeWidth="0.04"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#056dae"
                          d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a
                    className="faq-q fs-5"
                    data-bs-toggle="collapse"
                    href={`#collapse-${index}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`collapse-${index}`}
                  >
                    {faq.question}
                  </a>
                </div>
              </p>
              <div className="collapse faq-c-container" id={`collapse-${index}`}>
                <div className="fs-7">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQComp;
