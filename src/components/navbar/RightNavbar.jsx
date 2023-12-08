import React from "react";
import Logo from "./Logo";
import ListItem from "./ListItem";
import ListItemAbout from "./ListItemAbout";
import ListItemContact from "./ListItemContact";
import SocialMedia from "./SocialMedia";
import { Typography } from "@material-tailwind/react";
import { ArrowLeft } from "react-bootstrap-icons";



function RightNavbar(props) {
  const clicked = props.clicked;
  const setClicked = props.setClicked;
  const allowScroll = props.allowScroll;

  return (
    <div
      className={`${clicked ? "" : "translate-x-[100vw]"
        } absolute z-[2000]  top-0 right-0 translate-x-0 duration-300 ease-in-out w-screen h-screen`}
    >
      <div className="relative">
        <div className="h-[90vh] w-[80vw] shadow-[0_15px_40px_rgba(0,0,0,0.8)] absolute pb-16 pt-8 pl-8 right-0 flex flex-col justify-between bg-white rounded-l-3xl">
          <div>
            <ArrowLeft
              onClick={() => { setClicked(!clicked); allowScroll() }}
              className="bg-yellow-700 rounded-full p-4 mb-8"
              size={50}
            />
            <div>
              <Logo />
              <ol className="mt-4 text-lg">
                <li>
                  <ListItem clicked={clicked}
                    setClicked={setClicked}
                    allowScroll={allowScroll}
                    text="Réserver un Taxi Maintenant" />
                </li>
                <li>
                  <ListItemContact clicked={clicked}
                    setClicked={setClicked}
                    allowScroll={allowScroll} text="Contactez nous" />
                </li>
                <li>
                  <ListItemAbout clicked={clicked}
                    setClicked={setClicked}
                    allowScroll={allowScroll}
                    text="About Us" />
                </li>
                <li>
                  <SocialMedia clicked={clicked}
                    setClicked={setClicked}
                    allowScroll={allowScroll}
                    text="Social Medias" />
                </li>
              </ol>
            </div>
          </div>
          <div>
            <Typography variant="paragraph" color="gray">
              All rights reserved to{" "}
              <span className="text-yellow-700">TaxiParisien</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightNavbar;
