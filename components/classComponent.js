import React, { Component } from 'react';

class ClassComponent extends Component {
  // Class components can have state and lifecycle methods
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    // Updating state using setState
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // Class components render method
    const { count } = this.state;

    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
