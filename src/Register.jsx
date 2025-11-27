import useReveal from './useReveal';
import { useEffect, useRef } from "react";



function Register() {
  const [sectionRef, visible] = useReveal();
  const phoneRef = useRef(null);
const initializedRef = useRef(false);


useEffect(() => {
  if (!initializedRef.current && window.intlTelInputInit && phoneRef.current) {
    window.intlTelInputInit([phoneRef.current]);
    initializedRef.current = true; 
  }
}, []);


  return (
    <>
      <section id="register" className="relative mx-auto min-h-[60vh] w-full">
        {/* Horizontal Line */}
        <div className="relative top-[41px] right-0 left-0 h-[1px] bg-[#42B58B]"></div>
        {/* Vertical Line */}
        <div className="relative top-0 left-1/2 h-[80px] w-[1px] -translate-x-1/2 bg-[#42B58B]"></div>

        <div className="py-10 md:py-20 lg:py-24 3xl:py-28">
          {/* Heading Text */}
          <div
            ref={sectionRef}
            className={`nelphim text-center text-[35px] text-[#42B58B] uppercase sm:text-[40px] xl:text-[50px] ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            Register Now
          </div>
          <div
            ref={sectionRef}
            className={`nelphim text-center text-[18px] text-[#6b9075] sm:text-[16px] xl:text-[20px] ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            and Get A Private Tour
          </div>

          <div className="mx-auto mt-8 w-[85%] sm:mt-14 md:w-[70%] xl:w-[50%] 3xl:w-[51%]">
            <form action="#">
              <div
                ref={sectionRef}
                className={`mx-auto flex w-full flex-col items-center justify-center ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up animate__delay-0-6s' : 'opacity-0'} `}
              >
                <div className="relative mt-3 mb-3 w-full">
                  <input
                    id="name"
                    type="text"
                    className="peer h-[60px] w-full rounded-lg border-2 border-[#00000066] bg-transparent p-3 pt-5 text-black focus:border-[#6B9075] focus:ring-0 focus:outline-none"
                    placeholder=""
                    required
                  />

                  <label
                    htmlFor="name"
                    className="hk-nova absolute top-1/2 left-3 -translate-y-1/2 px-1 text-[16px] text-[#6B7280] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-valid:top-[-7px] peer-valid:translate-y-0 peer-valid:bg-white peer-valid:text-[12px] peer-valid:text-black peer-focus:top-[-7px] peer-focus:translate-y-0 peer-focus:bg-white peer-focus:text-[12px] peer-focus:text-black"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mt-3 mb-3 w-full">
                  <input
                    id="email"
                    type="email"
                    className="peer h-[60px] w-full rounded-lg border-2 border-[#00000066] bg-transparent p-3 pt-5 text-black focus:border-[#6B9075] focus:ring-0 focus:outline-none"
                    placeholder=""
                    required
                  />

                  <label
                    htmlFor="email"
                    className="hk-nova absolute top-1/2 left-3 -translate-y-1/2 px-1 text-[16px] text-[#6B7280] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-valid:top-[-7px] peer-valid:translate-y-0 peer-valid:bg-white peer-valid:text-[12px] peer-valid:text-black peer-focus:top-[-7px] peer-focus:translate-y-0 peer-focus:bg-white peer-focus:text-[12px] peer-focus:text-black"
                  >
                    Email
                  </label>
                </div>
                <div className="relative mt-3 mb-3 w-full">
                  <input
                  ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="peer h-14 w-full rounded-lg border-2 border-[#00000066] bg-transparent px-3 py-4 pl-14 text-base focus:border-[#6B9075] focus:outline-none"
                  />

                  <label
                    htmlFor="phone"
                    className="hk-nova absolute top-1/2 left-14 -translate-y-1/2 bg-white px-1 text-[12px] text-[#6B7280] transition-all duration-200 ease-in-out peer-valid:text-[16px] peer-focus:top-0 peer-focus:left-3 peer-focus:text-[12px] peer-focus:text-black"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="mt-3 mb-3 w-full">
                  <select
                    id="project"
                    name="project"
                    required
                    defaultValue=""
                    className="hk-nova h-[60px] w-full rounded-lg border-2 border-solid border-[#00000066] bg-transparent p-3 text-[14px] text-black focus:border-[#6B9075] active:focus:border-[#6B9075] sm:text-base"
                  >
                    <option value="" disabled>
                      Preferred Project*
                    </option>
                    <option value="Astor">Astor @ Gardens Park</option>
                    <option value="Valeria">Valeria Garden Homes</option>
                    <option value="The Clove">The Clove</option>
                    <option value="Monarc">Monarc</option>
                    <option value="Heston Hills">Heston Hills</option>
                    <option value="GAIA Residences">GAIA Residences</option>
                    <option value="Atrium">Atrium</option>
                    <option value="Village Square">Village Square</option>
                    <option value="Gardens Square">Gardens Square</option>
                  </select>
                </div>

                <div className="mt-4 flex w-full items-start space-x-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="custom-checkbox h-5 w-5 shrink-0"
                    checked
                  />
                  <div className="hk-nova text-[14px] text-black">
                    I have read and agreed to the{' '}
                    <a
                      href="https://www.gamudaland.com.my/disclaimer"
                      target="_blank"
                    >
                      Terms &amp; Condition{' '}
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://www.gamudaland.com.my/privacy-notice"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="open-sans mt-7 md:mt-12 lg:mt-12 rounded-full border-2 bg-[#42B58B] px-[48px] py-[12px] text-center text-[16px] text-white uppercase transition duration-300 ease-in-out border-[#42B58B] hover:bg-white hover:text-[#42B58B] sm:text-[18px] hover:cursor-pointer"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
