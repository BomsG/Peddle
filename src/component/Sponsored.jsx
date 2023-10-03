import React from "react";
import sponsored from "../images/Sponsored.png";

const Sponsored = () => {
  return (
    <div className="flex justify-center py-10 items-center">
      <div className="text-center">
        <h1 className="font-bold text-3xl py-3">
          Get Started With <br /> Paddle Today
        </h1>
        <p className="text-[10px] md:text-sm">
          Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante{" "}
          <br></br>
          egestas ullamcorper
        </p>
        <button className="text-white font-bold bg-[#BA55D3] shadow-lg shadow-black-500/60 px-10 py-3 my-3 rounded-l text-sm">
          Start Today
        </button>
        <img src={sponsored} className="w-[300px] md:w-[900px] mx-5 md:mx-10" />
        <h1 className="font-bold text-2xl md:text-3xl py-10">
          Trusted by Thousands of <br />
          Happy Customer
        </h1>
        <p className="text-[10px] md:text-sm">
          Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et{" "}
          <br />
          suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.
        </p>
      </div>
    </div>
  );
};

export default Sponsored;
