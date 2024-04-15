"use client";

import { getCurrentLocation } from "@/utils/server-actions/get-user-location";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface Coodinates {
  latitude: string;
  longitude: string;
}

const LocationCard = () => {
  const [coodinates, setCoordinates] = useState<Coodinates | null>(null);
  const [address, setAddress] = useState<string | null>("");

  useEffect(() => {
    const init = async () => {
      const latLng = (await getCurrentLocation()) as Coodinates;
      setCoordinates({
        latitude: latLng.latitude,
        longitude: latLng.longitude,
      });

      const address = await axios.get(
        `https://geocode.maps.co/reverse?lat=${latLng.latitude}&lon=${latLng.longitude}&api_key=6617ef8b79a92866296445sfy921060`
      );

      setAddress(address.data.display_name);
    };
    init();
  }, []);

  return (
    <section className="mt-2 bg-brand/secondary py-3 px-4 rounded-xl relative">
      <h2 className="text-brand/pink font-semibold">My location:</h2>
      <div className="text-xs">
        <p>
          Latitude:{coodinates?.latitude}, Longitude: {coodinates?.longitude}
        </p>
        <p>Address: {address}</p>
      </div>
      {(!coodinates || !address) && (
        <div className="absolute top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-slate-600/30 backdrop-blur-md rounded-xl animate">
          <FaSpinner className="animate-spin" />
        </div>
      )}
    </section>
  );
};

export default LocationCard;
