import { USER_LOCATION, WASHROOM_MOCK_DATA } from "@/lib/constants";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { PiNumberCircleOne } from "react-icons/pi";

const containerStyle = {
  width: "600px",
  height: "600px",
};
const center = {
  lat: USER_LOCATION.latitude,
  lng: USER_LOCATION.longitude,
};

const options = {
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });

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
      zoom={16.5}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {WASHROOM_MOCK_DATA.map((data) => (
        <MarkerF position={{ lat: data.latitude, lng: data.longitude }} />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
