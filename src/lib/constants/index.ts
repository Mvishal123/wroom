import { menWashroom, washroom } from "@/assets";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#get-started",
  },
  {
    label: "Get started",
    href: "#get-started",
  },
];

export const ONBOARDING_STEPS = [
  { step: 1, text: "Quickly sign up on our website" },
  { step: 2, text: "Subscribe to our magical WhatsApp bot in seconds" },
  { step: 3, text: "Enjoy worry-free restroom access in public" },
];

export const WASHROOM_MOCK_DATA = [
  {
    id: "1",
    name: "DTU boys washroom",
    address:
      "Lecture Hall Complex, Delhi Technological University, Shahbad Daulatpur Village, Rohini, Delhi, 110042",
    latitude: 28.749682918482293,
    longitude: 77.11644670563328,
    place: "Delhi Technological University",
    images: [washroom, menWashroom],
  },
  {
    id: "2",
    name: "DTU girls washroom",
    address:
      "Lecture Hall Complex, Delhi Technological University, Shahbad Daulatpur Village, Rohini, Delhi, 110042",
    latitude: 28.749254365987237,
    longitude: 77.11722336290129,
    place: "Delhi Technological University",
    images: [washroom],
  },
  {
    id: "3",
    name: "DTU boys washroom",
    address:
      "Lecture Hall Complex, Delhi Technological University, Shahbad Daulatpur Village, Rohini, Delhi, 110042",
    latitude: 28.749245201132258,
    longitude: 77.11602790089525,
    place: "Delhi Technological University",
    images: [washroom, menWashroom],
  },
];

export const USER_LOCATION = {
  latitude: 28.750033202729618,
  longitude: 77.11744515522831,
  address:
    "P4X9+W3R, Delhi Technological University, Shahbad Daulatpur Village, Rohini, New Delhi, Delhi, 110042",
};
