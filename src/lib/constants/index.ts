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
  { step: 1, text: "Scan our QR code" },
  { step: 2, text: "Send ACTIVATE in chat" },
  { step: 3, text: "Enter your registered email and password" },
  { step: 4, text: "Enjoy worry-free restroom access in public" },
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
    images: [washroom, menWashroom, menWashroom],
  },
  {
    id: "2",
    name: "DTU girls washroom",
    address:
      "Lecture Hall Complex, Delhi Technological University, Shahbad Daulatpur Village, Rohini, Delhi, 110042",
    latitude: 28.749254365987237,
    longitude: 77.11722336290129,
    place: "Delhi Technological University",
    images: [washroom, menWashroom, washroom],
  },
  {
    id: "3",
    name: "DTU boys washroom",
    address:
      "Lecture Hall Complex, Delhi Technological University, Shahbad Daulatpur Village, Rohini, Delhi, 110042",
    latitude: 28.749245201132258,
    longitude: 77.11602790089525,
    place: "Delhi Technological University",
    images: [washroom, menWashroom, menWashroom],
  },
];

export const USER_LOCATION = {
  latitude: 28.750033202729618,
  longitude: 77.11744515522831,
  address:
    "P4X9+W3R, Delhi Technological University, Shahbad Daulatpur Village, Rohini, New Delhi, Delhi, 110042",
};

export const WHATSAPP_USER_PAGE_DETAILS = [
  {
    header: "Heading 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    header: "Heading 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    header: "Heading 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];

export const WHATSAPP_USER_PAGE_QRCODE = [
  {
    step: 1,
    text: "Scan the QR code",
  },
  {
    step: 2,
    text: "Send ACTIVATE",
  },
  {
    step: 3,
    text: "Enter your registered email and password",
  },
  {
    step: 4,
    text: "Verify through email",
  },
  {
    step: "Enjoy in public worry free!",
  },
];

export const PRIORITY_TEXTS = [
  {
    header: "Your hygiene",
    text: "We will find the cleanest washroom in the vicinity of your current location ",
  },
  {
    header: "Your hygiene",
    text: "We will find the cleanest washroom in the vicinity of your current location ",
  },
  {
    header: "Your hygiene",
    text: "We will find the cleanest washroom in the vicinity of your current location ",
  },
];
