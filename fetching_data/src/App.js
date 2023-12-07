import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to My Blog';
  // const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="Content">
      <Home />
      {/* <h1>{title}</h1>
      <p>Liked {likes} times</p> */}
      </div>
    </div>
  );
}

export default App;
