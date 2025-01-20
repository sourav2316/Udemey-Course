import React from "react";
import imageImport from "../assets/react.svg";

const Header = () => {
  const array = ["Sourav", "manish", "vaibhav", "anieket"];
  //////////////////////////////
  function genRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
  }

  const descriptions = array[genRandomNumber(3)];

  return (
    <>
      <img src={imageImport} alt="" />
      <h1>{descriptions} Hello World Kida vayi mundeyaaaa</h1>;
    </>
  );
};

export default Header;
