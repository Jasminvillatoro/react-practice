import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      <h1>{age} </h1>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default App;
