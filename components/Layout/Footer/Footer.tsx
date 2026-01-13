import Link from "next/link";
import { UpRightArrow } from "./Svgs";
import { companyLogos, skills, socialLinks } from "./data";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto flex flex-col bg-black pb-10 lg:pb-20">
        <div className="mb-6 flex items-center justify-between border-t border-white pt-10 lg:mb-12 lg:border-none lg:pt-20">
          <div className="h-[52px] w-[52px] border-4 border-white lg:h-[90px] lg:w-[90px] lg:border-8"></div>
          <p className="text-xl text-white lg:text-[6rem] lg:leading-none">
            hello@airotics.io
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex lg:justify-between">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((elem, index) => {
                return (
                  <Link
                    className="flex items-center justify-center gap-1.5 text-white lg:text-xl"
                    href="/"
                    key={index}
                  >
                    {elem}
                    <span className="h-3 w-3">
                      <UpRightArrow />
                    </span>
                  </Link>
                );
              })}
            </div>
            {/* <div className="hidden grid-cols-4 gap-4 lg:grid lg:max-w-[520px]">
              {companyLogos.map((elem, index) => {
                return (
                  <Image
                    className="h-9 invert-100"
                    key={index}
                    src={elem.src}
                    alt={elem.alt}
                    height={400}
                    width={400}
                  />
                );
              })}
            </div> */}
          </div>
          <div className="flex items-center lg:justify-between">
            <div className="flex gap-4 text-white lg:text-xl">
              <p>Contact</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
            <button className="my-6 hidden w-fit cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-white px-[18px] py-3 text-lg text-white lg:flex">
              Sign up to our newsletter{" "}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h4 className="mb-2.5 text-white lg:text-xl">Our sectors:</h4>
              <div className="flex flex-wrap">
                {skills.map((elem, index) => {
                  return (
                    <p
                      key={index}
                      className="my-1.5 mr-2.5 rounded-full border border-white/50 px-2.5 py-2 text-sm text-white"
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="hidden items-center justify-center gap-5 lg:flex">
              <p className="text-center text-lg text-white">&copy; airotics 2025</p>
              <Image
                src="/home/cyber-essentials.svg"
                alt="icon"
                height={80}
                width={80}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 lg:hidden">
            {companyLogos.map((elem, index) => {
              return (
                <Image
                  className="h-8 invert-100"
                  key={index}
                  src={elem.src}
                  alt={elem.alt}
                  height={400}
                  width={400}
                />
              );
            })}
          </div>
          <button className="mx-auto my-6 flex w-fit cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-white px-[18px] py-3 text-lg text-white lg:hidden">
            Sign up to our newsletter{" "}
          </button>
          <div className="flex flex-col items-center justify-center gap-5 lg:hidden">
            <p className="text-center text-lg text-white">&copy; Airotics 2025</p>
            <Image
              src="/home/cyber-essentials.svg"
              alt="icon"
              height={80}
              width={80}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
