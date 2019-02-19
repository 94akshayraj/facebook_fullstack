import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import "./style.css";

class Thumb extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <img src="emoji.png" />
        <h>{this.props.like}</h>
        <div className="p">
          <h>{this.props.comment} Comments </h>
          <h>{this.props.share} Shares</h>
        </div>
      </React.Fragment>
    );
  }
}

export default Thumb;
