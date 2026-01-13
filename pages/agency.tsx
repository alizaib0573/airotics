import Approach from "@/components/Agency/Approach/Approach";
import Award from "@/components/Agency/Award/Award";
import Hero from "@/components/Agency/Hero/Hero";
import Interested from "@/components/Agency/Interested/Interested";
import Mission from "@/components/Agency/Mission/Mission";
import Partners from "@/components/Agency/Partners/Partners";
import Team from "@/components/Agency/Team/Team";
import Head from "next/head";

const AgencyPage = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Agency</title>
      </Head>
      <video
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        src="/home/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />
      <Hero />
      <Mission />
      <Approach />
      <Partners />
      {/* <Award /> */}
      {/* <Team /> */}
      <div className="bg-black lg:pt-[5vw]">
        <Interested />
      </div>
    </>
  );
};

export default AgencyPage;
