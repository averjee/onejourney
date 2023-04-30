import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Rooms from "./rooms";

const mockRooms = [
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
];

describe("Rooms", () => {
  it("renders room cards with correct information", () => {
    render(<Rooms rooms={mockRooms} />);

    expect(screen.getByText("Standard Room")).toBeInTheDocument();
    expect(screen.getByText("A cozy room with a queen-sized bed, perfect for solo travelers or couples.")).toBeInTheDocument();
    expect(screen.getByText("Price: £100")).toBeInTheDocument();
    const standardURL = `/_next/image?url=${encodeURIComponent("https://source.unsplash.com/random/800x600?hotel-room")}&w=828&q=75`;
    expect(screen.getByAltText("Standard Room")).toHaveAttribute("src", standardURL);

    expect(screen.getByText("Deluxe Room")).toBeInTheDocument();
    expect(screen.getByText("A spacious room with a king-sized bed and a balcony with a beautiful view.")).toBeInTheDocument();
    expect(screen.getByText("Price: £150")).toBeInTheDocument();
    const deluxeURL = `/_next/image?url=${encodeURIComponent("https://source.unsplash.com/random/800x600?luxury-hotel-room")}&w=828&q=75`;
    expect(screen.getByAltText("Deluxe Room")).toHaveAttribute("src", deluxeURL);
  });

  it("filters rooms based on min and max price", () => {
    render(<Rooms rooms={mockRooms} />);

    const minPriceInput = screen.getByLabelText("Min price (£):");
    const maxPriceInput = screen.getByLabelText("Max price (£):");

    fireEvent.change(minPriceInput, { target: { value: "150" } });
    fireEvent.change(maxPriceInput, { target: { value: "250" } });

    expect(screen.queryByText("Standard Room")).not.toBeInTheDocument();
    expect(screen.getByText("Deluxe Room")).toBeInTheDocument();
  });
});
