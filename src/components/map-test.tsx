"use client";
import { WashroomDataType } from "@/types";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useRef, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
};

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapProps {
  data: WashroomDataType;
  zoom?: number;
}
function MyComponent({ data, zoom = 8 }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  // const [center, setCenter] = useState<Coordinates | null>();

  const center = {
    lat: 28.7432986935,
    lng: 77.1168828658,
  };

  const onMapClick = useCallback((e: any) => {
    const lng = e.latLng?.lng();
    const lat = e.latLng?.lat();

    setCoordinates({ lat: lat!, lng: lng! });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

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
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        options={options}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
        {coordinates && (
          <MarkerF position={{ lat: coordinates.lat, lng: coordinates.lng }} />
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
