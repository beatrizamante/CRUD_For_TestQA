import React, { useReducer, useState, ChangeEvent } from "react";
import background from '../../assets/images/vinyl.jpg'

import Button from "../Button";
import Input from "./Item/Input";

type Vinyl = {
  band: string;
  album: string;
  year: string;
};

type VinylAction = {
  [key: string]: string;
};

export default function Forms() {
  const [vinylList, setVinylList] = useState<Vinyl[]>([]);
  const [addVinyl, setAddVinyl] = useReducer(
    (vinyl: Vinyl, newVinyl: VinylAction) => ({ ...vinyl, ...newVinyl }),
    {
      band: "",
      album: "",
      year: "",
    }
  );

  const handleAddVinyl = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddVinyl({ [name]: value });
  };

  const handleSubmit = () => {
    setVinylList((prevList) => [...prevList, addVinyl]);

    setAddVinyl({
      band: "",
      album: "",
      year: "",
    });
  };

  const inputConfig = [
    { label: "Band", name: "band", value: addVinyl.band },
    { label: "Album", name: "album", value: addVinyl.album },
    { label: "Year", name: "year", value: addVinyl.year },
  ];

  return (
    <div className="forms bg-darker min-h-screen">
      <div
          className="absolute w-full min-h-screen bg-cover opacity-60 mix-blend-soft-light"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
      <div>
        <div className="flex flex-col justify-center">
          {inputConfig.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              name={input.name}
              value={input.value}
              onChange={handleAddVinyl}
            />
          ))}
        </div>
        <div className="bg-white w-[300px]">
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </div>
    </div>
  );
}
