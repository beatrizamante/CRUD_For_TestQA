import React, { useReducer, useState, ChangeEvent } from "react";
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
    <div className="forms ">
      <div>
        <div>
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
        <div className="buttons">
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </div>
    </div>
  );
}
