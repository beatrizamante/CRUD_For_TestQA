import React from "react";
import { ReactComponent as Vinyl } from "../assets/icons/vinyl-record.svg";

// Define props for the Button component, including children and onClick
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
        <Vinyl className="w-36 h-36" />
      </button>
    );
  }
}
