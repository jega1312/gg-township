import GallerySlider from './GallerySlider';
import useReveal from './useReveal';

function Gallery() {
  const [sectionRef, visible] = useReveal();
  return (
    <>
      <section
        id="gallery"
        className="z-0 h-auto w-full overflow-hidden bg-[url('/img/bg-green.png')] bg-cover bg-top bg-no-repeat sm:bg-[url('/img/bg-green-desktop.png')] sm:py-10 md:py-20 lg:py-28"
      >
        <div
          ref={sectionRef}
          className={`pt-16 leading-[3.5em] sm:pt-0 ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'} `}
        >
          <div className="nelphim mx-auto w-full text-center text-[35px] leading-[1em] text-white md:text-[40px]  xl:text-[50px]">
            Discover <br /> <span className="text-[65px]">G</span>amuda Gardens
          </div>
          <div className="hk-nova text-center text-[14px] text-white md:text-[16px] xl:text-[20px]">
            A vibrant township with so much to offer
          </div>
        </div>

        <GallerySlider />
      </section>
    </>
  );
}

export default Gallery;
