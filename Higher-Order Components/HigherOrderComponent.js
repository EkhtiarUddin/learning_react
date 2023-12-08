import React, { Component } from 'react';

// Higher-Order Component (HOC) function
const withLogger = (WrappedComponent) => {
  class WithLogger extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted.`);
    }

    render() {
      // Pass all props to the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  }

  // Rename the display name for better debugging
  WithLogger.displayName = `WithLogger(${getDisplayName(WrappedComponent)})`;

  return WithLogger;
};

// Helper function to get the display name of a component
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withLogger;
