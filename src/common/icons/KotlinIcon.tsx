import React from "react";
import { IconProps } from "../Interfaces";

export const KotlinIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M3 28.9999L16.0433 15.9565L29 28.9999H3Z"
        fill="url(#paint0_linear_87_8183)"
      />
      <path d="M3 3H16.0433L3 16.75V3Z" fill="url(#paint1_linear_87_8183)" />
      <path
        d="M16.0433 3L3 16.7367V29L16.0433 15.9567L29 3H16.0433Z"
        fill="url(#paint2_linear_87_8183)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_87_8183"
          x1="9.91557"
          y1="35.0726"
          x2="22.1997"
          y2="22.7889"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.097" stopColor="#0095D5" />
          <stop offset="0.301" stopColor="#238AD9" />
          <stop offset="0.621" stopColor="#557BDE" />
          <stop offset="0.864" stopColor="#7472E2" />
          <stop offset="1" stopColor="#806EE3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_87_8183"
          x1="4.8239"
          y1="8.22556"
          x2="11.9583"
          y2="1.09116"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.118" stopColor="#0095D5" />
          <stop offset="0.418" stopColor="#3C83DC" />
          <stop offset="0.696" stopColor="#6D74E1" />
          <stop offset="0.833" stopColor="#806EE3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_87_8183"
          x1="-1.37753"
          y1="26.9044"
          x2="22.8167"
          y2="2.71007"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.107" stopColor="#C757BC" />
          <stop offset="0.214" stopColor="#D0609A" />
          <stop offset="0.425" stopColor="#E1725C" />
          <stop offset="0.605" stopColor="#EE7E2F" />
          <stop offset="0.743" stopColor="#F58613" />
          <stop offset="0.823" stopColor="#F88909" />
        </linearGradient>
      </defs>
    </svg>
  );
};
