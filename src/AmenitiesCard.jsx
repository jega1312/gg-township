import useReveal from './useReveal';

export default function CardAccordion({ title, icon, items, delayClass }) {
  const [sectionRef, visible] = useReveal();
  return (
    <div
      className={`w-[23%] rounded-2xl bg-white p-6 shadow-lg lg:w-[25%] xl:w-[26%] 2xl:w-[26%] ${visible ? `animate__animated animate__fadeInUp animate__slow custom-fade-up ${delayClass}` : 'opacity-0'} `}
      ref={sectionRef}
    >
      <div className="hk-nova mb-4 flex justify-between border-b border-[#e5e7eb] pb-2 text-[16px] text-[#42B58B] uppercase">
        {title}
        <img src={icon} alt={title} className="h-[25px] w-auto" />
      </div>

      <div className='mb-8 xl:mb-2 3xl:mb-0'>
        {items.map((item, index) => (
          <div
            key={index}
            className="hk-nova flex w-full items-center justify-between py-1 text-[#6b9075] text-[16px] xl:text-[17px] 3xl:text-[19px]"
          >
            <span className="w-[80%] lg:w-[70%] leading-[1.2em] xl:w-[75%]">
              {item.label}
            </span>
            <span>{item.dist}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
