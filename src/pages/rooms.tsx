import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import "sanitize.css";

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const getStaticProps: GetStaticProps = async () => {

  const data: { rooms: Room[] } = await fetch(
    "http://localhost:3000/api/rooms"
  ).then((res) => res.json());

  return {
    props: {
      rooms: data.rooms,
    },
  };
};

interface RoomsProps {
  rooms: Room[];
}


const RoomsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RoomCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin-top: 0.25rem;
  }
`;

const RoomImage = styled(Image)`
  border-radius: 10px;
`;

const RoomName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0.5rem 0;
  font-family: Verdana;
`;

const RoomDescription = styled.p`
  margin: 0.5rem 0;
  font-family: Verdana;
`;

const Price = styled.p`
  font-weight: bold;
  font-family: Verdana;
`;

export const Rooms: React.FC<RoomsProps> = ({ rooms }) => {

  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(1000);

  const filteredRooms = rooms.filter((room) => {
    return room.price >= minPrice && room.price <= maxPrice;
  });

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(event.target.value);
    
    if (newMinPrice < 0) {
      setMinPrice(0);
    } else {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(event.target.value);
    setMaxPrice(newMaxPrice);
  };

  return (
    <>
      <div style={{ textAlign: "center", fontFamily: "Verdana", marginTop: "20px" }}>
        <label htmlFor="minPrice">Min price (£):  </label>
        <input type="number" id="minPrice" value={minPrice.toString()} onChange={handleMinPriceChange} style={{ width: "60px" }} />
      </div>
      <div style={{ textAlign: "center", fontFamily: "Verdana", marginBottom: "20px"}}>
        <label htmlFor="maxPrice">Max price (£): </label>
        <input type="number" id="maxPrice" value={maxPrice.toString()} onChange={handleMaxPriceChange} style={{ width: "60px" }} />
      </div>

      <RoomsWrapper>
        {filteredRooms.map((room) => (
          <RoomCard key={room.id}>
            <RoomImage src={room.image} alt={room.name} width={400} height={300} />
            <RoomName>{room.name}</RoomName>
            <RoomDescription>{room.description}</RoomDescription>
            <Price>Price: £{room.price}</Price>
          </RoomCard>
        ))}
      </RoomsWrapper>
    </>
  );
};

export default Rooms;
