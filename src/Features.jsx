import useReveal from './useReveal';

function Features() {
  const [sectionRef, visible] = useReveal();
  return (
    <>
      <section
        id="features"
        className="relative mx-auto h-full w-full rounded-t-2xl bg-[url('../images/bg-green.png')] bg-cover bg-top bg-no-repeat sm:bg-[url('../images/bg-green-desktop.png')]"
      >
        {/* CONTENT */}
        <div className="flex w-full flex-col items-center justify-center px-3.5 py-12 md:py-20 xl:py-24 3xl:py-28">
          {/* TITLE */}
          <div
            ref={sectionRef}
            className={`nelphim mb-16 lg:mb-24 2xl:mb-20 text-center text-[35px] text-white uppercase md:text-[40px] xl:text-[50px] ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            Features
          </div>

          {/* GRID */}
          <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4 md:px-14 lg:px-10 xl:px-[10%] 2xl:gap-10 2xl:px-40 3xl:px-56">
            <div
              ref={sectionRef}
              className={`flex flex-col items-center justify-center rounded-2xl bg-[#ffffff0d] px-5 py-7 2xl:px-10 ${visible ? 'animate__animated animate__fadeInUp animate__slow animate__delay-0-2s custom-fade-up' : 'opacity-0'} `}
            >
              <img
                src="../assets/images/feature/feature1.png"
                className="w-[60px]"
              />
              <div className="sofia-pro mt-7 text-center text-[16px] text-white xl:text-[20px]">
                50-Acre Pet <br className=''/> Friendly <br /> Central Park
              </div>
            </div>

            <div
              ref={sectionRef}
              className={`flex flex-col items-center justify-center rounded-2xl bg-[#ffffff0d] px-5 py-7 2xl:px-10 ${visible ? 'animate__animated animate__fadeInUp animate__slow animate__delay-0-4s custom-fade-up' : 'opacity-0'} `}
            >
              <img
                src="../assets/images/feature/feature2.png"
                className="w-20"
              />
              <div className="sofia-pro mt-7 text-center text-[16px] text-white xl:text-[20px]">
                Exclusive <br /> Resident <br /> Clubhouse
              </div>
            </div>

            <div
              ref={sectionRef}
              className={`flex flex-col items-center justify-center rounded-2xl bg-[#ffffff0d] px-5 py-7 2xl:px-10 ${visible ? 'animate__animated animate__fadeInUp animate__slow animate__delay-0-6s custom-fade-up' : 'opacity-0'} `}
            >
              <img
                src="../assets/images/feature/feature5.png"
                className="w-[100px]"
              />
              <div className="sofia-pro mt-7 text-center text-[16px] text-white xl:text-[20px]">
                Upcoming International School by Taylor's Education Group
              </div>
            </div>

            <div
              ref={sectionRef}
              className={`flex flex-col items-center justify-center rounded-2xl bg-[#ffffff0d] px-5 py-7 2xl:px-10 ${visible ? 'animate__animated animate__fadeInUp animate__slow animate__delay-0-8s custom-fade-up' : 'opacity-0'} `}
            >
              <img
                src="../assets/images/feature/feature4.png"
                className="w-[70px]"
              />
              <div className="sofia-pro mt-7 text-center text-[16px] text-white xl:text-[20px]">
                Integrated With Alfresco Commercial Hub
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
