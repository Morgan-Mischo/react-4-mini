import React, { Component } from "react";
import posts from "./../../post_data.json";
import "./Post.css";
import { Link } from 'react-router-dom'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filter over an array of dummy data
    let post = posts.find(post => post.id === parseInt(this.props.match.params.id));
    this.setState({
      title: post.title,
      content: post.content
    });
  }
}
export default Post;
