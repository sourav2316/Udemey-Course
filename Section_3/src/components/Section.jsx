import React from "react";

const Section = ({ title, children, ...props }) => {
  return (
    <>
      <h1 className="color">{title}</h1>
      {children}
    </>
  );
};

export default Section;
