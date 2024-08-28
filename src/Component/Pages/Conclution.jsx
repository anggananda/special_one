import React, { useState } from "react";
import SecretMessage from "../Elements/SecretMessage/SecretMessage";

const Conclution = () => {
  const [accept, setAccept] = useState(0);

  const handleCount = () => {
    setAccept((prev) => prev + 1);
  };

  return (
    <div
      className="flex items-center flex-col gap-2 relative h-[100dvh] p-8"
      id="next"
    >
      <h1 className="text-white text-3xl font-pinyon-script ">
        Who Are We Really to Each Other?
      </h1>

      <p className="text-white font-poppins mt-8 font-extralight text-sm max-w-[800px] mx-auto text-center">
        In this moment of wondering, where feelings intertwine and hearts seek
        clarity, we stand on the edge of a question—what do we truly mean to one
        another? As we journey through this tender uncertainty, perhaps the
        answer lies in a simple, heartfelt gesture.
      </p>

      <div className="flex justify-center items-center my-4">
        <img src="./imgs/arrow-love.png" alt="" className="h-[150px]" />
      </div>

      {accept !== 20 && (
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-purple-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
          onClick={handleCount}
        >
          Show Me How Much You Love Me! {accept}
        </button>
      )}

      {accept === 20 ? (
        <SecretMessage setAccept={setAccept} visibility={"scale-100"} />
      ) : (
        <SecretMessage setAccept={setAccept} visibility={"scale-0"} />
      )}

      <h2 className="absolute bottom-10 left-10 font-pinyon-script text-white text-2xl">
        "Our love is far from over... Let's keep it{" "}
        <span className="text-red-400">growing and continuing endlessly.</span>"
      </h2>
    </div>
  );
};

export default Conclution;
