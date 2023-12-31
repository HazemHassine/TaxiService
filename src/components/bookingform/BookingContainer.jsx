import React, { useState, useEffect, forwardRef } from "react";
import { Typography } from "@material-tailwind/react";
import { GeoAlt, TrashFill } from "react-bootstrap-icons";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import "./form.css";
import MapContainer from "./MapContainer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Element } from "react-scroll";

const libraries = ["places"];

function BookingContainer({ ref }) {
  // const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [mapState, setMapState] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [directionsResult, setDirectionsResult] = useState(null);
  const [directionsError, setDirectionsError] = useState(false);
  const [distance, setDistance] = useState("");
  const [distanceInMeters, setDistanceInMeters] = useState(null);
  const [duration, setDuration] = useState("");
  const [errorInputOne, setErrorInputOne] = useState(false);
  const [errorInputTwo, setErrorInputTwo] = useState(false);
  const [locationOne, setLocationOne] = useState("");
  const [locationTwo, setLocationTwo] = useState("");
  const [time, setTime] = useState("2023-09-10T21:41");
  const [markers, setMarkers] = useState(null);
  const [price, setPrice] = useState(null);
  const [tier, setTier] = useState(null);
  const [results, setResults] = useState(null);
  const [firstAndLastName, setFirstAndLastName] = useState("");
  const [number, setNumber] = useState("");
  const [checkedLocations, setCheckedLocations] = useState({
    locationOne: "",
    locationTwo: "",
  });
  const submit = async (e) => {
    e.preventDefault();
    await book();
    notify();
  };
  const notify = () =>
    toast.success("Ton requete a été envoyé en sucess", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    // Define a media query for small screens (you can customize this)
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check to set the initial state
    setIsSmallScreen(mediaQuery.matches);

    // Add a listener to track changes in the media query
    const mediaQueryListener = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Attach the listener
    mediaQuery.addEventListener("change", mediaQueryListener);

    // s.map is not a functionn up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", mediaQueryListener);
    };
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  const tiers = {
    // tiers per distance per meters
    first: { distance: 5000, price_per_meter: 0.06 },
    second: { distance: 10000, price_per_meter: 0.05 },
    third: { distance: 15000, price_per_meter: 0.04 },
    fourth: { distance: 20000, price_per_meter: 0.03 },
    fifth: { distance: 25000, price_per_meter: 0.02 },
    most: { distance: 9999999, price_per_meter: 0.01 },
  };

  function calculatePriceAndTier(distanceInMetersArg) {
    let tier_ = null;
    let price_ = 0;
    for (const [tierName, tierData] of Object.entries(tiers)) {
      if (distanceInMetersArg < tierData.distance) {
        tier_ = tierName;
        price_ = distanceInMetersArg * tierData.price_per_meter;
        break;
      }
    }
    setPrice(price_);
    return price_;
  }

  async function book() {
    const result_booking = await showResponse();
    const message = {
      from_name: firstAndLastName,
      message: JSON.stringify(
        {
          name: firstAndLastName,
          phone_number: number,
          time: time,
          pickUp: locationOne,
          dropOff: locationTwo,
          duration: result_booking.duration,
          distance: result_booking.distance,
          distanceInMeters: result_booking.distanceInMeters,
          price: result_booking.price.toFixed(2),
        },
        null
      ),
    };

    // console.log(message);

    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      message,
      process.env.REACT_APP_PUBLIC_KEY
    );
  }

  const toggleMap = (e) => {
    e.preventDefault();
    setMapState(!mapState);
  };

  async function geoCodeAdresses() {
    let geocoder = new window.google.maps.Geocoder();
    var result = {};
    try {
      await geocoder.geocode(
        { address: locationOne },
        function (results, status) {
          if (status === "OK") {
            result.locationOne = results[0].geometry.location.toJSON();
          } else {
            return { status: status };
          }
        }
      );
    } catch {
      console.log("Error while geocoding adress one");
      return { status: "ERROR_GEOCODER_DEV_ADRESS_ORIGIN" };
    }
    try {
      await geocoder.geocode(
        { address: locationTwo },
        function (results, status) {
          if (status === "OK") {
            result.locationTwo = results[0].geometry.location.toJSON();
          } else {
            return { status: status };
          }
        }
      );
    } catch {
      console.log("Error while geocoding adress two");
      return { status: "ERROR_GEOCODER_DEV_ADRESS_DESTINATION" };
    }
    result.status = "OK";
    return result;
  }

  async function showResponse() {
    let GeoCodedAdresses = await geoCodeAdresses();

    if (GeoCodedAdresses.status === "ERROR_GEOCODER_DEV_ADRESS_ORIGIN") {
      setErrorInputOne(true);
    } else if (
      GeoCodedAdresses.status === "ERROR_GEOCODER_DEV_ADRESS_DESTINATION"
    ) {
      setErrorInputTwo(true);
    }

    if (GeoCodedAdresses.status === "OK") {
      const directionsService = new window.google.maps.DirectionsService();
      setErrorInputOne(false);
      setErrorInputTwo(false);
      try {
        const results = await directionsService.route({
          origin: GeoCodedAdresses.locationOne,
          destination: GeoCodedAdresses.locationTwo,
          travelMode: window.google.maps.TravelMode.DRIVING,
        });
        setDuration(results.routes[0].legs[0].duration.text);
        setDistance(results.routes[0].legs[0].distance.text);
        setDistanceInMeters(results.routes[0].legs[0].distance.value);
        setDirectionsResult(false);
        setDirectionsError(false);
        let price_ = calculatePriceAndTier(
          results.routes[0].legs[0].distance.value
        );
        // setDirectionsResponse(null);
        setDirectionsResponse(results);
        // console.log(
        //   "From showResponse locationOne",
        //   locationOne,
        //   "locationTwo",
        //   locationTwo,
        //   "checkedLocations",
        //   checkedLocations
        // );
        setCheckedLocations({
          locationOne: locationOne,
          locationTwo: locationTwo,
        });
        let duration_ = results.routes[0].legs[0].duration.text;
        let distance_ = results.routes[0].legs[0].distance.text;
        let distanceInMeters_ = results.routes[0].legs[0].distance.value;

        if (!isSmallScreen) {
          if (!mapState) {
            setMapState(true);
            setDirectionsResult(false);
          }
        }
        const res = {
          price: price_,
          duration: duration_,
          distance: distance_,
          distanceInMeters: distanceInMeters_,
        };
        setResults(res);
        return res;
      } catch (error) {
        console.log("Error happened while finding directions");
        setDirectionsResult(true);
      }
    }
  }
  function checkInputsAndShowResponseMaybe() {
    if (
      checkedLocations.locationOne != locationOne ||
      checkedLocations.locationTwo != locationTwo
    ) {
      showResponse();
    } else {
      return;
    }
  }

  function directionsErrorFunction() {
    setDirectionsResult(false);
    setDirectionsError(true);
    return <p>Error calculating route, please fix the addresses</p>;
  }
  if (!isLoaded) {
    return (
      <div ref={ref} className="h-fit py-4 drop-shadow-2xl w-5/6 backdrop-blur-lg bg-[rgba(256,256,256,0.7)] rounded-3xl">
        <Typography
          variant="h2"
          className="mb-4 w-fit mx-4 border-b-4 border-r-0 border-l-0 border-t-0 border-yellow-700"
        >
          Book Your Ride
        </Typography>
        <div className="px-4 flex gap-4 flex-wrap items-center justify-around">
          <Typography
            variant="h4"
            className="mb-4 w-fit mx-4 border-b-4 border-r-0 border-l-0 border-t-0 border-yellow-700"
          >
            Loading Map
          </Typography>
        </div>
      </div>
    );
  }
  return (
    <div ref={ref} className="h-fit py-4 drop-shadow-2xl w-5/6 backdrop-blur-lg bg-[rgba(256,256,256,0.7)] rounded-3xl">
      <div className="flex justify-between items-center">
        <Typography
          variant="h2"
          className="mb-4 w-fit mx-4 border-b-4 border-r-0 border-l-0 border-t-0 border-yellow-700"
        >
          Réserver votre Taxi
        </Typography>
      </div>
      {mapState && (
        <div>
          <MapContainer
            toggleFunction={toggleMap}
            changeLocationOneFunction={setLocationOne}
            changeLocationTwoFunction={setLocationTwo}
            changeDistanceFunction={setDistance}
            changeDurationFunction={setDuration}
            changePriceFunction={setPrice}
            markers={markers && markers}
            directionsResponse={directionsResponse}
          />
        </div>
      )}
      <form className="w-full m-0 p-0">
        <div className="px-4 flex gap-4 flex-wrap items-center justify-around">
          <div className="min-w-full md:min-w-[20rem] md:max-w-[25rem]">
            <Typography variant="h5" className="pl-3 pb-2">
              First and Last name
            </Typography>
            <div className="group duration-500 ease-in-out ring-white hover:ring-yellow-700 md:hover:ring-2 h-full flex justify-between items-center px-4 bg-white drop-shadow-md rounded-xl">
              <input
                id="name"
                placeholder="First and Last name"
                className={`peer duration-500 ease-in-out group-hover:ring-b-1 group-hover:ring-yellow-700 w-full md:w-[125%] h-[2rem] my-4 active:outline-none outline-none focus:outline-none p-0`}
                type="text"
                value={firstAndLastName}
                onChange={(e) => {
                  setFirstAndLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="min-w-full md:min-w-[20rem] md:max-w-[25rem]">
            <Typography variant="h5" className="pl-3 pb-2">
              Numéro de téléphone
            </Typography>
            <div className="group duration-500 ease-in-out ring-white hover:ring-yellow-700 md:hover:ring-2 h-full flex justify-between items-center px-4 bg-white drop-shadow-md rounded-xl">
              <input
                id="phone"
                placeholder="Numéro de téléphone"
                className={`peer duration-500 ease-in-out group-hover:ring-b-1 group-hover:ring-yellow-700 w-full md:w-[125%] h-[2rem] my-4 active:outline-none outline-none focus:outline-none p-0`}
                type="text"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="min-w-full md:min-w-[20rem] md:max-w-[25rem]">
            <Typography variant="h5" className="pl-3 pb-2">
              Adresse de prise en charge
            </Typography>
            <Typography variant="p" className="text-red-700">
              {errorInputOne
                ? "impossible de localiser l'adresse de prise en charge, modife la ou soit plus précis"
                : ""}
            </Typography>
            <Typography variant="p" className="text-red-700">
              {directionsError
                ? "Problème du route, changer les addresses"
                : ""}
            </Typography>
            <div
              className={`group duration-500 ease-in-out ${errorInputOne || directionsError
                  ? "ring-2 ring-red-400 hover:ring-red-700"
                  : "ring-white hover:ring-yellow-700"
                } md:hover:ring-2 h-full flex justify-between items-center px-4 bg-white drop-shadow-md rounded-xl`}
              onFocusOut={(e) => {
                setLocationOne(document.querySelector("#firstInput").value);
                checkInputsAndShowResponseMaybe();
              }}
            >
              <StandaloneSearchBox
                onPlacesChanged={() =>
                  setLocationOne(document.querySelector("#firstInput").value)
                }
              >
                <input
                  id="firstInput"
                  placeholder="Addresse de prise en charge"
                  className={`peer duration-500 ease-in-out group-hover:ring-b-1 group-hover:ring-yellow-700 w-full md:w-[125%] h-[2rem] my-4 active:outline-none outline-none focus:outline-none p-0`}
                  type="text"
                  // defaultValue={locationOne}
                  onChange={(e) => {
                    setLocationOne(e.target.value);
                  }}
                  value={locationOne}
                />
              </StandaloneSearchBox>
              <GeoAlt
                className="group-hover:text-yellow-700 hover:text-5xl text-4xl cursor-pointer h-full duration-500 ease-in-out peer-focus:text-yellow-700 text-gray-400"
                onClick={(e) => {
                  !isSmallScreen && toggleMap(e);
                }}
              />
            </div>
          </div>
          <div className="min-w-full md:min-w-[20rem] md:max-w-[25rem]">
            <Typography variant="h5" className="pl-3 pb-2">
              Destination
            </Typography>
            <Typography variant="p" className="text-red-700">
              {errorInputTwo
                ? "impossible de localiser l'adresse de prise en charge, modife la ou soit plus précis"
                : ""}
            </Typography>
            <Typography variant="p" className="text-red-700">
              {directionsError
                ? "Problème du route, changer les addresses"
                : ""}
            </Typography>
            <div
              className={`group duration-500 ease-in-out ${errorInputTwo || directionsError
                  ? "ring-2 ring-red-400 hover:ring-red-700"
                  : "ring-white hover:ring-yellow-700"
                } md:hover:ring-2 h-full flex justify-between items-center px-4 bg-white drop-shadow-md rounded-xl`}
              onFocusOut={checkInputsAndShowResponseMaybe()}
            >
              <StandaloneSearchBox
                onPlacesChanged={() =>
                  setLocationTwo(document.querySelector("#secondInput").value)
                }
              >
                <input
                  placeholder="Destination"
                  id="secondInput"
                  className="peer duration-500 ease-in-out group-hover:ring-b-1 group-hover:ring-yellow-700 ring-gray-400 w-full md:w-[125%] h-[2rem] my-4 active:outline-none outline-none focus:outline-none p-0"
                  type="text"
                  // defaultValue={locationTwo}
                  onChange={(e) => {
                    setLocationTwo(e.target.value);
                  }}
                  value={locationTwo}
                />
              </StandaloneSearchBox>
              <GeoAlt
                className="group-hover:text-yellow-700 hover:text-5xl text-4xl cursor-pointer h-full w-auto duration-500 ease-in-out peer-focus:text-yellow-700 text-gray-400"
                onClick={(e) => {
                  !isSmallScreen && toggleMap(e);
                }}
              />
            </div>
          </div>
          <div className="min-w-full md:min-w-[15rem] md:max-w-[25rem]">
            <Typography variant="h5" className="pl-3 pb-2">
              Date et heure de la course
            </Typography>
            <div className="group duration-500 ease-in-out hover:ring-yellow-700 ring-white md:hover:ring-2 h-full min-w-full flex justify-center md:px-0 px-4 items-center py-4 bg-white drop-shadow-md rounded-xl">
              <input
                className="overflow-visible peer bg-white placeholder:text-gray-400 duration-500 ease-in-out group-hover:ring-b-1 group-hover:ring-yellow-700 ring-gray-400 md:ml-4 md:mr-4 mr-2 w-full h-[2rem] active:outline-none outline-none focus:outline-none p-0"
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="min-w-full md:min-w-[20rem] md:max-w-[25rem] flex-col gap-4 flex justify-center items-start">
            {distance === "" ? null : (
              <Typography
                variant="p"
                className="mx-4 font-semibold text-xl border-b-4 border-r-0 border-l-0 border-t-0 border-yellow-700"
              >
                Distance estimée: {distance}
                <br />
                Durée estimée: {duration}
                <br />
              </Typography>
            )}
            <Typography variant="p" className="text-red-700">
              {directionsResult ? directionsErrorFunction() : null}
              {directionsError
                ? "Echec de la recherche de la destination"
                : null}
            </Typography>
            <div className="flex gap-4 w-full justify-evenly">
              <button
                className="md:block hidden"
                onClick={async (e) => {
                  e.preventDefault();
                  setLocationOne(document.querySelector("#firstInput").value);
                  setLocationTwo(document.querySelector("#secondInput").value);
                  await showResponse(e);
                }}
              >
                <GeoAlt className="hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer font-bold text-2xl z-30 drop-shadow-lg bg-yellow-700 flex items-center justify-center h-full w-16 p-4  overflow-visible hover:p-3 rounded-full" />
              </button>
              <button
                className="hover:bg-black text-black  hover:text-white duration-500 ease-in-out bg-yellow-700 rounded-lg py-4 w-3/4 drop-shadow-2xl"
                type="submit"
                onClick={submit}
              >
                <Typography className="font-bold" variant="h5">
                  Réserver Maintenant
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default forwardRef(BookingContainer);
