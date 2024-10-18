import React, { useReducer, useState, ChangeEvent } from "react";
import Button from "./Button";

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

  return (
    <div className="forms">
      <div>
        <div>
          <label htmlFor="band">Band</label>
          <input
            type="text"
            name="band"
            value={addVinyl.band}
            onChange={handleAddVinyl}
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album</label>
          <input
            type="text"
            name="album"
            value={addVinyl.album}
            onChange={handleAddVinyl}
            required
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            value={addVinyl.year}
            onChange={handleAddVinyl}
          />
        </div>

        <div className="buttons">
          <Button onClick={handleSubmit}>Add Vinyl</Button>
        </div>
      </div>
    </div>
  );
}
