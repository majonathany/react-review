import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Another from "./Example";

function App() {
  const [count, setCount] = useState(0);

  const someStyle= {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  const decrement = () => setCount(prevState => prevState - 1);
  const increment = () => setCount(prevState => prevState + 1);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Another name={"Jonathan"}></Another>

          <span> {count} </span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={someStyle}>
          Stuff
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
