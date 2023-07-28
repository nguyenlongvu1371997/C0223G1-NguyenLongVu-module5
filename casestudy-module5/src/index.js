import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceList from './components/ListService';
import ListCustomer from './components/ListCustomer';
import ListEmployee from './components/ListEmployee';
import Home from './components/Home';
import { Routes, Route,BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/serivice/list' element={<ServiceList/>} />
      <Route path='/employee/list' element={<ListEmployee/>} />
      <Route path='/customer/list' element={<ListCustomer/>} />
    </Routes>
  </BrowserRouter>
);


