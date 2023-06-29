import Image from "next/image";
import React from "react";
import Todo from "./todo";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div className="">
        {/* <Image width={} height={} src="/Vector.png" alt="" width={900} height={900} /> */}
        <div className="flex flex-col justify-center items-center pt-6 ">
          <h1 className="text-white font-bold text-[50px] ">
            Check your financial health
          </h1>
          <p className="text-white pt-[8px] text-xl font-light leading-normal">
            Use WeathoMeter to get a free report card <br /> for your finances-
            within minutes!{" "}
          </p>
          <button className="bg-[#FB7306] text-white px-8 py-2 text-xl font-semibold shadow-md mt-4 rounded-3xl ">
            Get Started
          </button>
        </div>
        <div className="flex justify-center ">
          <div className="absolute flex">
            <div className="flex flex-col gap-4">
              <div className="flex jjustify-start items-center pt-24">
                <Image width={30} height={30} src="/tick.png" alt="" />
                <div className="flex flex-col ">
                  <h1 className="text-white  font-semibold text-xl leading-9">
                    Expected Retirement Age
                    <hr className="" />
                  </h1>

                  {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
                </div>
              </div>
              <div className="flex justify-start items-center">
                <Image width={30} height={30} src="/tick.png" alt="" />
                <div>
                  <h1 className="text-white font-semibold text-xl leading-9">
                    Identify Mistakes
                    <hr />
                  </h1>
                </div>
              </div>
            </div>
            <div className="ml-14">
              <Image width={500} height={500} src="/Phone.png" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center pt-24">
                <Image width={30} height={30} src="/tick.png" alt="" />
                <div>
                  <h1 className="text-white font-semibold text-xl leading-9">
                    Personalised Road Map
                    <hr />
                  </h1>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <Image width={30} height={30} src="/tick.png" alt="" />
                <div>
                  <h1 className="text-white font-semibold text-xl leading-9">
                    Tips To Improve
                    <hr />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-80">
          <div className="absolute">
            <Image
              width={800}
              height={400}
              src="/Vector.png"
              alt=""
              className="w-screen h-[700px] bg-cover"
            />
          </div>
          <div className="relative flex flex-col justify-center items-center top-72">
            <h1 className="text-white font-bold text-[40px] ">How it Works?</h1>
            <Image width={880} height={880} src="/how_it_work.png" alt="" />
            <div className="flex justify-between w-[800px]">
              <h1 className="text-white w-24 font-normal tracking-wide leading-normal">
                Answer few questions
              </h1>
              <h1 className="text-white w-28 font-normal tracking-wide leading-normal">
                Register using phone and OTP
              </h1>
              <h1 className="text-white w-36 font-normal tracking-wide leading-normal">
                Get report and personal roadmap
              </h1>
            </div>
            <button className="bg-[#FB7306] text-white px-8 py-2 text-xl font-semibold shadow-md mt-10 rounded-3xl ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="relative top-[750px] max-w-[1000px] mx-auto">
        <Todo />
      </div>
    </>
  );
};

export default HeroSection;
