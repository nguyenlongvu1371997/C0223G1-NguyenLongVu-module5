import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter1 />
  <Counter2 />
  </>
);


