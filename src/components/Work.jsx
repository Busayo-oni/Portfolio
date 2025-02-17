import React from "react";
import proj1 from "../assets/pro1.png";
import proj2 from "../assets/pro2.png";
import proj3 from "../assets/pro3.png";
import proj4 from "../assets/pro4.png";
import proj5 from "../assets/pro5.png";
import proj6 from "../assets/pro6.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5 " id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400 ">Check out some of my recent work</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
            shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
             h-[200px] bg-cover relative "
        >
          <img src={proj1} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://longevity-oracle.onrender.com/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
            shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
             h-[200px] bg-cover relative "
        >
          <img src={proj2} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://sociel.onrender.com/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
            shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
             h-[200px] bg-cover relative "
        >
          <img src={proj3} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://mastermind-daycare.onrender.com/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
            shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
             h-[200px] bg-cover relative "
        >
          <img src={proj4} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://losheyi-hub.netlify.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
            shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
             h-[200px] bg-cover relative "
        >
          <img src={proj5} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://maiz-hub.netlify.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden 
            shadow-lg bg-gray-950 shadow-[#040c16] group container rounded-md flex justify-center items-center
             h-[200px] bg-cover relative "
        >
          <img src={proj6} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://9jasport.netlify.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
