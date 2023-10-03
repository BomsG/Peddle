import React from "react";
import webDev from "../images/web-dev.png";
import featureImg from "../images/feature.png";
import { BsFillPersonFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidServer } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="my-20 block items-center md:flex px-20 text-center sm:text-left">
        <div className="w-full mb-15">
          <h1 className="text-[26px] md:text-[45px] font-bold pb-3 text-center md:text-left ">
            We Are Everything We Aspire To BE
          </h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
            turpis eget ipsum malesuada dignissim
          </p>
          <button className="bg-[#BA55D3] mt-5 px-5 py-2 text-white font-bold shadow-lg shadow-purple-500/60">
            Get Started
          </button>
        </div>

        {/* Hero image */}
        <div className="w-[100%]">
          <img src={webDev} className="w-[100%] mt-5" />
        </div>
      </div>

      <div className="flex justify-around border shadow-lg shadow-black-500/60 my-20 py-10 mx-20 ">
        <div className="flex items-center">
          <div className=" bg-[#ba55d386] p-1 rounded-full ">
            <BsFillPersonFill size={18} color="#BA55D3" />
          </div>

          <div className="mx-2">
            <h2 className="font-bold text-[13px] md:text-sm">90+</h2>
            <p className="text-[10px] md:text-sm">Users</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" bg-[#ba55d386] p-1 rounded-full">
            <CiLocationOn size={18} color="#BA55D3" />
          </div>
          <div className="mx-2">
            <h2 className="font-bold text-[13px] md:text-sm">90+</h2>
            <p className=" text-[10px] md:text-sm">Users</p>
          </div>
        </div>
        <div className="flex items-center ">
          <div className=" bg-[#ba55d386] p-1 rounded-full">
            <BiSolidServer size={18} color="#BA55D3" />
          </div>
          <div className="mx-2">
            <h2 className="font-bold text-[13px] md:text-sm">90+</h2>
            <p className="text-[10px] md:text-sm ">Users</p>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="block md:flex my-40 text-center md:text-left ">
        <div className="w-{100%} mr-10">
          <img src={featureImg} className="w-[400px] md:w-[737px] mt-5" />
        </div>

        <div className="w-{100%} mx-5 ">
          <h1 className="font-bold text-3xl pb-5 pt-5">
            Features We Provide <br /> For You
          </h1>
          <p className="text-[12px] md:text-sm">
            Curabitur tempor justo non turpis malesuada cursus. <br />
            Mauris ac libero eu sem finibus lacinia nec pulvinar.
          </p>

          <div className="flex justify-center md:justify-start items-center my-4 r">
            <span className="w-4 h-4 bg-[#BA55D3] block mr-3"></span>
            <h2 className="text-sm">Curabitur tempor justo</h2>
          </div>
          <div className="flex justify-center md:justify-start items-center my-4">
            <span className="w-4 h-4 bg-[#BA55D3] block mr-3"></span>
            <h2 className="text-sm">Curabitur tempor justo</h2>
          </div>
          <div className="flex justify-center md:justify-start items-center my-4">
            <span className="w-4 h-4 bg-[#BA55D3] block mr-3"></span>
            <h2 className="text-sm">Curabitur tempor justo</h2>
          </div>
          <div className="flex justify-center md:justify-start items-center my-4">
            <span className="w-4 h-4 bg-[#BA55D3] block mr-3"></span>
            <h2 className="text-sm">Curabitur tempor justo</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
