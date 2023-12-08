import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './classComponent';

const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <FunctionalComponent name="John" />
      <ClassComponent />
    </div>
  );
};

export default App;
