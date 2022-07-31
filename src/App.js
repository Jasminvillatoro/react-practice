import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [count, setCount] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const makeItZero = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={makeItZero}>Set to zero</button>
        {count}
      </div>
      <div>
        <h1>{age} </h1>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
      <div>
        <input onChange={handleInputChange} type="text" />
        <h2>{inputValue}</h2>
      </div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}>
        Show/Hide Text
      </button>
      <div>{showText && <h1>Hey I'm Jasmin</h1>}</div>
      <div>
        <button
          onClick={() => {
            setTextColor(textColor === 'black' ? 'red' : 'black');
          }}>
          Change color
        </button>
        <h1 style={{ color: textColor }}>change text color</h1>
      </div>
    </div>
  );
}

export default App;
