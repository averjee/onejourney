import type { NextApiRequest, NextApiResponse } from "next";

export const rooms = {
  rooms: [
    {
      id: 1,
      name: "Standard Room",
      description:
        "A cozy room with a queen-sized bed, perfect for solo travelers or couples.",
      price: 100,
      image: "https://source.unsplash.com/random/800x600?hotel-room",
    },
    {
      id: 2,
      name: "Deluxe Room",
      description:
        "A spacious room with a king-sized bed and a balcony with a beautiful view.",
      price: 150,
      image: "https://source.unsplash.com/random/800x600?luxury-hotel-room",
    },
    {
      id: 3,
      name: "Suite",
      description:
        "A luxurious suite with a separate living area and a jacuzzi.",
      price: 250,
      image: "https://source.unsplash.com/random/800x600?hotel-suite",
    },
    {
      id: 4,
      name: "Family Room",
      description:
        "A comfortable room with two queen-sized beds, suitable for families.",
      price: 180,
      image: "https://source.unsplash.com/random/800x600?hotel-family-room",
    },
    {
      id: 5,
      name: "Executive Suite",
      description:
        "A spacious suite with a king-sized bed and a work desk, ideal for business travelers.",
      price: 300,
      image: "https://source.unsplash.com/random/800x600?hotel-executive-suite",
    },
    {
      id: 6,
      name: "Honeymoon Suite",
      description:
        "A romantic suite with a four-poster king-sized bed and a private balcony.",
      price: 350,
      image: "https://source.unsplash.com/random/800x600?honeymoon-suite",
    },
    {
      id: 7,
      name: "Pool View Room",
      description:
        "A comfortable room with a king-sized bed and a view of the hotel's pool.",
      price: 120,
      image: "https://source.unsplash.com/random/800x600?hotel-pool-view",
    },
    {
      id: 8,
      name: "Penthouse Suite",
      description:
        "A luxurious suite with a private terrace and panoramic views of the city.",
      price: 500,
      image: "https://source.unsplash.com/random/800x600?hotel-penthouse",
    },
    {
      id: 9,
      name: "Accessible Room",
      description:
        "A room designed for guests with disabilities, with features like wider doorways and grab bars.",
      price: 110,
      image: "https://source.unsplash.com/random/800x600?hotel-accessible-room",
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof rooms>
) {
  res.status(200).json(rooms);
}
