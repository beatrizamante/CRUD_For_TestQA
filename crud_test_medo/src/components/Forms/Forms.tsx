import React, { useReducer, ChangeEvent } from "react";
import Input from "./Item/Input";
import { Vinyl } from "../../interfaces/VinylsType";

type VinylAction = {
  [key: string]: string;
};

interface VinylFormProps {
  onSubmit: (vinyl: Vinyl) => void;
  initialVinyl: Vinyl;
}

export default function VinylForm({ onSubmit, initialVinyl }: VinylFormProps) {
  const [vinyl, setVinyl] = useReducer(
    (state: Vinyl, newState: VinylAction) => ({ ...state, ...newState }),
    initialVinyl
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVinyl({ [name]: value });
  };

  const inputConfig = [
    { label: "Band", name: "band", value: vinyl.band },
    { label: "Album", name: "album", value: vinyl.album },
    { label: "Year", name: "year", value: vinyl.year },
  ];

  return (
    <div className="flex flex-col justify-center">
      {inputConfig.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          name={input.name}
          value={input.value}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
}
