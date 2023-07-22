import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MedicalDeclaration from './components/medical-declaration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <MedicalDeclaration></MedicalDeclaration>
  </React.StrictMode>
  
);

reportWebVitals();

