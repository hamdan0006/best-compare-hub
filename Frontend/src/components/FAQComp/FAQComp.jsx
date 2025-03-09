import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQComp.css"; // Import the CSS file for styling

const FAQComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the clicked answer
    }
  };

  useEffect(() => {
    // Dynamically set the height of the answer container when activeIndex changes
    if (activeIndex !== null && answerRefs.current[activeIndex]) {
      const answerElement = answerRefs.current[activeIndex];
      answerElement.style.maxHeight = `${answerElement.scrollHeight}px`;
    }

    // Reset the height of previously opened answers
    answerRefs.current.forEach((el, i) => {
      if (i !== activeIndex && el) {
        el.style.maxHeight = "0";
      }
    });
  }, [activeIndex]);

  const faqData = [
    {
      question: "What criteria should be considered before taking out a credit card?",
      answer: (
        <ul>
          <li>
            <strong>Interest Rates:</strong> Is the rate communicated by a monthly interest rate or an annual rate? Rates may also vary according to your monthly salary, your place of employment, or whether you’re already a customer of the bank.
          </li>
          <li>
            <strong>Salary Requirement:</strong> What is the minimum salary requirement? You need to identify which cards you’re eligible for and then compare the rates, fees, and other benefits accordingly.
          </li>
          <li>
            <strong>Foreign Currency Rate:</strong> If you travel frequently, work out how much you will pay on top of the transaction amount if transactions are made in a foreign currency. Each time you make a transaction on your credit card outside of the UAE, banks will charge you a fee as a percentage of your spend.
          </li>
          <li>
            <strong>Annual Fee:</strong> Even if a bank advertises no annual fee, make sure a fee is not applicable from the second year onwards.
          </li>
          <li>
            <strong>Other Applicable Fees and Charges:</strong> For late payments, for example.
          </li>
          <li>
            <strong>Benefits:</strong> Consider the benefits provided, such as air miles, airport lounge access, discounts on hotels and car hire, or cashback.
          </li>
        </ul>
      ),
    },
    {
      question: "What should I do if I’m struggling to meet the minimum payment on my card?",
      answer:
        "Arrange to meet with your bank and discuss your options with them. Perhaps you can convert the outstanding balance to a loan in order to pay off the card quicker and with lesser interest payments to be made. If you do manage to arrange this, cut the card up and don’t ever use it again!",
    },
    {
      question: "How do I make repayments on my credit card?",
      answer: "You can make repayments in one of three ways: ATM machine, in the branch, or online.",
    },
    {
      question: "How can I have a credit card without paying interest?",
      answer:
        "Most credit cards offer an interest-free period of 50-55 days. If you pay the full outstanding balance within this period, you will not have to pay interest.",
    },
    {
      question: "Should I take out a credit card if I have a big purchase to make?",
      answer:
        "No. You would be better taking out a personal loan instead, where the interest is less and payments are often more manageable. This way, you avoid the temptation and option of just putting one more thing on your credit card.",
    },
    {
      question: "Do all credit card products charge the same or a similar rate of interest?",
      answer:
        "No. Some credit cards will charge no interest for up to 12 months. Others charge 30-35% interest. Be warned, rates in the UAE are much higher than most other countries.",
    },
    {
      question: "How will the spending limit on my credit card be determined?",
      answer:
        "Your bank will determine the spending limit on your card according to your ability to pay back the debt and the type of credit card you have. Your limit will usually be set at two or three times your monthly salary. As interest rates in the UAE are very high, we advise you don’t borrow more than you can realistically afford to pay back.",
    },
    {
      question: "How can I save with a balance transfer?",
      answer:
        "You can save interest charges by transferring your outstanding balance to another bank’s credit card that charges no interest. Click here for further information about this.",
    },
    {
      question: "What is a premium credit card?",
      answer:
        "A premium credit card normally requires the holder to have a higher income and will often incur a higher annual fee in exchange for premium benefits.",
    },
    {
      question: "Are there Islamic Finance credit cards available?",
      answer:
        "Yes. Some Islamic credit cards come with a monthly fee and others with a monthly profit rate. These cards often still have an annual fee, so make sure that you check clearly all the associated fees.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="faq-icon" />
              ) : (
                <FaChevronDown className="faq-icon" />
              )}
            </div>
            <div
              className="faq-answer"
              ref={(el) => (answerRefs.current[index] = el)}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComp;