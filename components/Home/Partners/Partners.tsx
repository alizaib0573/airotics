import Marquee from "react-fast-marquee";
import { Arrow } from "../Services/Svgs";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-black">
      <section className="max-w-9xl 2xl:max-w-10xl 2xl:px-7.5-percent mx-auto bg-black pb-6">
        <div className="px-7-percent grid grid-cols-12 items-center py-[52px] lg:py-[108px]">
          <h1 className="col-span-12 text-[2.8125rem] leading-[calc(2.8125rem*1.2)] -tracking-widest text-white uppercase lg:col-start-1 lg:col-end-4 lg:text-[10rem] lg:leading-[calc(10rem*1.2)]">
            our
          </h1>
          <h1 className="col-start-3 col-end-11 text-[2.8125rem] leading-[calc(2.8125rem*1.2)] -tracking-widest text-white uppercase lg:col-start-3 lg:col-end-8 lg:text-[10rem] lg:leading-[calc(10rem*1.2)]">
            partners
          </h1>
          <div className="col-start-12 col-end-13 aspect-square">
            <Arrow color={"#ffffff"} />
          </div>
        </div>
        <div>
          {/* <Marquee>
            {[...Array(10)].map((_elem, index) => {
              return (
                <Image
                  className="m-8 w-20 object-contain lg:w-40"
                  key={index}
                  src={`/home/companies/${index}.svg`}
                  alt="company-logo"
                  height={162}
                  width={162}
                />
              );
            })}
          </Marquee> */}
        </div>
      </section>
    </div>
  );
};

export default Partners;
