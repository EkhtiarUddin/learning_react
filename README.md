# learning_react


# functions & learning components
The simplest way to define a component is to write a JavaScript function:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

We can also use an ES6 class to define a component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


# composing Components
Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
For example, we can create an App component that renders Welcome many times:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


# state
In React, "state" is a fundamental concept that represents the current condition or data of a component. State allows React components to manage and track changes to their data over time. When the state of a component changes, React automatically re-renders the component to reflect the updated state.

Here's an example to illustrate the use of state in a React component:
import React, { useState } from 'react';

const Counter = () => {
  // useState is a hook that allows you to add state to functional components
  // The argument passed to useState is the initial state value
  const [count, setCount] = useState(0);

  // The setCount function is used to update the state value
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
We use the useState hook to declare a state variable called count and its corresponding updater function setCount. The useState hook is called with an initial value of 0.


# props
In React, "props" (short for properties) are a way to pass data from a parent component to a child component. Props allow components to communicate and share information with each other. Props are immutable, meaning they cannot be modified by the child component that receives them.

Here's an example to illustrate the use of props in a simple parent and child component scenario:
Parent Component (App.js):
import React from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  // Define a prop named "message" with a value
  const greetingMessage = "Hello from Parent!";

  return (
    <div>
      <h1>{greetingMessage}</h1>
      {/* Pass the prop "message" to the ChildComponent */}
      <ChildComponent message={greetingMessage} />
    </div>
  );
};

export default App;

Child Component (ChildComponent.js):
import React from 'react';

const ChildComponent = (props) => {
  // Access the prop "message" passed from the parent component
  const { message } = props;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ChildComponent;



# hook
In React, a "hook" is a special function that allows functional components to use state, lifecycle features, and other React features that were previously only available in class components. Hooks were introduced in React 16.8 to provide a more consistent and concise way to manage stateful logic in functional components.

Here are two commonly used React hooks with examples:
1. useState Hook:
The useState hook allows functional components to manage state. It returns an array with two elements: the current state value and a function to update that value.
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // Use the setCount function to update the 'count' state
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

2. useEffect Hook:
The useEffect hook enables functional components to perform side effects in response to component lifecycle events, such as mounting, updating, or unmounting.
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  // Declare a state variable to store data
  const [data, setData] = useState(null);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      // Simulate an API call
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      // Update the state with the fetched data
      setData(result);
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default FetchData;



# fetching data
Certainly! Fetching data in React is a common use case, especially when you need to retrieve information from an API. In this example, I'll demonstrate how to use the fetch function and the useEffect hook to fetch data in a React component.

Let's create a simple React component that fetches data from the JSONPlaceholder API (a fake online REST API for testing and prototyping).

FetchDataComponent.js
import React, { useState, useEffect } from 'react';

const FetchDataComponent = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(true);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true when starting the fetch
        setLoading(true);

        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();

        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false when the fetch is complete (success or error)
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once (on mount)

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h2>Fetched Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchDataComponent;



# react router
React Router is a popular library for handling navigation in React applications. It allows you to create single-page applications with dynamic, client-side routing. Below is an example of how to use React Router in a simple React application, along with an explanation of the key concepts.
Step 1: Install React Router
npm install react-router-dom

Step 2: Set up the App Component
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;

Step 3: Create Components for Each Route
// components/Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;

