import React, { useState } from "react";
import BoxPreview from "../Elements/BoxPreview/BoxPreview";
import Preview from "../Elements/Preview/Preview";
import { partOne, partTwo, partThree } from "../../utils/images";
import { stageOne, stageTwo, stageThree } from "../../utils/deskription";

const Main = ({ onScrollToNext }) => {
  const [preview1, setPreview1] = useState(false);
  const [preview2, setPreview2] = useState(false);
  const [preview3, setPreview3] = useState(false);

  return (
    <div className="p-2 z-50 relative">
      <h1 className="text-center font-pinyon-script text-4xl text-white mb-6">
        How Far Our Story?
      </h1>

      <p className="text-white font-poppins font-extralight text-sm max-w-[800px] mx-auto text-center">
        Our story began with uncertainty, a time when we were close yet unsure
        of each other's feelings. Then came the transition, where we struggled
        to navigate our growing connection, unsure of where it would lead. Now,
        we've reached a place where we're deeply connected, sharing affection
        and understanding, as we continue to build something beautiful together.
      </p>

      <div className="flex justify-center items-center my-4">
        <img src="./imgs/arrow-love.png" alt="" className="h-[150px]" />
      </div>

      <div className="grid md:grid-cols-3 h-[250px] gap-4 px-4">
        <Preview
          setPreview={setPreview1}
          preview={preview1}
          img={"preview1.png"}
          title="Stage One"
        />
        <Preview
          setPreview={setPreview2}
          preview={preview2}
          img={"preview2.png"}
          title="Stage Two"
        />
        <Preview
          setPreview={setPreview3}
          preview={preview3}
          img={"preview3.png"}
          title="Stage Three"
        />
      </div>

      <p className="text-white font-poppins mt-8 font-extralight text-sm max-w-[800px] mx-auto text-center">
        Our journey still has so much ahead, and when I think about the future,
        I can’t help but wonder—will you keep writing this beautiful story with
        me?
      </p>

      <div className="flex justify-center items-center mt-6">
        <button
          className="text-[#5F264A] px-3 py-2 rounded-md bg-white shadow-xl font-pinyon-script text-2xl animate-bounce duration-150"
          onClick={onScrollToNext}
        >
          Yes, I do
        </button>
      </div>
      <div className="mt-6 relative">
        {preview1 ? (
          <BoxPreview
            images={partOne}
            title={"Stage One 🌱"}
            description={stageOne}
            visibility={"scale-100"}
            setPreview={setPreview1}
            preview={preview1}
            folder={"part1"}
          />
        ) : (
          <BoxPreview
            images={partOne}
            title={"Stage One 🌱"}
            description={stageOne}
            visibility={"scale-0"}
            setPreview={setPreview1}
            preview={preview1}
            folder={"part1"}
          />
        )}
        {preview2 ? (
          <BoxPreview
            images={partTwo}
            title={"Stage Two 🌊"}
            description={stageTwo}
            visibility={"scale-100"}
            setPreview={setPreview2}
            preview={preview2}
            folder={"part2"}
          />
        ) : (
          <BoxPreview
            images={partTwo}
            title={"Stage Two 🌊"}
            description={stageTwo}
            visibility={"scale-0"}
            setPreview={setPreview2}
            preview={preview2}
            folder={"part2"}
          />
        )}
        {preview3 ? (
          <BoxPreview
            images={partThree}
            title={"Stage Three 💓"}
            description={stageThree}
            visibility={"scale-100"}
            setPreview={setPreview3}
            preview={preview3}
            folder={"part3"}
          />
        ) : (
          <BoxPreview
            images={partThree}
            title={"Stage Three 💓"}
            description={stageThree}
            visibility={"scale-0"}
            setPreview={setPreview3}
            preview={preview3}
            folder={"part3"}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
