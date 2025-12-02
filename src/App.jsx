import Navbar from './Navbar';
import Hero from './Hero';
import Connectivity from './Connectivity';
import Features from './Features';
import Products from './Products';
import Gallery from './Gallery';
import Register from './Register';
import Location from './Location';
import Footer from './Footer';
import './assets/css/App.css';
import './assets/css/international-telephone-input.css';
// import { useEffect, useState } from 'react';

function App() {
  // const [isOverlayActive, setIsOverlayActive] = useState(false);

  // useEffect(() => {
  //   const countryList = document.querySelector('.country-list');
  //   const overlay = document.querySelector('.iti-overlay');
    
  //   if (countryList) {
  //     countryList.classList.remove('active');
  //     countryList.style.display = 'none';
  //     countryList.style.setProperty('z-index', '999999', 'important');
  //   }
  //   if (overlay) {
  //     overlay.classList.remove('active');
  //   }

  //   const checkDropdown = () => {
  //     const countryList = document.querySelector('.country-list');
  //     if (countryList) {
  //       const currentZIndex = window.getComputedStyle(countryList).zIndex;
  //       if (currentZIndex !== '999999') {
  //         countryList.style.setProperty('z-index', '999999', 'important');
  //       }
        
  //       const isVisible = window.getComputedStyle(countryList).display !== 'none';
  //       setIsOverlayActive(isVisible);
  //     }
  //   };

  //   const interval = setInterval(checkDropdown, 100);

  //   return () => clearInterval(interval);
  // }, []);

  // const handleOverlayClick = () => {
  //   const countryList = document.querySelector('.country-list');
  //   if (countryList) {
  //     countryList.style.display = 'none';
  //     countryList.classList.remove('active');
  //   }
  //   setIsOverlayActive(false);
  // };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Connectivity />
        <Features />
        <Products />
        <Gallery />
        <Register />
        <Location />
        <Footer />
      </div>
      
      {/* 1. Overlay (z-index: 9998) */}
      {/* {isOverlayActive && (
        <div
          className="fixed inset-0 bg-black/60"
          onClick={handleOverlayClick}
          style={{ zIndex: 9998 }}
        />
      )} */}

      {/* 3. WhatsApp Button (z-index: 10001) - AFTER everything */}
      <a
        href="https://api.whatsapp.com/send/?phone=601151143487&text=+Hi%2C+I+am+interested+in+Gamuda+Gardens+Township+and+would+like+to+know+more+about+the+project.+Thank+you&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-2 bottom-9 z-1000000"
      >
        <button className="animate-custom-pulse flex cursor-pointer items-center justify-center rounded-2xl bg-white py-0.5 px-1.5 text-left font-serif text-[15px] leading-4.5 tracking-wider text-[#0A6B10] shadow-lg shadow-gray transition duration-300">
          Chat <br className="sm:hidden" />
          Now!
          <div className="sticky-icon 3xl:h-10 3xl:w-10 relative ml-2 flex h-8 w-8 items-center justify-center">

            <img
              src="./src/assets/images/whatsapp.svg"
              alt="whatsapp icon"
              className="h-7 w-7 absolute top-1.5  left-1.5 3xl:left-1.5 z-10"
            />
          </div>
        </button>
      </a>
    </>
  );
}

export default App;