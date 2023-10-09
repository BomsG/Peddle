import React from "react";
import free from "../images/free.png";
import { AiOutlineCheck } from "react-icons/ai";
import standard from "../images/standard.png";
import premium from "../images/premium.png";

const Card = (props) => {
  return (
    <>
      <img src={props.image} className="w-[180px]" />
      <h2 className="font-bold mb-4">{props.name}</h2>
      <div className="flex items-center mb-3">
        <AiOutlineCheck color="#2FAB73" />
        <h3 className="text-sm ml-3">Mauris sem neque</h3>
      </div>
      <div className="flex items-center mb-3">
        <AiOutlineCheck color="#2FAB73" />
        <h3 className="text-sm ml-3">Mauris sem neque</h3>
      </div>
      <div className="flex items-center mb-10 md:mb-40">
        <AiOutlineCheck color="#2FAB73" />
        <h3 className="text-sm ml-3">Mauris sem neque</h3>
      </div>
      <h2 className="font-bold">{props.detail}</h2>
      <button className="border border-2 border-[#BA55D3] px-10 py-1 rounded-l text-sm">
        Select
      </button>
    </>
  );
};

const Plans = () => {
  return (
    <div className="flex justify-center my-20">
      <div>
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-3xl mb-3">
            Choose Your Plan
          </h1>
          <p className="text-[12px] md:text-sm">
            Let's choose the package that is best for you and explore <br />
            it happily and cheerfully.
          </p>
        </div>
        <div className="block md:flex items-center my-10">
          <div className="flex justify-center">
            <div className=" shadow-lg border border-[#DDDDDD] shadow-black-500/60 py-10 px-5  mr-0 md:mr-10 mb-10 hover:scale-105 ease-in-out duration-500">
              <Card image={free} name={"Free Plan"} detail={"Free"} />
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" shadow-lg border border-[#DDDDDD] shadow-black-500/60 py-10 px-5 mr-0 md:mr-10 mb-10 hover:scale-105 ease-in-out duration-500">
              <Card image={premium} name={"Premium Plan"} detail={"9$ /mo"} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" shadow-lg border border-[#DDDDDD] shadow-black-500/60 py-10 px-5 mb-10 hover:scale-105 ease-in-out duration-500">
              <Card
                image={standard}
                name={"Standard Plan"}
                detail={"Standard"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
