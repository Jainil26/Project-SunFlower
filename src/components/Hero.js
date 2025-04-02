"use client";
"use strict";
import { motion } from "framer-motion";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var animatedtext_1 = require("./animatedtext");

var Hero = function () {
  // Function to handle button click
  var handleButtonClick = function() {
    // Replace 'https://your-external-website.com' with your actual website URL
    window.location.href = 'https://huggingface.co/spaces/welcometoFightclub/Hack_the_spring';
    
    // Alternatively, if you want to open in a new tab:
    // window.open('https://your-external-website.com', '_blank');
  };

  return (<div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
    <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      <div className="flex items-center justify-center -mt-10">
        <animatedtext_1.AnimatedGradientTextDemo />
      </div>
      <div className="flex justify-center mt-8">
        <div className="inline-flex relative">
          <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex'>
            Heart2Heart<br />
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <p className='text-xl text-center mt-8 max-w-md'>
          Life can be overwhelming, and sometimes, all you need is someone who truly listens. Heart2Heart is an AI-powered chatbot designed to be your caring friend and supportive companion. It engages in empathetic conversations by analyzing your words and responding in a thoughtful, comforting manner.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <motion.button
          className='bg-white text-black py-3 px-5 rounded-lg font-medium'
          whileHover={{
            scale: 1.05, // Slight scale-up on hover
            boxShadow: "0px 0px 15px 5px rgba(0, 255, 255, 0.6)", // Cyan glow on hover
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }} // Slight shrink on click
          initial={{
            boxShadow: "0px 0px 5px 2px rgba(0, 255, 255, 0.2)", // Subtle glow at rest
          }}
          onClick={handleButtonClick} // Add the onClick handler
        >
          Try Heart2Heart Chatbot
        </motion.button>
      </div>
    </div>
  </div>);
};
exports.Hero = Hero;
