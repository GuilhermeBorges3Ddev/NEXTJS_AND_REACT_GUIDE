import React from 'react';
import P from 'prop-types';

export class AppClassErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasCounterErrors: false };
  }
  static getDerivedStateFromError(error) {
    return { hasCounterErrors: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(`%c${errorInfo}`, 'color: purple');
  }
  render() {
    if (this.state.hasCounterErrors) {
      return (
        <h1 className="App-header" style={{ marginTop: 0, border: 0 }}>
          <div>😱</div>
          Something went wrong, counter value must be less than 10...
        </h1>
      );
    } else {
      return this.props.children;
    }
  }
}

AppClassErrorBoundary.propTypes = {
  children: P.node,
};

AppClassErrorBoundary.defaultProps = {
  children: <></>,
};
