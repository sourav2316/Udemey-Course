import React, { useState } from "react";

const TabButton = ({ children, onSelect }) => {
  return (
    <>
      <button onClick={onSelect}>{children}</button>
    </>
  );
};

export default TabButton;
