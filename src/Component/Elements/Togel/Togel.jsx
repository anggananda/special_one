import React, {useState} from "react";

const Togel = ({clickTogel}) => {
    const [click, useClick] = useState(true)

    const handleClick = () =>{
        useClick(prev => !prev)
        clickTogel(click)
    }

  return (
    <div className="bg-white h-10 w-10 flex animate-bounce justify-center items-center rounded-full shadow-lg hover:bg-[#5F264A] cursor-pointer transition-all duration-150" onClick={handleClick}>
      <h1 className="text-xl cursor-pointer animate-bounce duration-150">💖</h1>
    </div>
  );
};

export default Togel;
