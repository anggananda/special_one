import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Togel from "../Elements/Togel/Togel";
import Status from "../Elements/BoxStatus/Status";
import { Link } from "react-router-dom";

const Hero = () => {
  const [click, useClick] = useState(false);

  return (
    <div className="mt-12 flex justify-center flex-col items-center px-8 md:gap-8 relative">
      <div className="w-full flex items-center justify-between">
        <Link to='/' className="font-pinyon-script text-6xl">
          <span className="text-white">Special</span>{" "}
          <span className="font-bold text-red-400">One</span>
        </Link>
        <Togel clickTogel={useClick} />
      </div>
      {click ? <Status /> : ""}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img
            src="./imgs/header-love.png"
            alt=""
            className="w-full max-w-md"
          />
        </div>
        <div className="flex justify-center items-center flex-col max-w-lg mx-auto">
          <ReactTyped
            strings={[
              "Hello my love",
              "How have you been?",
              "Our journey began with a smile",
              "Every moment with you is a memory to cherish",
              "Looking forward to our beautiful future together",
              "Thank you for being by my side 💞",
            ]}
            loop
            typeSpeed={100}
            backSpeed={150}
            showCursor={false}
            className="text-4xl font-pinyon-script text-white font-bold text-center max-w-2xl"
          />
          <h2 className="text-white text-lg font-poppins font-extralight text-center max-w-2xl mx-auto mt-4">
            This is not just a journey through time, but a collection of our
            most cherished memories. Every smile, every moment, every milestone
            - they all lead us to where we are today. Let's relive these
            beautiful moments and look forward to the countless more that lie
            ahead.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
