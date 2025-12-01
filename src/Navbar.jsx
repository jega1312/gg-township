import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuAnim, setMenuAnim] = useState('');

  const toggleMenu = () => {
    if (open) {
      setMenuAnim('animate__animated animate__fadeOutRight');
      setTimeout(() => {
        setOpen(false);
      }, 360);
    } else {
      setOpen(true);
      setMenuAnim('animate__animated animate__fadeInRight');
    }
  };

  const handleMenuItemClick = () => {
    if (open) {
      setMenuAnim('animate__animated animate__fadeOutRight');
      setTimeout(() => {
        setOpen(false);
      }, 400);
    }
  };

  return (
    <>
      <nav className="fixed z-20 flex w-full items-center justify-between gap-x-2 bg-white p-3.5 shadow-lg lg:px-16 xl:px-18 2xl:px-20 2xl:py-3 3xl:px-28 3xl:py-2.5">
        <a href="#hero">
          <img
            src="../src/assets/images/logo.png"
            alt="Logo"
            className="h-auto w-[120px] md:w-[90px] lg:w-[100px] 3xl:w-[140px]"
          />
        </a>

        <div className="flex lg:gap-x-5 xl:gap-x-14 2xl:gap-x-20 3xl:gap-x-12">
          <div className="hidden items-center justify-center gap-x-4 lg:flex xl:gap-x-14 2xl:gap-x-16 3xl:gap-x-14">
            <a
              href="#connectivity"
              className="sofia-pro 3xl:text-[22px] text-[18px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
            >
              Connectivity
            </a>
            <a
              href="#features"
              className="sofia-pro 3xl:text-[22px] text-[18px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
            >
              Features
            </a>
            <a
              href="#products"
              className="sofia-pro 3xl:text-[22px] text-[18px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
            >
              Products
            </a>
            <a
              href="#gallery"
              className="sofia-pro 3xl:text-[22px] text-[18px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
            >
              Gallery
            </a>
            <a
              href="#location"
              className="sofia-pro 3xl:text-[22px] text-[18px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
            >
              Location
            </a>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <a
              href="#register"
              className="sofia-pro w-[90%] text-nowrap rounded-full border-2 bg-[#42B58B] px-5 py-2 text-center text-[18px] text-white uppercase transition duration-300 ease-in-out border-[#42B58B] hover:bg-white hover:text-[#42B58B] sm:text-[18px] lg:w-full lg:py-3.5 xl:px-[26px] 2xl:w-full 2xl:px-[26px] 3xl:text-[22px]"
            >
              Register Now
            </a>
            <div
              className="flex flex-col gap-y-1.5 lg:hidden"
              onClick={toggleMenu}
            >
              <span
                className={`h-0.5 w-7 rounded-lg bg-black transition-all duration-300 ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-7 rounded-lg bg-black transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-7 rounded-lg bg-black transition-all duration-300 ${
                  open ? '-translate-y-2.5 -rotate-45' : ''
                }`}
              ></span>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className={`fixed top-18 left-0 z-20 flex h-full w-full flex-col gap-y-3 overflow-hidden bg-white px-12 md:px-[70px] lg:hidden ${menuAnim}`}
        >
          <a
            href="#connectivity"
            onClick={handleMenuItemClick}
            className="sofia-pro mt-70 text-[25px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
          >
            Connectivity
          </a>
          <a
            href="#features"
            onClick={handleMenuItemClick}
            className="sofia-pro text-[25px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
          >
            Features
          </a>
          <a
            href="#products"
            onClick={handleMenuItemClick}
            className="sofia-pro text-[25px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
          >
            Products
          </a>
          <a
            href="#gallery"
            onClick={handleMenuItemClick}
            className="sofia-pro text-[25px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
          >
            Gallery
          </a>
          <a
            href="#location"
            onClick={handleMenuItemClick}
            className="sofia-pro text-[25px] text-black uppercase transition duration-300 ease-in-out hover:text-[#42B58B]"
          >
            Location
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
