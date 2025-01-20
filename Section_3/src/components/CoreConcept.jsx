import React from "react";

const CoreConcept = (props) => {
  return (
    <>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <span>{props.desc}</span>
    </>
  );
};

export default CoreConcept;
