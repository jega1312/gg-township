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
import '/src/assets/css/international-telephone-input.css';

function App() {
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

        <a
          href="https://api.whatsapp.com/send/?phone=601151143487&text=+Hi%2C+I+am+interested+in+Gamuda+Gardens+Township+and+would+like+to+know+more+about+the+project.+Thank+you&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="animate-custom-pulse fixed right-2 bottom-9 z-50 flex cursor-pointer items-center justify-center rounded-2xl bg-white p-2 text-left tracking-wider font-serif text-[15px] leading-4.5 text-[#0A6B10] shadow-sm shadow-white transition duration-300">
            Chat <br class="sm:hidden" />
            Now!
            <div class="3xl:h-10 3xl:w-10 relative ml-2 flex h-8 w-8 items-center justify-center">
              <img
                src="./src/assets/images/green-chat-bubble.png"
                alt="green bubble"
                class="3xl:h-10 3xl:w-10 absolute top-0 left-0 h-9 w-9"
              />

              <img
                src="./src/assets/images/whatsapp.svg"
                alt="whatsapp icon"
                class="3xl:h-6 3xl:w-6 absolute top-1.5 left-2 z-10 h-5 w-5"
              />
            </div>
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
