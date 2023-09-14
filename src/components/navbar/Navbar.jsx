import React, { useState, useEffect } from "react";
import Navitem from "./Navitem";
import BookButton from "../buttons/Bookbutton";
import Logo from "./Logo";
import RightNavbar from "./RightNavbar";
import {List } from "react-bootstrap-icons";
import BlockAllowScroll from "./BlockSroll";
function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    // Create a media query
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Update the state based on the media query result
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes in the media query
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const [blockScroll, allowScroll] = BlockAllowScroll();
  
  return (
    <div className="relative z-[1000] flex justify-center bg-white top-0 w-screen items-center h-[5rem]">
      <div className="flex justify-between items-center md:w-5/6 w-full px-4 md:px-0">
        <Logo />
        {isSmallScreen ? (
          <List
            onClick={() => {setMenuClicked(!menuClicked);blockScroll()}}
            className="h-[3rem] w-auto"
          />
        ) : (
          <BookButton />
        )}
      </div>
      <RightNavbar setClicked={setMenuClicked} allowScroll={allowScroll} clicked={menuClicked} />
    </div>
  );
}

export default Navbar;
