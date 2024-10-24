import React, { useReducer } from "react";
import Input from "./Item/Input";
import { Vinyl } from "../../interfaces/VinylsType";

type VinylAction = {
  [key: string]: string;
};

interface VinylFormProps {
  searchedVinyl: Vinyl;
  setSearchedVinyl: (searchedVinyl: Vinyl) => void;
}

export default function VinylForm({ searchedVinyl, setSearchedVinyl }: VinylFormProps) {
  const [vinyl, setVinyl] = useReducer(
    (state: Vinyl, newState: VinylAction) => ({ ...state, ...newState }),
    searchedVinyl
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
      setVinyl({ [name]: value });
      setSearchedVinyl({...vinyl, [name]: value});
    
  };

  const inputConfig = [
    { label: "Band", name: "band", value: vinyl.band },
    { label: "Title", name: "title", value: vinyl.title },
    { label: "Year", name: "year", value: String(vinyl.year) },
  ];

  return (
    <div className="flex flex-col justify-center">
      {inputConfig.map((input, index) => (
        <Input
          key={input.name}
          label={input.label}
          name={input.name}
          value={input.value}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
}
