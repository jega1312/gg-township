function ProductCard(props) {
  return (
    <div className="3xl:max-w-5xl mx-auto flex min-h-[260px] w-full max-w-xl flex-col justify-around rounded-3xl border border-[#e5e7eb] shadow-lg sm:min-h-[620px] md:min-h-[460px] md:max-w-lg lg:max-w-md 2xl:max-w-xl">
      <img
        src={props.image}
        alt="Product Image"
        className="h-full w-full rounded-t-3xl object-contain"
      />

      <div className="3xl:pt-[18px] flex flex-col justify-center border-b border-[#e5e7eb] py-[20px] pt-[30px]">
        <div className="prata flex h-auto items-center justify-center text-center text-[28px] text-[#42b58b] xl:text-[25px]">
          {props.title}
        </div>

        <div className="sofia-pro flex items-center justify-center gap-2 text-[14px] text-[#717171]">
          <img
            src={props.houseIcon}
            alt="House Icon"
            className="h-[20px] w-auto"
          />
          {props.houseType}
        </div>
      </div>

      <div className="gotham-book table h-[80px] w-full border-b border-[#e5e7eb] p-[10px] xl:px-[20px] 3xl:py-0 text-center text-[13px] text-[#555555] xl:h-[90px] 3xl:h-[80px] xl:text-[14px]">
        <div className="table-cell align-middle">{props.description}</div>
      </div>

      <div className="flex items-center border-b border-[#e5e7eb] py-4 xl:py-4.5 3xl:py-0">
        <div className="gotham-book 3xl:pl-[20px] w-1/2 border-r border-[#42b58b] py-[10px] pl-[15px] xl:pl-[20px] text-[13px] text-[#555555] xl:text-[14px]">
          Price From <br />
          <span className="hk-nova text-[18px] text-black">{props.price}</span>
        </div>

        <div className="gotham-book 3xl:pl-[20px] w-1/2 py-[10px] pl-[15px] xl:pl-[20px] text-[13px] text-[#555555] xl:text-[14px]">
          Monthly Payment <br />
          <span className="hk-nova text-[18px] text-black">
            {props.monthly}
          </span>
        </div>
      </div>

      <div className="p-3 3xl:p-3.5">
        <a
          href="#register"
          className="hk-nova 3xl:w-[58%] mx-auto flex w-[65%] items-center justify-center rounded-full border bg-[#42B58B] px-[20px] py-[12px] text-center text-[14px] text-white uppercase transition duration-300 ease-in-out border-[#42B58B] hover:bg-white hover:text-[#42B58B] sm:w-[65%] md:w-[55%] lg:w-[60%] xl:w-[60%] xl:text-[18px]"
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
