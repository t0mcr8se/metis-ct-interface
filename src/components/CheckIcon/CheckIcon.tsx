import React from "react";

export default function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="1" y="1" width="38" height="38" rx="19" fill="#0E0E0E" />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="19"
        stroke={props.color || "#6C6C6C"}
        strokeWidth="2"
      />
      <path
        d="M11.5 19.5L17.5 25.5L29 14"
        stroke={props.color || "#6C6C6C"}
        strokeWidth="2"
      />
    </svg>
  );
}
