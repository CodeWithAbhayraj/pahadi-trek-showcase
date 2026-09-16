export const treks = [
  {
    id: 1,
    name: "Rajgad",
    location: "Pune, Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Moderate",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Walk through Maratha history across sweeping Sahyadri ridges and the storied capital fort.",
    image: "/treks/Rajgad.jpg",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_RAJGAD_GOOGLE_FORM_URL/viewform",
  },

  {
    id: 2,
    name: "Ratangad",
    location: "Ahmednagar, Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Moderate",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Climb to the Jewel of the Sahyadris through forest trails and dramatic rock formations.",
    image: "/treks/ratangad.jpg",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_RATANGAD_GOOGLE_FORM_URL/viewform",
  },

  {
    id: 3,
    name: "Kalsubai",
    location: "Ahmednagar, Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Challenging",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Chase sunrise from Maharashtra's highest peak and take in endless mountain horizons.",
    image: "/treks/Kalsubai.avif",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_KALSUBAI_GOOGLE_FORM_URL/viewform",
  },

  {
    id: 4,
    name: "Aadrai",
    location: "Malshej Ghat, Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Moderate",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Enter a dense ancient forest shaped by waterfalls, hidden paths and monsoon magic.",
    image: "/treks/Aadrai.avif",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_AADRAI_GOOGLE_FORM_URL/viewform",
  },

  {
    id: 5,
    name: "Raigad",
    location: "Raigad, Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Easy–Moderate",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Discover the majestic capital of Chhatrapati Shivaji Maharaj high above the Konkan.",
    image: "/treks/raigad.jpg",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_RAIGAD_GOOGLE_FORM_URL/viewform",
  },

  {
    id: 6,
    name: "Harishchandragad",
    location: "Ahmednagar, Maharashtra",
    date: "Coming Soon",
    duration: "2 Days",
    difficulty: "Challenging",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Experience rugged trails, ancient caves and the legendary sweep of Konkan Kada.",
    image: "/treks/harichandragad.jpeg",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_HARISHCHANDRAGAD_GOOGLE_FORM_URL/viewform",
  },

  {
    id: 7,
    name: "Blue Lagoon",
    location: "Maharashtra",
    date: "Coming Soon",
    duration: "1 Day",
    difficulty: "Easy",
    price: "Contact Us",
    seats: "Limited",
    description:
      "Follow a refreshing forest trail to clear blue water tucked among lush green cliffs.",
    image: "/treks/Blue lagoon.jpeg",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/YOUR_BLUE_LAGOON_GOOGLE_FORM_URL/viewform",
  },
];

export type Trek = (typeof treks)[number];