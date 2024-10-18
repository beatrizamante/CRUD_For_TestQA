import React from "react";

// Define props for the Button component, including children and onClick
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
