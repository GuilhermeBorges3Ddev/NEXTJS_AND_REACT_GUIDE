import React, { Component } from "react";
import { Button } from "../../components/Button";
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
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({
      posts,
      page: nextPage,
    });
  };
  render() {
    const { allPosts, page, posts, postsPerPage } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            text="Load more posts"
            loadMorePostsAction={this.loadMorePosts}
            isDisabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}
