import { default as tourImg01, default as tourImg07 } from "../images/hotel1.jpg";
import tourImg02 from "../images/hotel2.webp";
import tourImg03 from "../images/hotel3.webp";
import tourImg04 from "../images/hotel4.webp";
import tourImg05 from "../images/hotel5.jpg";
import tourImg06 from "../images/hotel6.webp";
import maps from "../images/img-booking/maps.png";

import galawa from "../images/img/galawa.avif";
import itandra from "../images/img/itsandra.jpeg";
import moroni from "../images/img/moroni.jpeg";
import plage1 from "../images/img/plage1.jpeg";
import plage2 from "../images/img/plage2.jpg";
import zilmadjou from "../images/img/zilmadjou.jpeg";

const tours = [
  {
    id: "01",
    title: "Zilmadjou",
    city: "Moroni",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "coté mangane",
    reviews: [
      {
        name: "mlkhg",
        rating: 4.6,
      },
      {
        name: "Malibou",
        rating: 5,
      },
      {
        name: "Malibou",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
    address: "Zilmadjou, Moroni, Comoros",
    promotion: "10% off for early bookings",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "02",
    title: "Mitsamiouli Beach",
    city: "Mitsamiouli",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Beautiful beach in Mitsamiouli",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
    address: "Mitsamiouli, Comoros",
    promotion: "15% off for groups of 5 or more",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "inspiration",
  },
  {
    id: "03",
    title: "Mount Karthala",
    city: "Moroni",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Hike the famous Mount Karthala",
    reviews: [
      {
        name: "dmpm",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
    address: "Mount Karthala, Moroni, Comoros",
    promotion: "5% off for returning customers",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "04",
    title: "Chomoni Beach",
    city: "Chomoni",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Relax at Chomoni Beach",
    reviews: [
      {
        name: "za",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
    address: "Chomoni, Comoros",
    promotion: "10% off for early bookings",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "",
  },
  {
    id: "05",
    title: "Itsandra Beach",
    city: "Itsandra",
    distance: 500,
    price: 45,
    maxGroupSize: 8,
    desc: "Enjoy the serene Itsandra Beach",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
    address: "Itsandra, Comoros",
    promotion: "20% off for students",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "06",
    title: "Lac Salé",
    city: "Dzialandzé",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Visit the famous Lac Salé",
    reviews: [
      {
        name: "jhon",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
    address: "Lac Salé, Dzialandzé, Comoros",
    promotion: "10% off for early bookings",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "",
  },
  {
    id: "07",
    title: "Moheli Marine Park",
    city: "Moheli",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Explore Moheli Marine Park",
    reviews: [
      {
        name: "doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
    address: "Moheli, Comoros",
    promotion: "15% off for groups of 5 or more",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "08",
    title: "Anjouan Island",
    city: "Anjouan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the beauty of Anjouan Island",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
    address: "Anjouan, Comoros",
    promotion: "5% off for returning customers",
    location: {
      lat: -12.2333,
      lng: 44.4455,
    },
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "inspiration",
  },
  {
    id: "09",
    title: "Iconi Beach",
    city: "Iconi",
    distance: 200,
    price: 120,
    maxGroupSize: 15,
    desc: "Visit the beautiful Iconi Beach",
    reviews: [
      {
        name: "Alice",
        rating: 4.8,
      },
      {
        name: "Bob",
        rating: 4.9,
      },
    ],
    avgRating: 4.85,
    photo: tourImg01,
    featured: true,
    address: "Iconi, Comoros",
    promotion: "10% off for early bookings",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "10",
    title: "Mutsamudu Fort",
    city: "Mutsamudu",
    distance: 700,
    price: 150,
    maxGroupSize: 20,
    desc: "Explore the historic Mutsamudu Fort",
    reviews: [
      {
        name: "Charlie",
        rating: 4.7,
      },
      {
        name: "Dave",
        rating: 4.8,
      },
    ],
    avgRating: 4.75,
    photo: itandra,
    featured: true,
    address: "Mutsamudu, Comoros",
    promotion: "15% off for groups of 5 or more",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "",
  },
  {
    id: "11",
    title: "Vanilla Lodge",
    city: "Moroni",
    distance: 350,
    price: 110,
    maxGroupSize: 12,
    desc: "Stay at the cozy Vanilla Lodge",
    reviews: [
      {
        name: "Eve",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: zilmadjou,
    featured: false,
    address: "Vanilla Lodge, Moroni, Comoros",
    promotion: "10% off for early bookings",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "12",
    title: "Sunset Hotel",
    city: "Fomboni",
    distance: 450,
    price: 130,
    maxGroupSize: 10,
    desc: "Enjoy the sunset at Sunset Hotel",
    reviews: [
      {
        name: "Frank",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: plage2,
    featured: true,
    address: "Sunset Hotel, Fomboni, Comoros",
    promotion: "20% off for honeymooners",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "inspiration",
  },
  {
    id: "13",
    title: "Coral Reef Resort",
    city: "Moroni",
    distance: 300,
    price: 140,
    maxGroupSize: 15,
    desc: "Dive into luxury at Coral Reef Resort",
    reviews: [
      {
        name: "Grace",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: moroni,
    featured: true,
    address: "Coral Reef Resort, Moroni, Comoros",
    promotion: "15% off for groups of 5 or more",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
  {
    id: "14",
    title: "Emerald Bay Hotel",
    city: "Mitsamiouli",
    distance: 400,
    price: 125,
    maxGroupSize: 10,
    desc: "Relax at Emerald Bay Hotel",
    reviews: [
      {
        name: "Hank",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: plage1,
    featured: false,
    address: "Emerald Bay Hotel, Mitsamiouli, Comoros",
    promotion: "10% off for early bookings",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "inspiration",
  },
  {
    id: "15",
    title: "Lagoon View Resort",
    city: "Anjouan",
    distance: 500,
    price: 150,
    maxGroupSize: 20,
    desc: "Experience luxury at Lagoon View Resort",
    reviews: [
      {
        name: "Ivy",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: galawa,
    featured: true,
    address: "Lagoon View Resort, Anjouan, Comoros",
    promotion: "20% off for returning customers",
    maps: maps,
    caracteristique: ["aircondition", "wifi", "parking", "business-services"],
    category: "best",
  },
];
export default tours;

// on peut utiliser le ficjier  json pour inserer direcment le donnée dans mongo
