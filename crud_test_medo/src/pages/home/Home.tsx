import React from "react";
import Card from "../../components/Card";
import createImage from "../../assets/images/vinyl.jpg";
import readImage from "../../assets/images/vinyl_case.jpg";
import updateImage from "../../assets/images/casset_case.jpg";
import deleteImage from "../../assets/images/broken.jpg";
import background from "../../assets/images/background.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const cards = [
    {
      imageSrc: createImage,
      title: "Create Vinyl",
      description: "Click here to create your Vinyl",
      route: "create"
    },
    {
      imageSrc: readImage,
      title: "Read Vinyl Case",
      description: "Click here to read your case",
      route: "case"
    },
    {
      imageSrc: updateImage,
      title: "Update Description",
      description: "Click here to edit your vinyls",
      route: "update"
    },
    {
      imageSrc: deleteImage,
      title: "Delete a Vinyl",
      description: "Click here to delete a vinyl",
      route: "delete"
    },
  ];

  return (
      <div className="min-h-screen bg-darker flex flex-1 flex-col">
        <div
          className="absolute w-full min-h-screen bg-cover opacity-55"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>

        <div className="space-y-8 pb-8 pt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <Card
                onClick={() => navigate(card.route)}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
  );
}
