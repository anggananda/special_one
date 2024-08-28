import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "./Hero";
import Audio from "../Elements/AudioBg/Audio";
import Main from "./Main";
import Conclution from "./Conclution";

const Journey = () => {
  const parallaxRef = useRef(null);

  const scrollToNext = () => {
    // Check if parallaxRef is set
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(2); // Scroll to the page with offset 2
    } else {
      console.error("Parallax reference is not ready");
    }
  };

  return (
    <div className="">
      <Audio />
      <Parallax
        ref={parallaxRef} // Attach ref here
        pages={3}
        style={{
          top: "0",
          left: "0",
          backgroundColor: "#5F264A",
        }}
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <img
            className="absolute bottom-[-70px] right-0"
            src="./imgs/love.png"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <img
            className="absolute bottom-[-70px] left-0"
            src="./imgs/love.png"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <img
            className="absolute bottom-[-70px] right-0"
            src="./imgs/love.png"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <img
            className="absolute bottom-[350px] left-10 w-[90px] rounded-md"
            src="./imgs/us.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.4}>
          <img
            className="absolute top-[100px] right-20 w-[90px] rounded-md"
            src="./imgs/last1.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.3}>
          <img
            className="absolute bottom-[360px] right-10 w-[90px] rounded-md"
            src="./imgs/last2.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.6}>
          <img
            className="absolute top-[150px] left-20 w-[90px] rounded-md"
            src="./imgs/last3.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}>
          <img
            className="absolute bottom-[200px] right-[50%] w-[90px] rounded-md"
            src="./imgs/last4.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.2}>
          <img
            className="absolute top-[200px] left-1/4 w-[90px] rounded-md"
            src="./imgs/last5.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <img
            className="absolute bottom-[300px] right-1/4 w-[90px] rounded-md"
            src="./imgs/last6.jpeg"
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.9}>
          <img
            className="absolute top-[380px] left-[20%] w-[90px] rounded-md"
            src="./imgs/last7.jpeg"
            alt=""
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: "0.7", end: "0.7" }}
          style={{ zIndex: -10 }}
        >
          <div className="flex justify-start items-center ">
            <img
              className=""
              src="./imgs/arrow-love.png"
              alt=""
              style={{
                height: "500px",
                zIndex: -20, // Ensure it stays behind
              }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.2}>
          <Main onScrollToNext={scrollToNext} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.9}>
          <Conclution />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Journey;
