import {
  useState,
  useRef,
  useEffect
} from "react"; 

import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  useEffect(() => {
    inputRef.current.value = "";
  }, [result]);
 
  function plus(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    setResult((currentResult) => currentResult + inputValue);
    inputRef.current.value = "";
};

 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    setResult((currentResult) => {
      if(currentResult === 0){
        return inputValue
      } 
      return currentResult - inputValue;
  });

    inputRef.current.value = "";
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    setResult((currentResult) => {
      if(currentResult === 0){
        return inputValue
      } 
      return currentResult * inputValue;
  });

    inputRef.current.value = "";
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    setResult((currentResult) => {
      if(currentResult === 0){
        return inputValue
      } 
      return currentResult / inputValue;
  });

    inputRef.current.value = "";


  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = "";

  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result} </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        
        <button onClick={resetInput}>Reset input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
