import React, { useState } from "react";

const TabButton = ({ children, onSelect, ...props }) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
};

export default TabButton;
