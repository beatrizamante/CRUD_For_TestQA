import React from "react";

export default function Item({ band, album }: {band: string, album: string}) {
    
  return (
    <li>
      <h6>{band}</h6> - <h6>{album}</h6>
    </li>
  );
}
