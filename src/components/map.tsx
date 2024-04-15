"use client";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapProps {
  data: Coordinates;
  zoom?: number;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
};

function MyComponent({ data, zoom = 8 }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState<Coordinates | null>();

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(data);
    map.fitBounds(bounds);
    
  console.log({data});
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  console.log({data});
  

  return isLoaded ? (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={zoom}
        center={data}
        options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF position={data}/>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
