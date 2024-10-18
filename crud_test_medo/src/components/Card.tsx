import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default class card extends React.Component<CardProps> {
  render() {
    const { imageSrc, title, description } = this.props;

    return (
      <div className="card w-[300px] h-[150px] bg-medium">
        <div
          className="mix-blend-soft-light bg-cover h-full"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        >
          <div className="card-title text-center text-lighter">
            <h1 className="text-[28px]">{title}</h1>
            <span className="text-[18px]">{description}</span>
          </div>
        </div>
      </div>
    );
  }
}
