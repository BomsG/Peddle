import React from "react";
import logo from "../images/PEDDLE.png";

const Footer = () => {
  return (
    <>
      <div className="mx-20  block md:flex text-center md:text-left items-center justify-between relative top-0 bottom-5 right-0 left-0 shadow-lg z-0 border border-[#DDDDDD] shadow-black-500/60 py-3 px-5 md:px-20">
        <div className="mb-5">
          <h1 className="font-bold text-sm md:text-3xl pb-3 ">
            Subscribe Now for <br className="hidden md:block" />
            Get Special Features!
          </h1>
          <p className="text-[10px] md:sm ">
            Praesent mollis lobortis nisl nec laoreet.
          </p>
        </div>
        <div>
          <button className="bg-[#BA55D3] text-white text-sm md:text-lg font-bold py-2 px-4 shadow-lg shadow-[#BA55D3]-500/60">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="mt-20 py-[100px] px-20 bg-[#F8F8F8] w-full h-full block md:flex justify-between">
        <div className="w-full ">
          <img src={logo} className="pb-5" />
          <p className="text-[12px]">
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
            ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula
            at, laoreet mag.
          </p>
          <p className="text-[12px] pb-10">Lorem ipsum dolor sit amet.</p>
          <h2 className="text-sm">©2020PADDLE</h2>
        </div>
        <div className="w-full ml-0 md:ml-20 mt-10 md:mt-0">
          <h1 className="text-xl font-bold pb-3">Product</h1>
          <li className="list-none text-sm pb-2">Praesent </li>
          <li className="list-none text-sm pb-2">Product</li>
          <li className="list-none text-sm pb-2">Product</li>
          <li className="list-none text-sm pb-2">Product</li>
        </div>
        <div className="w-full mt-5 md:mt-0">
          <h1 className="text-xl font-bold pb-3">Engage</h1>
          <li className="list-none text-sm pb-2">Product</li>
          <li className="list-none text-sm pb-2">Product</li>
          <li className="list-none text-sm pb-2">Product</li>
        </div>
        <div className="w-full mt-5 md:mt-0">
          <h1 className="text-xl font-bold pb-3">Earn Money</h1>
          <li className="list-none text-sm pb-2">Product</li>
          <li className="list-none text-sm pb-2">Product</li>
          <li className="list-none text-sm pb-2">Product</li>
        </div>
      </div>
    </>
  );
};
export default Footer;
