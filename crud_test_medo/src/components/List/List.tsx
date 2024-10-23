import React from "react";
import Item from "./Item";
import { title } from "process";

export default function List() {
  const vinyls = [
    {
      band: "Rolling Stones",
      title: "Best Of",
      year: 1295
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
