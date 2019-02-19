import React, { Component } from "react";
import Avatar from "react-avatar";
import { Flex, Box } from "reflexbox";
class Post extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Flex p={2}>
          <Box p={2}>
            <Avatar name="wb" size="60" round={true} />
          </Box>
          <Box px={2}>
            <p style={{ color: "Blue", fontSize: 18 }}>
              {capitalize(this.props.auth)}
            </p>
            <p>
              4 Hrs
              <span style={{ float: "right" }}>
                <img src="globe.jpg" width="25" height="25" />
              </span>
            </p>
          </Box>
        </Flex>
        <Flex>
          <p>{this.props.cont}</p>
        </Flex>
      </React.Fragment>
    );
  }
}
const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Post;
