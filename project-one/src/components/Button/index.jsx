import React, { Component } from 'react';
import P from 'prop-types';
import './styles.css';

export class Button extends Component {
  render() {
    const { text, isDisabled = false, loadMorePostsAction } = this.props;
    return (
      <button className="button" disabled={isDisabled} onClick={loadMorePostsAction}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  loadMorePostsAction: P.func.isRequired,
  isDisabled: P.bool,
};
