import React, { useState } from "react";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/vinyl.jpg";
import { Vinyl } from "../../interfaces/VinylsType";

export default function Create() {
  const [vinylList, setVinylList] = useState<Vinyl[]>([]);

  const handleCreateVinyl = (newVinyl: Vinyl) => {
    setVinylList((prevList) => [...prevList, newVinyl]);
  };
  

  return (
    <div className="forms bg-darker min-h-screen">
      <div
        className="absolute w-full min-h-screen flex-1 bg-cover opacity-60 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <Header> Create Vinyl</Header>
      <div>
        <div>
          <Forms
            onSubmit={handleCreateVinyl}
            initialVinyl={{ band: "", title: "", year: "" }}
          />
        </div>
        <div className="absolute bottom-0 right-4">
          <Button onClick={() => {}}>Create</Button>
        </div>
      </div>
    </div>
  );
}
