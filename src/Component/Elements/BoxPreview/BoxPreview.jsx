import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const BoxPreview = ({ images, title, description, visibility, setPreview, preview, folder }) => {

    const handleClose = () =>{
        setPreview(!preview)
    }
  return (
    <div className={`flex justify-center items-center flex-col gap-2 w-full shadow-lg absolute top-[30%] left-[50%] rounded-md p-4 bg-[#F6F5F5] transform -translate-x-1/2 -translate-y-1/2 z-999 ease-in-out duration-150 ${visibility} z-50`}>
      <h1 className="text-center text-3xl font-pinyon-script text-[#5F264A] animate-pulse duration-150">
        {title}
      </h1>
      <p className="text-[#5F264A] font-poppins mb-4 font-extralight text-sm max-w-[750px] text-center">
        {description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div className="" key={img}>
            <img src={`./imgs/${folder}/${img}`} alt="" />
          </div>
        ))}
      </div>

      <button className="px-2 py-1 bg-[#5F264A] rounded-md shadow-lg hover:bg-[#773059]" onClick={handleClose}>
      <IoIosCloseCircle size={30} className="text-white"/>
      </button>
    </div>
  );
};

export default BoxPreview;
