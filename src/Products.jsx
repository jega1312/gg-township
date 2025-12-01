import { useState } from 'react';
import ProductCard from './ProductCard';
import astorImg from '../src/assets/images/products/astor.png';
import valeriaImg from '../src/assets/images/products/valeria.png';
import cloveImg from '../src/assets/images/products/the-clove.png';
import monarcImg from '../src/assets/images/products/monarc.png';
import hestonImg from '../src/assets/images/products/heston.png';
import gaiaImg from '../src/assets/images/products/gaia.png';
import atriumImg from '../src/assets/images/products/atrium.png';
import villageImg from '../src/assets/images/products/village-square.png';
import gardensImg from '../src/assets/images/products/gardens-square.png';
import houseIcon from '../src/assets/images/house.png';
import useReveal from './useReveal';

const products = [
  {
    image: astorImg,
    title: 'Astor @ Gardens Park',
    houseIcon: houseIcon,
    houseType: '2-Storey Terrace House',
    description: (
      <>
        <strong>Freehold Terrace Homes</strong> with
        <strong> Individual Titles</strong>, just a <strong>5-min walk</strong>{' '}
        from commercial hub.
      </>
    ),
    price: (
      <>
        RM 7XX,XXX
      </>
    ),
    monthly: <>RM 2,XXX</>,
    buttonText: 'Register Now',
  },

  {
    image: valeriaImg,
    title: 'Valeria Garden Homes',
    houseIcon: houseIcon,
    houseType: 'Linked, Superlink, Semi-D & Cluster Semi-D',
    description: (
      <>
        <strong>Spacious Semi-Ds</strong> with a blend of
        <strong> modern comfort</strong> and{' '}
        <strong> serene landscapes.</strong>
      </>
    ),
    price: (
      <>
        RM 1,3XX,XXX
      </>
    ),
    monthly: <>RM 4,XXX</>,
    buttonText: 'Register Now',
  },

  {
    image: cloveImg,
    title: 'The Clove',
    houseIcon: houseIcon,
    houseType: '8-Cluster Park Homes',
    description: (
      <>
        A <strong>new topology</strong> of homes with
        <strong> Private Garden up to 24ft</strong> and a
        <strong> 100ft Communal Garden</strong>
      </>
    ),
    price: (
      <>
        RM 9,XX,XXX
      </>
    ),
    monthly: <>RM 3,XXX</>,
    buttonText: 'Register Now',
  },

  {
    image: monarcImg,
    title: 'Monarc',
    houseIcon: houseIcon,
    houseType: 'Esteem Semi-D & Bungalow',
    description: (
      <>
        <strong>Low-Density Semi-D</strong> & <strong>Bungalows</strong> with
        unobstructed
        <strong> Park & Lake Views</strong>
      </>
    ),
    price: (
      <>
        RM 1,9XX,XXX
      </>
    ),
    monthly: <>RM 7,XXX</>,
    buttonText: 'Register Now',
  },

  {
    image: hestonImg,
    title: 'Heston Hills',
    houseIcon: houseIcon,
    houseType: 'Superlink & Semi-D',
    description: (
      <>
        <strong>Low-Density</strong> hillside homes with
        <strong> breathtaking scenic views</strong>
      </>
    ),
    price: <>TBC</>,
    monthly: <>TBC</>,
    buttonText: 'Register Now',
  },

  {
    image: gaiaImg,
    title: 'GAIA Residences',
    houseIcon: houseIcon,
    houseType: 'Serviced Apartments',
    description: (
      <>
        <strong>Move-in Ready</strong> resort-inspired
        <strong> Serviced Apartments</strong>
      </>
    ),
    price: (
      <>
        RM 250,000
      </>
    ),
    monthly: <>RM 1,XXX</>,
    buttonText: 'Register Now',
  },
];

function Products() {
  const [showMore, setShowMore] = useState(false);
  const visibleHomes = showMore ? products : products.slice(0, 3);
  const [sectionRef, visible] = useReveal();

  return (
    <>
      <section id="products" className="relative mx-auto min-h-[60vh] w-full">
        {/* Horizontal Line */}
        <div className="relative top-[41px] right-0 left-0 h-px bg-[#42B58B]"></div>

        {/* Vertical Line */}
        <div className="relative top-0 left-1/2 h-20 w-px -translate-x-1/2 bg-[#42B58B]"></div>

        <div className="pt-10 pb-20 3xl:pt-16 3xl:pb-36">
          {/* Heading Text */}
          <div
            ref={sectionRef}
            className={`nelphim text-center text-[25px] text-[#42B58B] uppercase sm:text-[30px] xl:text-[40px] ${visible ? 'animate__animated animate__fadeInUp animate__slow custom-fade-up' : 'opacity-0'} `}
          >
            Products
          </div>

          <div
            data-controller="tabs"
            data-tabs-index-value="0"
            className="mx-6"
          >
            {/* TAB BUTTONS */}
            <div className="relative mt-10 mb-14 flex justify-center items-center">
              <div className="relative flex rounded-full bg-[#e5e7eb] p-1">
                {/* SLIDER BACKGROUND */}
                <div
                  id="tabSlider"
                  className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-[#42B58B] transition-all duration-300"
                ></div>

                {/* OUR HOMES */}
                <button
                  data-tabs-target="tab"
                  data-action="tabs#change"
                  className="3xl:py-3 3xl:px-12 sofia-pro relative z-0 flex-1 cursor-pointer rounded-full px-[30px] py-3 text-center text-[12px] transition-all duration-300 sm:text-[18px]"
                >
                  OUR HOMES
                </button>

                {/* COMMERCIAL */}
                <button
                  data-tabs-target="tab"
                  data-action="tabs#change"
                  className="3xl:py-3 3xl:px-10 sofia-pro relative z-0 flex-1 cursor-pointer rounded-full px-[25px] py-3 text-center text-[12px] transition-all duration-300 sm:text-[18px]"
                >
                  COMMERCIAL
                </button>
              </div>
            </div>

            {/* PANEL 1 — Homes */}
            <div data-tabs-target="panel" className="mx-auto">
              <div className="mx-auto mt-4 md:mt-10 grid h-full w-full grid-cols-1 place-items-stretch items-center justify-center gap-7 md:gap-4 sm:grid-cols-2 md:w-[90%] lg:w-[85%] lg:gap-x-4 xl:grid-cols-3 xl:w-[82%] 2xl:w-[83%] 3xl:w-[83%] xl:gap-x-7 xl:gap-y-7">
                {visibleHomes.map((item, index) => (
                  <div
                    key={index}
                    className={showMore && index >= 3 ? 'fade-in' : ''}
                  >
                    <ProductCard {...item} />
                  </div>
                ))}
              </div>

              {!showMore && (
                <button
                  onClick={() => setShowMore(true)}
                  className="hk-nova mx-auto mt-12 flex flex-col items-center justify-center text-[16px] text-[#42B58B] uppercase hover:animate-bounce hover:cursor-pointer"
                >
                  Load More{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </button>
              )}
            </div>

            {/* PANEL 2 — Commercial */}
            <div data-tabs-target="panel" className="mx-auto hidden">
              <div className="mx-auto mt-4 md:mt-10 grid h-full w-full grid-cols-1 place-items-stretch items-center justify-center gap-7 md:gap-4 sm:grid-cols-2 md:w-[90%] lg:w-[85%] lg:gap-x-4 xl:grid-cols-3 xl:w-[82%] 2xl:w-[83%] 3xl:w-[83%] xl:gap-x-7 xl:gap-y-7">
                <ProductCard
                  image={atriumImg}
                  title="Atrium"
                  houseIcon={houseIcon}
                  houseType="Milan-Inspired Commercial Retail"
                  description={
                    <>
                      Commercial Retail with inspiration of Milan, Italy. Conveniently
                      located to leisure attractions.
                    </>
                  }
                  price={<>TBC</>}
                  monthly={<>TBC</>}
                  buttonText="Register Now"
                />

                <ProductCard
                  image={villageImg}
                  title="Village Square"
                  houseIcon={houseIcon}
                  houseType="2-Storey Retail Shops"
                  description={
                    <>
                      First commercial lots with individual title, strategic placed
                      between residences.
                    </>
                  }
                  price={
                    <>
                      <>RM 1,7XX,XXX</>
                    </>
                  }
                  monthly={<>RM 7,XXX</>}
                  buttonText="Register Now"
                />

                <ProductCard
                  image={gardensImg}
                  title="Gardens Square"
                  houseIcon={houseIcon}
                  houseType="Commercial Retail & Shop Offices"
                  description={
                    <>
                      Parisan-Inspired Commercial hub that is a vehicle free
                      zone
                    </>
                  }
                  price={
                    <>
                      <>RM 5XX,XXX</>
                    </>
                  }
                  monthly={<>RM 2,XXX</>}
                  buttonText="Register Now"
                />
              </div>

              {!showMore && (
                <button
                  onClick={() => setShowMore(true)}
                  className="hk-nova mx-auto mt-12 flex flex-col items-center justify-center text-[16px] text-[#42B58B] uppercase hover:animate-bounce hover:cursor-pointer"
                >
                  
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
