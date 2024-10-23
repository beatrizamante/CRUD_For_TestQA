import React from "react";
import Item from "./Item";
import { Vinyl } from "../../interfaces/VinylsType";

interface ListProps {
  listOfVinyls: Vinyl[];
  onSelectedVinyl: (id: number) => void;
}

export default function List({ listOfVinyls, onSelectedVinyl }: ListProps ) {
  
  return (
    <div className="relative max-h-[500px] overflow-y-auto overflow-x-hidden bg-medium bg-opacity-65 mx-8 py-4 -z-0">
      <ul>
        {listOfVinyls.map((vinyl, index) => (
          <Item
          onClick={() => onSelectedVinyl(vinyl.id)} 
          key={index}
          {...vinyl} />
        ))}
      </ul>
    </div>  
  );
}
