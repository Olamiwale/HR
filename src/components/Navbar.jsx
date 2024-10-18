import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white p-8 w-full fixed shadow-lg z-50  top-0 ">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl"> HR Solution</h1>

        <ul className="space-x-10 font-semibold text-xl md:flex hidden">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Service</li>
        </ul>

        <div className="space-x-5 md:flex hidden">
          <button className="bg-blue-500 p-3 rounded-md">Sign in </button>
          <button className="bg-blue-500 p-3 rounded-md">Sign in </button>
        </div>
         <div
        onClick={handleNav}
        className="md:hidden"
      >
        {nav ? <FaTimes size={15} /> : <FaBars size={15} />}
      </div>
      </div>

     

      <div
        className={
          nav
            ? " w-full fixed items-center justify-center z-50 bg-white right-0 ease-in-out duration-1000 p-8 md:hidden "
            : " hidden"
        }
      >
        <ul className="flex flex-col mt-10 justify-center items-center">
          
          <li className="pb-6 border-b-2 w-full">Home </li>
          <li className="py-6 border-b-2 w-full">Service</li>
          <li className="py-6 border-b-2 w-full">Contact</li>
          <li className="py-6 border-b-2 w-full">Home</li>
        </ul>
      </div>

     
    </div>
  );
}
