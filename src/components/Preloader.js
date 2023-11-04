import React from "react";
import { Rings } from "react-loader-spinner";
// import "react-loader-spinner/dist/rings/css/react-spinner-rings.css";

const Preloader = (props) => {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Rings
        type="Plane"
        color="#343e47"
        height={100}
        width={100}
      />
    </div>
  );
}

export default Preloader;