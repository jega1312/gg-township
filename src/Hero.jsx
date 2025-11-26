import useReveal from './useReveal';

function Hero() {
  const [sectionRef, visible] = useReveal();
  return (
    <>
      <section className="h-screen bg-[url('../src/assets/images/hero-mobile.png')] bg-cover bg-center bg-no-repeat sm:rounded-b-2xl sm:bg-[url('../src/assets/images/hero-desktop.png')]">
        {/* Hero Text */}
        <div className="absolute top-[17%] mx-auto flex w-full flex-col items-center justify-center md:top-[17%] lg:top-[18%] xl:top-[15%] 2xl:top-[19%] 3xl:top-[28%]">
          <div
            ref={sectionRef}
            className={`flex w-full flex-col items-center leading-[0.5em] ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            <div className="nelphim text-center text-[25px] text-[#6b9075] lg:text-[30px] xl:text-[30px]">
              Gated & Guarded
            </div>
            <div className="nelphim w-[75%] text-center text-[45px] leading-[1.5em] text-[#42b58b] lg:text-[60px] xl:text-[80px] 2xl:text-[80px]">
              Garden Homes
            </div>
          </div>

          <div
            ref={sectionRef}
            className={`mx-auto flex w-[30%] items-center justify-center md:w-[31%] lg:w-[32%] xl:w-[16%] 2xl:w-[16%] ${visible ? 'animate__animated animate__fadeInUp animate__delay-1s animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            <img
              src="./src/assets/images/hero-line.png"
              alt="Hero Line"
              className="h-auto w-full object-contain"
            />
          </div>
          <div
            ref={sectionRef}
            className={`mx-auto mt-4 flex items-center justify-center gap-x-1.5 md:mt-4 ${visible ? 'animate__animated animate__fadeInUp animate__delay-1s animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            <img
              src="./src/assets/images/highway.png"
              alt="Highway Icon"
              className="w-[50px]"
            />
            <div className="sofia-pro w-[45%] text-center text-[16px] leading-[1.2em] text-[#6b9075] uppercase lg:text-[20px]">
              Access to{' '}
              <span className="sofia-pro-bold">KL & PJ via NSE Highway</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
