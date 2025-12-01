import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import arrowLeft from '../src/assets/images/gallery/left.png';
import arrowRight from '../src/assets/images/gallery/right.png';

const galleryItems = [
  {
    id: 1,
    srcMobile: './src/assets/images/gallery/gallery1.png',
    srcDesktop: './src/assets/images/gallery/gallery1-desktop.png',
    title: 'Lakeside Living',
    description: <>Immerse yourself in homes surrounded by Parks and Lakes</>,
  },
  {
    id: 2,
    srcMobile: './src/assets/images/gallery/gallery2.png',
    srcDesktop: './src/assets/images/gallery/gallery2-desktop.png',
    title: '100ft Communal Garden',
    description: (
      <>Create new memories with loved ones in our car-free communal garden</>
    ),
  },
  {
    id: 3,
    srcMobile: './src/assets/images/gallery/gallery3.png',
    srcDesktop: './src/assets/images/gallery/gallery3-desktop.png',
    title: 'Thematic Landscapes',
    description: <>Live within the beauty of nature, everyday</>,
  },
  {
    id: 4,
    srcMobile: './src/assets/images/gallery/gallery4.png',
    srcDesktop: './src/assets/images/gallery/gallery4-desktop.png',
    title: 'Commercial lots at FunPark',
    description: (
      <>Refresh yourself with a cold beverage after a long day at the FunPark</>
    ),
  },
  {
    id: 5,
    srcMobile: './src/assets/images/gallery/gallery5.png',
    srcDesktop: './src/assets/images/gallery/gallery5-desktop.png',
    title: 'Cascading Waterfall',
    description: <>Sustainable, thriving & biodiverse township</>,
  },
  {
    id: 6,
    srcMobile: './src/assets/images/gallery/gallery6.png',
    srcDesktop: './src/assets/images/gallery/gallery6-desktop.png',
    title: 'Dining Restaurants',
    description: <>Be spoilt with various choices for lunch and dinner</>,
  },
];

function GallerySlider() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        setSwiperKey((prev) => prev + 1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <div className="3xl:px-14 relative mx-auto mt-2 w-[85%] sm:w-full sm:px-4 md:mt-12 xl:px-8">
      <button className="custom-prev absolute top-[84%] left-2 z-20 -translate-y-1/2 hover:cursor-pointer">
        <img src={arrowLeft} alt="Previous" />
      </button>

      <button className="custom-next absolute top-[84%] right-2 z-20 -translate-y-1/2  hover:cursor-pointer">
        <img src={arrowRight} alt="Next" />
      </button>

      <div>
        <Swiper
          key={swiperKey}
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={isMobile ? 'slide' : 'coverflow'}
          spaceBetween={isMobile ? 24 : 20}
          slidesPerView={isMobile ? 1 : 2.4}
          centeredSlides={!isMobile}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 1.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="custom-bullet ${className}"></span>`;
            },
          }}
          breakpoints={{
            0: {
              speed: 1050,
            },
            640: {
              slidesPerView: 1.8, // Bigger slides at tablet
              slidesOffsetBefore: 28,
              slidesOffsetAfter: 28,
            },
            768: {
              slidesPerView: 2, // Medium slides
              slidesOffsetBefore: -4,
              slidesOffsetAfter: -4,
            },
            1024: {
              slidesPerView: 2.2, // Slightly smaller
              slidesOffsetBefore: -55,
              slidesOffsetAfter: -55,
            },
            1440: {
              slidesPerView: 2.3, // Even smaller for large screens
              slidesOffsetBefore: -110,
              slidesOffsetAfter: -110,
            },
            1536: {
              slidesPerView: 2.3, // Even smaller for large screens
              slidesOffsetBefore: -115,
              slidesOffsetAfter: -115,
            },
            1800: {
              slidesPerView: 2.5, // Original size for extra large
              slidesOffsetBefore: -235,
              slidesOffsetAfter: -5,
            },
            1920: {
              slidesPerView: 2.5, // Original size for extra large
              slidesOffsetBefore: -233,
              slidesOffsetAfter: -233,
            },
          }}
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              {/* MOBILE IMAGE */}
              <img
                src={item.srcMobile}
                alt="Gallery"
                className="h-full w-full object-cover object-center sm:hidden"
              />
              <div className='group'>
                {/* DESKTOP IMAGE */}
                <img
                  src={item.srcDesktop}
                  alt="Gallery"
                  className="hidden h-full w-full object-cover object-center sm:block hover:cursor-grab active:cursor-grabbing"
                />
                <div className="absolute bottom-4 left-4 z-20 hidden w-full sm:block xl:bottom-6 xl:left-8">
                  <div className="nelphim text-[14px] text-white transition-all duration-300 ease-out group-hover:-translate-y-4 sm:text-[16px] xl:text-[25px]">
                    {item.title}
                  </div>
                  <div
                    className="sofia-pro-light absolute translate-y-8 text-[14px] text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-3 group-hover:opacity-100 sm:text-[16px] xl:text-[18px]"
                    style={{ left: '0', bottom: '0' }}
                  >
                    {item.description}
                  </div>
                </div>
              </div>

              {/* MOBILE TEXT (OUTSIDE IMAGE) */}
              <div className="mt-7 flex flex-col gap-y-4 sm:hidden">
                <div className="nelphim mx-auto w-[90%] text-center text-[25px] leading-[1.1em] text-white">
                  {item.title}
                </div>
                <div className="sofia-pro-light mx-auto w-[60%] text-center text-[16px] leading-[1.2em] text-white">
                  {item.description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination relative bottom-5 z-20 pb-10 md:bottom-0 md:pb-0 2xl:pt-5"></div>
    </div>
  );
}

export default GallerySlider;
