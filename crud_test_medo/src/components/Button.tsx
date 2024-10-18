import React from "react";

export default class Button extends React.Component<React.PropsWithChildren<{}>> {
  render() {
    return <button className="button">{this.props.children}</button>;
  }
}
