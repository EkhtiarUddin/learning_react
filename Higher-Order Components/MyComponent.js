import React from 'react';
import withLogger from './HigherOrderComponent';

const MyComponent = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

// Using the HOC to enhance MyComponent
const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;
