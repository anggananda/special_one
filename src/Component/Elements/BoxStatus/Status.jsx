import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";

const Status = () => {
  return (
    <div className="w-[180px] flex justify-center flex-col items-center gap-1 p-2 rounded-md shadow-xl bg-white absolute top-14 right-6">
      <div className="h-[60px] w-[60px]">
        <img
          className="h-full w-full rounded-full object-cover"
          src="./imgs/us.jpeg"
          alt=""
        />
      </div>

      <h2 className="font-pinyon-script">About Us 💗</h2>
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <a
          href="https://instagram.com/angga_dwinnd"
          target="blank"
          className="hover:bg-[#5F264A] shadow-md w-full rounded-md p-1 flex items-center justify-center gap-1 transition-all ease-in-out duration-150"
        >
          <FaSquareInstagram size={25} className="text-pink-500" />

          <h1 className="text-sm font-poppins hover:text-white transition-all ease-in-out duration-150">@angga_dwinnd</h1>
        </a>
        <a
          href="https://instagram.com/steva.ra"
          target="blank"
          className="hover:bg-[#5F264A] shadow-md w-full rounded-md p-1 flex items-center justify-center gap-1 transition-all ease-in-out duration-150"
        >
          <FaSquareInstagram size={25} className="text-pink-500" />

          <h1 className="text-sm font-poppins hover:text-white transition-all ease-in-out duration-150">@steva.ra</h1>
        </a>
      </div>
    </div>
  );
};

export default Status;
