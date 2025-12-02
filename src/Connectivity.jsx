import Lottie from 'lottie-react';
import connectivityMapAnimation from '../src/assets/animations/connectivity-map.json';
import useReveal from './useReveal';

function Connectivity() {
  const [sectionRef, visible] = useReveal();
  return (
    <>
      <section
        id="connectivity"
        className="z-20 w-full bg-[url('../src/assets/images/bg-mobile.png')] bg-cover bg-top bg-no-repeat"
      >
        {/* Horizontal Line */}
        <div className="relative top-[41px] right-0 left-0 h-[1px] bg-[#42B58B]"></div>
        {/* Vertical Line */}
        <div className="relative top-0 left-1/2 h-[80px] w-[1px] -translate-x-1/2 bg-[#42B58B]"></div>

        <div className="relative z-0 mx-auto w-full max-w-[470px] bg-[url('./src/assets/images/curve-mobile.png')] bg-cover bg-top bg-no-repeat lg:max-w-[700px] xl:max-w-[740px] ">
          <div className="z-10 mx-auto flex w-full flex-col items-center px-6 md:px-0 py-20 pb-0 lg:pb-2 2xl:pb-1">
            <div
              ref={sectionRef}
              className={`text-center ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'}`}
            >
              <div className="nelphim text-[25px] text-[#6b9075] lg:text-[30px]">
                Township with Easy
              </div>
              <div className="nelphim 3xl:text-red text-[40px] text-[#42b58b] uppercase lg:text-[60px] xl:text-[80px]">
                Connectivity
              </div>
              <div className="nelphim text-[25px] text-[#6b9075] lg:text-[30px]">
                To Major Cities
              </div>
            </div>

            <div className="my-7 flex justify-center">
              <Lottie
                animationData={connectivityMapAnimation}
                loop={false}
                className="h-auto w-[320px] sm:w-[340px] md:w-[405px] lg:w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Connectivity;
