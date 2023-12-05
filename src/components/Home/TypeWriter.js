import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer.",
          "Front-End Developer.",
          "Web Developer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;