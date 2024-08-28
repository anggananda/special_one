import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="relative h-[100dvh] bg-gradient-to-b from-purple-800 to-pink-500 overflow-hidden">
      <div className="relative z-20 h-full flex justify-center items-center">
        <div className="w-[450px] flex flex-col justify-center items-center rounded-xl p-6 bg-black bg-opacity-70 shadow-xl">
          <img
            src="./imgs/home.gif"
            alt=""
            className="rounded-full w-32 h-32 mb-4 border-4 border-pink-500 shadow-lg"
          />

          <ReactTyped
            strings={["Hello, My Love", "How Are You Today?"]}
            backSpeed={120}
            typeSpeed={80}
            className="font-pinyon-script text-4xl text-pink-300 mb-4"
            loop
            showCursor={false}
          />

          <Link
            to="/journey"
            className="px-4 py-3 rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Explore Our Journey
          </Link>
        </div>
      </div>

      <h3 className="absolute bottom-4 left-4 text-sm text-gray-300 font-poppins">
        Dedicated to Anggie, with all my love – Angga
      </h3>
    </div>
  );
};

export default Home;
