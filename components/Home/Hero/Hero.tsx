import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const logos = [
  { src: "/home/hero-logos/digital-agency.svg", alt: "digital-agency" },
  { src: "/home/hero-logos/clutch.svg", alt: "clutch" },
  { src: "/home/hero-logos/awwwards.svg", alt: "awwwards" },
  { src: "/home/hero-logos/cssda.svg", alt: "cssda" },
];

const Hero = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power4.out", duration: 1.5 } })
        .to(".heading", { y: 0, delay: 0.5 })
        .to(".description", { opacity: 1 })
        .to(".logos", { opacity: 1 }, "<0.3");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto grid min-h-screen w-full grid-cols-12 content-end gap-x-3 lg:content-center"
    >
      <h1 className="font-display col-span-12 mt-26 h-fit overflow-hidden text-6xl text-black lg:col-start-1 lg:col-end-12 lg:mt-0 lg:text-[9.6875rem] lg:leading-[calc(9.6875rem*1.2)] 2xl:text-[13.5rem] 2xl:leading-[calc(13.5rem*1.2)]">
        <span className="heading inline-block translate-y-full">push</span>
      </h1>
      <h1 className="font-display col-span-12 h-fit overflow-hidden text-6xl text-black lg:col-start-3 lg:col-end-12 lg:text-[9.6875rem] lg:leading-[calc(9.6875rem*1.2)] 2xl:text-[13.5rem] 2xl:leading-[calc(13.5rem*1.2)]">
        <span className="heading inline-block translate-y-full">past</span>
      </h1>
      <h1 className="font-display col-span-12 h-fit overflow-hidden text-6xl text-black lg:col-start-1 lg:col-end-9 lg:text-[9.6875rem] lg:leading-[calc(9.6875rem*1.2)] 2xl:text-[13.5rem] 2xl:leading-[calc(13.5rem*1.2)]">
        <span className="heading inline-block translate-y-full">limits</span>
      </h1>
      <div className="col-span-12 mx-auto mt-6 flex w-full max-w-[320px] flex-col items-center justify-center lg:col-start-9 lg:col-end-13 lg:mt-0 2xl:max-w-[450px]">
        <h2 className="description text-xl opacity-0 2xl:text-2xl">
          We&apos;re a forward-thinking digital innovation and technology agency based in London
          that creates exceptional solutions for companies who{" "}
          <strong>dare to transform.</strong>
        </h2>
      </div>
      {/* <div className="logos 3xl:-translate-x-1/2 3xl:left-1/2 3xl:w-full col-span-12 mt-9 flex gap-4 pb-6 opacity-0 lg:absolute lg:bottom-[26px] lg:left-[26px] lg:mt-0 lg:h-[35px] lg:gap-8 lg:pb-0 2xl:h-[44px] 2xl:max-w-[2450px] 2xl:gap-6">
        {logos.map(({ alt, src }, index) => {
          return (
            <Image
              className="w-1/4 object-contain lg:w-fit"
              key={index}
              src={src}
              alt={alt}
              height={250}
              width={400}
            />
          );
        })}
      </div> */}
    </section>
  );
};

export default Hero;
