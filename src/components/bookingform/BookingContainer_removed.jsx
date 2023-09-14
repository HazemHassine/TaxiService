import React from "react";
import { Typography, Checkbox, Button } from "@material-tailwind/react";
import FormTextInput from "./FormInput";
import FormDropDownInput from "./FormDropDownInput";
import LearnMoreButton from "../buttons/LearnMoreButton";
import BookButton from "../buttons/Bookbutton";
// import { Input } from "@mui/base/Input";
// import TextInput from "./TextInput";
import { ChevronBarDown, GeoAlt, PeopleFill } from "react-bootstrap-icons";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import CustomDropMenu from "./CustomDropMenu";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

function BookingContainer() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffeb3b",
      },
      secondary: {
        main: "#f500f4",
      },
    },
  });
  return (
    <div className="flex flex-col h-fit w-5/6 backdrop-blur-xl md:-translate-y-20 -translate-y-[4rem] z-10 bg-white/30 p-6 rounded-xl shadow-[0_35px_60px_-20px_rgba(0,0,0,0.3)]">
      <div className="p-2 w-fit mb-3">
        <Typography variant="h4" className="invert">
          Book Your Ride
        </Typography>
      </div>
      <div className="flex flex-wrap justify-around gap-1 items-center w-full">
        <div>
          <Typography variant="h6">Pick Up location</Typography>
          <div className="flex text-lg items-center justify-between h-[4rem] w-80 text leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-yellow dark:focus:shadow-outline-yellow focus:shadow-lg border border-solid border-slate-300 hover:border-yellow-700 dark:hover:border-yellow-700 focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0">
            <input
              type="text"
              placeholder=""
              className="hover:outline-none focus:outline-none"
            />
            <GeoAlt color="gray" size={24} />
          </div>
        </div>
        <div>
          <Typography variant="h6">Drop off location</Typography>
          <div className="flex text-lg items-center justify-between h-[4rem] w-80 text leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-yellow dark:focus:shadow-outline-yellow focus:shadow-lg border border-solid border-slate-300 hover:border-yellow-700 dark:hover:border-yellow-700 focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0">
            <input
              type="text"
              placeholder=""
              className="hover:outline-none focus:outline-none"
            />
            <GeoAlt color="gray" size={24} />
          </div>
        </div>
        <div>
          <Typography variant="h6">Passengers</Typography>
          <div className="flex text-lg items-center justify-between h-[4rem] w-80 text leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-yellow dark:focus:shadow-outline-yellow focus:shadow-lg border border-solid border-slate-300 hover:border-yellow-700 dark:hover:border-yellow-700 focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0">
            <input
              type="number"
              placeholder=""
              className="hover:outline-none focus:outline-none"
            />
            <PeopleFill color="gray" size={24} />
          </div>
        </div>

        <div>
          <Typography variant="h6">Choose a cab</Typography>
          <CustomDropMenu />
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="DATEPICKER "
                sx={{
                  border: "0 solid black",
                  width: "20rem",
                  height: "4rem",
                  "& .DATEPICKER *:focus": {
                    border: "none",
                    outline: "none"
                  }
                  
                }}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default BookingContainer;
