import React, { useState } from "react";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/vinyl.jpg";
import apiClient from "../../api";
import { Vinyl } from "../../interfaces/VinylsType";

export default function Create() {
  const [vinyl, setVinylList] = useState<Vinyl>();
  
  const handleCreate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try{
      if(vinyl) {
        await apiClient.postVinyl(vinyl);
        console.log("Vinyl successfully created.");
      } else {
        console.error("Couldn't create vinyl");
      }
    } catch(err) {
      console.error("An error occured: ", err)
    };
  }

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
            onSubmit={() => {}}
            initialVinyl={{ band: "", title: "", year: "" }}
          />
        </div>
        <div className="absolute bottom-0 right-4">
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </div>
    </div>
  );
}
