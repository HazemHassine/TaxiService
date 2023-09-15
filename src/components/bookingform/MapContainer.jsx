import React, { useState, useEffect } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Typography } from "@material-tailwind/react";

import { SendFill, TrashFill, XLg } from "react-bootstrap-icons";

const libraries = ["places"];
const center = { lat: 48.8584, lng: 2.2945 };
const defaultMarkers = [
  { id: 1, name: "Pick up Location", lat: 48.8584, lng: 2.2945 },
  { id: 2, name: "Drop off location", lat: 48.8584, lng: 2.2948 },
];
const tiers = {
  // tiers per distance per meters
  first: { distance: 5000, price_per_meter: 0.06 },
  second: { distance: 10000, price_per_meter: 0.05 },
  third: { distance: 15000, price_per_meter: 0.04 },
  fourth: { distance: 20000, price_per_meter: 0.03 },
  fifth: { distance: 25000, price_per_meter: 0.02 },
  most: { distance: 9999999, price_per_meter: 0.01 },
};

function MapContainer(props) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const [currentEditable, setCurrentEditable] = useState(1);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const changeDistance = props.changeDistanceFunction;
  const changeDuration = props.changeDurationFunction;
  const changeLocationOne = props.changeLocationOneFunction;
  const changeLocationTwo = props.changeLocationTwoFunction;
  const changePrice = props.changePriceFunction;


  function calculatePriceAndTier(distanceInMetersArg) {
    let tier = null;
    let price = 0;
    for (const [tierName, tierData] of Object.entries(tiers)) {
      if (distanceInMetersArg < tierData.distance) {
        tier = tierName;
        price = distanceInMetersArg * tierData.price_per_meter;
        break;
      }
    }
    return price
  }

  useEffect(() => {
    setDirectionsResponse(props.directionsResponse);
  }, [props.directionsResponse]);

  async function calculateRoute() {
    if (markers === defaultMarkers) {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: markers[0],
      destination: markers[1],
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    // console.log(results);
    setDirectionsResponse(results);
    changeDistance(results.routes[0].legs[0].distance.text);
    changeDuration(results.routes[0].legs[0].duration.text);
    changeLocationOne(results.routes[0].legs[0].start_address);
    changeLocationTwo(results.routes[0].legs[0].end_address);
    const price = calculatePriceAndTier(results.routes[0].legs[0].distance.value);
    changePrice(price);
  }
  function calculateRouteFunction(e) {
    e.preventDefault();
    calculateRoute();
  }
  const [markers, setMarkers] = useState(props.markers ? props.markers : []);
  // console.log(markers);
  const [indicator, setIndicator] = useState(true);
  const toggle = props.toggleFunction;

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

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", mediaQueryListener);
    };
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  function toggleFunction(e) {
    e.preventDefault();
    toggle(e);
  }
  function changeMarkers(e) {
    const currentMarkers = markers;
    if (currentMarkers.length === 0) {
      console.log("added first marker");
      setCurrentEditable(2);
      setMarkers([
        {
          id: 1,
          name: "Pick up Location",
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      ]);
      return;
    }
    if (currentMarkers.length === 1) {
      console.log("added second marker");
      setCurrentEditable(1);
      setMarkers([
        currentMarkers[0],
        {
          id: 2,
          name: "Drop Off Location",
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      ]);
      return;
    }
    if (currentEditable === 1) {
      console.log("changed the first marker");
      setCurrentEditable(2);
      setMarkers([
        currentMarkers[0],
        {
          id: 2,
          name: "Drop Off Location",
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      ]);
    } else {
      console.log("changed the second marker");
      setCurrentEditable(1);
      setMarkers([
        {
          id: 1,
          name: "Pick up Location",
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
        currentMarkers[1],
      ]);
    }
  }
  return (
    <div className="overflow-hidden rounded-xl flex flex-col w-[80vw] h-[70vh] md:h-[60vh] md:w-[60vw] drop-shadow-lg p-1">
      <div className="flex">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={(e) => toggleFunction(e)}
            className="group hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer font-bold text-2xl z-30 drop-shadow-lg bg-yellow-700 flex items-center justify-center h-16 w-16 rounded-full"
          >
            <XLg
              size={32}
              className="rotate-0 duration-300 ease-in-out group-hover:rotate-90"
            />
          </button>
          <button onClick={(e) => calculateRouteFunction(e)}>
            <SendFill className="hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer font-bold text-2xl z-30 drop-shadow-lg bg-yellow-700 flex items-center justify-center h-16 w-16 p-4 overflow-visible hover:p-3 rounded-full" />
          </button>
          <button
            onClick={() => {
              setMarkers([]);
              setDirectionsResponse(null);
            }}
          >
            <TrashFill className="hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer font-bold text-2xl z-30 drop-shadow-lg bg-yellow-700 flex items-center justify-center h-16 w-16 p-4 overflow-visible hover:p-3 rounded-full" />
          </button>
          {
            <button
              onClick={(e) => {
                e.preventDefault();
                setIndicator(!indicator);
              }}
              className={`hover:bg-gray-400 hover:text-gray-700 text-gray-600 duration-300 ease-in-out cursor-pointer text-lg z-30 drop-shadow-lg bg-gray-300 min-w-[4rem] max-w-md ${
                indicator
                  ? "rounded-xl h-full my-auto"
                  : "h-16 rounded-full text-center"
              }`}
            >
              {!indicator
                ? "?"
                : "First Click is the pick up location, Second Click is the drop off location, click a marker to delete it"}
            </button>
          }
        </div>
      </div>
      <GoogleMap
        options={{
          streetViewControl: false,
        }}
        mapContainerStyle={
          isSmallScreen
            ? {
                // zIndex: 1000,
                border: "2px solid gray",
                boxShadow: "0 7px 25px rgba(0,0,0,0.5)",
                borderRadius: "15px",
                // position: "absolute",
                // marginTop: "2.2rem",
                width: "100%",
                height: "80%",
              }
            : {
                // zIndex: 1000,
                border: "2px solid gray",
                boxShadow: "0 7px 25px rgba(0,0,0,0.5)",
                borderRadius: "15px",
                // position: "absolute",
                // top: "2rem",
                // width: "80vw",
                // height: "70vh",
                // width: "60vw",
                // height: "60vh",
                width: "100%",
                height: "80%",
              }
        }
        center={center}
        zoom={8}
        onLoad={(map) => setMap(map)}
        onClick={(e) => {
          changeMarkers(e);
        }}
      >
        {directionsResponse
          ? null
          : markers == []
          ? null
          : markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => setActiveMarker(marker.id)}
              >
                {activeMarker === marker.id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div>{marker.name}</div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
}

export default MapContainer;
