import { Typography } from "@material-tailwind/react";
import React from "react";
import { scroller } from 'react-scroll';

function SocialMedia(props) {

  const handleClick = () => {
    console.log("Clicked");
    scroller.scrollTo("footer", {
      duration: 500,
      delay: 30,
      offset: -130,
      smooth: "easeInOutCubic",
    })
  };
  const clicked = props.clicked;
  const setClicked = props.setClicked;
  const allowScroll = props.allowScroll;
  return (
    <div
      onClick={() => { setClicked(!clicked); allowScroll(); handleClick() }}
      className="flex items-center gap-2 text-black">
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

export default SocialMedia;
