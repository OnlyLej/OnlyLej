import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
         "Programmer",
         "Electronics Enthusiast",
         "Embedded Systems Tinkerer",
         "Microcontroller Developer",
         "Hardware & Firmware Builder",
         "IoT Experimenter",
         "Problem Solver",
         "Tech Explorer",
         "DIY Engineer",
         "System Debugger"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
