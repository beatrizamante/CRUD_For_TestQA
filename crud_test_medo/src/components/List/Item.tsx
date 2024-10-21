import React from "react";

export default function Item({ band, album }: {band: string, album: string}) {
    
  return (
    <li
    className="relative mb-4 pb-2 text-lighter text-xl after:content-[''] after:block after:w-full after:h-[1px] after:bg-lighter after:absolute after:left-0 after:bottom-0 flex flex-row justify-center hover:text-slate-400 duration-150"
    >
      <h6 className="mx-4 mb-2 text-ellipsis">{band} - {album}</h6>
    </li>
  );
}
