import React from "react";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Picker(props) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker {...props}
        
          slotProps={
            {
              root(state) {},
              input(state) {},
              thumb(state) {},
              track(state) {},
            }
          }
        />
        </LocalizationProvider>
    </div>
  );
};

export default Picker;
