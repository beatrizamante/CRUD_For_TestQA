import React from "react";
import { ReactComponent as Vinyl } from "../assets/icons/vinyl-record-svgrepo-com.svg";
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "normal" | "inverted";
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { onClick, children, variant = "normal" } = this.props;

    const baseColor = variant === "inverted" ? "fill-darker text-light" : "fill-light text-lighter";
    const invertedColor = variant ===  "inverted" ? "hover:fill-light hover:text-lighter" : "hover:fill-darker hover:text-light";
    return (
      <div className="relative pl-4 pr-4 pb-8">
        <button onClick={onClick}>
          <div className={`text-3xl flex items-center ${baseColor} ${invertedColor} duration-200`}>
            <div className="w-36 h-36">
              <Vinyl />
            </div>
            <span className="flex w-full absolute pr-6 pl-6">
              {children}
            </span>
          </div>
        </button>
      </div>
    );
  }
}
