import CardAccordion from './AmenitiesCard';
import { useState } from 'react';

export default function Accordion() {
  const [open, setOpen] = useState();

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const accordionData = [
    {
      id: 'connectivity',
      icon: '/assets/images/lrt.png',
      title: 'Connectivity',
      iconWidth: 'lg:w-[20px]',
      items: [
        { label: 'KTM Komuter Kuang', dist: '3km' },
        {
          label: 'MRT Sungai Buloh Interchange Hub & KTM Komuter Sungai Buloh',
          dist: '10km',
        },
        { label: 'KTM Komuter Rawang', dist: '10.5km' },
      ],
    },
    {
      id: 'amenities',
      icon: '/assets/images/mall.png',
      title: 'Amenities',
      iconWidth: 'lg:w-[30px]',
      items: [
        { label: 'AEON Mall Rawang', dist: '8.5km' },
        { label: 'KPJ Rawang Specialist Hospital', dist: '10.5km' },
        { label: 'Hospital Sungai Buloh', dist: '12km' },
        { label: "Lotus's Rawang", dist: '14.4km' },
      ],
    },
    {
      id: 'education',
      icon: '/assets/images/school.png',
      title: 'Education',
      iconWidth: 'lg:w-[30px]',
      items: [
        { label: 'Eduwis Pre School', dist: '50m' },
        { label: 'Brainy Bunch Pre School', dist: '200m' },
        {
          label: 'Beaconhouse Pre-School & International Primary School',
          dist: '1km',
        },
        { label: 'SJK(C) Kuang', dist: '3km' },
      ],
    },
  ];

  const delayClass = [
  "animate__delay-0-2s",
  "animate__delay-0-4s",
  "animate__delay-0-6s",
];

  return (
    <>
      <div className="mx-auto w-[80%] md:w-[65%] lg:hidden" data-aos="fade-right">
        {accordionData.map((section) => (
          <div key={section.id} className="group my-3 rounded-xl p-1 bg-white">
            <button
              className="flex w-full items-center justify-center p-4"
              onClick={() => toggle(section.id)}
            >
              <span className="hk-nova flex w-full gap-4 text-[14px] text-[#42b58b] uppercase group-hover:text-black">
                <img src={section.icon} alt={section.title} hidden />
                {section.title}
              </span>

              <span className="hk-nova text-[14px] text-[#42b58b] group-hover:text-black">
                {open === section.id ? '+' : '+'}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-600 ease-in-out ${open === section.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className='mt-4 mb-3'>
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="hk-nova flex w-full items-center justify-between px-4 py-1 text-[14px] text-[#6b9075] sm:text-[16px]"
                  >
                    <span className="w-[80%]">{item.label}</span>
                    <span>{item.dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='hidden absolute lg:flex justify-center gap-x-6 top-120 lg:top-120 xl:top-140 2xl:top-143 3xl:top-173 mx-auto w-full'>
        {accordionData.map((section,index) => (
          <CardAccordion
            key={section.id}
            title={section.title}
            icon={section.icon}
            items={section.items}
             iconWidth={section.iconWidth} 
            delayClass={delayClass[index] || ""}
          />
        ))}
      </div>
    </>
  );
}
