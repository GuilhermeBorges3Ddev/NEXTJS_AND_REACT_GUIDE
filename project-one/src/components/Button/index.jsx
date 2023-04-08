import React, { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { text, isDisabled, loadMorePostsAction } = this.props;
    return (
      <button
        className="button"
        disabled={isDisabled}
        onClick={loadMorePostsAction}
      >
        {text}
      </button>
    );
  }
}
