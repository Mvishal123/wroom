import { StaticImageData } from "next/image";

export type WashroomDataType = {
    id: string,
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    place: string;
    images: StaticImageData[]
  };