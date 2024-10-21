import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default class Card extends React.Component<CardProps> {
  render() {
    const { imageSrc, title, description } = this.props;

    return (
      <div className="card w-[300px] h-[150px] bg-medium relative shadow-xl hover:bg-slate-600 hover:translate-y-2 duration-300">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url(${imageSrc})`,
            mixBlendMode: "soft-light",
          }}
        ></div>
        <div className="relative z-10 card-title text-center text-lighter p-4 gap-4 text-clip overflow-hidden">
          <h1 className="text-[22px]">{title}</h1>
          <span className="text-[16px]">{description}</span>
        </div>
      </div>
    );
  }
}
