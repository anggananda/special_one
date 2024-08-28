import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { ReactTyped } from "react-typed";

const SecretMessage = ({ visibility, setAccept }) => {
  const [take, setTake] = useState(false);

  const handleClose = () => {
    setAccept(0);
  };

  const handleClick = () => {
    setTake((prev) => !prev);
  };

  return (
    <div
      className={`flex justify-center mt-8 items-center flex-col gap-2 max-w-[750px] mx-auto shadow-lg absolute top-[30%] left-[50%] rounded-md p-6 bg-white transform -translate-x-1/2 -translate-y-1/2 z-999 ease-in-out duration-300 ${visibility} z-50`}
    >
      <button className="absolute right-0 top-0" onClick={handleClose}>
        <IoIosCloseCircle
          size={30}
          className="text-[#5F264A] hover:text-[#773059]"
        />
      </button>

      <div className="">
        {visibility === "scale-100" ? (
          <ReactTyped
            className="text-4xl font-pinyon-script "
            strings={["Hi Darling", "Thank U For Choosing Me 💝"]}
            showCursor={false}
            typeSpeed={100}
            backSpeed={130}
          />
        ) : (
          ""
        )}
      </div>

      <p className="font-poppins font-light text-justify mt-4">
        Our journey began with a lot of uncertainty and hesitation, but over
        time, we grew closer and navigated through the ups and downs together.
        Now, we’ve reached a place where our connection feels truly special and
        deep. I want to thank you for choosing me to be a part of your heart.
        I’m also sorry for any mistakes or shortcomings that might have upset
        you. I hope that despite everything, your love for me will remain
        strong. Even though I know you might not be ready for a relationship
        right now, I hope that when the time is right, you’ll consider being my
        partner and a part of my life. I’ll be patient because I truly believe
        that you’re a significant part of my heart. The last words I want to
        say: 
        <br />
        <span className="flex justify-center items-center font-pinyon-script text-xl py-2">I Love You, Anggie Stephanandra Maheswari. 💖</span>
      </p>

      <button
        onClick={handleClick}
        className="px-2 py-1 rounded-md bg-[#5F264A] hover:bg-[#773059] text-white font-pinyon-script text-xl z-50"
      >
        Take
      </button>

      {take && (
        <div className="w-[30%]">
          <img className="w-full" src="./imgs/love.gif" alt="" />

          <p className="font-pinyon-script text-center mt-2 text-lg ">My love, let’s create even more beautiful stories together in the days ahead. ❣️</p>
        </div>
      )}
    </div>
  );
};

export default SecretMessage;
