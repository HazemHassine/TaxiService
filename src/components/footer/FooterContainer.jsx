import React from "react";
import squares_image from "../../assets/images/squares.png";
import logo from "../../assets/images/taxio_logo.png";
import { Typography } from "@material-tailwind/react";
import {
  Envelope,
  Facebook,
  GeoAlt,
  Instagram,
  Telephone,
  Twitter,
} from "react-bootstrap-icons";
import FooterLink from "./FooterLink";
import BookButton from "../buttons/Bookbutton";

function FooterContainer() {
  return (
    <div className="bg-[rgb(20,20,20)] justify-center items-center flex flex-col">
      <div
        style={{ backgroundImage: `url(${squares_image})` }}
        className="h-[40px] w-full bg-yellow-700"
      ></div>
      <div className="w-5/6 text-white justify-center md:gap-[3rem] gap-2 flex md:flex-row flex-col my-[30px]">
        <div className="md:w-3/12 w-full flex flex-col gap-2">
          <img src={logo}></img>
          <Typography color="white">
            Des questions ? Besoin d'aide pour réserver ? Contactez-nous
          </Typography>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 h-[30px] m-0 p-0 items-center w-fit">
              <div className="rounded-full bg-yellow-700 flex items-center justify-center w-[30px] h-[30px]">
                <Telephone className="h-full" color="black" />
              </div>
              <div className="flex gap-2">
                <Typography color="white">01</Typography>
                <Typography color="white">23</Typography>
                <Typography color="white">45</Typography>
                <Typography color="white">67</Typography>
                <Typography color="white">89</Typography>
              </div>
            </div>
            <div className="flex gap-4 h-[30px] m-0 p-0 items-center w-fit">
              <div className="rounded-full bg-yellow-700 flex items-center justify-center w-[30px] h-[30px]">
                <GeoAlt className="h-full" color="black" />
              </div>
              <Typography color="white">
                25 Rue de Rivoli, 75004 Paris
              </Typography>
            </div>{" "}
            <div className="flex gap-4 h-[30px] m-0 p-0 items-center w-fit">
              <div className="rounded-full bg-yellow-700 flex items-center justify-center w-[30px] h-[30px]">
                <Envelope className="h-full" color="black" />
              </div>
              <Typography color="white">contact@taxiparisien.fr</Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Typography>Réseaux sociaux</Typography>
            <div className="relative">
              <div className="absolute w-full h-[2px] bg-[rgb(40,40,40)]"></div>
              <div className="absolute left-5 w-1/3 h-[2px] bg-yellow-700"></div>
            </div>
          </div>
          <div>
            <Typography className="max-w-[12rem] mb-4">
              Suivez-nous sur les réseaux sociaux pour les dernières actualités
              et promotions
            </Typography>
            <div className="flex items-center gap-2 translate-x-0 hover:translate-x-1 text-white hover:text-yellow-700 ease-in-out duration-300 cursor-pointer">
              <Facebook color="#fbc02d" />
              <Typography>taxiparisien</Typography>
            </div>
            <div className="flex items-center gap-2 translate-x-0 hover:translate-x-1 text-white hover:text-yellow-700 ease-in-out duration-300 cursor-pointer">
              <Twitter color="#fbc02d" />
              <Typography>@taxiparisien</Typography>
            </div>
            <div className="flex items-center gap-2 translate-x-0 hover:translate-x-1 text-white hover:text-yellow-700 ease-in-out duration-300 cursor-pointer">
              <Instagram color="#fbc02d" />
              <Typography>@taxiparisien_officiel</Typography>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Typography>Quick Links</Typography>
            <div className="relative">
              <div className="absolute w-full h-[2px] bg-[rgb(40,40,40)]"></div>
              <div className="absolute left-5 w-1/3 h-[2px] bg-yellow-700"></div>
            </div>
          </div>
          <div>
            <FooterLink text="About Us" />
            <FooterLink text="About Us" />
            <FooterLink text="About Us" />
            <FooterLink text="About Us" />
            <FooterLink text="About Us" />
          </div>
        </div> */}
        <div className="flex flex-col gap-6 items-center text-center">
          <div className="flex flex-col items-center gap-2 w-fit">
            <Typography>Contactez-nous</Typography>
            <div className="relative w-full self-start">
              <div className="absolute w-full h-[2px] bg-[rgb(40,40,40)]"></div>
              <div className="absolute left-4 w-1/3 h-[2px] bg-yellow-700"></div>
            </div>
          </div>
          <div className="md:w-4/6 w-full">
            <Typography>
              Réservez votre prochain taxi avec TaxiParisien pour une course confortable, sûre et abordable.
            </Typography>

            <input
              type="email"
              max={7}
              placeholder="Enter Your Email"
              className="mt-4 focus:outline-none w-full py-2 px-4 ease-in-out text-black duration-150 bg-white rounded-xl h-15 pl-5 pr-3 pb-3 pt-3 border-2 hover:border-yellow-700 border-gray-300"
            />
          </div>
          <div>
            <div className="group relative flex justify-center items-center ease-in-out duration-300 bg-black text-white cursor-pointer rounded-full hover:bg-yellow-700 pl-6 pr-6 py-3 hover:text-black">
              <Envelope className="mr-2 group-hover:text-black text-white ease-in-out duration-300" />
              <p className="font-semibold">Subscribe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;
