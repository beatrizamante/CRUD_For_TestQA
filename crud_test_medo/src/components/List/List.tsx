import React from "react";
import Item from "./Item";

export default function List() {
  const vinyls = [
    {
      band: "band",
      album: "album",
    },
  ];

  return (
    <aside>
      <ul>
        {vinyls.map((vinyl, index) => (
          <Item 
          key={index}
          {...vinyl} />
        ))}
      </ul>
    </aside>
  );
}
