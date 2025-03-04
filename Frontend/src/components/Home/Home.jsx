import React, { useState,useEffect  } from "react";
import './home.css'
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet-async";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";


const slides = [
  {
    id: 0,
    title: "Compare Best Banking Products",
    description: "Find and apply for the best financial products tailored to your needs, and get approved faster with",
    image: "/hero/slider1.webp",
    bgColor: "#0d1a5b",
    link : '/'
    
  },
  {
    id: 1,
    title: "Best Credit Cards in UAE",
    description: "Apply for the best credit cards in the UAE and enjoy the fastest service available!",
    image: "/hero/slider2.webp",
    bgColor: "#19258a",
    link : '/credit-cards'

  },
  {
    id: 2,
    title: "Mortgage",
    description: "Compare and find the best mortgage banks in the UAE to secure the perfect home loan for you!",
    image: "/hero/slider3.webp",
    bgColor: "#0d1a5b",
    link : '/mortgage'
  },
  {
    id: 3,
    title: "Loan",
    description: "Compare and find the best loan services in the UAE to get the right financial solution for your needs!",
    image: "/hero/slider4.webp",
    bgColor: "#18224e",
    link : '/personal-loan'
  },
  
];






function Home() {

  const [activeIndex, setActiveIndex] = useState(0);


  // Auto-change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };


  const [visibleIndex, setVisibleIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensure animation plays every time on scroll
      mirror: true, // Repeats animation when scrolling up
    });
  }, []);
  


  return (
    <>
   <Helmet>
   <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Compare banking products, including home loans, auto loans, mortgages, and credit cards. Find the best financial solutions tailored to your needs." />
    <meta name="keywords" content="home loan, auto loan, mortgage, credit cards, banking products, loan comparison, finance solutions" />
    <meta name="author" content="Your Bank Name" />
    <meta name="robots" content="index, follow"/>
    <title>Compare Best Banking Products </title>

        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BestCompareHub",
    "description": "Compare and apply for the best financial products.",
    "publisher": {
      "@type": "Organization",
      "name": "BestCompareHub"
    }
  })}
</script>

      </Helmet>


    
      <main className='home flex'>

        
       
      <section className="hero">
      <div
        className="hero-section-home"
        style={{
          backgroundImage: `url(${slides[activeIndex].image})`,
          backgroundColor: slides[activeIndex].bgColor,
        }}
      >
        <div className="hero-wrapper">
          {/* Left Side Content */}
          <div className="hero-content">
            <h1>{slides[activeIndex].title}</h1>
            <p>{slides[activeIndex].description}</p>
            <NavLink  className='hero-link' to={slides[activeIndex].link}>
              <div className="inquire-container">
              
            <span className="hero-inquire-btn">Inquire Now</span>

            <svg className="inquire-svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>

            </NavLink>
          </div>

          {/* Swiper Slider (Hidden Images, Only Background Changes) */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            className="hero-slider"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}></SwiperSlide> 
            ))}
          </Swiper>
        </div>

        {/* Bottom Button Container */}
        <div className="button-container">
  {/* Left Arrow for small screens */}
  

  {slides.map((slide, index) => (
    <div key={slide.id} className={`button-wrapper ${index === visibleIndex ? "visible" : "hidden"}`}>
      <p
        className={index === activeIndex ? "active" : ""}
        onClick={() => handleButtonClick(index)}
      >
        {slide.title}
      </p>
    </div>
  ))}

  {/* Right Arrow for small screens */}
  
</div>

<div className="res-slider-hero">
      <button className="arrow left" onClick={prevSlide}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
      </button>

      <h1 id="res-slider-hero-ttl">{slides[activeIndex].title}</h1>

      <button className="arrow right" onClick={nextSlide}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
      </button>
      </div>


      </div>
    </section>




<div className="home-section">

      <section className="info-section">
        <div className="info-section-container container-fluid">
          <div className="row info-row" data-aos="fade-up">

            <div className="col-lg-7 col-md-12 col-sm-12 info-cont-content info-cont-content-1" >
              <div 
  
     className="info-cont-content-1-txt" >
                <h2>UNLEASH A POWERFUL DIFFERENCE</h2>
                <p>We empower individuals with strategic financial guidance, seamlessly linking them to the most suitable banking solutions.</p>
              </div>
            </div>
            <div className="col-lg-5  col-md-12 col-sm-12 info-cont-content info-cont-content-2">
              <img src="/home/img-1.jpg" alt="" className="img-1-home" />
            </div>


          </div>

        </div>


        </section> 


        <section className="journey-section">
      <div className="container">
      
        <h2 className="journey-title">
          Our <span className="highlight">Services</span>
        </h2>

        <div className="journey-content">
         
          <div className="journey-text" data-aos="fade-up"> 
            <h3>Transforming banking services to create a positive impact.</h3>
            <p>
            Our approach ensures that we deliver top-notch financial services, offering the best mortgage options, credit cards, and loan solutions. With the power of digital transformation, we help you make smarter financial decisions and achieve your goals seamlessly.
            </p>
          </div>

         
          <div className="journey-divider">

            <svg viewBox="0 0 20 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10,0 L10,45 Q10,50 15,50 Q10,50 10,55 L10,100"
                stroke="black"
                fill="transparent"
                strokeWidth="1"
              />
            </svg>
          </div>

         
          <div className="journey-stats" data-aos="fade-right">
            <div className="stats-item">
              <h4>250+</h4>
              <p>Completion of Complex projects & products</p>
            </div>
            
            <div className="stats-item">
              <h4>70+</h4>
              <p>Change makers driving revolution</p>
            </div>
            <div className="stats-item">
              <h4>20+</h4>
              <p>Awards & Recognitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        

        
    <section class="team-sec">

  <div class="team-sec-elem">
    <div class="team-details">
      <h5>WHAT WE DO</h5>
      <h1>Why Us</h1>

      <p class="team-details-txt">
      Focus on growing your business while we equip you with the essential tools to effectively communicate your vision.      </p>

      <ul class="team-goals-list">
        <li class="team-goals-list-item">
          <span class="tick-icon">
            <svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" fill="black"></path>
            </svg>
          </span>
          Skip the research; we find the best options for you.
        </li>

        <li class="team-goals-list-item">
          <span class="tick-icon">
            <svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" fill="black"></path>
            </svg>
          </span>
          Get professional insights on financial services.
        </li>

        <li class="team-goals-list-item">
          <span class="tick-icon">
            <svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" fill="black"></path>
            </svg>
          </span>
          We simplify banking decisions for you.
        </li>

        <li class="team-goals-list-item">
          <span class="tick-icon">
            <svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" fill="black"></path>
            </svg>
          </span>
          Get expert help at no cost.
        </li>

        <li class="team-goals-list-item">
          <span class="tick-icon">
            <svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" fill="black"></path>
            </svg>
          </span>
          We connect you with the right bank for your needs.
        </li>

      </ul>
    </div>
  </div>

  <div class="team-sec-elem">
    <div class="image-container">
      <img class="we-img service-1" src="/home/services-1.webp" alt="Service 1 Image" />
      <img class="we-img service-2" src="/home/services-2.webp" alt="Service 2 Image" data-aos="fade-up" />
    </div>
  </div>
</section>


       

        </div>


      </main>
    </>
  )
}

export default Home;
