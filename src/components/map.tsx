"use client";
import { USER_LOCATION, WASHROOM_MOCK_DATA } from "@/lib/constants";
import { WashroomDataType } from "@/types";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
};
interface MapProps {
  data: WashroomDataType;
  zoom?: number;
}
function MyComponent({ data, zoom = 15 }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });
  const center = {
    lat: USER_LOCATION.latitude,
    lng: USER_LOCATION.longitude,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* {WASHROOM_MOCK_DATA.map((data) => (
        <MarkerF position={{ lat: data.latitude, lng: data.longitude }} />
      ))} */}
      <MarkerF
        position={{ lat: data.latitude, lng: data.longitude }}
        // icon={{url: "" }}
      />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
