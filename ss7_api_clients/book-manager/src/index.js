import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBook from './components/BookList';
import EditBook from './components/EditBook';
import CreateBook from './components/CreateBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListBook />} />
      <Route path='/book/create' element={<CreateBook />} />
      <Route path='/book/edit/:id' element={<EditBook />} />
    </Routes>
  </BrowserRouter>
);


