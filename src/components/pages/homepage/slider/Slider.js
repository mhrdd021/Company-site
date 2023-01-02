import React from "react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto pb-8">
      <h1 className="text-white text-2xl text-center mt-4">what technology are we used in our projects?</h1>

      <div className="flex">
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
      </div>
    </div>
  );
};
export default Slider;