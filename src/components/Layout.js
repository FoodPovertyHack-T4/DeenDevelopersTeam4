import Header from "./Landingpage/Header";
import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
