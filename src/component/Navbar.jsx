import React, { useState } from "react";
import logo from "../images/PEDDLE.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center my-5 px-10 md:px-20">
      <img src={logo} />
      <ul className="hidden md:flex">
        <li className="mx-5 text-sm text-[#4F5665] font-serif">
          <a href="">About</a>
        </li>
        <li className="mx-5 text-sm text-[#4F5665] font-serif">
          <a href="">FAQ</a>
        </li>
        <li className="mx-5 text-sm text-[#4F5665] font-serif">
          <a href="">Pricing</a>
        </li>
        <li className="mx-5 text-sm text-[#4F5665] font-serif">
          <a href="">Testimonials</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <button className="mx-5 font-bold">Sign in</button>
        <button className="border border-2 border-[#BA55D3] px-5 py-1 rounded-l text-sm">
          Sign Up
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineMenu size={20} />
        ) : (
          <AiOutlineClose color="black" size={20} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-200px]"
            : "fixed left-0 top-0 w-[50%] h-full bg-[#1a1919] px-5 ease-in-out duration-500 block  md:hidden"
        }
      >
        <img src={logo} className="my-10" />
        <ul className="pt-20">
          <li className="mx-5 text-xl text-[#4F5665] font-serif pb-5">
            <a href="">About</a>
          </li>
          <li className="mx-5 text-xl text-[#4F5665] font-serif pb-5">
            <a href="">FAQ</a>
          </li>
          <li className="mx-5 text-xl text-[#4F5665] font-serif pb-5">
            <a href="">Pricing</a>
          </li>
          <li className="mx-5 text-xl text-[#4F5665] font-serif pb-5">
            <a href="">Testimonials</a>
          </li>
        </ul>
        <button className="mx-5 font-bold text-white mt-20">Sign in</button>
        <button className="mt-20 border border-2 border-[#BA55D3] px-5 py-1 rounded-l text-sm text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
