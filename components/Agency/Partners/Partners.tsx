import Image from "next/image";
import { ArrowDownLeft } from "../Common/Icons";

const Partners = () => {
  return (
    <div className="w-full bg-black text-white">
      <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
        <p className="order-2 col-span-5 col-start-8 mt-[5vw] lg:order-1 lg:translate-y-[50%] lg:text-xl">
          The brands we partner with are looking to push their industry
          boundaries, and ready to invest quality resources into their digital.
          They want to work with a close, more specialist team they click with –
          and who they trust to take them outside of their creative comfort
          zone.
        </p>
        <div className="order-1 flex items-end justify-between lg:order-2 lg:col-span-12">
          <h1 className="flex flex-col text-[2.8125rem] leading-none uppercase lg:text-[clamp(3.125rem,10.6vw,10rem)]">
            <span>Our</span>
            <span className="ml-4 lg:ml-0 lg:pl-[13.5%]">Partners</span>
          </h1>
          <div className="mb-2 h-[36px] w-[36px] text-white lg:hidden">
            <ArrowDownLeft />
          </div>
        </div>
        {/* <div className="order-3 col-span-12 mt-8 grid grid-cols-3 items-center justify-center lg:flex lg:flex-wrap">
          {[...Array(15)].map((_elem, index) => {
            return (
              <Image
                key={index}
                className="w-full object-contain p-4 lg:mx-8 lg:mt-8 lg:mb-16 lg:w-[14%]"
                src={`/agency/partners/${index}.svg`}
                alt="company-logo"
                width={1024}
                height={1024}
              />
            );
          })}
        </div> */}
      </section>
    </div>
  );
};

export default Partners;
