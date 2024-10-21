import React from "react";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header";
import Button from "../../components/Button";
import background from "../../assets/images/casset_case.jpg";

export default function Update() {

  

  return (
    <div className="forms bg-darker min-h-screen">
      <div
        className="absolute w-full min-h-screen flex-1 bg-cover opacity-70 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <Header>Edit Vinyl</Header>
      <div>
        <div>
          <Forms
            onSubmit={() => {}}
            initialVinyl={{ band: "", album: "", year: "" }}
          />
        </div>
        <div className="absolute flex bottom-0 flex-row right-4">
          <Button onClick={() => {}}>Update</Button>
        </div>
      </div>
    </div>
  );
}
