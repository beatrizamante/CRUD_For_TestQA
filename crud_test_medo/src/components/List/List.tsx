import React from "react";
import Item from "./Item";

export default function List() {
  const vinyls = [
    {
      band: "Rolling Stones",
      album: "Best Of",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Rolling Stones",
      album: "Best Of",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Rolling Stones",
      album: "Best Of",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Rolling Stones",
      album: "Best Of",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Rolling Stones",
      album: "Best Of",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Rolling Stones",
      album: "Best Of",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    {
      band: "Ray Charles",
      album: "Volume Two",
    },
    
  ];

  return (
    <div className="relative max-h-[500px] overflow-y-auto overflow-x-hidden bg-medium bg-opacity-65 mx-8 py-4 -z-0">
      <ul>
        {vinyls.map((vinyl, index) => (
          <Item 
          key={index}
          {...vinyl} />
        ))}
      </ul>
    </div>
  );
}
