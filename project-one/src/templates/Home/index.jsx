import React, { Component } from "react";
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import "./styles.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
    };
  }
  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };
  loadMorePosts = () => {
    console.log("Load more posts have been called");
  };
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}
