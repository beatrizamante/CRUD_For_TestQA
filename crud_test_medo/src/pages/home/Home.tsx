import React from "react";
import Card from "../../components/Card";
import createImage from "../../assets/images/vinyl.jpg";
import readImage from "../../assets/images/vinyl_case.jpg";
import updateImage from "../../assets/images/casset_case.jpg";
import deleteImage from "../../assets/images/broken.jpg";
import background from "../../assets/images/background.jpg";

export default function home() {
  const cards = [
    {
      imageSrc: createImage,
      title: "Create Vinyl",
      description: "Click here to create your Vinyl",
    },
    {
      imageSrc: readImage,
      title: "Read Vinyl Case",
      description: "Click here to read your case",
    },
    {
      imageSrc: updateImage,
      title: "Update Description",
      description: "Click here to edit your vinyls",
    },
    {
      imageSrc: deleteImage,
      title: "Delete a Vinyl",
      description: "Click here to delete a vinyl",
    },
  ];

  return (
    <div className="bg-darker flex flex-col min-h-full">
      <div
        className="absolute w-full min-h-full bg-cover opacity-65"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      <div className="space-y-8 pb-8 pt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <Card
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
