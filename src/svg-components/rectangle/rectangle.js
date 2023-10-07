import React from "react";

const Rectangle = ({ width, viewBox }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="49" viewBox={viewBox} fill="none">
      <path d="M0 0.0400391H389.426V48.3022H0V0.0400391Z" fill="#DED9C3" />
    </svg>
  );
};

export default Rectangle;
