import logo from './logo.svg';
import './App.css';
import Child from './Child.jsx'
import { useState } from 'react';




function App() {
  const newArr = [] 
  for(let i=0; i< 10;i++){
    newArr[i] = i
  }

  const [input,setInput] = useState("")
 
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>User input: {input}</h3>
      <input placeholder='Type something cool' onChange={(el) => setInput(el.target.value)}></input>
      {newArr}
      <Child userinput={input} />
    </div>
    
  );
}

export default App;
