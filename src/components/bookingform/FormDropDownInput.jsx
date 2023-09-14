import { Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { ChevronDown, Search } from "react-bootstrap-icons";

// function iconType(type)
// {
//   const style = "mr-1";
//   switch(type) {
//     case "text":   return <GeoAlt className={style} color="gray" size={25}/>;
//     case "number":   return <PeopleFill className={style} color="gray" size={25}/>;

//     default:
//       return <h1>No project match</h1>
//   }
// }

function FormDropDownInput(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-fit w-auto mr-6 ml-2 mb-2">
      <div className="ml-3 mb-1 text-black">
        <Typography>{props.title}</Typography>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`flex ease-in-out animation duration-150 justify-between items-center border ${open?"border-yellow-600": "border-gray-600"} border-2 bg-white rounded-xl h-15 pl-5 pr-3 pb-3 pt-3 w-full`}
      >
        
        {/* <input disabled className="bg-white placeholder:text-gray-400 placeholder:opacity-100 w-full mt-2 mb-2 mr-2 h-full"placeholder={props.placeholder}></input>
          
        </Typography> */}
        <ChevronDown
          size={20}
          color="gray"
          className={`animation ease-in-out duration-300 rotate-0 ${open && "rotate-180"}`}
        />
      </div>
    </div>
  );

  // <Typography
  //         className={`${
  //           open ? "text-gray-600" : "text-gray-400"
  //         } font-md text-base mt-1 mb-1 mr-2 w-full h-full`}
  //       ></Typography>
  // return (
  //   <div className="w-auto relative pb-0">
  //     <div className="border-2 border-blue flex flex-col w-fill mr-6 ml-2">
  //       <div className="ml-3 mb-1 text-black">
  //         <Typography>{props.title}</Typography>
  //       </div>
  //       <div
  //         onClick={() => setOpen(!open)}
  //         className={`flex justify-between items-center border-2 bg-white rounded-xl h-15 pl-5 pr-3 pb-3 pt-3 ${
  //           !selected && "text-gray-400"
  //         }`}
  //       >
  //         {selected
  //           ? selected?.length > 25
  //             ? selected?.substring(0, 25) + "..."
  //             : selected
  //           : "Select Country"}
  //         <ChevronDown
  //           size={20}
  //           color="gray"
  //           className={`${open && "rotate-180"}`}
  //         />
  //       </div>
  //       <ul
  //         className={`bg-white mt-2 overflow-y-auto ${
  //           open ? "max-h-60" : "max-h-0"
  //         } `}
  //       >
  //         <div className="flex items-center px-2 sticky top-0 bg-white">
  //           <Search size={18} color="gray" />
  //           <input
  //             type="text"
  //             value={inputValue}
  //             onChange={(e) => setInputValue(e.target.value.toLowerCase())}
  //             placeholder="Enter country name"
  //             className="placeholder:text-gray-700 p-2 outline-none"
  //           />
  //         </div>
  //         {countries?.map((country) => (
  //           <li
  //             key={country?.name}
  //             className={`p-2 text-sm hover:bg-sky-600 hover:text-white
  //         ${
  //           country?.name?.toLowerCase() === selected?.toLowerCase() &&
  //           "bg-sky-600 text-white"
  //         }
  //         ${
  //           country?.name?.toLowerCase().startsWith(inputValue)
  //             ? "block"
  //             : "hidden"
  //         }`}
  //             onClick={() => {
  //               if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
  //                 setSelected(country?.name);
  //                 setOpen(false);
  //                 setInputValue("");
  //               }
  //             }}
  //           >
  //             {country?.name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
}

export default FormDropDownInput;
