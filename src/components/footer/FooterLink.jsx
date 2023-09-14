import { Typography } from "@material-tailwind/react";
import React from "react";

function FooterLink(props) {
  return (
    <div className="flex items-center gap-2 translate-x-0 hover:translate-x-1 text-white hover:text-yellow-700 ease-in-out duration-300 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#fbc02d"
        viewBox="0 0 16 16"
      >
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
      <Typography>{props.text}</Typography>
    </div>
  );
}

export default FooterLink;
