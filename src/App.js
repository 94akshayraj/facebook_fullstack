import React, { Component } from "react";
// import "./App.css";
import Author from "./components/author";
// import Content from "./components/content";
import Avatar from "react-avatar";
import { Flex, Box, Fill, color, Text, Btn, Pre, Border } from "reflexbox";
import Post from "./components/author";
import Thumb from "./components/thumb";
import Reaction from "./components/reactions";
import "bootstrap/dist/css/bootstrap.css";
import ButtonHand from "./components/handlebutt";

class App extends Component {
  state = {
    posts: [],
    like: false
  };

  componentDidMount() {
    fetch("http://demo9514897.mockable.io/posts").then(async resp => {
      const response = await resp.json();
      this.setState({ posts: response.posts });
      console.log(this.state.posts);
    });
  }

  ////////////////////////////////////////////////
  onLike = id => {
    const posts = this.state.posts;
    let like = this.state.like;
    if (!like) {
      console.log("liked");
      posts[id - 1].likes.push({ user: "Ar" });
      like = true;
    } else {
      posts[id - 1].likes.pop({ user: "Ar" });
      like = false;
    }
    this.setState(posts);
    console.log(posts);
    this.setState({ like: like });
  };
  ////////////////////////////////////////////////

  onComment = () => {};
  onShare = () => {};

  render() {
    const capitalize = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const { like } = this.state;
    return (
      <div>
        {this.state.posts.map(post => (
          <React.Fragment key={post.id}>
            <Post auth={post.author} cont={post.content} />
            <Thumb
              like={post.likes.length}
              comment={post.comments.length}
              share={post.shares.length}
            />
            <ButtonHand post={post} onLike={this.onLike} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default App;
