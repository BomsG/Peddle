import React from "react";
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import lady from "../images/lady.png";
import { AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";

const Card = () => {
  return (
    <div className="py-10 block md:flex justify-center ">
      <div className="flex justify-center">
        <div className="w-[300px] md:w-[250px] h-[150px] border border-[#DDDDDD] shadow-lg shadow-black-500/60 hover:border-[#BA55D3] rounded-lg ease-in-out duration-500 py-5 px-3 mx-10 md:mx-0 hover:scale-105">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={man1} className="mr-3 w-[40px]" />
              <div>
                <h1 className="font-bold text-sm">Viezh Robert</h1>
                <p className="text-[10px]">Warsaw, Poland</p>
              </div>
            </div>
            <div className="flex">
              <h1 className="text-[10px] font-bold">4.5</h1>
              <AiOutlineStar color="#FEA250" />
            </div>
          </div>
          <p className="text-[10px] py-5">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[300px] md:w-[250px] h-[150px] border border-[#DDDDDD] shadow-lg shadow-black-500/60 hover:border-[#BA55D3] rounded-lg ease-in-out duration-500 py-5 px-3 mx-10 md:mx-5 hover:scale-105">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={lady} className="mr-3 w-[40px]" />
              <div>
                <h1 className="font-bold text-sm">Yessica Christy</h1>
                <p className="text-[10px]">Shanxi, China</p>
              </div>
            </div>
            <div className="flex">
              <h1 className="text-[10px] font-bold">4.5</h1>
              <AiOutlineStar color="#FEA250" />
            </div>
          </div>
          <p className="text-[10px] py-5">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[300px] md:w-[250px] h-[150px] border border-[#DDDDDD] shadow-lg shadow-black-500/60 hover:border-[#BA55D3] rounded-lg ease-in-out duration-500 py-5 px-3 mx-10 md:mx-0 hover:scale-105">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={man2} className="mr-3 w-[40px]" />
              <div>
                <h1 className="font-bold text-sm">Kim Young Jou</h1>
                <p className="text-[10px]">Seoul, South Korea</p>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="text-[10px] font-bold ">4.5</h1>
              <AiOutlineStar color="#FEA250" />
            </div>
          </div>
          <p className="text-[10px] py-5">
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
