import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
;

function Counter1(){
  const [count1, setCount1] = useState(0);

  return(
    <>
    <h1>Counter 1</h1>
    <p>{count1}</p>
    <button onClick={()=>setCount1((previousState) => previousState+1)}>Add 1</button>
    </>
  )
}

function Counter2(){
  const [count2, setCount2] = useState(0);

  return(
    <>
    <h1>Counter 2</h1>
    <p>{count2}</p>
    <button onClick={()=>setCount2((previousState) => previousState+1)}>Add 2</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter1 />
  <Counter2 />
  </>
);


