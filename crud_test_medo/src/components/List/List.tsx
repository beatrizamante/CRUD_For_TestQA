import React from "react";
import Item from "./Item";
import { Vinyl } from "../../interfaces/VinylsType";

interface ListProps {
  listOfVinyls: Vinyl[];
  onSelectedVinyl: (id: number) => void;
  selectedVinylId?: number | null;
}

export default function List({
  listOfVinyls,
  onSelectedVinyl,
  selectedVinylId,
}: ListProps) {
  return (
    <div className="relative max-h-[500px] overflow-y-auto overflow-x-hidden bg-medium bg-opacity-65 mx-8 py-4 -z-0">
      <ul>
        {listOfVinyls.map((vinyl) => (
          <Item 
            key={vinyl.vinyl_id}
            band={vinyl.band}
            title={vinyl.title}
            year={vinyl.year}
            onClick={() => onSelectedVinyl(vinyl.vinyl_id)}
            isSelected={vinyl.vinyl_id === selectedVinylId}
          />
        ))}
      </ul>
    </div>
  );
}
