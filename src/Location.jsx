import Accordion from "./Amenities";
import useReveal from "./useReveal";

function Location() {
  const [refTitle1, visTitle1] = useReveal();
const [refTitle2, visTitle2] = useReveal();
const [refMobileMap, visMobileMap] = useReveal();
const [refDesktopMap, visDesktopMap] = useReveal();
  return (
    <>
      <section id="location" className="relative bg-[#f8f8f0] pt-14 md:pt-16 lg:pt-16 3xl:pt-24">

      <div className="leading-[2.5em] md:leading-[3em] 3xl:leading-[4em]">
        {/* Title 1 */}
        <div
          ref={refTitle1}
          className={`
            nelphim text-center text-[35px] text-[#6b9075] uppercase sm:text-[40px] xl:text-[50px]
            ${visTitle1 ? "animate__animated animate__fadeInUp animate__slow custom-fade-up" : "opacity-0"}
          `}
        >
          All
        </div>
        {/* Title 2 */}
        <div
          ref={refTitle2}
          className={`
            nelphim text-center text-[35px] text-[#42B58B] uppercase sm:text-[40px] xl:text-[50px]
            ${visTitle2 ? "animate__animated animate__fadeInUp animate__slow custom-fade-up" : "opacity-0"}
          `}
        >
          Within Reach
        </div>
      </div>

      {/* Mobile Map */}
      <img
        src="/assets/images/mobile-map.png"
        alt="Location Map Mobile"
        ref={refMobileMap}
        className={`
          mx-auto mb-14 md:mb-14 h-auto w-[80%] md:w-[55%] lg:hidden
          ${visMobileMap ? "animate__animated animate__fadeInUp animate__slow custom-fade-up" : "opacity-0"}
        `}
      />

      {/* Desktop Map */}
      <img
        src="/assets/images/desktop-map.png"
        alt="Desktop Map"
        ref={refDesktopMap}
        className={`
          mx-auto mt-10 mb-56 xl:mb-40 3xl:mb-32 hidden h-auto w-[70%] 3xl:w-[73%] lg:block
          ${visDesktopMap ? "animate__animated animate__fadeInUp animate__slow custom-fade-up" : "opacity-0"}
        `}
      />

      <div className="z-0 h-auto w-full bg-[url('./src/assets/images/bg-green-desktop.png')] bg-cover bg-top bg-no-repeat py-10 lg:py-30 xl:py-44 2xl:py-44 3xl:py-56">
        <Accordion />
      </div>
    </section>
    </>
  );
}

export default Location;
