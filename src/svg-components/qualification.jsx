import React from "react";

const Qualification = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path d="M3.5 12H21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.5 20.758C14.5711 20.758 16.25 16.8367 16.25 11.9996C16.25 7.16248 14.5711 3.24121 12.5 3.24121C10.4289 3.24121 8.75 7.16248 8.75 11.9996C8.75 16.8367 10.4289 20.758 12.5 20.758Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Qualification;
