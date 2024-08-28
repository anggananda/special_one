import React from "react";

const Preview = ({ setPreview, preview, img, title }) => {
  const handleClick = () => {
    setPreview(!preview);
  };

  return (
    <div
      className="rounded-md shadow-lg bg-white flex justify-center items-center bg-cover bg-center after:bg-[rgba(0,0,0,0.6)] after:h-full after:w-full after:absolute relative"
      style={{ backgroundImage: `url('./imgs/${img}')` }}
    >
      <button
        onClick={handleClick}
        className="px-3 py-2 rounded-md bg-[#5F264A] hover:bg-[#773059] text-white font-pinyon-script text-2xl z-50"
      >
        {title}
      </button>
    </div>
  );
};

export default Preview;
