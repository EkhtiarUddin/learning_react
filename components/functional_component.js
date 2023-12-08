import React from 'react';

const FunctionalComponent = (props) => {
  // Functional components receive props as an argument
  const { name } = props;

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default FunctionalComponent;
