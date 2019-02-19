import React, { Component } from "react";
import Avatar from "react-avatar";
import { Flex, Box, Fill, color, Text, Btn, Pre, Border } from "reflexbox";

import "bootstrap/dist/css/bootstrap.css";
class ButtonHand extends Component {
  changeColor = like => {
    this.setState({ like: !like });
  };
  state = {};
  render() {
    return (
      <React.Fragment key={this.props.post.id}>
        <Flex>
          {/* LIKE BUTTON */}
          <div>
            <button onClick={this.props.onLike(this.props.post.id)}>
              Button
            </button>
          </div>
          <button>
            <img
              src="comment.png"
              width="100%"
              height="100%"
              data-toggle="collapse"
              data-target={"#" + this.props.id}
            />
            <div id={this.props.post.id} class="collapse out">
              {this.props.post.comments.map(comment => (
                <Flex p={2} align="center">
                  <Box px={2}>
                    <Avatar
                      facebookId="100001134087793"
                      size="40"
                      round={true}
                    />
                  </Box>
                  <Box px={2}>
                    <p style={{ color: "RoyalBlue", fontSize: 14 }}>
                      {capitalize(comment.user)}
                    </p>
                    <div style={{ float: "left" }}>
                      <p>{comment.comment}</p>
                    </div>
                  </Box>
                  <div>
                    <button onClick={this.props.onShare}>
                      <img src="share.png" width="100%" height="100%" />
                    </button>
                  </div>
                </Flex>
              ))}
            </div>
          </button>
        </Flex>
      </React.Fragment>
    );
  }
}

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export default ButtonHand;
