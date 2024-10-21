import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}
export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="w-full h-90">
      <div className="text-lighter text-5xl pt-4 flex justify-start pl-4 pb-12">
        <h1 className="underline underline-offset-8 decoration-2">  {this.props.children}</h1>
      </div>

      </div>
    );
  }
}
