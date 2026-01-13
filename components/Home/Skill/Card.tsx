import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Skill } from "./skills";

type Props = Skill;

const Card: React.FC<Props> = ({ description, imgUrl, id, title }) => {
  const container = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const rotationTo = useRef<gsap.QuickToFunc | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".image-block", "x", {
        duration: 2,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".image-block", "y", {
        duration: 0.8,
        ease: "power3",
      });
      rotationTo.current = gsap.quickTo(".image-block", "rotation", {
        duration: 2,
        ease: "power3",
      });
    },
    { scope: container },
  );

  const moveImage = contextSafe(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const x = e.clientX - innerWidth / 5;
      const y = e.clientY - innerHeight / 2.5;

      if (xTo.current) xTo.current(x);
      if (yTo.current) yTo.current(y * 0.1);
      if (rotationTo.current) {
        const rotate = (x / innerWidth - 0.25) * 10;
        rotationTo.current(rotate);
      }
    },
  );

  const mouseEnter = contextSafe(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      gsap
        .timeline({ defaults: { duration: 0.8, ease: "power3" } })
        .to(".index", { opacity: 1 })
        .to(".heading", { opacity: 1 }, "<")
        .to(".desc", { opacity: 1 }, "<")
        .to(".line", { scaleX: 1 }, "<")
        .to(".image-block", { scale: 1 }, "<");
    });
  });

  const mouseLeave = contextSafe(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      gsap
        .timeline({ defaults: { duration: 0.8, ease: "power3" } })
        .to(".index", { opacity: 0.4 })
        .to(".heading", { opacity: 0.4 }, "<")
        .to(".desc", { opacity: 0 }, "<")
        .to(".line", { scaleX: 0 }, "<")
        .to(".image-block", { scale: 0 }, "<");
    });
  });

  return (
    <div ref={container}>
      <div
        onMouseMove={moveImage}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="relative flex flex-col py-6 lg:flex-row lg:justify-between lg:py-14"
      >
        <div className="relative z-10 flex flex-col">
          <p className="index leading-none lg:text-3xl lg:opacity-40">{id}/</p>
          <h2 className="heading text-[2.5rem] leading-[2.5rem*1.2] lg:text-8xl lg:opacity-40 2xl:text-[7.5rem] 2xl:leading-[calc(7.5rem*1.2)]">
            {title}
          </h2>
        </div>
        {/* <div className="image-block max-w-[480px] py-4 lg:absolute lg:top-0 lg:left-0 lg:z-[2] lg:w-[30%] lg:scale-0 2xl:top-1/2 2xl:-translate-y-1/2">
          <Image
            className="aspect-square rounded-2xl"
            src={imgUrl}
            alt="work-img"
            height={720}
            width={720}
          />
        </div> */}
        <p className="desc relative z-10 text-lg lg:w-[30%] lg:text-3xl lg:opacity-0">
          {description}
        </p>
      </div>
      <div className="relative">
        <div className="h-px w-full bg-black lg:opacity-40"></div>
        <div className="line hidden h-0.5 w-full origin-left bg-black lg:absolute lg:inset-0 lg:block lg:scale-x-0"></div>
      </div>
    </div>
  );
};

export default Card;
