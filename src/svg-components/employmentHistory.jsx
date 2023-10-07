import React from "react";

const EmploymentHistory = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_1080_3744)">
        <mask id="mask0_1080_3744" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1080_3744)">
          <path
            d="M20.25 6.75H3.75C3.33578 6.75 3 7.08579 3 7.5V19.5C3 19.9142 3.33578 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V7.5C21 7.08579 20.6642 6.75 20.25 6.75Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.75 6.75V5.25C15.75 4.85218 15.592 4.47065 15.3106 4.18934C15.0293 3.90803 14.6478 3.75 14.25 3.75H9.75C9.3522 3.75 8.97068 3.90803 8.68935 4.18934C8.40803 4.47065 8.25 4.85218 8.25 5.25V6.75"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0002 11.8418C18.2648 13.4243 15.1595 14.2552 11.9994 14.2503C8.83974 14.2552 5.73502 13.4246 3 11.8425"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.875 11.25H13.125" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1080_3744">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EmploymentHistory;
