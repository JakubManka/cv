import React from "react";
import { IconProps } from "../Interfaces";

export const GradleIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/*<rect width="512" height="512" rx="15%" fill="#ffffff" />*/}
      <path
        d="M427 132.7a61 61 0 00-85-1a6 6 0 000 9l7 8a6 6 0 008 1a35 35 0 0146 53c-48 48-113 -87 -259 -17a20 20 0 00-9 28l25 43a20 20 0 0027 7l1 0l0 0l11-6a257 257 0 0035-26a6 6 0 018 0v0a6 6 0 010 9a263 263 0 01-37 28h0l-11 6a31 31 0 01-15 4a32 32 0 01-28-16L126 219C81 259 53 314 68.13 392.26a6 6 0 006 4.74H100.6a6 6 0 005.93-5.3a40 40 0 0178.62 0a6 6 0 005.72 5.08h26.2a6 6 0 005.7-5.1a40 40 0 0178.6 0a6 6 0 005.7 5h26a6 6 0 005.8-5.72c1-37 10 -79 38.7 -100c98-73 72 -136 49.4 -158.3zm-100 110l-19-9v0a12 12 0 1119 9z"
        fill="#ffffff"
      />
    </svg>
  );
};
