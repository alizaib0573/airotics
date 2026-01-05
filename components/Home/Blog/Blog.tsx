import { Arrow } from "@/components/Layout/Header/Svgs";
import { blogs } from "./blogs";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="bg-black pt-10">
      <section className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto flex min-h-screen w-full flex-col bg-black lg:pb-16">
        <div className="mb-5 flex lg:mb-10 lg:items-center lg:justify-between">
          <h2 className="text-[2.5rem] leading-[calc(2.5rem*1.2)] text-white lg:text-[5.125rem] lg:leading-[calc(5.125rem*1.2)] 2xl:text-[7.5rem] 2xl:leading-[calc(7.5rem*1.2)]">
            Latest articles
          </h2>
          <button className="hidden h-[52px] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-white bg-black px-5 text-lg text-white lg:flex">
            View our blog{" "}
            <span className="h-4 w-[18px]">
              <Arrow color="#ffffff" />
            </span>
          </button>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-11">
          {blogs.map((elem, index) => {
            return <Card {...elem} key={index} />;
          })}
        </div>
        <button className="mx-auto my-5 flex h-[52px] w-fit cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-white bg-black px-5 text-white lg:hidden">
          View our blog{" "}
          <span className="h-4 w-[18px]">
            <Arrow color="#ffffff" />
          </span>
        </button>
      </section>
    </div>
  );
};

export default Blog;
